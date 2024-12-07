import { load } from "@std/dotenv";
import { join } from "@std/path";
import { Hono } from "hono";
import { serveStatic } from "hono/deno";

const config = {
  PORT: 3000,
  ...await load() as Partial<Record<"FORMKIT_THEME_DENO" | "PORT", string>>,
};
const app = new Hono();
const root = join("formkit-theme-deno", "dist");
console.log(root);

app.use("/*", serveStatic({ root }));

// app.get("/", (c) => {
//   return c.html(<h1>Hi!</h1>);
// });

Deno.serve({
  port: +config.PORT,
}, app.fetch);
