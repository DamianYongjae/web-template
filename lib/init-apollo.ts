import fetch from "isomorphic-unfetch";
import config from "../config";
import { cookieName } from "../utils/auth";
import { typePolicies } from "./typePolicies";
import {
  ApolloClient,
  InMemoryCache,
  HttpLink,
  NormalizedCacheObject,
} from "@apollo/client";

let apolloClient: ApolloClient<NormalizedCacheObject>;

const create = (initialState: any) => {
  // Check out https://github.com/zeit/next.js/pull/4611 if you want to use the AWSAppSyncClient
  const isBrowser = typeof window !== "undefined";
  return new ApolloClient({
    connectToDevTools: isBrowser,
    ssrMode: !isBrowser,
    cache: new InMemoryCache({
      typePolicies,
    } as any).restore(initialState),
    link: new HttpLink({
      uri: `${config.apiUri}/graphql`, // Server URL (must be absolute),
      credentials: "same-origin", // Additional fetch() options like `credentials` or `headers`
      fetch: !isBrowser && (fetch as any),
      headers: {
        Authorization:
          initialState && `Bearer ${initialState.cookies[cookieName.token]}`,
      },
      fetchOptions: { mode: "cors" },
    }),
  });
};
const initApollo = (initialState: any) => {
  // Make sure to create a new client for every server-side request so that data
  // isn't shared between connections (which would be bad)
  if (typeof window === "undefined") {
    return create(initialState);
  }
  // Reuse client on the client-side
  if (!apolloClient) {
    apolloClient = create(initialState);
  }
  return apolloClient;
};

export default initApollo;
