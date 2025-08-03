<script setup lang="ts">
import Icon from "./Icon.vue";
import iconHamburger from "@/assets/images/icon_hamburger.svg";
import iconHamburgerCompactJa from "@/assets/images/icon_hamburger_compact_ja.svg";
import iconHamburgerCompactEn from "@/assets/images/icon_hamburger_compact_en.svg";
import PartsCloseButton from "./parts/PartsCloseButton.vue";

type Props = {
  /** 見た目の種類 */
  type?: "default" | "compact";
  /** 言語 */
  lang?: "ja" | "en";
  /** クリック時のイベントハンドラ */
  onClick?: () => void;
  /** 状態に関するリアクティブな値（v-modelで使える） */
  modelValue: boolean;
};

const props = withDefaults(defineProps<Props>(), {
  type: "default",
  lang: "ja",
  onClick: undefined,
});

const model = defineModel<boolean>();

const handleClick = () => {
  model.value = !model.value;
  if (props.onClick) {
    props.onClick();
  }
};
</script>
<template>
  <button
    class="hamburgerButton"
    :class="type"
    type="button"
    @click="handleClick"
  >
    <Transition mode="out-in">
      <span v-show="!model" class="buttonInner">
        <span v-if="type === 'default'" class="defaultStyle">
          <span class="iconWrapper">
            <Icon
              :iconSrc="iconHamburger"
              :width="24"
              :height="24"
              color="var(--color-text-body)"
              class="icon hamburger"
            />
          </span>
          <span class="text">メニュー</span>
        </span>
        <span v-if="type === 'compact'" class="compactStyle">
          <Icon
            v-if="lang === 'ja'"
            :iconSrc="iconHamburgerCompactJa"
            :width="44"
            :height="44"
            color="var(--color-text-body)"
          />
          <Icon
            v-if="lang === 'en'"
            :iconSrc="iconHamburgerCompactEn"
            :width="44"
            :height="44"
            color="var(--color-text-body)"
          />
        </span>
      </span>
    </Transition>
    <Transition mode="out-in">
      <span v-show="model" class="buttonInner">
        <PartsCloseButton
          :isCompact="type === 'compact'"
          tag="span"
          class="closeButton"
        />
      </span>
    </Transition>
  </button>
</template>
<style lang="scss" scoped>
@use "@/assets/style/utils/utils.scss" as *;

.hamburgerButton {
  position: relative;
  appearance: none;
  cursor: pointer;
  background-color: transparent;
  border: none;
  transition:
    background-color var(--base-duration) var(--easing-out-expo),
    border-color var(--base-duration) var(--easing-out-expo);

  @media (hover: hover) {
    &:hover {
      background-color: var(--color-background-tertiary);

      .text {
        text-decoration: underline;
      }
    }
  }

  &:focus-visible {
    background-color: var(--color-focus);
    outline: 4px solid var(--color-text-body);

    .closeButton {
      background-color: var(--color-focus);
      border-color: transparent !important;
    }
  }

  &.default {
    width: 117px;
    height: 36px;

    .buttonInner {
      display: flex;
      align-items: center;
      justify-content: flex-start;
    }
  }

  &.compact {
    width: 44px;
    height: 44px;
  }
}

.buttonInner {
  position: absolute;
  top: 0;
  left: 0;
  display: block;
  width: max-content;
  height: 100%;

  &.v-enter-active,
  .v-leave-active {
    transition: opacity var(--base-duration) var(--easing-out-quat);
  }

  &.v-enter-from,
  .v-leave-to {
    opacity: 0;
  }
}

.defaultStyle {
  display: flex;
  column-gap: 4px;
  align-items: center;
  justify-content: flex-start;
  padding: 0 12px;
}

.compactStyle {
  display: block;
  width: 44px;
  height: 44px;
  border: 1px solid transparent;
  border-radius: 4px;
  transition:
    background-color var(--base-duration) var(--easing-out-expo),
    border-color var(--base-duration) var(--easing-out-expo);

  @media (hover: hover) {
    &:hover {
      border-color: var(--color-text-body);
    }
  }
}

.text {
  display: block;
  font-size: pxToRem(16);
  color: var(--color-text-body);
  text-align: center;
}

.iconWrapper {
  position: relative;
  display: block;
  width: 24px;
  height: 24px;
}

.icon {
  position: absolute;
  left: 0;
  width: 24px;
  height: auto;
}
</style>
