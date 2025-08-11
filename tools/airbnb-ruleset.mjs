/**
 * Compare rules between rulesets
 */
import RulesDb from './RulesDb.mjs';
import { getEnabledRules, generateTable, generateStatistics } from './rules.mjs'
import airbnb from './ruleset/airbnb.mjs'
import tsRecommended from './ruleset/tsRecommended.mjs'

const rulesDb = new RulesDb();

rulesDb.addConfig(getEnabledRules(airbnb.rules), 'airbnb-typescript')
rulesDb.addConfig(getEnabledRules(tsRecommended.rules), 'ts-tc-rec')


console.log(`
## Ruleset Comparison

## \`airbnb-typescript\`

\`eslint-config-airbnb\`: \`19.0.4\`

\`eslint-config-airbnb-base\`: \`15.0.0\`

\`eslint-config-airbnb-typescript\`: \`18.0.0\`

\`\`\`
extends: [
  'airbnb',
  'airbnb-typescript',
  'airbnb/hooks',
]
\`\`\`

## \`ts-tc-rec\`

\`typescript-eslint\`: \`8.24.1\`

\`\`\`
tseslint.config(
  eslint.configs.recommended,
  tseslint.configs.eslintRecommended,
  tseslint.configs.recommendedTypeChecked,
  importPlugin.flatConfigs.recommended,
  importPlugin.flatConfigs.typescript,
  reactHooks.configs['recommended-latest'],
)
\`\`\`

## Table
`);

generateTable(rulesDb);

console.log(`
## Statistics
`);

Object.entries(rulesDb.getConfigs()).forEach(([ruleset, config]) => {
  const { count, deprecated, stylistic, hasTsExtension } = generateStatistics(config);
  console.log(`
${ruleset}: ${count} rules (${deprecated} deprecated, ${stylistic} stylistic, ${hasTsExtension} with TS extension)
`);
});