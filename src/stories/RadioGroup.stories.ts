import type { Meta, StoryObj } from "@storybook/vue3";
import RadioGroup from "../components/RadioGroup.vue";
import { ref } from "vue";

const meta = {
  title: "ラジオボタングループ",
  component: RadioGroup,
  tags: ["autodocs"],
  argTypes: {
    groupLabel: {
      control: "text",
    },
    radioStyle: {
      control: "radio",
      options: ["default", "tile"],
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
} satisfies Meta<typeof RadioGroup>;
type Story = StoryObj<typeof meta>;

export default meta;

export const Base: Story = {
  render: (args) => ({
    components: { RadioGroup },
    setup: () => {
      const checked = ref();
      return { checked, ...args };
    },
    template: `
    <div>
      <p class="mb">選択されたもの：{{ checked }}</p>
        <RadioGroup
          v-model="checked"
          :groupLabel="groupLabel"
          :labels="labels"
          :values="values"
          :supportText="supportText"
          :errorText="errorText"
          :isValid="isValid"
          :isRequired="isRequired"
          name="radio-group"
        />
      </div>
    `,
  }),
};
