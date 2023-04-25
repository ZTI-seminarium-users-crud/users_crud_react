import type { CodegenConfig } from "@graphql-codegen/cli";

const sharedConfigOptions = {
  plugins: ["typescript", "typescript-operations", "typescript-react-apollo"],
  config: {
    withHooks: true,
  },
};

const config: CodegenConfig = {
  overwrite: true,
  schema: "http://127.0.0.1:5000/graphql",
  generates: {
    "src/student/graphql/types.ts": {
      documents: [
        "src/student/graphql/query.graphql",
        "src/student/graphql/mutation.graphql",
      ],
      plugins: ["typescript"],
    },
    "src/student/graphql/query.ts": {
      documents: ["src/student/graphql/query.graphql"],
      ...sharedConfigOptions,
    },
    "src/student/graphql/mutation.ts": {
      documents: ["src/student/graphql/mutation.graphql"],
      ...sharedConfigOptions,
    },
  },
};

export default config;
