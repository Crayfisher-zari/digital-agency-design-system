import type { Meta, StoryObj } from "@storybook/vue3";
import SearchBox from "../components/SearchBox.vue";
import Icon from "../components/Icon.vue";
import iconSample from "../assets/images/icon_sample.svg";

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
        <p>選択された対象：{{ target }}</p>
        <SearchBox :targetLabel="props.targetLabel" :targetList="props.targetList" v-model:target="target" v-model:search="searchText" />
      </div>
      `,
  }),
};

export const WithIcon: Story = {
  args: {
    label: "サイト検索",
    targetLabel: "検索条件",
    targetList: [
      { label: "部分一致", value: "partial" },
      { label: "前方一致", value: "prefix" },
    ],
  },
  render: (args) => ({
    components: { SearchBox, Icon },
    setup: () => {
      const target = ref("partial");
      const searchText = ref("");
      const props = computed(() => args);

      return { props, target, searchText, iconSample };
    },
    template: `
      <div>
        <p>検索文字列：{{ searchText }}</p>
        <p>選択された対象：{{ target }}</p>
        <SearchBox :targetLabel="props.targetLabel" :targetList="props.targetList" v-model:target="target" v-model:search="searchText" >
          <template #icon>
            <div class="icons" style="display: flex; align-items: center; justify-content: flex-end; column-gap: 8px; height: 40px;">
            <Icon :iconSrc="iconSample" :width="40" :height="40" color="#000" />
            <Icon :iconSrc="iconSample" :width="40" :height="40" color="#000" />
            <Icon :iconSrc="iconSample" :width="40" :height="40" color="#000" />
            </div>
          </template>
        </SearchBox>
      </div>
      
      `,
  }),
};
