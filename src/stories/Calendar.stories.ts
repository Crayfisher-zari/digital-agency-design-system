import type { Meta, StoryObj } from "@storybook/vue3";
import Calendar from "../components/Calendar.vue";

const meta = {
  title: "カレンダー",
  component: Calendar,
  tags: ["autodocs"],
  argTypes: {},
  args: {},
} satisfies Meta<typeof Calendar>;

export default meta;
type Story = StoryObj<typeof meta>;

/**
 * デフォルト
 */
export const Default: Story = {
  args: {},
};

/**
 * カレンダーパネル
 * 日付選択に使用するカレンダーコンポーネントです。
 * 年月の切り替え、今日の日付へのジャンプ機能を含みます。
 */
export const CalendarPanel: Story = {
  args: {},
  render: () => ({
    components: { Calendar },
    template: `
      <div style="padding: 20px; background: #f5f5f5; display: inline-block;">
        <Calendar />
      </div>
    `,
  }),
};
