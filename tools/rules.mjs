import { builtinRules as eslintRules } from "eslint/use-at-your-own-risk";
import tseslintRules from '@typescript-eslint/eslint-plugin/use-at-your-own-risk/rules';


const allRules = Object.keys(tseslintRules).sort().reduce((obj, key) => {
  obj[`@ts/${key}`] = tseslintRules[key];
  return obj;
}, {});

for (const key of eslintRules.keys()) {
  allRules[key] = eslintRules.get(key);
};


const orderedRules = Object.keys(allRules).sort((a, b) => {
  if (!a.startsWith('@ts/')) a = `@ts/${a}`
  if (!b.startsWith('@ts/')) b = `@ts/${b}`
  return a > b ? 1 : -1
}).reduce((obj, key) => {
  obj[key] = allRules[key];
  return obj;
}, {});

export default orderedRules;

export const normalizeRules = (rules) => Object.keys(rules).reduce((obj, key) => {
  obj[key.replace('@typescript-eslint', '@ts')] = rules[key]
  return obj;
}, {});
