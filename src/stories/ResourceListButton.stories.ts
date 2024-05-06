import type { Meta, StoryObj } from "@storybook/vue3";
import ResourceListButton from "../components/ResourceListButton.vue";
import { ref } from "vue";
import avatar from "../assets/images/icon_avatar.svg";

const meta = {
  title: "リソースリスト（ボタン）",
  component: ResourceListButton,
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
    onClick: () => {},
  },
};

/**
 * リソースリスト（ボタン）<br>
 * リスト形式の作例
 */
export const List: Story = {
  render: (args) => ({
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
          supportText: "taruko.dejitaru@example.jp",
          subLabel: "2023/12/28 06:23:12",
        },
      ];
      const iconSrc = avatar;
      console.log(avatar);
      return { checked, resourceList, iconSrc, ...args };
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
        </ResourceListButton>
      </div>
    `,
  }),
};
