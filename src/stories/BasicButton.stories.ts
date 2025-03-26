import type { Meta, StoryObj } from "@storybook/vue3";
import BasicButton from "../components/BasicButton.vue";
import Icon from "../components/Icon.vue";
import iconExternal from "@/assets/images/icon_external.svg";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
const meta = {
  title: "ボタン",
  component: BasicButton,
  // This component will have an automatically generated docsPage entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
  argTypes: {
    label: { control: "text" },
    type: {
      control: "radio",
      options: ["primary", "secondary", "tertiary"],
    },
    size: {
      control: "radio",
      options: ["large", "medium", "small", "x-small"],
    },
    disabled: {
      control: "boolean",
    },
    onClick: { action: "clicked" },
  },
  args: {
    label: "ボタン",
    type: "primary",
    size: "medium",
    disabled: false,
  }, // default value
} satisfies Meta<typeof BasicButton>;

export default meta;
type Story = StoryObj<typeof meta>;

/**
 * プライマリー
 */
export const Primary: Story = {
  args: {
    label: "ボタン",
    type: "primary",
  },
};

/**
 * セカンダリー
 */
export const Secondary: Story = {
  args: {
    label: "ボタン",
    type: "secondary",
  },
};

/**
 * ターシャリ
 */
export const Tertiary: Story = {
  args: {
    label: "ボタン",
    type: "tertiary",
  },
};

/**
 * Largeサイズ
 */
export const Large: Story = {
  args: {
    label: "ボタン",
    size: "large",
  },
};

/**
 * Mediumサイズ
 */
export const Medium: Story = {
  args: {
    label: "ボタン",
    size: "medium",
  },
};

/**
 * Smallサイズ
 */
export const Small: Story = {
  args: {
    label: "ボタン",
    size: "small",
  },
};

/**
 * X-Smallサイズ
 */
export const XSmall: Story = {
  args: {
    label: "ボタン",
    size: "x-small",
  },
};

/**
 * カスタムカラー（プライマリーボタンタイプ）
 */
export const CustomColor1: Story = {
  args: {
    label: "ボタン",
    type: "custom",
    customColor: {
      backgroundColor: "var(--color-status-success)",
      hoverBackgroundColor: "var(--color-green-800)",
      labelColor: "#FFF",
      hoverLabelColor: "#FFF",
    },
  },
};

/**
 * カスタムカラー（セカンダリーボタンタイプ）
 */
export const CustomColor2: Story = {
  args: {
    label: "ボタン",
    type: "custom",
    customColor: {
      backgroundColor: "var(--color-text-onFill)",
      borderColor: "var(--color-status-warning)",
      hoverBackgroundColor: "var(--color-yellow-100)",
      labelColor: "var(--color-status-warning)",
      hoverLabelColor: "var(--color-yellow-1000)",
      hoverBorderColor: "var(--color-yellow-1000)",
    },
  },
};

/**
 * 非活性時
 * 実装はdisabled属性ではなくフォーカス可能なaria-disabled属性を利用しています。<br>
 * 詳しくはhttps://design.digital.go.jp/components/button/accessibility/を参照してください。
 */
export const Disabled: Story = {
  args: {
    label: "ボタン",
    disabled: true,
  },
};

/**
 * アイコンあり（はじめ側）
 */
export const StartIcon: Story = {
  args: {
    label: "ボタン",
  },
  render: () => ({
    components: { BasicButton, Icon },
    setup: () => {
      const iconSrc = iconExternal;
      return {
        iconSrc,
      };
    },
    template: `<BasicButton label="ボタン" type="primary" size="medium" @click="clicked">
      <template v-slot:start>
      <Icon :iconSrc="iconSrc" width="16" height="16" color="var(--color-text-onFill)" />
      </template>
    </BasicButton>`,
  }),
};

/**
 * アイコンあり（おわり側）
 */
export const EndIcon: Story = {
  args: {
    label: "ボタン",
  },
  render: () => ({
    components: { BasicButton, Icon },
    setup: () => {
      const iconSrc = iconExternal;
      return {
        iconSrc,
      };
    },
    template: `<BasicButton label="ボタン" type="primary" size="medium" @click="clicked">
      <template v-slot:end>
      <Icon :iconSrc="iconSrc" width="16" height="16" color="var(--color-text-onFill)" />
      </template>
    </BasicButton>`,
  }),
};
