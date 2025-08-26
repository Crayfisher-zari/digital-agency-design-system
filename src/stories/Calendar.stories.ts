import type { Meta, StoryObj } from "@storybook/vue3";
import Calendar from "../components/Calendar.vue";

const meta = {
  title: "カレンダー",
  component: Calendar,
  tags: ["autodocs"],
  argTypes: {
    startYear: {
      control: { type: "number" },
      description: "開始年（デフォルト: 現在年）",
    },
    yearCount: {
      control: { type: "number", min: 1, max: 100 },
      description: "生成する年数（デフォルト: 8年）",
    },
  },
  args: {
    startYear: new Date().getFullYear(),
    yearCount: 8,
  },
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

/**
 * カスタム年数範囲
 * 2020年から過去15年分の年セレクターを表示
 */
export const CustomYearRange: Story = {
  args: {
    startYear: 2020,
    yearCount: 1,
  },
};
