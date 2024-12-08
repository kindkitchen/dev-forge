import { load } from "@std/dotenv";
import { parseArgs } from "@std/cli";

const config = {
  ...Deno.env.toObject(),
  ...await load(),
};
const { formkit_theme } = await parseArgs(Deno.args, {
  string: ["formkit_theme"],
});

console.assert(!!formkit_theme);
const fk_pro_key = config[`FORMKIT_THEME_${formkit_theme!}`];
console.assert(!!fk_pro_key);
console.info(`FORMKIT_PRO_KEY=${fk_pro_key}`);
