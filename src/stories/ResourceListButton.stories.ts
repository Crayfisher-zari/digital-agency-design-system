import type { Meta, StoryObj } from "@storybook/vue3";
import ResourceListButton from "../components/ResourceListButton.vue";
import { computed, ref } from "vue";
import avatar from "../assets/images/icon_avatar.svg";
import icon3Point from "../assets/images/icon_3point.svg";
import Icon from "../components/Icon.vue";
import iconSample from "../assets/images/icon_sample.svg";

const meta = {
  title: "リソースリスト（ボタン）",
  component: ResourceListButton,
  tags: ["autodocs"],
  argTypes: {
    designStyle: {
      control: "select",
      options: ["list", "form"],
    },
    interactionType: {
      control: "select",
      options: ["container", "text"],
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
    label: "ラベル",
    title: "リストタイトル",
    supportText: "サポートテキスト",
    subLabel: "サブラベル",
  },
} satisfies Meta<typeof ResourceListButton>;
export default meta;
type Story = StoryObj<typeof meta>;

/**
 * リソースリスト単体（ボタン）<br>
 * リソースリストにクリックの処理があるものです
 */
export const Base: Story = {
  args: {
    label: "ラベル",
    title: "リストタイトル",
    supportText: "サポートテキスト",
    subLabel: "サブラベル",
    designStyle: "list",
    interactionType: "container",
    onClick: () => {},
  },
  render: (args) => ({
    components: { ResourceListButton, Icon },
    setup() {
      const props = computed(() => args);
      return { props: props.value, iconSample };
    },
    template: `
      <ResourceListButton 
        :label="props.label"
        :title="props.title"
        :supportText="props.supportText"
        :to="props.to"
        :linkTag="props.linkTag"
        :subLabel="props.subLabel"
        :designStyle="props.designStyle"
        :interactionType="props.interactionType"
      >
        <template #frontIcon>
          <Icon :iconSrc="iconSample" :width="24" :height="24" />
        </template>
        <template #endIcon>
          <Icon :iconSrc="iconSample" :width="24" :height="24" />
        </template>
      </ResourceListButton>
    `,
  }),
};

/**
 * リソースリスト（ボタン）<br>
 * リスト形式の作例
 */
export const List: Story = {
  args: {
    label: "ラベル",
    title: "リストタイトル",
    supportText: "サポートテキスト",
    subLabel: "サブラベル",
    onClick: () => {},
  },
  render: () => ({
    components: { ResourceListButton },
    setup: () => {
      const checked = ref([]);
      const resourceList = [
        {
          title: "デジ田 太郎",
          supportText: "taro-dejita@example.com",
          subLabel: "2023/12/14 16:23:23",
        },
        {
          title: "デジ濱 実",
          supportText: "minoru.dejihama@example.com",
          subLabel: "2023/12/15 08:23:57",
        },
        {
          title: "デジ山 ひかり",
          supportText: "hikari.dejiyama@example.com",
          subLabel: "2023/12/21 11:23:12",
        },
        {
          title: "出而足 長一郎",
          supportText: "ChoichiroDejitaru@example.com",
          subLabel: "2023/12/09 18:23:12",
        },
        {
          title: "電磁 多留子",
          supportText: "taruko.dejitaru@example.com",
          subLabel: "2023/12/28 06:23:12",
        },
      ];
      const iconSrc = avatar;
      console.log(avatar);
      return { checked, resourceList, iconSrc, icon3Point };
    },
    template: `
      <div>
        <ResourceListButton
          v-for="item in resourceList"
          :title="item.title"
          :subLabel="item.subLabel"
          :supportText="item.supportText"
          :onClick="()=>{}"
        >
          <template #frontIcon>
            <img :src="iconSrc" :width="40" :height="40" />
          </template>
          <template #endIcon>
            <button class="clearButton">
              <img :src="icon3Point" :width="24" :height="24" />
            </button>
          </template>
        </ResourceListButton>
      </div>
    `,
  }),
};
