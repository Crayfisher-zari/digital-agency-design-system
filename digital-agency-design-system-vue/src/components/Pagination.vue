<script lang="ts" setup>
import { withDefaults } from "vue";
type Props = {
  type: "simple" | "basic";
  current: number;
  max: number;
  onClickNumber: (n: number) => void;
  onClickNext: () => void;
  onClickPrevious: () => void;
  // onClickFirst: () => void;
  // onClickEnd: () => void;
};
withDefaults(defineProps<Props>(), {
  type: "basic",
});

</script>
<template>
  <div class="pagination" :class="type === 'simple' ? 'simple' : null">
    <button class="fistPage">
      <picture>
        <source
          srcset="@/assets/images/icon_firstPage_dark.svg"
          media="(prefers-color-scheme: dark)"
        />
        <source srcset="@/assets/images/icon_firstPage.svg" />
        <img
          src="@/assets/images/icon_firstPage.svg"
          alt="最初へ戻る"
          width="24"
          height="24"
        />
      </picture>
    </button>
    <button class="previous" @click="onClickPrevious">
      <picture>
        <source
          srcset="@/assets/images/icon_arrow_left_dark.svg"
          media="(prefers-color-scheme: dark)"
        />
        <source srcset="@/assets/images/icon_arrow_left.svg" />
        <img
          src="@/assets/images/icon_arrow_left.svg"
          alt="1つ前に戻る"
          width="24"
          height="24"
        />
      </picture>
    </button>
    <div>...</div>
    <button class="pageNumber">{{ current - 3 }}</button>
    <button class="pageNumber">{{ current - 2 }}</button>
    <button class="pageNumber">{{ current - 1 }}</button>
    <p class="current">{{ current }}/{{ max }}</p>
    <button class="pageNumber" v-show="current + 1 <= max">{{ current + 1 }}</button>
    <button class="pageNumber" v-show="current + 2 <= max">{{ current + 2 }}</button>
    <button class="pageNumber" v-show="current + 3 <= max">{{ current + 3 }}</button>
    <div>...</div>
    <button class="next" @click="onClickNext">
      <picture>
        <source
          srcset="@/assets/images/icon_arrow_right_dark.svg"
          media="(prefers-color-scheme: dark)"
        />
        <source srcset="@/assets/images/icon_arrow_right.svg" />
        <img
          src="@/assets/images/icon_arrow_right.svg"
          alt="1つ次に進む"
          width="24"
          height="24"
        />
      </picture>
    </button>
    <button class="endPage">
      <picture>
        <source
          srcset="@/assets/images/icon_endPage_dark.svg"
          media="(prefers-color-scheme: dark)"
        />
        <source srcset="@/assets/images/icon_endPage.svg" />
        <img
          src="@/assets/images/icon_endPage.svg"
          alt="最後へ進む"
          width="24"
          height="24"
        />
      </picture>
    </button>
  </div>
</template>
<style lang="scss" scoped>
.pagination {
  display: grid;
  grid-template-columns: repeat(13, auto);
  grid-auto-flow: column;
  align-items: center;
  justify-content: center;
  column-gap: 12px;
  &.simple {
    .pageNumber {
      display: none;
    }
  }
}
button {
  display: block;
  width: 48px;
  height: 48px;
  border-radius: 50%;
  cursor: pointer;
  border: 1px solid var(--color-border-divider);
  background-color: var(--color-background-primary);
  text-align: center;
  color: var(--color-button-normal);
  letter-spacing: 0.04em;
}
.current {
  font-size: 0.75rem;
  letter-spacing: 0.04em;
}
</style>
