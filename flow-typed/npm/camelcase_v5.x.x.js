// flow-typed signature: 0f2971c49964ef46bd1e7d07e77d7926
// flow-typed version: 563901ec25/camelcase_v5.x.x/flow_>=v0.35.x

declare module "camelcase" {
  declare module.exports: (
    input: string | string[],
    options?: { pascalCase?: boolean }
  ) => string;
}
