import eslint from '@eslint/js';
import { ESLint } from "eslint";
import tseslint from 'typescript-eslint';
// import allRules from '@typescript-eslint/eslint-plugin/use-at-your-own-risk/rules';
import { markdownTable } from 'markdown-table';

import allRules, { normalizeRules } from './rules.mjs';

function generateTable(enabledRules) {
    console.log(
        markdownTable([
          ['Rule', 'Config', 'TC', 'Ext', "Rec'd", 'Strict', 'Style'],
          ...Object.entries(allRules).map(([ruleName, { meta }]) => {
            const { deprecated } = meta;
            const { extendsBaseRule, recommended, requiresTypeChecking, url } =
              meta.docs;

            return [
              `[\`${ruleName}\`${deprecated ? '💀' : ''}](${url})`,
              enabledRules.findIndex(r => r === ruleName) > -1 ? '✔️' : '',
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


async function getEnabledRules(eslintConfig) {
    // Create an instance of ESLint with the specified configuration
    const eslint = new ESLint({
        overrideConfig: eslintConfig,
        overrideConfigFile: true,
    });

    // Get the resolved configuration for the file
    const config = await eslint.calculateConfigForFile('./input.ts');

    // Extract the rules from the resolved configuration
    const rules = normalizeRules(config.rules);

    // Filter rules to include only those with values 1 (warn) or 2 (error)
    const enabledRules = Object.entries(rules)
        .filter(([ruleId, ruleConfig]) => {
            // Rule configurations can be an array or a single value
            const severity = Array.isArray(ruleConfig) ? ruleConfig[0] : ruleConfig;
            return severity === 1 || severity === 2; // Only include rules with severity 1 or 2
        })
        .map(([ruleId]) => ruleId)
        .sort((a, b) => {
            if (!a.startsWith('@ts/')) a = `@ts/${a}`
            if (!b.startsWith('@ts/')) b = `@ts/${b}`
            return a > b ? 1 : -1
          })

    return enabledRules;
}

const eslintConfig = tseslint.config(
    eslint.configs.recommended,
    tseslint.configs.recommendedTypeChecked,
    tseslint.configs.stylisticTypeChecked,
);

const rules = await getEnabledRules(eslintConfig);
console.log('Total count: ', rules.length);
generateTable(rules);
