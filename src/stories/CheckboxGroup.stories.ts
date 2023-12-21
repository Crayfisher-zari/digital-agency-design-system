import type { Meta, StoryObj } from "@storybook/vue3";
import CheckboxGroup from "../components/CheckboxGroup.vue";
import { ref } from "vue";

const meta = {
  title: "CheckboxGroup",
  component: CheckboxGroup,
  tags: ["autodocs"],
  argTypes: {
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
    groupLabel: "ラベル",
    supportText: "サポートテキスト",
    errorText: "エラーテキスト",
    onBlur: undefined,
  },
} satisfies Meta<typeof CheckboxGroup>;
type Story = StoryObj<typeof meta>;

export default meta;

export const Base: Story = {
  render: (args) => ({
    components: { CheckboxGroup },
    setup: () => {
      const checked = ref([]);
      return { checked, ...args };
    },
    template: `
      <div>
      <p>チェックされたもの：{{ checked }}</p>
        <CheckboxGroup
          v-model="checked"
          :groupLabel="groupLabel"
          :labels="['選択肢1', '選択肢2', '選択肢3']"
          :values="['選択肢1', '選択肢2', '選択肢3']"
          :supportText="supportText"
          :errorText="errorText"
          :isValid="isValid"
          :isRequired="isRequired"
          name="group3"
        />
      </div>
    `,
  }),
};
