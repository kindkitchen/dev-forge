import { load } from "@std/dotenv";

const config = await load() as {
  FORMKIT_THEME_DENO: string;
};

console.assert(!!config.FORMKIT_THEME_DENO);
console.info(`FORMKIT_PRO_KEY=${config.FORMKIT_THEME_DENO}`);
