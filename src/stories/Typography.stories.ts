import type { StoryObj } from "@storybook/vue3";
import "@/assets/style/typography/typography.scss";
const meta = {
  title: "タイポグラフィ",
  tags: ["autodocs"],
};
export default meta;
type Story = StoryObj<typeof meta>;

/**
 * ユーティリティクラスを用いたタイポグラフィ
 */
export const Base: Story = {
  render: () => ({
    template: `
    <h1 class="story-book-preview-mb-medium">Display (Dsp)</h1>
    <div class="story-book-preview-row-layout story-book-preview-mb-large">
      <p class="Dsp-64N-4">Dsp-64N-4</p>
      <p class="Dsp-57N-4">Dsp-57N-4</p>
      <p class="Dsp-48N-4">Dsp-48N-4</p>
    </div>

    <h1 class="story-book-preview-mb-medium">Standard (Std) </h1>
    <h2 class="Std-28B-5 story-book-preview-mb">Bold</h2>
    <div class="story-book-preview-row-layout story-book-preview-mb-large">
      <p class="Std-45B-4">Std-45B-4</p>
      <p class="Std-36B-4">Std-36B-4</p>
      <p class="Std-28B-5">Std-28B-5</p>
      <p class="Std-24B-5">Std-24B-5</p>
      <p class="Std-22B-5">Std-22B-5</p>
      <p class="Std-20B-5">Std-20B-5</p>
      <p class="Std-18B-6">Std-18B-6</p>
      <p class="Std-17B-7">Std-17B-7</p>
      <p class="Std-16B-7">Std-16B-7</p>
    </div>

    <h2 class="Std-28B-5 story-book-preview-mb">Medium</h2>
    <div class="story-book-preview-row-layout story-book-preview-mb-large">
      <p class="Std-32M-5">Std-32M-5</p>
      <p class="Std-28M-5">Std-28M-5</p>
      <p class="Std-24M-5">Std-24M-5</p>
      <p class="Std-20M-5">Std-20M-5</p>
      <p class="Std-17M-7">Std-17M-7</p>
      <p class="Std-16M-7">Std-16M-7</p>
    </div>

    <h2 class="Std-28B-5 story-book-preview-mb">Normal</h2>
    <div class="story-book-preview-row-layout story-book-preview-mb-large">
      <p class="Std-45N-4">Std-45N-4</p>
      <p class="Std-36N-4">Std-36N-4</p>
      <p class="Std-32N-5">Std-32N-5</p>
      <p class="Std-28N-5">Std-28N-5</p>
      <p class="Std-26N-5">Std-26N-5</p>
      <p class="Std-24N-5">Std-24N-5</p>
      <p class="Std-22N-5">Std-22N-5</p>
      <p class="Std-20N-5">Std-20N-5</p>
      <p class="Std-18N-6">Std-18N-6</p>
      <p class="Std-17N-7">Std-17N-7</p>
      <p class="Std-16N-7">Std-16N-7</p>
    </div>

    <h1 class="story-book-preview-mb-medium">Dense (Dns) </h1>
    <div class="story-book-preview-row-layout story-book-preview-mb-large">
      <p class="Dns-17B-3">Dns-17B-3</p>
      <p class="Dns-17N-3">Dns-17N-3</p>
      <p class="Dns-17B-2">Dns-17B-2</p>
      <p class="Dns-17N-2">Dns-17N-2</p>
      <p class="Dns-16B-3">Dns-16B-3</p>
      <p class="Dns-16N-3">Dns-16N-3</p>
      <p class="Dns-16B-2">Dns-16B-2</p>
      <p class="Dns-16N-2">Dns-16N-2</p>
      <p class="Dns-14B-3">Dns-14B-3</p>
      <p class="Dns-14N-3">Dns-14N-3</p>
      <p class="Dns-14B-2">Dns-14B-2</p>
      <p class="Dns-14N-2">Dns-14N-2</p>
    </div>

    <h1 class="story-book-preview-mb-medium">Oneline (Oln) </h1>
    <div class="story-book-preview-row-layout story-book-preview-mb-large">
      <p class="Oln-17B-1">Oln-17B-1</p>
      <p class="Oln-17M-1">Oln-17M-1</p>
      <p class="Oln-17N-1">Oln-17N-1</p>
      <p class="Oln-16B-1">Oln-16B-1</p>
      <p class="Oln-16M-1">Oln-16M-1</p>
      <p class="Oln-16N-1">Oln-16N-1</p>
      <p class="Oln-14B-1">Oln-14B-1</p>
      <p class="Oln-14M-1">Oln-14M-1</p>
      <p class="Oln-14N-1">Oln-14N-1</p>
    </div>

    <h1 class="story-book-preview-mb-medium">Mono (Mono) </h1>
    <div class="story-book-preview-row-layout story-book-preview-mb-large">
      <p class="Mono-17B-5">Mono-17B-5</p>
      <p class="Mono-17N-5">Mono-17N-5</p>
      <p class="Mono-16B-5">Mono-16B-5</p>
      <p class="Mono-16N-5">Mono-16N-5</p>
      <p class="Mono-14B-5">Mono-14B-5</p>
      <p class="Mono-14N-5">Mono-14N-5</p>
    </div>
    `,
  }),
};
