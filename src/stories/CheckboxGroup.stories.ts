import type { Meta, StoryObj } from "@storybook/vue3";
import CheckboxGroup from "../components/CheckboxGroup.vue";
import { ref } from "vue";

const meta = {
  title: "チェックボックスグループ",
  component: CheckboxGroup,
  tags: ["autodocs"],
  argTypes: {
    type: {
      control: "radio",
      options: ["stacked", "inline"],
    },
    size: {
      control: "radio",
      options: ["small", "medium", "large"],
    },
    groupLabel: {
      control: "text",
    },
    supportText: {
      control: "text",
    },
    errorText: {
      control: "text",
    },
    isRequired: {
      control: "boolean",
    },
    isValid: {
      control: "boolean",
    },
    isDisabled: {
      control: "boolean",
    },
  },
  args: {
    labels: ["選択肢1", "選択肢2", "選択肢3"],
    values: ["選択肢1の値", "選択肢2の値", "選択肢3の値"],
    groupLabel: "ラベル",
    supportText: "サポートテキスト",
    errorText: "エラーテキスト",
    onBlur: undefined,
    isRequired: false,
    isValid: true,
    isDisabled: false,
  },
} as Meta<typeof CheckboxGroup>;
type Story = StoryObj<typeof meta>;

export default meta;

export const Base: Story = {
  render: (args) => ({
    components: { CheckboxGroup },
    setup: () => {
      const checked = ref(["選択肢1の値"]);
      return { checked, ...args };
    },
    template: `
      <div>
      <p class="mb">チェックされたもの：{{ checked }}</p>
        <CheckboxGroup
          v-model="checked"
          :type="type"
          :groupLabel="groupLabel"
          :labels="labels"
          :values="values"
          :supportText="supportText"
          :errorText="errorText"
          :isValid="isValid"
          :isRequired="isRequired"
          :size="size"
          :isDisabled="isDisabled"
          name="group3"
        />
      </div>
    `,
  }),
};
