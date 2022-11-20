import eslintConfigPrettier from "eslint-config-prettier"
import pluginVue from "eslint-plugin-vue"
import pluginTypescript from "@typescript-eslint/eslint-plugin"
import vueParser from "vue-eslint-parser"
import typescriptParser from "@typescript-eslint/parser"

export default [
  "eslint:recommended",
  eslintConfigPrettier,
  {
    files:["**/*.vue"],
    plugins: {
      vue:pluginVue
    },
    languageOptions:{
      parser:vueParser,
      parserOptions: {
        parser: typescriptParser,
      },
    },
    rules:{
      ...pluginVue.configs["vue3-recommended"].rules,
      ...pluginVue.configs["vue3-essential"].rules,
      ...pluginVue.configs["vue3-strongly-recommended"].rules
    }
  },
  {
    files:["**/*.ts"],
    ignores:["src/vite-env.d.ts"],
    plugins: {
      pluginTypescript,
    },
  }
 
]