import type { Meta, StoryObj } from "@storybook/vue3";
import Layout from "../components/Layout.vue";

const meta = {
  title: "レイアウト",
  component: Layout,
  tags: ["autodocs"],
  argTypes: {},
  args: {},
} satisfies Meta<typeof Layout>;
export default meta;
type Story = StoryObj<typeof meta>;

/**
 * colSpan-というclass名でレイアウトを制御できます。
 */
export const base: Story = {
  render: () => ({
    components: { Layout },
    template: `
    <Layout>
      <div class="layoutBlock colSpan-3">4分の1</div>
      <div class="layoutBlock colSpan-6">4分の2</div>
      <div class="layoutBlock colSpan-3">4分の1</div>

      <div class="layoutBlock colSpan-3">4分の1</div>
      <div class="layoutBlock colSpan-3">4分の1</div>
      <div class="layoutBlock colSpan-3">4分の1</div>
      <div class="layoutBlock colSpan-3">4分の1</div>

      <div class="layoutBlock colSpan-9">4分の3</div>
      <div class="layoutBlock colSpan-3">4分の1</div>

      <div class="layoutBlock colSpan-9">4分の3</div>

      <div class="layoutBlock colSpan-4">3分の1</div>
      <div class="layoutBlock colSpan-4">3分の1</div>
      <div class="layoutBlock colSpan-4">3分の1</div>
    </Layout>
    <p>真ん中半分だけ使う</p>
    <Layout>
      <div class="layoutBlock colStart-4 colEnd-10">4分の2</div>
    </Layout>
    `,
  }),
};
