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
    size: {
      control: "radio",
      options: ["small", "medium", "large"],
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
    subTexts: {
      control: "object",
    },
  },
  args: {
    labels: ["選択肢1", "選択肢2", "選択肢3"],
    values: ["選択肢1の値", "選択肢2の値", "選択肢3の値"],
    groupLabel: "ラベル",
    size: "medium",
    supportText: "サポートテキスト",
    errorText: "エラーテキスト",
    onBlur: undefined,
    isRequired: false,
    isValid: true,
    isDisabled: false,
    name: "radio-group",
    radioStyle: "default",
    subTexts: ["補助説明", "補助説明", "補助説明"],
  },
} satisfies Meta<typeof RadioGroup>;
type Story = StoryObj<typeof meta>;

export default meta;

export const Base: Story = {
  args: {
    labels: ["選択肢1", "選択肢2", "選択肢3"],
    values: ["選択肢1の値", "選択肢2の値", "選択肢3の値"],
    groupLabel: "ラベル",
    size: "medium",
    supportText: "サポートテキスト",
    errorText: "エラーテキスト",
    onBlur: undefined,
    isRequired: false,
    isValid: true,
    isDisabled: false,
    modelValue: "",
    radioStyle: "default",
    subTexts: ["補助説明", "補助説明", "補助説明"],
  },
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
          :size="size"
          :supportText="supportText"
          :errorText="errorText"
          :isValid="isValid"
          :isRequired="isRequired"
          name="radio-group"
          :radioStyle="radioStyle"
          :subTexts="subTexts"
        />
      </div>
    `,
  }),
};
