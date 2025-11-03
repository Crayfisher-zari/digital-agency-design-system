import type { Meta, StoryObj } from "@storybook/vue3";
import SearchBox from "../components/SearchBox.vue";
import { computed, ref } from "vue";

const meta = {
  title: "検索ボックス",
  component: SearchBox,
  tags: ["autodocs"],
  argTypes: {
    label: { control: "text" },
  },
  args: {
    label: "",
  },
} satisfies Meta<typeof SearchBox>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Base: Story = {
  args: {
    label: "",
    onClickSearch: () => {
      console.log("clicked search");
    },
  },
};

export const WithTarget: Story = {
  args: {
    label: "サイト検索",
    targetLabel: "検索対象",
    targetList: [
      { label: "すべて", value: "all" },
      { label: "画像", value: "image" },
      { label: "ファイル", value: "file" },
      { label: "地図", value: "map" },
      { label: "動画", value: "video" },
    ],
  },
  render: (args) => ({
    components: { SearchBox },
    setup: () => {
      const target = ref("all");
      const searchText = ref("");
      const props = computed(() => args);

      return { props, target, searchText };
    },
    template: `
      <div>
        <p>検索文字列：{{ searchText }}</p>
        <SearchBox :targetLabel="props.targetLabel" :targetList="props.targetList" v-model:target="target" v-model:search="searchText" />
      </div>
      `,
  }),
};
