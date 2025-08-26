import type { Meta, StoryObj } from "@storybook/vue3";
import Calendar from "../components/Calendar.vue";
import { ref } from "vue";

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
    selectedYear: {
      control: { type: "number" },
      description: "選択された年（デフォルト: 現在年）",
    },
    selectedMonth: {
      control: { type: "number" },
    },
    selectedDate: {
      control: { type: "number" },
      description: "選択された日（デフォルト: 現在日）",
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
  args: {
    selectedYear: 2025,
    selectedMonth: 7,
    selectedDate: 1,
    startYear: 2025,
    yearCount: 2,
  },
  render: (args) => ({
    components: { Calendar },
    setup() {
      const selectedYear = ref(args.selectedYear);
      const selectedMonth = ref(args.selectedMonth);
      const selectedDate = ref(args.selectedDate);
      return { selectedYear, selectedMonth, selectedDate, ...args };
    },
    template: `
      <div style="padding: 20px;  display: inline-block;">
        <Calendar v-model:selectedYear="selectedYear" v-model:selectedMonth="selectedMonth" v-model:selectedDate="selectedDate" :startYear="startYear" :yearCount="yearCount" />
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
