import type { Meta, StoryObj } from "@storybook/vue3";
import ResourceListRadioButton from "../components/ResourceListRadioButton.vue";
import { computed, ref } from "vue";

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
 * リソースリスト（チェックボックス）<br>
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
      const props = computed(() => args);
      return { checked, props: props.value };
    },
    template: `
      <div>
      <p>チェックされたもの：{{ checked }}</p>
        <ResourceListRadioButton
          v-model="checked"
          :name="props.name"
          :value="props.value"
          :title="props.title"
          :label="props.label"
          :subLabel="props.subLabel"
          :supportText="props.supportText"
        />
      </div>
    `,
  }),
};

/**
 * リソースリスト（チェックボックス）<br>
 * リスト形式の作例です
 */
export const Link: Story = {
  args: {
    title: "会議室A",
    supportText: "25階North",
    subLabel: "利用中",
    value: "選択肢",
    modelValue: "選択肢",
    name: "test",
  },
  render: () => ({
    components: { ResourceListRadioButton },
    setup: () => {
      const checked = ref([]);
      const list = [
        {
          title: "会議室A",
          supportText: "25階North",
          value: "選択肢1",
          modelValue: "選択肢",
          name: "test",
        },
        {
          title: "会議室B",
          supportText: "25階West",
          subLabel: "利用中",
          value: "選択肢2",
          modelValue: "選択肢",
          name: "test",
        },
        {
          title: "会議室C",
          supportText: "27階East",
          value: "選択肢3",
          modelValue: "選択肢",
          name: "test",
        },
        {
          title: "会議室D",
          supportText: "28階North",
          subLabel: "利用中",
          value: "選択肢4",
          modelValue: "選択肢",
          name: "test",
        },
        {
          title: "会議室E",
          supportText: "28階East",
          subLabel: "利用中",
          value: "選択肢5",
          modelValue: "選択肢",
          name: "test",
        },
        {
          title: "会議室F",
          supportText: "29階East",
          value: "選択肢6",
          modelValue: "選択肢",
          name: "test",
        },
      ];
      return { checked, list };
    },
    template: `
      <div>
      <p>チェックされたもの：{{ checked }}</p>
        <ResourceListRadioButton
          v-for="item in list"
          v-model="checked"
          :name="item.name"
          :value="item.value"
          :title="item.title"
          :label="item.label"
          :subLabel="item.subLabel"
          :supportText="item.supportText"
        />
      </div>
    `,
  }),
};
