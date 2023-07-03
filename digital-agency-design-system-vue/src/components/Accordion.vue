<script setup lang="ts">
import { onBeforeUnmount, onMounted, ref } from "vue";

type Props = {
  summary: string;
  details: string;
  hasSummaryIcon?: boolean;
  hasDetailIcon?: boolean;
};

withDefaults(defineProps<Props>(), {
  hasSummaryIcon: false,
  hasDetailIcon: false,
});

// 閉じようとしているか？
const isOpened = ref<boolean | null>(null);
const hasAnimation = ref<boolean>(true);

const accordionElement = ref<HTMLDetailsElement | null>(null);
const contentsElement = ref<HTMLElement | null>(null);
const contentsInnerElement = ref<HTMLElement | null>(null);

const handleClick = (e: Event) => {
  if (
    matchMedia("prefer-reduce-motion").matches ||
    !accordionElement.value ||
    !contentsElement.value ||
    !contentsInnerElement.value
  ) {
    return;
  }
  e.preventDefault();

  const element = accordionElement.value;
  const accordionContents = contentsElement.value;
  const contentsInner = contentsInnerElement.value;

  // 補足：クリック実行時はその直前の状態なので、開く動作のときはisOpenがfalseになる
  const isOpen = element.open;

  if (isOpen) {
    // 閉じるとき
    isOpened.value = false;
    accordionContents.style.height = `0px`;
  } else {
    isOpened.value = true;
    accordionElement.value?.setAttribute("open", "true");
    // 内部の要素の高さを取得
    const height = contentsInner.offsetHeight;
    accordionContents.style.height = `${height}px`;
  }
};

const removeOpenAttribute = () => {
  if (isOpened.value === false) {
    accordionElement.value?.removeAttribute("open");
  }
};

onMounted(() => {
  if (matchMedia("prefer-reduce-motion").matches) {
    // reduce-motionが有効な場合はアニメーションをしない
    hasAnimation.value = false;
  }
  if (!matchMedia("prefer-reduce-motion").matches && contentsElement.value) {
    const accordionContents = contentsElement.value;

    // 初期化のために閉じておく
    accordionContents.style.height = `0px`;

    // 閉じるトランジションが終了したらopen属性を取り除く
    accordionContents.addEventListener("transitionend", removeOpenAttribute);
  }
});
onBeforeUnmount(() => {
  if (!contentsElement.value) {
    return;
  }
  contentsElement.value.removeEventListener(
    "transitionend",
    removeOpenAttribute
  );
});
</script>
<template>
  <div>
    <details
      ref="accordionElement"
      class="accordion"
      :class="[{ isOpened: isOpened }, { hasAnimation: hasAnimation }]"
    >
      <summary class="summary" @click="handleClick">
        <span v-if="hasSummaryIcon" class="icon"
          ><slot name="summary"></slot
        ></span>
        <span class="summaryInner">{{ summary }}</span>
        <img
          class="dropDownIcon"
          src="@/assets/images/icon_arrow_accordion.svg"
          alt=""
          width="24"
          height="14"
        />
      </summary>
      <div ref="contentsElement" class="details">
        <div ref="contentsInnerElement" class="detailsInner">
          <span v-if="hasDetailIcon" class="icon"
            ><slot name="detail"></slot
          ></span>
          {{ details }}
        </div>
      </div>
    </details>
  </div>
</template>
<style lang="scss" scoped>
@use "@/assets/style/utils/utils.scss" as *;

.accordion {
  border-bottom: 1px solid var(--color-border-divider);

  // アニメーションが有効な場合はタイミングを上書き
  &.isOpened {
    .dropDownIcon {
      transform: rotate(180deg);
    }
  }

  &:not(.hasAnimation) {
    &[open] {
      .dropDownIcon {
        transform: rotate(180deg);
      }
    }
  }
}

.icon {
  display: block;
  flex-shrink: 0;
  width: 24px;
  height: 24px;
  margin-right: 38px;
  margin-left: 6px;
  font-size: pxToRem(24);
  line-height: 1;
}

.summary {
  display: flex;
  align-items: center;
  justify-content: space-between;
  min-height: 68px;
  padding-top: 19px;
  padding-right: 28px;
  padding-bottom: 19px;
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

  &:focus-visible {
    outline: 2px solid var(--color-border-focused);
  }
}

.summaryInner {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  width: 100%;
}

.dropDownIcon {
  display: block;
  flex-shrink: 0;
  transition: transform var(--base-duration) var(--easing-out-expo);
}

.details {
  overflow: hidden;
  transition: height var(--base-duration);
}

.detailsInner {
  display: flex;
  padding-top: 24px;
  padding-right: 32px;
  padding-bottom: 40px;
  font-size: pxToRem(16);
  line-height: 1.7;
}
</style>
