# About:

1. `formkit-theme-<name>`:
   - `.env` => `FORMKIT_THEME_<NAME>=<***>`
   - `deno run -RWE echo-fk-pro-key.ts --formkit_theme=<NAME>`
   - `https://formkit-themes.deno.dev/<name>` endpoint under the which this
     theme will be served
2. thanks to `Deno 2` => `deno.json` => `tasks[name]{command,dependencies}`
   - specify task to `echo` from `./.env` => `FORMKIT_THEME_<NAME>` into
     `<name>/.env` => `FORMKIT_PRO_KEY`
   - add it to `dependencies` of build task for this `name`
3. Conclusion:
   > Separatly build every project and serve under the respective endpoint

4. don't forget to update github secretes

---

### Vite:

// don't forget to update `<name>/vite.config.ts`

```ts
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  envPrefix: "FORMKIT_",
  base: "/<name>",
  build: {
    outDir: "dist/<name>",
  },
});
```
