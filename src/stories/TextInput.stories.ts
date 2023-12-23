import type { Meta, StoryObj } from "@storybook/vue3";
import TextInput from "../components/TextInput.vue";

const meta = {
  title: "TextInput",
  component: TextInput,
  tags: ["autodocs"],
  argTypes: {
    label: { control: "text" },
    type: {
      control: "radio",
      options: [
        "text",
        "email",
        "tel",
        "number",
        "password",
        "date",
        "detetime-local",
        "search",
        "url",
        "week",
      ],
    },
    placeHolder: { control: "text" },
    supportText: { control: "text" },
    errorText: { control: "text" },
    isRequired: { control: "boolean" },
    isValid: { control: "boolean" },
    isDisabled: { control: "boolean" },
  },
  args: {
    label: "ラベル",
    type: "text",
    placeHolder: "プレースホルダー",
    supportText: "サポートテキスト",
    errorText: "エラーテキスト",
    isRequired: false,
    isValid: true,
    isDisabled: false,
    onBlur: undefined,
    modelValue:""
  },
} satisfies Meta<typeof TextInput>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Base: Story = {
  args: {
    label: "ラベル",
    type: "text",
  },
};
