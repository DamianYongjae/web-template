import { getDataFromTree } from "@apollo/react-ssr";
import { parse } from "cookie";
import jwtDecode from "jwt-decode";
import React from "react";
import { resetServerContext } from "react-beautiful-dnd";
import { cookieName } from "../utils/auth";
import initApollo from "./init-apollo";

const withApolloClient = (App: any) => {
  return class Apollo extends React.Component {
    public static getInitialProps = async (context: any) => {
      const { AppTree, ctx }: any = context;
      let isLoggedIn = false;
      let member;
      const rawCookies = ctx.req
        ? ctx.req.headers.cookie || ""
        : document.cookie;
      const cookies = parse(rawCookies);
      if (cookies[cookieName.token]) {
        isLoggedIn = true;
        member = jwtDecode(cookies[cookieName.token]);
      }
      let appProps: any = {};
      if (App.getInitialProps) {
        appProps = await App.getInitialProps(context);
      }
      const { pageProps } = appProps;
      appProps = { pageProps: { ...pageProps, isLoggedIn, member } };
      // Run all GraphQL queries in the component tree
      // and extract the resulting data
      const apollo = initApollo({ cookies });
      if (typeof window === "undefined") {
        try {
          // Run all GraphQL queries
          await getDataFromTree(
            <AppTree {...appProps} apolloClient={apollo} />
          );
        } catch (error) {
          // Prevent Apollo Client GraphQL errors from crashing SSR.
          // Handle them in components via the data.error prop:
          // https://www.apollographql.com/docs/react/api/react-apollo.html#graphql-query-data-error
          console.error("Error while running `getDataFromTree`", error);
        }
        // getDataFromTree does not call componentWillUnmount
        // head side effect therefore need to be cleared manually
        // Head.rewind();
      }
      // Extract query data from the Apollo store
      const apolloState = apollo.cache.extract();
      resetServerContext();
      return {
        ...appProps,
        apolloState,
      };
    };
    private apolloClient;
    constructor(props: any) {
      super(props);
      this.apolloClient = initApollo(props.apolloState);
    }
    public render() {
      return <App apolloClient={this.apolloClient} {...this.props} />;
    }
  };
};

export default withApolloClient;
