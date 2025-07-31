import type { Meta, StoryObj } from "@storybook/vue3";
import LanguageSelector from "../components/LanguageSelector.vue";

const meta = {
  title: "ランゲージセレクター",
  component: LanguageSelector,
  tags: ["autodocs"],
  argTypes: {
    type: {
      control: "select",
      options: ["label", "icon"],
    },
    languageList: {
      control: "object",
    },
    size: {
      control: "select",
      options: ["regular", "small"],
    },
    contentHeight: {
      control: "number",
    },
  },
  args: {
    languageList: [
      { label: "日本語", link: "#!", isCurrent: true },
      { label: "English", link: "#!", isCurrent: false },
      { label: "简体中文", link: "#!", isCurrent: false },
      { label: "한국어", link: "#!", isCurrent: false },
      { label: "Lëtzebuergesch", link: "#!", isCurrent: false },
    ],
  },
} satisfies Meta<typeof LanguageSelector>;
export default meta;
type Story = StoryObj<typeof meta>;

/**
 * 小さいサイズ
 */
export const Base: Story = {
  args: {
    languageList: [
      { label: "日本語", link: "#!", isCurrent: true },
      { label: "English", link: "#!", isCurrent: false },
      { label: "简体中文", link: "#!", isCurrent: false },
      { label: "한국어", link: "#!", isCurrent: false },
      { label: "Lëtzebuergesch", link: "#!", isCurrent: false },
    ],
    linkTag: "a",
  },
  render: (args) => ({
    components: { LanguageSelector },
    setup() {
      return { args };
    },
    template: `<div style="display: flex; justify-content: center;"><LanguageSelector v-bind="args" /></div>`,
  }),
};

/**
 * 大きいサイズ
 */
export const Large: Story = {
  args: {
    languageList: [
      { label: "日本語", link: "#!", isCurrent: true },
      { label: "English", link: "#!", isCurrent: false },
      { label: "简体中文", link: "#!", isCurrent: false },
      { label: "한국어", link: "#!", isCurrent: false },
      { label: "Lëtzebuergesch", link: "#!", isCurrent: false },
    ],
    linkTag: "a",
    size: "regular",
  },
};
