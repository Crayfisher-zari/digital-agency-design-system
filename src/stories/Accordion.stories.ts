import type { Meta, StoryObj } from "@storybook/vue3";
import Accordion from "../components/Accordion.vue";

const meta = {
  title: "アコーディオン",
  component: Accordion,
  tags: ["autodocs"],
  argTypes: {
    summary: {
      control: "text",
    },
    details: {
      control: "text",
    },
    hasSummaryIcon: {
      control: "boolean",
    },
    hasDetailIcon: {
      control: "boolean",
    },
  },
  args: {
    summary: "アコーディオンタイトル",
    details: "中身",
  },
} satisfies Meta<typeof Accordion>;
export default meta;
type Story = StoryObj<typeof meta>;

export const base: Story = {
  args: {
    summary: "アコーディオンタイトル",
    details: "中身",
  },
};

/**
 * `<template #summary>`でサマリーにアイコンを組み込めます
 */
export const withSummaryIcon: Story = {
  args: {
    summary: "アコーディオンタイトル（タイトルにアイコンあり）",
    details: "中身",
    hasSummaryIcon: true,
  },
  render: (args) => ({
    components: { Accordion },
    setup: () => {
      return { ...args };
    },
    template: `
    <Accordion :summary="summary" :details="details" :hasSummaryIcon="hasSummaryIcon">
      <template #summary>🤔</template>
    </Accordion>
    `,
  }),
};

/**
 * `<template #detail>`で詳細にもアイコンを組み込めます
 */
export const withDetailIcon: Story = {
  args: {
    summary: "アコーディオンタイトル（中身にもアイコンあり）",
    details: "中身",
    hasSummaryIcon: true,
    hasDetailIcon: true,
  },
  render: (args) => ({
    components: { Accordion },
    setup: () => {
      return { ...args };
    },
    template: `
    <Accordion :summary="summary" :details="details" :hasSummaryIcon="hasSummaryIcon" :hasDetailIcon="hasDetailIcon">
      <template #summary>🤔</template>
      <template #detail>😀</template>
    </Accordion>
    `,
  }),
};
