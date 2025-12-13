import type { Meta, StoryObj } from "@storybook/vue3";
import StepNavigationItem from "../components/StepNavigationItem.vue";

const meta = {
  title: "ステップナビゲーションアイテム",
  component: StepNavigationItem,
  tags: ["autodocs"],
  argTypes: {
    step: {
      control: { type: "number" },
      description: "ステップ番号",
    },
    process: {
      control: { type: "select" },
      options: ["deafault", "skipped", "reached"],
      description: "プロセス状態",
    },
    state: {
      control: { type: "select" },
      options: [undefined, "editing", "error"],
      description: "ステップの状態",
    },
  },
  args: {
    step: 1,
    process: "deafault",
  },
} satisfies Meta<typeof StepNavigationItem>;

export default meta;
type Story = StoryObj<typeof meta>;

/**
 * デフォルト状態
 * 基本的なステップナビゲーションアイテムです。
 */
export const Default: Story = {
  args: {
    step: 1,
    process: "deafault",
  },
};

/**
 * スキップ済み
 * スキップされたステップです。
 */
export const Skipped: Story = {
  args: {
    step: 2,
    process: "skipped",
  },
};

/**
 * 到達済み
 * 到達済みのステップです。
 */
export const Reached: Story = {
  args: {
    step: 3,
    process: "reached",
  },
};

/**
 * 編集中
 * 編集中のステップです。
 */
export const Editing: Story = {
  args: {
    step: 4,
    process: "reached",
    state: "editing",
  },
};

/**
 * エラー状態
 * エラーが発生したステップです。
 */
export const Error: Story = {
  args: {
    step: 5,
    process: "reached",
    state: "error",
  },
};

/**
 * 複数のステップ
 * 複数のステップナビゲーションアイテムを表示した例です。
 */
export const Multiple: Story = {
  render: () => ({
    components: { StepNavigationItem },
    template: `
      <div style="display: flex; gap: 16px; align-items: center;">
        <StepNavigationItem :step="1" process="reached" />
        <StepNavigationItem :step="2" process="reached" state="editing" />
        <StepNavigationItem :step="3" process="deafault" />
        <StepNavigationItem :step="4" process="skipped" />
        <StepNavigationItem :step="5" process="deafault" />
      </div>
    `,
  }),
};


