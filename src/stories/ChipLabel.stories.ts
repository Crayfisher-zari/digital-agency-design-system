import type { Meta, StoryObj } from "@storybook/vue3";
import ChipLabel from "../components/ChipLabel.vue";
import Icon from "../components/Icon.vue";
import iconSample from "../assets/images/icon_sample.svg";

const meta = {
  title: "チップラベル",
  component: ChipLabel,
  tags: ["autodocs"],
  argTypes: {
    color: {
      control: { type: "select" },
      options: [
        "gray",
        "blue",
        "lightBlue",
        "cyan",
        "green",
        "lime",
        "yellow",
        "orange",
        "red",
        "magenta",
        "purple",
      ],
    },
    type: {
      control: { type: "select" },
      options: ["textOnly", "outlined", "outlinedWithFill", "fill", "fillOnly"],
      description: "チップの表示スタイル",
    },
    borderRadius: {
      control: { type: "select" },
      options: ["none", "small", "rounded"],
      description: "チップの角丸の大きさ",
    },
  },
  args: {
    color: "gray",
    type: "textOnly",
  },
} satisfies Meta<typeof ChipLabel>;

export default meta;
type Story = StoryObj<typeof meta>;

/**
 * テキストのみのチップラベル
 * 基本的なチップラベルの表示です。
 */
export const Default: Story = {
  render: (args) => ({
    components: { ChipLabel, Icon },
    setup() {
      return { ...args, iconSample };
    },
    template: `
      <ChipLabel :color="color" :type="type" :borderRadius="borderRadius">
        <template #frontIcon>
          <Icon :iconSrc="iconSample" :width="24" :height="24" />
        </template>
        ラベル
      </ChipLabel>
    `,
  }),
};

/**
 * アウトラインタイプ
 * 境界線のあるチップラベルです。
 */
export const Outlined: Story = {
  args: {
    type: "outlined",
  },
  render: (args) => ({
    components: { ChipLabel, Icon },
    setup() {
      return { ...args, iconSample };
    },
    template: `
      <ChipLabel :color="color" :type="type" :borderRadius="borderRadius">
        <template #frontIcon>
          <Icon :iconSrc="iconSample" :width="24" :height="24" />
        </template>
        ラベル
      </ChipLabel>
    `,
  }),
};

/**
 * アウトライン＋背景色タイプ
 * 境界線と薄い背景色のあるチップラベルです。
 */
export const OutlinedWithFill: Story = {
  args: {
    type: "outlinedWithFill",
  },
  render: (args) => ({
    components: { ChipLabel, Icon },
    setup() {
      return { ...args, iconSample };
    },
    template: `
      <ChipLabel :color="color" :type="type">
        <template #frontIcon>
          <Icon :iconSrc="iconSample" :width="24" :height="24" />
        </template>
        ラベル
      </ChipLabel>
    `,
  }),
};

/**
 * 塗りつぶしタイプ
 * 背景色で塗りつぶされたチップラベルです。
 */
export const FillOnly: Story = {
  args: {
    type: "fillOnly",
  },
  render: (args) => ({
    components: { ChipLabel, Icon },
    setup() {
      return { ...args, iconSample };
    },
    template: `
      <ChipLabel :color="color" :type="type" :borderRadius="borderRadius">
        <template #frontIcon>
          <Icon :iconSrc="iconSample" :width="24" :height="24" />
        </template>
        ラベル
      </ChipLabel>
    `,
  }),
};

/**
 * カスタムカラー
 * カスタムカラーを使用したチップラベルです。
 */
export const CustomColor: Story = {
  args: {
    type: "outlinedWithFill",
    customColor: "#304970",
    customBackgroundColor: "#d9e4f6",
  },
  render: (args) => ({
    components: { ChipLabel, Icon },
    setup() {
      return { ...args, iconSample };
    },
    template: `
      <ChipLabel :customColor="customColor" :customBackgroundColor="customBackgroundColor" :type="type" :borderRadius="borderRadius">
        <template #frontIcon>
          <Icon :iconSrc="iconSample" :width="24" :height="24" />
        </template>
        ラベル
      </ChipLabel>
    `,
  }),
};

/**
 * 複数のチップラベル
 * 異なるスタイルのチップラベルを複数表示した例です。
 */
export const Multiple: Story = {
  render: (args) => ({
    components: { ChipLabel, Icon },
    setup() {
      return { ...args, iconSample };
    },
    template: `
        <div style="display: flex; gap: 8px; flex-wrap: wrap; align-items: center;">
          <ChipLabel type="textOnly" :color="color" :borderRadius="borderRadius">
            <template #frontIcon>
              <Icon :iconSrc="iconSample" :width="24" :height="24" />
            </template>
            テキストのみ
          </ChipLabel>
          <ChipLabel type="outlined" :color="color" :borderRadius="borderRadius">
            <template #frontIcon>
              <Icon :iconSrc="iconSample" :width="24" :height="24" />
            </template>
            アウトライン
          </ChipLabel>
          <ChipLabel type="outlinedWithFill" :color="color" :borderRadius="borderRadius">
            <template #frontIcon>
              <Icon :iconSrc="iconSample" :width="24" :height="24" />
            </template>
            背景色あり
          </ChipLabel>
          <ChipLabel type="fillOnly" :color="color" :borderRadius="borderRadius">
            <template #frontIcon>
              <Icon :iconSrc="iconSample" :width="24" :height="24" />
            </template>
            塗りつぶし
          </ChipLabel>
        </div>
      `,
  }),
};
