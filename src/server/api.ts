// typesafe trpc hooks

import { getBaseUrl } from "@lib/helpers";
import { httpBatchLink } from "@trpc/client";
import { createTRPCNext } from "@trpc/next";
import type { AppRouter } from "../server/routers/_app";

export const api = createTRPCNext<AppRouter>({
  config({ ctx }) {
    return {
      // transformer: superjson,
      links: [
        httpBatchLink({
          /**
           * If you want to use SSR, you need to use the server's full URL
           * @link https://api.io/docs/ssr
           **/
          url: `${getBaseUrl()}/api/trpc`,
          headers() {
            if (ctx?.req) {
              // To use SSR properly, you need to forward the client's headers to the server
              // This is so you can pass through things like cookies when we're server-side rendering
              // If you're using Node 18, omit the "connection" header
              const { connection: _connection, ...headers } = ctx.req.headers;
              return {
                ...headers,
                // Optional: inform server that it's an SSR request
                "x-ssr": "1",
              };
            }
            return {};
          },
        }),
      ],
      queryClientConfig: {
        defaultOptions: {
          queries: { networkMode: "offlineFirst", refetchOnWindowFocus: false },
          mutations: { networkMode: "offlineFirst" },
        },
      },
    };
  },
  /**
   * @link https://api.io/docs/ssr
   **/
  ssr: false,
});
