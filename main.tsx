import { Hono } from "hono";
import { serveStatic } from "hono/deno";

const app = new Hono();

app.use("/formkit-theme-deno/*", serveStatic({ root: "./formkit-theme-deno" }));

app.get("/", (c) => {
  return c.html(<h1>Hi!</h1>);
});

Deno.serve({
  port: 3000,
}, app.fetch);
