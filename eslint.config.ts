import { globalIgnores } from "eslint/config";
import {
  defineConfigWithVueTs,
  vueTsConfigs,
} from "@vue/eslint-config-typescript";
import pluginVue from "eslint-plugin-vue";
import pluginOxlint from "eslint-plugin-oxlint";
import skipFormatting from "@vue/eslint-config-prettier/skip-formatting";
import storybook from "eslint-plugin-storybook";

const vueConfig = defineConfigWithVueTs(
  {
    name: "app/files-to-lint",
    files: ["**/*.{ts,mts,tsx,vue}"],
  },

  globalIgnores(["**/dist/**", "**/dist-ssr/**", "**/coverage/**"]),

  pluginVue.configs["flat/essential"],
  vueTsConfigs.recommended,
  skipFormatting,
  ...pluginOxlint.configs["flat/recommended"],
);

export default [
  globalIgnores(["./src/vite-env.d.ts"]),
  ...vueConfig,
  {
    files: ["**/*.vue"],
    rules: {
      "vue/attribute-hyphenation": 0,
      "vue/multi-word-component-names": 0,
      "vue/v-on-event-hyphenation": 0,
    },
  },
  ...storybook.configs["flat/recommended"],
];
