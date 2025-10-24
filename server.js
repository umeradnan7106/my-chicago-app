// server.ts
import { createRequestHandler } from "@shopify/shopify-app-remix/adapters/vercel";
import * as remixBuild from "@remix-run/dev/server-build";

export default createRequestHandler({
  build: remixBuild,
});
