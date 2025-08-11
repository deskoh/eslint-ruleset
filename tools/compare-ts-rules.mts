/**
 * Generate rules diff between 2 versions of typescript-eslint
 * Reference: https://github.com/typescript-eslint/typescript-eslint/blob/main/packages/eslint-plugin/tools/generate-breaking-changes.mts
 */
import type {
  ESLintPluginRuleModule,
  TypeScriptESLintRules,
} from '@typescript-eslint/eslint-plugin/use-at-your-own-risk/rules';
import { fetch } from 'cross-fetch';
import { markdownTable } from 'markdown-table';
import yargs from 'yargs';


const argv = yargs(process.argv.slice(2))
  .usage('Usage: $0 <version_old>')
  .demandCommand(1)
  .example('$0 8.0.0', 'compare v8.0.0 ruleset with latest version')
  .parse();

const [version = '8.0.0'] = argv._;

let rulesCountString: string;

async function main(): Promise<void> {
  const rulesImport = await import('@typescript-eslint/eslint-plugin/use-at-your-own-risk/rules');
  const { version: newVersion } = await import('@typescript-eslint/eslint-plugin/package.json');
  /*
  weird TS resolution which adds an additional default layer in the type like:
      { default: { default: Rules }}
  instead of just
      { default: Rules }
  */
  const rules = rulesImport.default as unknown as Record<
    string,
    ESLintPluginRuleModule
  >;
  rulesCountString = `Rules in version ${newVersion}: ${Object.keys(rules).length}`;

  // Annotate which rules are new since the last version
  async function getNewRulesAsOfMajorVersion(
    oldVersion: string,
  ): Promise<Set<string>> {
    // 1. Get the current list of rules (already done)
    const newRuleNames = Object.keys(rules);

    // 2. Retrieve the old version of typescript-eslint from unpkg
    const oldUrl = `https://unpkg.com/@typescript-eslint/eslint-plugin@${oldVersion}/dist/configs/all.js`;
    const oldFileText = await (await fetch(oldUrl)).text();
    const oldObjectText = oldFileText.substring(
      oldFileText.indexOf('{'),
      oldFileText.lastIndexOf('}') + 1,
    );
    // Normally we wouldn't condone using the 'eval' API...
    // But this is an internal-only script and it's the easiest way to convert
    // the JS raw text into a runtime object. 🤷
    let oldRulesObject!: { rules: TypeScriptESLintRules };
    eval(`oldRulesObject = ${oldObjectText}`);

    // Old rule names includes ESLint rules to be turned off so count will not be accurate.
    const oldRuleNames = new Set(Object.keys(oldRulesObject.rules));

    // 3. Get the keys that exist in (1) (new version) and not (2) (old version)
    return new Set(
      newRuleNames.filter(
        newRuleName => !oldRuleNames.has(`@typescript-eslint/${newRuleName}`),
      ),
    );
  }

  const newRuleNames = await getNewRulesAsOfMajorVersion(version);
  
  

  console.log(`## Table Key

${rulesCountString}

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
`);

  console.log(
    markdownTable([
      ['Rule', 'Status', 'TC', 'Ext', "Rec'd", 'Strict', 'Style'],
      ...Object.entries(rules).map(([ruleName, { meta }]) => {
        const { deprecated } = meta;
        const { extendsBaseRule, recommended, requiresTypeChecking } =
          meta.docs;

        return [
          `[\`${ruleName}\`](https://typescript-eslint.io/rules/${ruleName})`,
          newRuleNames.has(ruleName) ? '🆕' : deprecated ? '💀' : '',
          requiresTypeChecking ? '💭' : '',
          extendsBaseRule ? '🧱' : '',
          recommended === 'recommended' ? '🟩' : '',
          recommended === 'strict' ? '🔵' : '',
          recommended === 'stylistic' ? '🔸' : '',
        ];
      }),
    ]),
  );
}

main().catch((error: unknown) => {
  console.error(error);
});