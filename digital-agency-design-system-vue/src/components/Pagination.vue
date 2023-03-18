<script lang="ts" setup>
import { withDefaults } from "vue";
type Props = {
  type?: "simple" | "basic";
  current: number;
  min: number;
  max: number;
  onClickNumber: (n: number) => void;
  onClickNext: () => void;
  onClickPrevious: () => void;
  onClickFirst: () => void;
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
      <div class="dot dotPrevious" v-if="current - 4 >= min">...</div>
      <button
        class="pageNumber"
        v-if="current - 3 >= min"
        style="grid-column: 4/5"
        @click="onClickNumber(current - 3)"
      >
        {{ current - 3 }}
      </button>
      <button
        class="pageNumber"
        v-if="current - 2 >= min"
        style="grid-column: 5/6"
        @click="onClickNumber(current - 2)"
      >
        {{ current - 2 }}
      </button>
      <button
        class="pageNumber"
        v-if="current - 1 >= min"
        style="grid-column: 6/7"
        @click="onClickNumber(current - 1)"
      >
        {{ current - 1 }}
      </button>
      <p class="current">{{ current }}/{{ max }}</p>
      <button
        class="pageNumber"
        v-if="current + 1 <= max"
        style="grid-column: 8/9"
        @click="onClickNumber(current + 1)"
      >
        {{ current + 1 }}
      </button>
      <button
        class="pageNumber"
        v-if="current + 2 <= max"
        style="grid-column: 9/10"
        @click="onClickNumber(current + 2)"
      >
        {{ current + 2 }}
      </button>
      <button
        class="pageNumber"
        v-if="current + 3 <= max"
        style="grid-column: 10/11"
        @click="onClickNumber(current + 3)"
      >
        {{ current + 3 }}
      </button>
      <div class="dot dotNext" v-if="current + 4 <= max">...</div>
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
      <button class="endPage" @click="onClickEnd">
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
  </div>
</template>
<style lang="scss" scoped>
@use "@/assets/style/utils/utils.scss" as *;
.pagination {
  display: grid;
  grid-template-columns: 48px 48px 24px 48px 48px 48px 48px 48px 48px 48px 24px 48px 48px;
  grid-auto-flow: column;
  align-items: center;
  justify-content: center;
  column-gap: 12px;
}
button {
  display: block;
  justify-self: center;
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
  grid-column: 7/8;
  text-align: center;
}

.dot {
  text-align: center;
  color: transparent;
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
  background-size: 15px 2px;
  background-position: center;
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
  .fistPage {
  }
  .previous {
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

@include mediaQueryDown(tablet) {
  @include simpleStyle();
}
.simple {
  @include simpleStyle();
}
</style>
