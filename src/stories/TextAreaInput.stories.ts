import type { Meta, StoryObj } from "@storybook/vue3";
import TextAreaInput from "../components/TextAreaInput.vue";
import { computed, ref } from "vue";
import { countCharacters } from "../utils/countCharacters";
const meta = {
  title: "テキストエリア",
  component: TextAreaInput,
  tags: ["autodocs"],
  argTypes: {
    label: { control: "text" },
    placeHolder: { control: "text" },
    supportText: { control: "text" },
    errorText: { control: "text" },
    isRequired: {
      control: "boolean",
    },
    isValid: {
      control: "boolean",
    },
    maxCount: {
      control: "number",
    },
    numberOfCharacters: {
      control: "number",
    },
    isDisabled: {
      control: "boolean",
    },
  },
  args: {
    label: "お問い合わせ詳細",
    supportText: "できる限りくわしくお書きください",
    isRequired: false,
    isValid: true,
    maxCount: 256,
  },
} satisfies Meta<typeof TextAreaInput>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Base: Story = {
  args: {
    modelValue: "",
    label: "お問い合わせ詳細",
    supportText: "できる限りくわしくお書きください",
    isRequired: false,
    isValid: true,
    maxCount: 256,
  },
  render: (args) => ({
    components: { TextAreaInput },
    setup: () => {
      const text = ref<string>("");
      const numberOfCharacters = computed(() => countCharacters(text.value));
      return { text, numberOfCharacters, ...args };
    },
    template: `
      <TextAreaInput 
        v-model="text" 
        :label="label" 
        :placeHolder="placeHolder" 
        :supportText="supportText" 
        :isRequired="isRequired" 
        :isValid="isValid"
        :maxCount="maxCount"
        :numberOfCharacters="numberOfCharacters" 
        :isDisabled="isDisabled"
        :errorText="errorText"
      />
    `,
  }),
};
