import type { Meta, StoryObj } from "@storybook/vue3";
import HeaderContainer from "../components/HeaderContainer.vue";

const meta = {
  title: "ヘッダーコンテナ",
  component: HeaderContainer,
  tags: ["autodocs"],
  argTypes: {
    type: {
      control: "radio",
      options: ["wide-full", "wide-slim", "medium", "compact"],
    },
  },
  args: {
    type: "wide-full",
  },
} satisfies Meta<typeof HeaderContainer>;
export default meta;
type Story = StoryObj<typeof meta>;

export const Base: Story = {
  render: (args) => ({
    components: { HeaderContainer },
    setup: () => {
      return { ...args };
    },
    template: `
    <HeaderContainer :type="type">
      <template #logo>① ロゴ</template>
      <template #item>② ヘッダーコンテナアイテム</template>
      <template #menu>③ グローバルメニュー</template>
      <template #hamburger>④</template>
    </HeaderContainer>
    `,
  }),
};

export const Slim: Story = {
  args: {
    type: "wide-slim",
  },
  render: (args) => ({
    components: { HeaderContainer },
    setup: () => {
      return { ...args };
    },
    template: `
    <HeaderContainer :type="type">
      <template #logo>①ロゴ</template>
      <template #item>②ヘッダーコンテナアイテム</template>
      <template #menu>③グローバルメニュー</template>
      <template #hamburger>④ハンバーガーメニュー</template>
    </HeaderContainer>
    `,
  }),
};
