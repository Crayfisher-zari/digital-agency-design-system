<script setup lang="ts">
import { onBeforeUnmount, onMounted, ref } from "vue";
import { useLink } from "../composables/useLinkComponent";

type Props = {
  languageList: { label: string; link: string }[];
};

defineProps<Props>();

// 閉じようとしているか？
const isOpened = ref<boolean | null>(null);
const hasAnimation = ref<boolean>(true);

const accordionElement = ref<HTMLDetailsElement | null>(null);
const contentsElement = ref<HTMLElement | null>(null);
const contentsInnerElement = ref<HTMLElement | null>(null);

const { LinkComponent } = useLink({ tag: "router" });

/**
 * アコーディオンの開閉イベント
 */
const handleClick = (e: Event) => {
  if (
    // prefers-reduced-motionの場合はアニメーションなし。デフォルトの挙動
    matchMedia("prefers-reduced-motion").matches ||
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
  if (matchMedia("prefers-reduced-motion").matches) {
    // reduce-motionが有効な場合はアニメーションをしない
    hasAnimation.value = false;
  }
  if (!matchMedia("prefers-reduced-motion").matches && contentsElement.value) {
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
  <details ref="accordionElement" class="languageSelector">
    <summary class="summary" @click="handleClick">
      <span class="summaryInner">Language</span>
      <img
        class="dropDownIcon"
        src="@/assets/images/icon_arrow_accordion.svg"
        alt=""
        width="24"
        height="14"
      />
    </summary>
    <div ref="languageListElement" class="languageList">
      <div
        v-for="item in languageList"
        ref="languageItemElement"
        :key="item.label"
        class="languageItem"
      >
        <LinkComponent :to="item.link">{{ item.label }}</LinkComponent>
      </div>
    </div>
  </details>
</template>
<style lang="scss">
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

  &::-webkit-details-marker {
    // Safariの三角アイコン
    display: none;
  }
}
</style>
