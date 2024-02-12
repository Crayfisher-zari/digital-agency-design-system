<script lang="ts" setup>
import iconFirstPage from "@/assets/images/icon_firstPage.svg";
import iconEndPage from "@/assets/images/icon_endPage.svg";
import iconArrowLeft from "@/assets/images/icon_arrow_left.svg";
import iconArrowRight from "@/assets/images/icon_arrow_right.svg";
import Icon from "./Icon.vue";
type Props = {
  /** 見た目のタイプ */
  type?: "simple" | "basic";
  /** 現在のページ */
  current: number;
  /** 最小ページ */
  min: number;
  /** 最大ページ */
  max: number;
  /** ページ番号をクリックしたときの処理 */
  onClickNumber: (n: number) => void;
  /** 次のページをクリックしたときの処理 */
  onClickNext: () => void;
  /** 前のページをクリックしたときの処理 */
  onClickPrevious: () => void;
  /** 一番最初へのページをクリックしたときの処理 */
  onClickFirst: () => void;
  /** 一番最後へのページをクリックしたときの処理 */
  onClickEnd: () => void;
};
withDefaults(defineProps<Props>(), {
  type: "basic",
});
</script>
<template>
  <div :class="type">
    <div class="pagination">
      <button class="fistPage" @click="onClickFirst">
        <Icon
          :iconSrc="iconFirstPage"
          :width="24"
          :height="24"
          color="var(--color-icon-active)"
          :ariaHidden="false"
          ariaLabel="最初へ戻る"
          role="img"
          class="iconBack"
        />
      </button>
      <button class="previous" @click="onClickPrevious">
        <Icon
          :iconSrc="iconArrowLeft"
          :width="24"
          :height="24"
          color="var(--color-icon-active)"
          :ariaHidden="false"
          ariaLabel="1つ前に戻る"
          role="img"
          class="iconBack"
        />
      </button>
      <div v-if="current - 4 >= min" class="dot dotPrevious">...</div>
      <button
        v-if="current - 3 >= min"
        class="pageNumber"
        style="grid-column: 4/5"
        @click="onClickNumber(current - 3)"
      >
        {{ current - 3 }}
      </button>
      <button
        v-if="current - 2 >= min"
        class="pageNumber"
        style="grid-column: 5/6"
        @click="onClickNumber(current - 2)"
      >
        {{ current - 2 }}
      </button>
      <button
        v-if="current - 1 >= min"
        class="pageNumber"
        style="grid-column: 6/7"
        @click="onClickNumber(current - 1)"
      >
        {{ current - 1 }}
      </button>
      <p class="current">{{ current }}/{{ max }}</p>
      <button
        v-if="current + 1 <= max"
        class="pageNumber"
        style="grid-column: 8/9"
        @click="onClickNumber(current + 1)"
      >
        {{ current + 1 }}
      </button>
      <button
        v-if="current + 2 <= max"
        class="pageNumber"
        style="grid-column: 9/10"
        @click="onClickNumber(current + 2)"
      >
        {{ current + 2 }}
      </button>
      <button
        v-if="current + 3 <= max"
        class="pageNumber"
        style="grid-column: 10/11"
        @click="onClickNumber(current + 3)"
      >
        {{ current + 3 }}
      </button>
      <div v-if="current + 4 <= max" class="dot dotNext">...</div>
      <button class="next" @click="onClickNext">
        <Icon
          :iconSrc="iconArrowRight"
          :width="24"
          :height="24"
          color="var(--color-icon-active)"
          :ariaHidden="false"
          ariaLabel="1つ次に進む"
          role="img"
          class="iconNext"
        />
      </button>
      <button class="endPage" @click="onClickEnd">
        <Icon
          :iconSrc="iconEndPage"
          :width="24"
          :height="24"
          color="var(--color-icon-active)"
          :ariaHidden="false"
          ariaLabel="最後へ進む"
          role="img"
          class="iconNext"
        />
      </button>
    </div>
  </div>
</template>
<style lang="scss" scoped>
@use "@/assets/style/utils/utils.scss" as *;

.pagination {
  display: grid;
  grid-template-columns: 48px 48px 24px 48px 48px 48px 48px 48px 48px 48px 24px 48px 48px;
  grid-auto-flow: column;
  column-gap: 12px;
  align-items: center;
  justify-content: center;
}

button {
  display: block;
  justify-self: center;
  width: 48px;
  height: 48px;
  color: var(--color-button-normal);
  text-align: center;
  letter-spacing: 0.04em;
  cursor: pointer;
  background-color: var(--color-background-primary);
  border: 1px solid var(--color-border-divider);
  border-radius: 50%;
}

.iconBack {
  position: relative;
  top: 1px;
  left: -1px;
}

.iconNext {
  position: relative;
  top: 1px;
  left: 1px;
}

.current {
  grid-column: 7/8;
  font-size: pxToRem(12);
  text-align: center;
  letter-spacing: 0.04em;
}

.dot {
  color: transparent;
  text-align: center;
  background-image: radial-gradient(
      circle at 2px 2px,
      var(--color-text-body) 0,
      var(--color-text-body) 1px,
      transparent 1px
    ),
    radial-gradient(
      circle at 8px 2px,
      var(--color-text-body) 0,
      var(--color-text-body) 1px,
      transparent 1px
    ),
    radial-gradient(
      circle at 14px 2px,
      var(--color-text-body) 0,
      var(--color-text-body) 1px,
      transparent 1px
    );
  background-repeat: no-repeat;
  background-position: center;
  background-size: 15px 2px;
}

.fistPage {
  grid-column: 1/2;
}

.previous {
  grid-column: 2/3;
}

.dotPrevious {
  grid-column: 3/4;
}

.dotNext {
  grid-column: 11/12;
}

.next {
  grid-column: 12/13;
}

.endPage {
  grid-column: 13/14;
}

// モバイル・シンプル指定時のスタイル
@mixin simpleStyle {
  .pagination {
    grid-template-columns: 56px 56px 48px 56px 56px;
    column-gap: 16px;
  }

  .pageNumber {
    display: none;
  }

  .current {
    grid-column: 3/4;
  }

  .dotPrevious {
    display: none;
  }

  .dotNext {
    display: none;
  }

  .next {
    grid-column: 4/5;
  }

  .endPage {
    grid-column: 5/6;
  }
}

@include mediaQueryDown {
  @include simpleStyle;
}

.simple {
  @include simpleStyle;
}
</style>
