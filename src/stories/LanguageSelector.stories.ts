import type { Meta, StoryObj } from "@storybook/vue3";
import LanguageSelector from "../components/LanguageSelector.vue";

const meta = {
  title: "ランゲージセレクター",
  component: LanguageSelector,
  tags: ["autodocs"],
  argTypes: {
    languageList: {
      control: "array",
    },
  },
  args: {
    languageList: [
      { label: "日本語", link: "#!", isCurrent: true },
      { label: "English", link: "#!", isCurrent: false },
      { label: "简体中文", link: "#!", isCurrent: false },
      { label: "한국어", link: "#!", isCurrent: false },
    ],
  },
} satisfies Meta<typeof LanguageSelector>;
export default meta;
type Story = StoryObj<typeof meta>;

export const base: Story = {
  args: {
    languageList: [
      { label: "日本語", link: "#!", isCurrent: true },
      { label: "English", link: "#!", isCurrent: false },
      { label: "简体中文", link: "#!", isCurrent: false },
      { label: "한국어", link: "#!", isCurrent: false },
    ],
    linkTag: "a",
  },
};
