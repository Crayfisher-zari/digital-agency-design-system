import type { Preview } from "@storybook/vue3";

import "../src/assets/style/color/primitiveColors.scss";
import "../src/assets/style/color/semanticColors.scss";
import "../src/assets/style/fonts/font.scss";
import "../src/assets/style/easing/easing.scss";
import "./previewStyle.scss";

import { INITIAL_VIEWPORTS } from "@storybook/addon-viewport";

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    viewport: {
      viewports: INITIAL_VIEWPORTS,
      defaultViewport: "ipad",
    },
    darkMode: {
      current: "light",
      darkClass: "color-scheme-dark",
      lightClass: "color-scheme-light",
      stylePreview: true,
    },
  },
};

export default preview;
