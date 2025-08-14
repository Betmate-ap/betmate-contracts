import type { CodegenConfig } from "@graphql-codegen/cli";

const config: CodegenConfig = {
  schema: "src/schema/index.graphql",
  generates: {
    "generated/schema-types.ts": {
      plugins: ["typescript", "typescript-operations", "typescript-resolvers"],
    },
  },
};

export default config;
