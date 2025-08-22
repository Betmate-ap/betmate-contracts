import js from "@eslint/js";
import tseslint from "typescript-eslint";
import globals from "globals";

export default [
  {
    // ignore outputs and generated code
    ignores: [
      "node_modules",
      "dist",
      "coverage",
      "build",
      "generated",
      ".husky",
    ],
  },
  js.configs.recommended,
  ...tseslint.configs.recommended,
  {
    // Project TS rules
    rules: {
      "@typescript-eslint/no-unused-vars": [
        "error",
        { argsIgnorePattern: "^_" },
      ],
    },
  },
  {
    // 👇 Config/Node files: allow CommonJS + Node globals
    files: [
      "*.cjs",
      "commitlint.config.cjs",
      "eslint.config.cjs",
      "*.config.cjs",
      "*.config.js",
    ],
    languageOptions: {
      sourceType: "commonjs",
      globals: {
        ...globals.node,
      },
    },
  },
];
