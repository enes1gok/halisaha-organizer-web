/**
 * Production build for Cloudflare Workers (OpenNext).
 * Runs Next.js in standalone mode, then OpenNext bundle (skip inner Next build).
 */
import { execSync } from "node:child_process";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const root = resolve(dirname(fileURLToPath(import.meta.url)), "..");

process.env.NEXT_PRIVATE_STANDALONE = "true";
process.env.NEXT_PRIVATE_OUTPUT_TRACE_ROOT = root;

execSync("next build", { stdio: "inherit", cwd: root });
execSync("opennextjs-cloudflare build --skipNextBuild", {
  stdio: "inherit",
  cwd: root,
});
