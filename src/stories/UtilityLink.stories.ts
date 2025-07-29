import type { Meta, StoryObj } from "@storybook/vue3";
import UtilityLink from "../components/UtilityLink.vue";
import iconSample from "@/assets/images/icon_sample.svg";

const meta = {
  title: "ユーティリティリンク",
  component: UtilityLink,
  tags: ["autodocs"],
  argTypes: {
    url: {
      control: "text",
    },
    target: {
      control: "text",
    },
    iconUrl: {
      control: "text",
    },
  },
  args: {
    url: "#!",
    target: undefined,
  },
} satisfies Meta<typeof UtilityLink>;
export default meta;
type Story = StoryObj<typeof meta>;

/**
 * 通常
 */
export const Base: Story = {
  args: {
    url: "#!",
  },
  render: (args) => ({
    components: { UtilityLink },
    setup: () => {
      return { ...args };
    },
    template: `
    <UtilityLink :url="url" :target="target">リンクテキスト</UtilityLink>
    `,
  }),
};

/**
 * 外部リンクの場合
 */
export const External: Story = {
  args: {
    url: "#!",
    target: "_blank",
  },
  render: (args) => ({
    components: { UtilityLink },
    setup: () => {
      return { ...args };
    },
    template: `
    <UtilityLink :url="url" :target="target">リンクテキスト</UtilityLink>
    `,
  }),
};

/**
 * アイコン付き
 */
export const WithIcon: Story = {
  args: {
    url: "#!",
    iconUrl: iconSample,
  },
  render: (args) => ({
    components: { UtilityLink },
    setup: () => {
      return { ...args };
    },
    template: `
    <UtilityLink :url="url" :iconUrl="iconUrl">リンクテキスト</UtilityLink>
    `,
  }),
};
