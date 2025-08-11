# Airbnb Ruleset

The Airbnb ruleset is to enforce [Airbnb JavaScript Style Guide](https://github.com/airbnb/javascript) for JavaScript (including React/JSX) to help maintain code quality and consistency.

It includes formatting or stylistic rules to enforce consistent indentation, quote styles, spacing, and naming conventions and non-stylistic rules that focus on preventing common bugs and potential errors.

TypeScript adds support for type checking for the JavaScript language. [TypeScript-ESLint](https://typescript-eslint.io/) project was created as a [different parser](https://typescript-eslint.io/packages/parser/) is required for linting TypeScript. This also allows implementation of rules that requires [type checking](https://typescript-eslint.io/developers/eslint-plugins/#type-checking-and-configs). In cases where core ESLint rules do not support TypeScript syntax, equivalent "[extension rules](https://typescript-eslint.io/rules/#extension-rules)" rules was required.

There was no equivalent official Airbnb Ruleset for TypeScript language and an [open-source project](https://github.com/iamturns/eslint-config-airbnb-typescript) was developed to maintain equivalent TypeScript ruleset for Airbnb. For parity, some ESLint rules has to be disabled as either it is no longer applicable due to inherent type-checking or a more robust check by the TypeScript compiler is available. Lastly, there could also be an equivalent "extension rule" available, which requires the original rule to be disabled and an equivalent TypeScript extension rule to be enabled.

Subsequently, ESLint has [deprecated formatting rules](https://eslint.org/blog/2023/10/deprecating-formatting-rules/) in November 2013 from v8.53.0 and TypeScript-ESLint followed suit.

As of this writing, the `airbnb-typescript` consists of 220 rules, of which 67 are deprecated (mostly due to it being stylistic in nature), out of the remaining, 10 are considered stylistic by TypeScript-ESLint, and 4 rules (`prefer-destructuring`, `class-methods-use-this`, `consistent-return` and `prefer-promise-reject-errors`) which are incorrectly not overridden with TypeScript extension rules.

The release of ESLint v9 in April 2024 introduces a new [flat config](https://eslint.org/blog/2022/08/new-config-system-part-2/) as default. Airbnb has yet to support the new config [more than a year later](https://github.com/airbnb/javascript/issues/2961). Airbnb-Typescript project also has been discontinued in May 2025.

With larger codebases, there has been an increase in Rust-based linters and formatters such as [Biome](https://biomejs.dev/) and [oxlint](https://oxc.rs/docs/guide/usage/linter) that runs much faster due as they compile to native code.

For modern large TypeScript codebase, Airbnb ruleset has less relevance and efficiency as a linter as it

* Was not designed for TypeScript language, as some rules of overlap or made redundant with TypeScript language or TypeScript compiler checks.

* Contains stylistic rules (which does not catch potential bugs) which has since been deprecated by ESLint.

* Not updated for latest ESLint v9.

* Requires additional TypeScript-specific extension rule overrides that needs to be manually mantained.

* Runs slower as it is based on JavaScript runtime.

## Version and Config

`eslint-config-airbnb`: `19.0.4`

`eslint-config-airbnb-base`: `15.0.0`

`eslint-config-airbnb-typescript`: `18.0.0`

```js
extends: [
  'airbnb',
  'airbnb-typescript',
  'airbnb/hooks',
]
```

### Comparison to Recommended Ruleset

The recommended ruleset from ESLint, TypeScript-ESLint and `import` plugin is used for comparison with the remaining 143 non-deprecated and non-stylistic rules from Airbnb.

```js
import eslint from '@eslint/js';
import { ESLint } from "eslint";
import tseslint from 'typescript-eslint';
import importPlugin from 'eslint-plugin-import';


const eslintConfig = tseslint.config(
  eslint.configs.recommended,
  tseslint.configs.eslintRecommended, 
  tseslint.configs.recommendedTypeChecked,
  importPlugin.flatConfigs.recommended,
  importPlugin.flatConfigs.typescript,
);
```

Out of 143 rules, 49 are also in the recommended config (assuming react hook plugins are included). The remaining 94 rules exclusive to Airbnb ruleset are

1. [`array-callback-return`](https://eslint.org/docs/latest/rules/array-callback-return)
1. [`arrow-body-style`](https://eslint.org/docs/latest/rules/arrow-body-style)
1. [`block-scoped-var`](https://eslint.org/docs/latest/rules/block-scoped-var)
1. [`class-methods-use-this`](https://eslint.org/docs/latest/rules/class-methods-use-this)
1. [`consistent-return`](https://eslint.org/docs/latest/rules/consistent-return)
1. [`curly`](https://eslint.org/docs/latest/rules/curly)
1. [`default-case`](https://eslint.org/docs/latest/rules/default-case)
1. [`default-case-last`](https://eslint.org/docs/latest/rules/default-case-last)
1. [`@ts/default-param-last`](https://typescript-eslint.io/rules/default-param-last)
1. [`eqeqeq`](https://eslint.org/docs/latest/rules/eqeqeq)
1. [`grouped-accessor-pairs`](https://eslint.org/docs/latest/rules/grouped-accessor-pairs)
1. [`guard-for-in`](https://eslint.org/docs/latest/rules/guard-for-in)
1. [`import/no-absolute-path`](https://github.com/import-js/eslint-plugin-import/blob/v2.31.0/docs/rules/no-absolute-path.md)
1. [`import/no-amd`](https://github.com/import-js/eslint-plugin-import/blob/v2.31.0/docs/rules/no-amd.md)
1. [`import/no-cycle`](https://github.com/import-js/eslint-plugin-import/blob/v2.31.0/docs/rules/no-cycle.md)
1. [`import/no-dynamic-require`](https://github.com/import-js/eslint-plugin-import/blob/v2.31.0/docs/rules/no-dynamic-require.md)
1. [`import/no-extraneous-dependencies`](https://github.com/import-js/eslint-plugin-import/blob/v2.31.0/docs/rules/no-extraneous-dependencies.md)
1. `import/no-import-module-exports`
1. [`import/no-mutable-exports`](https://github.com/import-js/eslint-plugin-import/blob/v2.31.0/docs/rules/no-mutable-exports.md)
1. [`import/no-relative-packages`](https://github.com/import-js/eslint-plugin-import/blob/v2.31.0/docs/rules/no-relative-packages.md)
1. [`import/no-self-import`](https://github.com/import-js/eslint-plugin-import/blob/v2.31.0/docs/rules/no-self-import.md)
1. [`import/no-useless-path-segments`](https://github.com/import-js/eslint-plugin-import/blob/v2.31.0/docs/rules/no-useless-path-segments.md)
1. [`import/no-webpack-loader-syntax`](https://github.com/import-js/eslint-plugin-import/blob/v2.31.0/docs/rules/no-webpack-loader-syntax.md)
1. [`max-classes-per-file`](https://eslint.org/docs/latest/rules/max-classes-per-file)
1. [`@ts/naming-convention`](https://typescript-eslint.io/rules/naming-convention)
1. [`new-cap`](https://eslint.org/docs/latest/rules/new-cap)
1. [`no-await-in-loop`](https://eslint.org/docs/latest/rules/no-await-in-loop)
1. [`no-bitwise`](https://eslint.org/docs/latest/rules/no-bitwise)
1. [`no-caller`](https://eslint.org/docs/latest/rules/no-caller)
1. [`no-class-assign`](https://eslint.org/docs/latest/rules/no-class-assign)
1. [`no-constructor-return`](https://eslint.org/docs/latest/rules/no-constructor-return)
1. [`no-continue`](https://eslint.org/docs/latest/rules/no-continue)
1. [`@ts/no-dupe-class-members`](https://typescript-eslint.io/rules/no-dupe-class-members)
1. [`no-else-return`](https://eslint.org/docs/latest/rules/no-else-return)
1. [`no-eval`](https://eslint.org/docs/latest/rules/no-eval)
1. [`no-extend-native`](https://eslint.org/docs/latest/rules/no-extend-native)
1. [`no-extra-bind`](https://eslint.org/docs/latest/rules/no-extra-bind)
1. [`no-extra-label`](https://eslint.org/docs/latest/rules/no-extra-label)
1. [`no-inner-declarations`](https://eslint.org/docs/latest/rules/no-inner-declarations)
1. [`no-iterator`](https://eslint.org/docs/latest/rules/no-iterator)
1. [`no-label-var`](https://eslint.org/docs/latest/rules/no-label-var)
1. [`no-labels`](https://eslint.org/docs/latest/rules/no-labels)
1. [`no-lone-blocks`](https://eslint.org/docs/latest/rules/no-lone-blocks)
1. [`no-lonely-if`](https://eslint.org/docs/latest/rules/no-lonely-if)
1. [`@ts/no-loop-func`](https://typescript-eslint.io/rules/no-loop-func)
1. [`no-multi-assign`](https://eslint.org/docs/latest/rules/no-multi-assign)
1. [`no-multi-str`](https://eslint.org/docs/latest/rules/no-multi-str)
1. [`no-nested-ternary`](https://eslint.org/docs/latest/rules/no-nested-ternary)
1. [`no-new`](https://eslint.org/docs/latest/rules/no-new)
1. [`no-new-wrappers`](https://eslint.org/docs/latest/rules/no-new-wrappers)
1. [`no-octal-escape`](https://eslint.org/docs/latest/rules/no-octal-escape)
1. [`no-param-reassign`](https://eslint.org/docs/latest/rules/no-param-reassign)
1. [`no-plusplus`](https://eslint.org/docs/latest/rules/no-plusplus)
1. [`no-promise-executor-return`](https://eslint.org/docs/latest/rules/no-promise-executor-return)
1. [`no-proto`](https://eslint.org/docs/latest/rules/no-proto)
1. [`@ts/no-redeclare`](https://typescript-eslint.io/rules/no-redeclare)
1. [`no-restricted-exports`](https://eslint.org/docs/latest/rules/no-restricted-exports)
1. [`no-restricted-globals`](https://eslint.org/docs/latest/rules/no-restricted-globals)
1. [`no-restricted-properties`](https://eslint.org/docs/latest/rules/no-restricted-properties)
1. [`no-restricted-syntax`](https://eslint.org/docs/latest/rules/no-restricted-syntax)
1. [`no-return-assign`](https://eslint.org/docs/latest/rules/no-return-assign)
1. [`no-script-url`](https://eslint.org/docs/latest/rules/no-script-url)
1. [`no-self-compare`](https://eslint.org/docs/latest/rules/no-self-compare)
1. [`no-sequences`](https://eslint.org/docs/latest/rules/no-sequences)
1. [`@ts/no-shadow`](https://typescript-eslint.io/rules/no-shadow)
1. [`no-template-curly-in-string`](https://eslint.org/docs/latest/rules/no-template-curly-in-string)
1. [`no-undef-init`](https://eslint.org/docs/latest/rules/no-undef-init)
1. [`no-underscore-dangle`](https://eslint.org/docs/latest/rules/no-underscore-dangle)
1. [`no-unneeded-ternary`](https://eslint.org/docs/latest/rules/no-unneeded-ternary)
1. [`no-unreachable-loop`](https://eslint.org/docs/latest/rules/no-unreachable-loop)
1. [`@ts/no-use-before-define`](https://typescript-eslint.io/rules/no-use-before-define)
1. [`no-useless-computed-key`](https://eslint.org/docs/latest/rules/no-useless-computed-key)
1. [`no-useless-concat`](https://eslint.org/docs/latest/rules/no-useless-concat)
1. [`@ts/no-useless-constructor`](https://typescript-eslint.io/rules/no-useless-constructor)
1. [`no-useless-rename`](https://eslint.org/docs/latest/rules/no-useless-rename)
1. [`no-useless-return`](https://eslint.org/docs/latest/rules/no-useless-return)
1. [`no-void`](https://eslint.org/docs/latest/rules/no-void)
1. [`object-shorthand`](https://eslint.org/docs/latest/rules/object-shorthand)
1. [`one-var`](https://eslint.org/docs/latest/rules/one-var)
1. [`operator-assignment`](https://eslint.org/docs/latest/rules/operator-assignment)
1. [`prefer-arrow-callback`](https://eslint.org/docs/latest/rules/prefer-arrow-callback)
1. [`prefer-destructuring`](https://eslint.org/docs/latest/rules/prefer-destructuring)
1. [`prefer-exponentiation-operator`](https://eslint.org/docs/latest/rules/prefer-exponentiation-operator)
1. [`prefer-numeric-literals`](https://eslint.org/docs/latest/rules/prefer-numeric-literals)
1. [`prefer-object-spread`](https://eslint.org/docs/latest/rules/prefer-object-spread)
1. [`prefer-promise-reject-errors`](https://eslint.org/docs/latest/rules/prefer-promise-reject-errors)
1. [`prefer-regex-literals`](https://eslint.org/docs/latest/rules/prefer-regex-literals)
1. [`prefer-template`](https://eslint.org/docs/latest/rules/prefer-template)
1. [`radix`](https://eslint.org/docs/latest/rules/radix)
1. [`@ts/return-await`](https://typescript-eslint.io/rules/return-await)
1. [`strict`](https://eslint.org/docs/latest/rules/strict)
1. [`symbol-description`](https://eslint.org/docs/latest/rules/symbol-description)
1. [`vars-on-top`](https://eslint.org/docs/latest/rules/vars-on-top)
1. [`yoda`](https://eslint.org/docs/latest/rules/yoda)

### Deprecated Rules

1. [`array-bracket-spacing`](https://eslint.org/docs/latest/rules/array-bracket-spacing)
1. [`arrow-parens`](https://eslint.org/docs/latest/rules/arrow-parens)
1. [`arrow-spacing`](https://eslint.org/docs/latest/rules/arrow-spacing)
1. [`block-spacing`](https://eslint.org/docs/latest/rules/block-spacing)
1. `@ts/brace-style`
1. `@ts/comma-dangle`
1. `@ts/comma-spacing`
1. [`comma-style`](https://eslint.org/docs/latest/rules/comma-style)
1. [`computed-property-spacing`](https://eslint.org/docs/latest/rules/computed-property-spacing)
1. [`dot-location`](https://eslint.org/docs/latest/rules/dot-location)
1. [`eol-last`](https://eslint.org/docs/latest/rules/eol-last)
1. `@ts/func-call-spacing`
1. [`function-call-argument-newline`](https://eslint.org/docs/latest/rules/function-call-argument-newline)
1. [`function-paren-newline`](https://eslint.org/docs/latest/rules/function-paren-newline)
1. [`generator-star-spacing`](https://eslint.org/docs/latest/rules/generator-star-spacing)
1. [`global-require`](https://eslint.org/docs/latest/rules/global-require)
1. [`implicit-arrow-linebreak`](https://eslint.org/docs/latest/rules/implicit-arrow-linebreak)
1. `@ts/indent`
1. [`key-spacing`](https://eslint.org/docs/latest/rules/key-spacing)
1. `@ts/keyword-spacing`
1. [`linebreak-style`](https://eslint.org/docs/latest/rules/linebreak-style)
1. [`lines-around-directive`](https://eslint.org/docs/latest/rules/lines-around-directive)
1. `@ts/lines-between-class-members`
1. [`max-len`](https://eslint.org/docs/latest/rules/max-len)
1. [`new-parens`](https://eslint.org/docs/latest/rules/new-parens)
1. [`newline-per-chained-call`](https://eslint.org/docs/latest/rules/newline-per-chained-call)
1. [`no-buffer-constructor`](https://eslint.org/docs/latest/rules/no-buffer-constructor)
1. [`no-confusing-arrow`](https://eslint.org/docs/latest/rules/no-confusing-arrow)
1. `@ts/no-extra-semi`
1. [`no-floating-decimal`](https://eslint.org/docs/latest/rules/no-floating-decimal)
1. [`@ts/no-loss-of-precision`](https://typescript-eslint.io/rules/no-loss-of-precision)
1. [`no-mixed-operators`](https://eslint.org/docs/latest/rules/no-mixed-operators)
1. [`no-mixed-spaces-and-tabs`](https://eslint.org/docs/latest/rules/no-mixed-spaces-and-tabs)
1. [`no-multi-spaces`](https://eslint.org/docs/latest/rules/no-multi-spaces)
1. [`no-multiple-empty-lines`](https://eslint.org/docs/latest/rules/no-multiple-empty-lines)
1. [`no-new-object`](https://eslint.org/docs/latest/rules/no-new-object)
1. [`no-new-require`](https://eslint.org/docs/latest/rules/no-new-require)
1. [`no-path-concat`](https://eslint.org/docs/latest/rules/no-path-concat)
1. [`no-spaced-func`](https://eslint.org/docs/latest/rules/no-spaced-func)
1. [`no-tabs`](https://eslint.org/docs/latest/rules/no-tabs)
1. `@ts/no-throw-literal`
1. [`no-trailing-spaces`](https://eslint.org/docs/latest/rules/no-trailing-spaces)
1. [`no-whitespace-before-property`](https://eslint.org/docs/latest/rules/no-whitespace-before-property)
1. [`nonblock-statement-body-position`](https://eslint.org/docs/latest/rules/nonblock-statement-body-position)
1. [`object-curly-newline`](https://eslint.org/docs/latest/rules/object-curly-newline)
1. `@ts/object-curly-spacing`
1. [`object-property-newline`](https://eslint.org/docs/latest/rules/object-property-newline)
1. [`one-var-declaration-per-line`](https://eslint.org/docs/latest/rules/one-var-declaration-per-line)
1. [`operator-linebreak`](https://eslint.org/docs/latest/rules/operator-linebreak)
1. [`padded-blocks`](https://eslint.org/docs/latest/rules/padded-blocks)
1. [`quote-props`](https://eslint.org/docs/latest/rules/quote-props)
1. `@ts/quotes`
1. [`rest-spread-spacing`](https://eslint.org/docs/latest/rules/rest-spread-spacing)
1. `@ts/semi`
1. [`semi-spacing`](https://eslint.org/docs/latest/rules/semi-spacing)
1. [`semi-style`](https://eslint.org/docs/latest/rules/semi-style)
1. `@ts/space-before-blocks`
1. `@ts/space-before-function-paren`
1. [`space-in-parens`](https://eslint.org/docs/latest/rules/space-in-parens)
1. `@ts/space-infix-ops`
1. [`space-unary-ops`](https://eslint.org/docs/latest/rules/space-unary-ops)
1. [`spaced-comment`](https://eslint.org/docs/latest/rules/spaced-comment)
1. [`switch-colon-spacing`](https://eslint.org/docs/latest/rules/switch-colon-spacing)
1. [`template-curly-spacing`](https://eslint.org/docs/latest/rules/template-curly-spacing)
1. [`template-tag-spacing`](https://eslint.org/docs/latest/rules/template-tag-spacing)
1. [`wrap-iife`](https://eslint.org/docs/latest/rules/wrap-iife)
1. [`yield-star-spacing`](https://eslint.org/docs/latest/rules/yield-star-spacing)