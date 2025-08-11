import { markdownTable } from 'markdown-table';

import { builtinRules as eslintRules } from "eslint/use-at-your-own-risk";
import { rules as tseslintRules} from '@typescript-eslint/eslint-plugin';
import { rules as importRules } from 'eslint-plugin-import';

const allRules = Object.keys(tseslintRules).sort().reduce((obj, key) => {
  obj[`@ts/${key}`] = tseslintRules[key];
  return obj;
}, {});

Object.keys(importRules).sort().reduce((obj, key) => {
  obj[`import/${key}`] = importRules[key];
  return obj;
}, allRules);

for (const key of eslintRules.keys()) {
  allRules[key] = eslintRules.get(key);
};

const rulesCompareFn = (a, b) => {
  if (!a.startsWith('@ts/')) a = `@ts/${a}`
  if (!b.startsWith('@ts/')) b = `@ts/${b}`
  return a > b ? 1 : -1
};


const orderedRules = Object.keys(allRules).sort(rulesCompareFn).reduce((obj, key) => {
  obj[key] = allRules[key];
  return obj;
}, {});

const normalizeRules = (rules) => Object.keys(rules).reduce((obj, key) => {
  obj[key.replace('@typescript-eslint', '@ts')] = rules[key]
  return obj;
}, {});

/**
 * Normalize and shorten rule names.
 */
export const getEnabledRules = (rules) => {
  // Filter rules to include only those with values 1 (warn) or 2 (error)
  const enabledRules = {};
  Object.entries(rules)
    .filter(([,ruleConfig]) => {
      // Rule configurations can be an array or a single value
      const severity = Array.isArray(ruleConfig) ? ruleConfig[0] : ruleConfig;
      return severity === 1 || severity === 2 || severity === 'error'; // Only include rules with severity 1 or 2
    })
    .forEach(([ruleId, ruleConfig]) => {
      enabledRules[ruleId.replace('@typescript-eslint', '@ts')] = ruleConfig;
    })
    return enabledRules;
}

export const generateTable = (rulesDb) => {
  const configNames = Object.keys(rulesDb.getConfigs());
  const rules = rulesDb.rules;

  console.log(
    markdownTable([
      ['', ...configNames],
      ...Array.from(rules.keys()).sort(rulesCompareFn).map((ruleName) => {

        // Deprecated @ts-eslint rules will not exists
        let assumeDeprecate = false;
        if (!allRules[ruleName] && ruleName.startsWith('@ts')) {
          console.warn(`${ruleName} not found. Assume deprecated`)
          assumeDeprecate = true;
        }
        const meta = allRules[ruleName]?.meta;
        const deprecated = (meta ? meta.deprecated : false) || assumeDeprecate;
        const extendsBaseRule = meta?.docs ? meta.docs.extendsBaseRule : false;
        const stylistic = (
          meta?.type === 'layout' // eslint
          || meta?.docs?.recommended === 'stylistic' // ts-eslint
          || meta?.docs?.category === 'Style guide' // import plugin
        );
        const url = meta?.docs ? meta.docs.url : undefined;

        const icon = `${deprecated ? '💀' : ''}${extendsBaseRule ? '🧱' : ''}${stylistic ? '🔸' : ''}`
        return [
          url
            ? `[\`${ruleName}\`${icon}](${url})`
            : `\`${ruleName}\`${icon}`,
          ...configNames.map((configName) => {
            const ruleVal = rules.get(ruleName)[configName]
            if (ruleVal && ruleVal[0] === 'off') {
              return ' \u274c '
            } else if (ruleVal !== undefined) {
              return ' \u2714\ufe0f '
            }
          })
        ];
      }),
    ]),
  );
}

export const generateStatistics = (rulesConfig) => {
  const stats = {
    count: Object.keys(rulesConfig).length,
    deprecated: 0,
    hasTsExtension: 0,
    stylistic: 0,
  };
  Object.keys(rulesConfig).forEach((rule) => {
    const ruleMeta = orderedRules[rule]?.meta;

    // Deprecated @ts-eslint rules will not exists
    const assumeDeprecate = (!orderedRules[rule] && rule.startsWith('@ts'))
    const isDeprecated = ruleMeta?.deprecated || assumeDeprecate;
    if (isDeprecated) {
      stats.deprecated++;
    }

    // Check if the rule is stylistic (for non-deprecated rules)
    if (!ruleMeta) {
      console.warn(`Metadata for \`${rule}\` not found.`);
    } else if (!isDeprecated) {
      if (ruleMeta.type === 'layout' // eslint
        || ruleMeta.docs?.recommended === 'stylistic' // ts-eslint
        || ruleMeta.docs?.category === 'Style guide' // import plugin
      ) {
        stats.stylistic++;
      }
    }

    if (orderedRules[`@ts/${rule}`]?.meta?.docs?.extendsBaseRule
      // e.g. no-loss-of-precision has TS equivalent but @ts/no-loss-of-precision is deprecated
      && !orderedRules[`@ts/${rule}`]?.meta?.deprecated) {
      stats.hasTsExtension++;
      console.warn(`Rule \`${rule}\` has a TS extension: \`@ts/${rule}\`, but it is not used in the ruleset.`);
    }
  });
  return stats;
};

export default orderedRules;
