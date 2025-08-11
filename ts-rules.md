## Table Key

Rules in version 8.24.1: 130

<table>
  <thead>
    <tr>
      <th>Column</th>
      <th>Description</th>
      <th>Emojis</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Status</td>
      <td>Being added, deprecated, or removed</td>
      <td>
        <ul>
          <li>🆕 = newly added to typescript-eslint</li>
          <li>🙅 = to be deprecated in the next major</li>
          <li>💀 = currently deprecated; to be removed in the next version</li>
        </ul>
      </td>
    </tr>
    <tr>
      <td>TC</td>
      <td>Requires type checking?</td>
      <td>
        <ul>
          <li>💭 = yes</li>
        </ul>
      </td>
    </tr>
    <tr>
      <td>Ext</td>
      <td>Extension rule?</td>
      <td>
        <ul>
          <li>🧱 = yes</li>
        </ul>
      </td>
    </tr>
    <tr>
      <td>Rec'd</td>
      <td>Recommended</td>
      <td>
        <ul>
          <li>🟩 = yes</li>
        </ul>
      </td>
    </tr>
    <tr>
      <td>Strict</td>
      <td>Strict</td>
      <td>
        <ul>
        <li>🔵 = yes</li>
        </ul>
      </td>
    </tr>
    <tr>
      <td>Style</td>
      <td>Style</td>
      <td>
        <ul>
          <li>🔸 = yes</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

## Recommendations Table

> Hint: search for 🆕 to find newly added rules.

| Rule                                                                                                                              | Status | TC | Ext | Rec'd | Strict | Style |
| --------------------------------------------------------------------------------------------------------------------------------- | ------ | -- | --- | ----- | ------ | ----- |
| [`adjacent-overload-signatures`](https://typescript-eslint.io/rules/adjacent-overload-signatures)                                 |        |    |     |       |        | 🔸    |
| [`array-type`](https://typescript-eslint.io/rules/array-type)                                                                     |        |    |     |       |        | 🔸    |
| [`await-thenable`](https://typescript-eslint.io/rules/await-thenable)                                                             |        | 💭 |     | 🟩    |        |       |
| [`ban-ts-comment`](https://typescript-eslint.io/rules/ban-ts-comment)                                                             |        |    |     |       |        |       |
| [`ban-tslint-comment`](https://typescript-eslint.io/rules/ban-tslint-comment)                                                     |        |    |     |       |        | 🔸    |
| [`class-literal-property-style`](https://typescript-eslint.io/rules/class-literal-property-style)                                 |        |    |     |       |        | 🔸    |
| [`class-methods-use-this`](https://typescript-eslint.io/rules/class-methods-use-this)                                             |        |    | 🧱  |       |        |       |
| [`consistent-generic-constructors`](https://typescript-eslint.io/rules/consistent-generic-constructors)                           |        |    |     |       |        | 🔸    |
| [`consistent-indexed-object-style`](https://typescript-eslint.io/rules/consistent-indexed-object-style)                           |        |    |     |       |        | 🔸    |
| [`consistent-return`](https://typescript-eslint.io/rules/consistent-return)                                                       |        | 💭 | 🧱  |       |        |       |
| [`consistent-type-assertions`](https://typescript-eslint.io/rules/consistent-type-assertions)                                     |        |    |     |       |        | 🔸    |
| [`consistent-type-definitions`](https://typescript-eslint.io/rules/consistent-type-definitions)                                   |        |    |     |       |        | 🔸    |
| [`consistent-type-exports`](https://typescript-eslint.io/rules/consistent-type-exports)                                           |        | 💭 |     |       |        |       |
| [`consistent-type-imports`](https://typescript-eslint.io/rules/consistent-type-imports)                                           |        |    |     |       |        |       |
| [`default-param-last`](https://typescript-eslint.io/rules/default-param-last)                                                     |        |    | 🧱  |       |        |       |
| [`dot-notation`](https://typescript-eslint.io/rules/dot-notation)                                                                 |        | 💭 | 🧱  |       |        | 🔸    |
| [`explicit-function-return-type`](https://typescript-eslint.io/rules/explicit-function-return-type)                               |        |    |     |       |        |       |
| [`explicit-member-accessibility`](https://typescript-eslint.io/rules/explicit-member-accessibility)                               |        |    |     |       |        |       |
| [`explicit-module-boundary-types`](https://typescript-eslint.io/rules/explicit-module-boundary-types)                             |        |    |     |       |        |       |
| [`init-declarations`](https://typescript-eslint.io/rules/init-declarations)                                                       |        |    | 🧱  |       |        |       |
| [`max-params`](https://typescript-eslint.io/rules/max-params)                                                                     |        |    | 🧱  |       |        |       |
| [`member-ordering`](https://typescript-eslint.io/rules/member-ordering)                                                           |        |    |     |       |        |       |
| [`method-signature-style`](https://typescript-eslint.io/rules/method-signature-style)                                             |        |    |     |       |        |       |
| [`naming-convention`](https://typescript-eslint.io/rules/naming-convention)                                                       |        | 💭 |     |       |        |       |
| [`no-array-constructor`](https://typescript-eslint.io/rules/no-array-constructor)                                                 |        |    | 🧱  | 🟩    |        |       |
| [`no-array-delete`](https://typescript-eslint.io/rules/no-array-delete)                                                           |        | 💭 |     | 🟩    |        |       |
| [`no-base-to-string`](https://typescript-eslint.io/rules/no-base-to-string)                                                       |        | 💭 |     | 🟩    |        |       |
| [`no-confusing-non-null-assertion`](https://typescript-eslint.io/rules/no-confusing-non-null-assertion)                           |        |    |     |       |        | 🔸    |
| [`no-confusing-void-expression`](https://typescript-eslint.io/rules/no-confusing-void-expression)                                 |        | 💭 |     |       | 🔵     |       |
| [`no-deprecated`](https://typescript-eslint.io/rules/no-deprecated)                                                               | 🆕     | 💭 |     |       | 🔵     |       |
| [`no-dupe-class-members`](https://typescript-eslint.io/rules/no-dupe-class-members)                                               |        |    | 🧱  |       |        |       |
| [`no-duplicate-enum-values`](https://typescript-eslint.io/rules/no-duplicate-enum-values)                                         |        |    |     | 🟩    |        |       |
| [`no-duplicate-type-constituents`](https://typescript-eslint.io/rules/no-duplicate-type-constituents)                             |        | 💭 |     | 🟩    |        |       |
| [`no-dynamic-delete`](https://typescript-eslint.io/rules/no-dynamic-delete)                                                       |        |    |     |       | 🔵     |       |
| [`no-empty-function`](https://typescript-eslint.io/rules/no-empty-function)                                                       |        |    | 🧱  |       |        | 🔸    |
| [`no-empty-interface`](https://typescript-eslint.io/rules/no-empty-interface)                                                     | 🆕     |    |     |       |        |       |
| [`no-empty-object-type`](https://typescript-eslint.io/rules/no-empty-object-type)                                                 |        |    |     | 🟩    |        |       |
| [`no-explicit-any`](https://typescript-eslint.io/rules/no-explicit-any)                                                           |        |    |     | 🟩    |        |       |
| [`no-extra-non-null-assertion`](https://typescript-eslint.io/rules/no-extra-non-null-assertion)                                   |        |    |     | 🟩    |        |       |
| [`no-extraneous-class`](https://typescript-eslint.io/rules/no-extraneous-class)                                                   |        |    |     |       | 🔵     |       |
| [`no-floating-promises`](https://typescript-eslint.io/rules/no-floating-promises)                                                 |        | 💭 |     | 🟩    |        |       |
| [`no-for-in-array`](https://typescript-eslint.io/rules/no-for-in-array)                                                           |        | 💭 |     | 🟩    |        |       |
| [`no-implied-eval`](https://typescript-eslint.io/rules/no-implied-eval)                                                           |        | 💭 | 🧱  | 🟩    |        |       |
| [`no-import-type-side-effects`](https://typescript-eslint.io/rules/no-import-type-side-effects)                                   |        |    |     |       |        |       |
| [`no-inferrable-types`](https://typescript-eslint.io/rules/no-inferrable-types)                                                   |        |    |     |       |        | 🔸    |
| [`no-invalid-this`](https://typescript-eslint.io/rules/no-invalid-this)                                                           |        |    | 🧱  |       |        |       |
| [`no-invalid-void-type`](https://typescript-eslint.io/rules/no-invalid-void-type)                                                 |        |    |     |       | 🔵     |       |
| [`no-loop-func`](https://typescript-eslint.io/rules/no-loop-func)                                                                 |        |    | 🧱  |       |        |       |
| [`no-loss-of-precision`](https://typescript-eslint.io/rules/no-loss-of-precision)                                                 | 🆕     |    | 🧱  |       |        |       |
| [`no-magic-numbers`](https://typescript-eslint.io/rules/no-magic-numbers)                                                         |        |    | 🧱  |       |        |       |
| [`no-meaningless-void-operator`](https://typescript-eslint.io/rules/no-meaningless-void-operator)                                 |        | 💭 |     |       | 🔵     |       |
| [`no-misused-new`](https://typescript-eslint.io/rules/no-misused-new)                                                             |        |    |     | 🟩    |        |       |
| [`no-misused-promises`](https://typescript-eslint.io/rules/no-misused-promises)                                                   |        | 💭 |     | 🟩    |        |       |
| [`no-misused-spread`](https://typescript-eslint.io/rules/no-misused-spread)                                                       | 🆕     | 💭 |     |       | 🔵     |       |
| [`no-mixed-enums`](https://typescript-eslint.io/rules/no-mixed-enums)                                                             |        | 💭 |     |       | 🔵     |       |
| [`no-namespace`](https://typescript-eslint.io/rules/no-namespace)                                                                 |        |    |     | 🟩    |        |       |
| [`no-non-null-asserted-nullish-coalescing`](https://typescript-eslint.io/rules/no-non-null-asserted-nullish-coalescing)           |        |    |     |       | 🔵     |       |
| [`no-non-null-asserted-optional-chain`](https://typescript-eslint.io/rules/no-non-null-asserted-optional-chain)                   |        |    |     | 🟩    |        |       |
| [`no-non-null-assertion`](https://typescript-eslint.io/rules/no-non-null-assertion)                                               |        |    |     |       | 🔵     |       |
| [`no-redeclare`](https://typescript-eslint.io/rules/no-redeclare)                                                                 |        |    | 🧱  |       |        |       |
| [`no-redundant-type-constituents`](https://typescript-eslint.io/rules/no-redundant-type-constituents)                             |        | 💭 |     | 🟩    |        |       |
| [`no-require-imports`](https://typescript-eslint.io/rules/no-require-imports)                                                     |        |    |     | 🟩    |        |       |
| [`no-restricted-imports`](https://typescript-eslint.io/rules/no-restricted-imports)                                               |        |    | 🧱  |       |        |       |
| [`no-restricted-types`](https://typescript-eslint.io/rules/no-restricted-types)                                                   |        |    |     |       |        |       |
| [`no-shadow`](https://typescript-eslint.io/rules/no-shadow)                                                                       |        |    | 🧱  |       |        |       |
| [`no-this-alias`](https://typescript-eslint.io/rules/no-this-alias)                                                               |        |    |     | 🟩    |        |       |
| [`no-type-alias`](https://typescript-eslint.io/rules/no-type-alias)                                                               | 🆕     |    |     |       |        |       |
| [`no-unnecessary-boolean-literal-compare`](https://typescript-eslint.io/rules/no-unnecessary-boolean-literal-compare)             |        | 💭 |     |       | 🔵     |       |
| [`no-unnecessary-condition`](https://typescript-eslint.io/rules/no-unnecessary-condition)                                         |        | 💭 |     |       | 🔵     |       |
| [`no-unnecessary-parameter-property-assignment`](https://typescript-eslint.io/rules/no-unnecessary-parameter-property-assignment) |        |    |     |       |        |       |
| [`no-unnecessary-qualifier`](https://typescript-eslint.io/rules/no-unnecessary-qualifier)                                         |        | 💭 |     |       |        |       |
| [`no-unnecessary-template-expression`](https://typescript-eslint.io/rules/no-unnecessary-template-expression)                     |        | 💭 |     |       | 🔵     |       |
| [`no-unnecessary-type-arguments`](https://typescript-eslint.io/rules/no-unnecessary-type-arguments)                               |        | 💭 |     |       | 🔵     |       |
| [`no-unnecessary-type-assertion`](https://typescript-eslint.io/rules/no-unnecessary-type-assertion)                               |        | 💭 |     | 🟩    |        |       |
| [`no-unnecessary-type-constraint`](https://typescript-eslint.io/rules/no-unnecessary-type-constraint)                             |        |    |     | 🟩    |        |       |
| [`no-unnecessary-type-parameters`](https://typescript-eslint.io/rules/no-unnecessary-type-parameters)                             |        | 💭 |     |       | 🔵     |       |
| [`no-unsafe-argument`](https://typescript-eslint.io/rules/no-unsafe-argument)                                                     |        | 💭 |     | 🟩    |        |       |
| [`no-unsafe-assignment`](https://typescript-eslint.io/rules/no-unsafe-assignment)                                                 |        | 💭 |     | 🟩    |        |       |
| [`no-unsafe-call`](https://typescript-eslint.io/rules/no-unsafe-call)                                                             |        | 💭 |     | 🟩    |        |       |
| [`no-unsafe-declaration-merging`](https://typescript-eslint.io/rules/no-unsafe-declaration-merging)                               |        |    |     | 🟩    |        |       |
| [`no-unsafe-enum-comparison`](https://typescript-eslint.io/rules/no-unsafe-enum-comparison)                                       |        | 💭 |     | 🟩    |        |       |
| [`no-unsafe-function-type`](https://typescript-eslint.io/rules/no-unsafe-function-type)                                           |        |    |     | 🟩    |        |       |
| [`no-unsafe-member-access`](https://typescript-eslint.io/rules/no-unsafe-member-access)                                           |        | 💭 |     | 🟩    |        |       |
| [`no-unsafe-return`](https://typescript-eslint.io/rules/no-unsafe-return)                                                         |        | 💭 |     | 🟩    |        |       |
| [`no-unsafe-type-assertion`](https://typescript-eslint.io/rules/no-unsafe-type-assertion)                                         | 🆕     | 💭 |     |       |        |       |
| [`no-unsafe-unary-minus`](https://typescript-eslint.io/rules/no-unsafe-unary-minus)                                               |        | 💭 |     | 🟩    |        |       |
| [`no-unused-expressions`](https://typescript-eslint.io/rules/no-unused-expressions)                                               |        |    | 🧱  | 🟩    |        |       |
| [`no-unused-vars`](https://typescript-eslint.io/rules/no-unused-vars)                                                             |        |    | 🧱  | 🟩    |        |       |
| [`no-use-before-define`](https://typescript-eslint.io/rules/no-use-before-define)                                                 |        |    | 🧱  |       |        |       |
| [`no-useless-constructor`](https://typescript-eslint.io/rules/no-useless-constructor)                                             |        |    | 🧱  |       | 🔵     |       |
| [`no-useless-empty-export`](https://typescript-eslint.io/rules/no-useless-empty-export)                                           |        |    |     |       |        |       |
| [`no-var-requires`](https://typescript-eslint.io/rules/no-var-requires)                                                           | 🆕     |    |     |       |        |       |
| [`no-wrapper-object-types`](https://typescript-eslint.io/rules/no-wrapper-object-types)                                           |        |    |     | 🟩    |        |       |
| [`non-nullable-type-assertion-style`](https://typescript-eslint.io/rules/non-nullable-type-assertion-style)                       |        | 💭 |     |       |        | 🔸    |
| [`only-throw-error`](https://typescript-eslint.io/rules/only-throw-error)                                                         |        | 💭 | 🧱  | 🟩    |        |       |
| [`parameter-properties`](https://typescript-eslint.io/rules/parameter-properties)                                                 |        |    |     |       |        |       |
| [`prefer-as-const`](https://typescript-eslint.io/rules/prefer-as-const)                                                           |        |    |     | 🟩    |        |       |
| [`prefer-destructuring`](https://typescript-eslint.io/rules/prefer-destructuring)                                                 |        | 💭 | 🧱  |       |        |       |
| [`prefer-enum-initializers`](https://typescript-eslint.io/rules/prefer-enum-initializers)                                         |        |    |     |       |        |       |
| [`prefer-find`](https://typescript-eslint.io/rules/prefer-find)                                                                   |        | 💭 |     |       |        | 🔸    |
| [`prefer-for-of`](https://typescript-eslint.io/rules/prefer-for-of)                                                               |        |    |     |       |        | 🔸    |
| [`prefer-function-type`](https://typescript-eslint.io/rules/prefer-function-type)                                                 |        |    |     |       |        | 🔸    |
| [`prefer-includes`](https://typescript-eslint.io/rules/prefer-includes)                                                           |        | 💭 |     |       |        | 🔸    |
| [`prefer-literal-enum-member`](https://typescript-eslint.io/rules/prefer-literal-enum-member)                                     |        |    |     |       | 🔵     |       |
| [`prefer-namespace-keyword`](https://typescript-eslint.io/rules/prefer-namespace-keyword)                                         |        |    |     | 🟩    |        |       |
| [`prefer-nullish-coalescing`](https://typescript-eslint.io/rules/prefer-nullish-coalescing)                                       |        | 💭 |     |       |        | 🔸    |
| [`prefer-optional-chain`](https://typescript-eslint.io/rules/prefer-optional-chain)                                               |        | 💭 |     |       |        | 🔸    |
| [`prefer-promise-reject-errors`](https://typescript-eslint.io/rules/prefer-promise-reject-errors)                                 |        | 💭 | 🧱  | 🟩    |        |       |
| [`prefer-readonly`](https://typescript-eslint.io/rules/prefer-readonly)                                                           |        | 💭 |     |       |        |       |
| [`prefer-readonly-parameter-types`](https://typescript-eslint.io/rules/prefer-readonly-parameter-types)                           |        | 💭 |     |       |        |       |
| [`prefer-reduce-type-parameter`](https://typescript-eslint.io/rules/prefer-reduce-type-parameter)                                 |        | 💭 |     |       | 🔵     |       |
| [`prefer-regexp-exec`](https://typescript-eslint.io/rules/prefer-regexp-exec)                                                     |        | 💭 |     |       |        | 🔸    |
| [`prefer-return-this-type`](https://typescript-eslint.io/rules/prefer-return-this-type)                                           |        | 💭 |     |       | 🔵     |       |
| [`prefer-string-starts-ends-with`](https://typescript-eslint.io/rules/prefer-string-starts-ends-with)                             |        | 💭 |     |       |        | 🔸    |
| [`prefer-ts-expect-error`](https://typescript-eslint.io/rules/prefer-ts-expect-error)                                             | 🆕     |    |     |       |        |       |
| [`promise-function-async`](https://typescript-eslint.io/rules/promise-function-async)                                             |        | 💭 |     |       |        |       |
| [`related-getter-setter-pairs`](https://typescript-eslint.io/rules/related-getter-setter-pairs)                                   | 🆕     | 💭 |     |       | 🔵     |       |
| [`require-array-sort-compare`](https://typescript-eslint.io/rules/require-array-sort-compare)                                     |        | 💭 |     |       |        |       |
| [`require-await`](https://typescript-eslint.io/rules/require-await)                                                               |        | 💭 | 🧱  | 🟩    |        |       |
| [`restrict-plus-operands`](https://typescript-eslint.io/rules/restrict-plus-operands)                                             |        | 💭 |     |       |        |       |
| [`restrict-template-expressions`](https://typescript-eslint.io/rules/restrict-template-expressions)                               |        | 💭 |     |       |        |       |
| [`return-await`](https://typescript-eslint.io/rules/return-await)                                                                 |        | 💭 |     |       |        |       |
| [`sort-type-constituents`](https://typescript-eslint.io/rules/sort-type-constituents)                                             | 🆕     |    |     |       |        |       |
| [`strict-boolean-expressions`](https://typescript-eslint.io/rules/strict-boolean-expressions)                                     |        | 💭 |     |       |        |       |
| [`switch-exhaustiveness-check`](https://typescript-eslint.io/rules/switch-exhaustiveness-check)                                   |        | 💭 |     |       |        |       |
| [`triple-slash-reference`](https://typescript-eslint.io/rules/triple-slash-reference)                                             |        |    |     | 🟩    |        |       |
| [`typedef`](https://typescript-eslint.io/rules/typedef)                                                                           |        |    |     |       |        |       |
| [`unbound-method`](https://typescript-eslint.io/rules/unbound-method)                                                             |        | 💭 |     | 🟩    |        |       |
| [`unified-signatures`](https://typescript-eslint.io/rules/unified-signatures)                                                     |        |    |     |       | 🔵     |       |
| [`use-unknown-in-catch-callback-variable`](https://typescript-eslint.io/rules/use-unknown-in-catch-callback-variable)             |        | 💭 |     |       | 🔵     |       |
