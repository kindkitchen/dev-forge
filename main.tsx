import { load } from "@std/dotenv";
import { join } from "@std/path";
import { Hono } from "hono";
import { serveStatic } from "hono/deno";

const config = {
  PORT: 3000,
  ...await load() as Partial<Record<"FORMKIT_THEME_DENO" | "PORT", string>>,
};
const app = new Hono();
const theme_deno_root = join("formkit-theme-deno", "dist");
console.log(theme_deno_root);

app.use(
  "/deno/*",
  serveStatic({
    root: theme_deno_root,
  }),
);

app.get("/", (c) => {
  return c.html(
    <div>
      <div>
        <h1>Hi, there!</h1>
        <p>This is my collection of formkit themes:</p>
        <ul>
          <li>
            <a href="/deno">Deno theme</a>
            <pre>formkit-theme-deno</pre>
            <p>This theme is inspired by deno-deploy web-site</p>
          </li>
        </ul>
      </div>
    </div>,
  );
});

Deno.serve({
  port: +config.PORT,
}, app.fetch);
