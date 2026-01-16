# ESLint Ruleset

`npm run generate:config-rules` generates the rules table in `eslint-config.md` using rules configured in `list-config-rules.mjs`.

* Rules recommended in `@typescript-eslint` should be included.

* Rules recommended in `eslint` could be disabled if they are already handled by TypeScript (see [source](https://github.com/typescript-eslint/typescript-eslint/blob/main/packages/eslint-plugin/src/configs/eslint-recommended-raw.ts)).

  * Additional ESLint rules are also enabled (see [#typescript-eslint/typescript-eslint/1423](https://github.com/typescript-eslint/typescript-eslint/issues/1423)).

## References

[TypeScript-ESLint Shared Configs](https://typescript-eslint.io/users/configs/)

[Shared Configs Source](https://github.com/typescript-eslint/typescript-eslint/tree/main/packages/eslint-plugin/src/configs/flat)

[ESLint Shared Configs Source](https://github.com/eslint/eslint/tree/main/packages/js/src/configs)
