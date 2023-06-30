<script setup lang="ts"></script>
<template>
  <div>
    <details>
      <summary>
        <span class="summaryInner"
          >ダミーテキストはどのような場合に使用されますか。</span
        >
      </summary>
      <div>
        これはダミーテキストです。ダミーテキストは、デザインやレイアウトの作成時に使用される仮の文章です。ダミーテキストを使用すると、デザインの全体像を評価したり、テキストの配置や長さを確認したりすることができます。ダミーテキストは実際の文章ではないので、内容には意味がありません。
      </div>
    </details>
  </div>
</template>
<style lang="scss" scoped>
@use "@/assets/style/utils/utils.scss" as *;

details {
}
summary {
  display: flex;
  align-items: center;
  min-height: 68px;
  padding: 19px 0;
  font-size: pxToRem(20);
  line-height: 1.5;
  letter-spacing: 0.04em;
  transition: background-color var(--base-duration) var(--easing-out-expo);
  &:hover {
    background-color: var(--color-background-secondary);
  }
  &:-webkit-details-marker {
    display: none;
  }
}

.summaryInner{
  display: flex;
  align-items: center;
}
</style>
