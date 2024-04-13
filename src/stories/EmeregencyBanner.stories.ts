import type { Meta, StoryObj } from "@storybook/vue3";
import EmergencyBanner from "../components/EmergencyBanner.vue";

const meta = {
  title: "緊急時バナー",
  component: EmergencyBanner,
  tags: ["autodocs"],
  argTypes: {
    title: {
      control: "text",
    },
    date: {
      control: "text",
    },
    description: {
      control: "text",
    },
  },
  args: {
    title: "〇〇地区に避難準備情報が発令されました",
    date: "2023年1月1日　06:00更新",
    description:
      "1時23分に○○地区に対して避難準備情報が発令されました。お年寄りの方等避難に時間がかかる方は、直ちに指定避難所へ避難してください。",
  },
} satisfies Meta<typeof EmergencyBanner>;
export default meta;
type Story = StoryObj<typeof meta>;

export const Base: Story = {
  args: {
    title: "〇〇地区に避難準備情報が発令されました",
    date: "2023年1月1日　06:00更新",
    description:
      "1時23分に○○地区に対して避難準備情報が発令されました。お年寄りの方等避難に時間がかかる方は、直ちに指定避難所へ避難してください。",
  },
};

export const WithButton: Story = {
  args: {
    title: "〇〇地区に避難準備情報が発令されました",
    date: "2023年1月1日　06:00更新",
    description:
      "1時23分に○○地区に対して避難準備情報が発令されました。お年寄りの方等避難に時間がかかる方は、直ちに指定避難所へ避難してください。",
      url:"#!",
      buttonLabel:"避難所の地図を確認"
  },
};