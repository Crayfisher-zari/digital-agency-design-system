import type { Meta, StoryObj } from "@storybook/vue3";
import ResourceListRadioButton from "../components/ResourceListRadioButton.vue";
import { ref } from "vue";

const meta = {
  title: "リソースリスト（ラジオボタン）",
  component: ResourceListRadioButton,
  tags: ["autodocs"],
  argTypes: {
    label: {
      control: "text",
    },
    title: {
      control: "text",
    },
    supportText: {
      control: "text",
    },
    subLabel: {
      control: "text",
    },
  },
  args: {
    title: "会議室A",
    supportText: "25階North",
    subLabel: "利用中",
  },
} satisfies Meta<typeof ResourceListRadioButton>;
export default meta;
type Story = StoryObj<typeof meta>;

/**
 * リソースリスト（チェックボックス）
 * リソースリストにチェックボックス機能を持つです。
 */
export const Base: Story = {
  args: {
    title: "会議室A",
    supportText: "25階North",
    subLabel: "利用中",
    value: "選択肢",
    modelValue: "選択肢",
    name: "test",
  },
  render: (args) => ({
    components: { ResourceListRadioButton },
    setup: () => {
      const checked = ref([]);
      return { checked, ...args };
    },
    template: `
      <div>
      <p>チェックされたもの：{{ checked }}</p>
        <ResourceListRadioButton
          v-model="checked"
          :name
          :value
          :title
          :label
          :supportText
          :subLabel
        />
      </div>
    `,
  }),
};
