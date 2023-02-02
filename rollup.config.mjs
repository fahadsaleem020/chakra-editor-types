import typescript from "rollup-plugin-typescript2";
import { defineConfig } from "rollup";

export default defineConfig({
  input: "index.ts",
  output: {
    file: "index.esm.js",
    format: "esm",
  },

  plugins: [
    typescript({
      tsconfig: "./tsconfig.json",
      include: ["index.ts"],
      exclude: ["src"],
    }),
  ],
  external: ["@chakra-ui/react", "@tiptap/react", "react"],
});
