/**
 * Ruleset for eslint.configs.recommended, tseslint.configs.recommendedTypeChecked
 */
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

const e = new ESLint({
  overrideConfig: eslintConfig,
  overrideConfigFile: true,
});

const config = await e.calculateConfigForFile('dummy.ts')
export default config;
