import type { Meta, StoryObj } from "@storybook/vue3";
import ResourceListLink from "../components/ResourceListLink.vue";
import { computed } from "vue";

const meta = {
  title: "リソースリスト（リンク）",
  component: ResourceListLink,
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
    title: "クライアントコンピューター001",
    supportText: "Windows 11",
  },
} satisfies Meta<typeof ResourceListLink>;
export default meta;
type Story = StoryObj<typeof meta>;

/**
 * リソースリスト（リンク）<br>
 * リソースリストにリンク機能を持つです。
 */
export const Base: Story = {
  args: {
    title: "クライアントコンピューター001",
    supportText: "Windows 11",
    to: "#",
    linkTag: "a",
  },
  render: (args) => ({
    components: { ResourceListLink },
    setup() {
      const props = computed(() => args);
      return { props: props.value };
    },
    template: `
      <ResourceListLink :title="props.title" :supportText="props.supportText" :to="props.to" :linkTag="props.linkTag">
        <template #frontIcon>
        <svg width="18" height="17" viewBox="0 0 18 17" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M18 12.4999V0.899902H0V12.4999H7.5V15.4999H4.5V16.9999H13.5V15.4999H10.5V12.4999H18ZM1.5 2.3999H16.5V10.9999H1.5V2.3999Z" fill="#1A1A1C"/>
        </svg>        
        </template>
      </ResourceListLink>
    `,
  }),
};

/**
 * リソースリスト（リンク）<br>
 * リスト形式の作例
 */
export const List: Story = {
  args: {
    title: "クライアントコンピューター001",
    supportText: "Windows 11",
    to: "#",
    linkTag: "a",
  },
  render: () => ({
    components: { ResourceListLink },
    setup() {
      const list = [
        {
          title: "クライアントコンピューター001",
          supportText: "Windows 11",
          to: "#",
          linkTag: "a",
        },
        {
          title: "クライアントコンピューター002",
          supportText: "Windows 11",
          to: "#",
          linkTag: "a",
        },
        {
          title: "ゲストユーザー用クライアントコンピューター_001",
          supportText: "macOS",
          to: "#",
          linkTag: "a",
        },
        {
          title: "ゲスト端末",
          supportText: "不明",
          to: "#",
          linkTag: "a",
        },
      ];
      return { list };
    },
    template: `
      <ResourceListLink v-for="item in list" :title="item.title" :supportText="item.supportText" :to="item.to" :linkTag="item.linkTag">
        <template #frontIcon>
          <svg width="18" height="17" viewBox="0 0 18 17" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M18 12.4999V0.899902H0V12.4999H7.5V15.4999H4.5V16.9999H13.5V15.4999H10.5V12.4999H18ZM1.5 2.3999H16.5V10.9999H1.5V2.3999Z" fill="#1A1A1C"/>
          </svg>        
        </template>
      </ResourceListLink>
    `,
  }),
};
