// @lovable.dev/vite-tanstack-config already includes the following — do NOT add them manually
// or the app will break with duplicate plugins:
//   - tanstackStart, viteReact, tailwindcss, tsConfigPaths, nitro (build-only using cloudflare as a default target),
//     componentTagger (dev-only), VITE_* env injection, @ path alias, React/TanStack dedupe,
//     error logger plugins, and sandbox detection (port/host/strictPort).
// You can pass additional config via defineConfig({ vite: { ... }, etc... }) if needed.
import { defineConfig } from "@lovable.dev/vite-tanstack-config";

export default defineConfig({
  tanstackStart: {
    // Redirect TanStack Start's bundled server entry to src/server.ts (our SSR error wrapper).
    // nitro/vite builds from this
    server: { entry: "server" },
  },
  // Explicitly enable nitro so the cloudflare-module deploy build runs even when
  // LOVABLE_SANDBOX / DEV_SERVER__PROJECT_PATH env vars are not set.
  nitro: {
    preset: "cloudflare-module",
    output: { dir: "dist", serverDir: "dist/server", publicDir: "dist/client" },
    // deployConfig generates .wrangler/deploy/config.json at project root, which Bolt's
    // deployment pipeline reads to locate dist/server/wrangler.json. Wrangler must be
    // invoked from dist/ (not dist/server/) to avoid a "different base path" conflict —
    // dist/nitro.json's deploy command ("npx wrangler --cwd ./ deploy") does exactly this.
    cloudflare: { nodeCompat: true },
  },
  vite: {
    server: {
      // Fail loudly if port 8080 is taken instead of silently moving to 8081,
      // which would break the Bolt preview iframe.
      strictPort: true,
    },
  },
});
