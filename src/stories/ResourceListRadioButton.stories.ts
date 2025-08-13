import type { StoryObj } from "@storybook/vue3";
import ResourceListRadioButton from "../components/ResourceListRadioButton.vue";
import { computed, ref } from "vue";
import { GenericMeta } from "../types/GenericMeta";
import Icon from "../components/Icon.vue";
import iconSample from "../assets/images/icon_sample.svg";

const meta = {
  title: "リソースリスト（ラジオボタン）",
  component: ResourceListRadioButton,
  tags: ["autodocs"],
  argTypes: {
    designStyle: {
      control: "select",
      options: ["list", "form"],
    },
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
    designStyle: "list",
    title: "会議室A",
    supportText: "25階North",
    subLabel: "利用中",
  },
} satisfies GenericMeta<typeof ResourceListRadioButton<string>>;
export default meta;
type Story = StoryObj<typeof meta>;

/**
 * リソースリスト（ラジオボタン）<br>
 * リストスタイルのリソースリストにラジオボタン機能を持つものです。
 */
export const Base: Story = {
  args: {
    designStyle: "list",
    label: "ラベル",
    title: "リストタイトル",
    supportText: "サポートテキスト",
    subLabel: "サブラベル",
    value: "選択肢",
    modelValue: "選択肢",
    name: "test",
  },
  render: (args) => ({
    components: { ResourceListRadioButton, Icon },
    setup: () => {
      const checked = ref([]);
      const props = computed(() => args);
      return { checked, props: props.value, iconSample };
    },
    template: `
      <div>
        <ResourceListRadioButton
          v-model="checked"
          :designStyle="props.designStyle"
          :name="props.name"
          :value="props.value"
          :title="props.title"
          :label="props.label"
          :subLabel="props.subLabel"
          :supportText="props.supportText"
          :isDisabled="props.isDisabled"
        >
           <template #frontIcon>
            <Icon :iconSrc="iconSample" :width="24" :height="24" />
          </template>
          <template #endIcon>
            <Icon :iconSrc="iconSample" :width="24" :height="24" />
          </template>
        </ResourceListRadioButton>
      </div>
    `,
  }),
};

/**
 * リソースリスト（ラジオボタン）<br>
 * フォームスタイルのリソースリストにラジオボタン機能を持つものです。
 */
export const Form: Story = {
  args: {
    designStyle: "form",
    label: "ラベル",
    title: "リストタイトル",
    supportText: "サポートテキスト",
    subLabel: "サブラベル",
    value: "選択肢",
    modelValue: "選択肢",
    name: "test",
  },
  render: (args) => ({
    components: { ResourceListRadioButton, Icon },
    setup: () => {
      const checked = ref([]);
      const props = computed(() => args);
      return { checked, props: props.value, iconSample };
    },
    template: `
      <div>
        <ResourceListRadioButton
          v-model="checked"
          :designStyle="props.designStyle"
          :name="props.name"
          :value="props.value"
          :title="props.title"
          :label="props.label"
          :subLabel="props.subLabel"
          :supportText="props.supportText"
          :isDisabled="props.isDisabled"
        >
           <template #frontIcon>
            <Icon :iconSrc="iconSample" :width="24" :height="24" />
          </template>
          <template #endIcon>
            <Icon :iconSrc="iconSample" :width="24" :height="24" />
          </template>
        </ResourceListRadioButton>
      </div>
    `,
  }),
};

/**
 * リソースリスト（ラジオボタン）<br>
 * リストスタイルの単品の作例です。
 */
export const Example: Story = {
  args: {
    designStyle: "list",
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
          :designStyle="props.designStyle"
          :name="props.name"
          :value="props.value"
          :title="props.title"
          :label="props.label"
          :subLabel="props.subLabel"
          :supportText="props.supportText"
          :isDisabled="props.isDisabled"
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
    designStyle: "list",
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
          designStyle="list"
          :name="item.name"
          :value="item.value"
          :title="item.title"
          :label="item.label"
          :subLabel="item.subLabel"
          :supportText="item.supportText"
          :isDisabled="item.isDisabled"
        />
      </div>
    `,
  }),
};
