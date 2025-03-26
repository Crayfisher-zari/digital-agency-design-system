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
      <p class="Dsp-64N-140">Dsp-64N-140</p>
      <p class="Dsp-57N-140">Dsp-57N-140</p>
      <p class="Dsp-48N-140">Dsp-48N-140</p>
    </div>

    <h1 class="story-book-preview-mb-medium">Standard (Std) </h1>
    <h2 class="Std-28B-5 story-book-preview-mb">Bold</h2>
    <div class="story-book-preview-row-layout story-book-preview-mb-large">
      <p class="Std-45B-140">Std-45B-140</p>
      <p class="Std-36B-140">Std-36B-140</p>
      <p class="Std-32B-150">Std-32B-150</p>
      <p class="Std-28B-150">Std-28B-150</p>
      <p class="Std-26B-150">Std-26B-150</p>
      <p class="Std-24B-150">Std-24B-150</p>
      <p class="Std-22B-150">Std-22B-150</p>
      <p class="Std-20B-150">Std-20B-150</p>
      <p class="Std-18B-160">Std-18B-160</p>
      <p class="Std-17B-170">Std-17B-170</p>
      <p class="Std-16B-170">Std-16B-170</p>
      <p class="Std-16B-175">Std-16B-175</p>
    </div>

    <h2 class="Std-28B-5 story-book-preview-mb">Normal</h2>
    <div class="story-book-preview-row-layout story-book-preview-mb-large">
      <p class="Std-45N-140">Std-45N-140</p>
      <p class="Std-36N-140">Std-36N-140</p>
      <p class="Std-32N-150">Std-32N-150</p>
      <p class="Std-28N-150">Std-28N-150</p>
      <p class="Std-26N-150">Std-26N-150</p>
      <p class="Std-24N-150">Std-24N-150</p>
      <p class="Std-22N-150">Std-22N-150</p>
      <p class="Std-20N-150">Std-20N-150</p>
      <p class="Std-18N-160">Std-18N-160</p>
      <p class="Std-17N-170">Std-17N-170</p>
      <p class="Std-16N-170">Std-16N-170</p>
      <p class="Std-16N-175">Std-16N-175</p>
    </div>

    <h1 class="story-book-preview-mb-medium">Dense (Dns) </h1>

    <h2 class="Std-28B-5 story-book-preview-mb">Bold</h2>
    <div class="story-book-preview-row-layout story-book-preview-mb-large">
      <p class="Dns-17B-130">Dns-17B-130</p>
      <p class="Dns-17B-120">Dns-17B-120</p>
      <p class="Dns-16B-130">Dns-16B-130</p>
      <p class="Dns-16B-120">Dns-16B-120</p>
      <p class="Dns-14B-130">Dns-14B-130</p>
      <p class="Dns-14B-120">Dns-14B-120</p>
    </div>

    <h2 class="Std-28B-5 story-book-preview-mb">Normal</h2>
    <div class="story-book-preview-row-layout story-book-preview-mb-large">
      <p class="Dns-17N-130">Dns-17N-130</p>
      <p class="Dns-17N-120">Dns-17N-120</p>
      <p class="Dns-16N-130">Dns-16N-130</p>
      <p class="Dns-16N-120">Dns-16N-120</p>
      <p class="Dns-14N-130">Dns-14N-130</p>
      <p class="Dns-14N-120">Dns-14N-120</p>
    </div>

    <h1 class="story-book-preview-mb-medium">Oneline (Oln) </h1>

    <h2 class="Std-28B-5 story-book-preview-mb">Bold</h2>
    <div class="story-book-preview-row-layout story-book-preview-mb-large">
      <p class="Oln-17B-100">Oln-17B-100</p>
      <p class="Oln-16B-100">Oln-16B-100</p>
      <p class="Oln-14B-100">Oln-14B-100</p>
    </div>

    <h2 class="Std-28B-5 story-book-preview-mb">Noramal</h2>
    <div class="story-book-preview-row-layout story-book-preview-mb-large">
      <p class="Oln-17N-100">Oln-17N-100</p>
      <p class="Oln-16N-100">Oln-16N-100</p>
      <p class="Oln-14N-100">Oln-14N-100</p>
    </div>

    <h1 class="story-book-preview-mb-medium">Mono (Mono) </h1>

    <h2 class="Std-28B-5 story-book-preview-mb">Noramal</h2>
    <div class="story-book-preview-row-layout story-book-preview-mb-large">
      <p class="Mono-17B-150">Mono-17B-150</p>
      <p class="Mono-16B-150">Mono-16B-150</p>
      <p class="Mono-14B-150">Mono-14B-150</p>
    </div>

    <h2 class="Std-28B-5 story-book-preview-mb">Noramal</h2>
    <div class="story-book-preview-row-layout story-book-preview-mb-large">
      <p class="Mono-17N-150">Mono-17N-150</p>
      <p class="Mono-16N-150">Mono-16N-150</p>
      <p class="Mono-14N-150">Mono-14N-150</p>
    </div>
    `,
  }),
};
