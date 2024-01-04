import { ApolloProvider } from "@apollo/react-hooks";
import App from "next/app";
import "../styles/globals.css";
import withApolloClient from "../lib/with-apollo-client";
import Layout from "../components/Layout";
import "nprogress/nprogress.css";

class MyApp extends App<any> {
  public render() {
    const { Component, pageProps, apolloClient } = this.props;
    return (
      <ApolloProvider client={apolloClient}>
        <Layout {...pageProps}>
          <Component {...pageProps} />
        </Layout>
      </ApolloProvider>
    );
  }
}

export default withApolloClient(MyApp);
