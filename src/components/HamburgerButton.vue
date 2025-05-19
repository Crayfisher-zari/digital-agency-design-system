<script setup lang="ts">
import Icon from "./Icon.vue";
import iconHamburger from "@/assets/images/icon_hamburger.svg";
import iconClose from "@/assets/images/icon_close.svg";
import iconHamburgerCompactJa from "@/assets/images/icon_hamburger_compact_ja.svg";
import iconHamburgerCompactEn from "@/assets/images/icon_hamburger_compact_en.svg";
import iconHamburgerCompactCloseJa from "@/assets/images/icon_hamburger_compact_close_ja.svg";
import iconHamburgerCompactCloseEn from "@/assets/images/icon_hamburger_compact_close_en.svg";

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
        <template v-if="type === 'default'">
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
        </template>
        <template v-if="type === 'compact'">
          <Icon
            :iconSrc="iconHamburgerCompactJa"
            :width="44"
            :height="44"
            color="var(--color-text-body)"
            v-if="lang === 'ja'"
          />
          <Icon
            :iconSrc="iconHamburgerCompactEn"
            :width="44"
            :height="44"
            color="var(--color-text-body)"
            v-if="lang === 'en'"
          />
        </template>
      </span>
    </Transition>
    <Transition mode="out-in">
      <span v-show="model" class="buttonInner">
        <template v-if="type === 'default'">
          <span class="iconWrapper">
            <Icon
              v-show="model"
              :iconSrc="iconClose"
              :width="24"
              :height="24"
              color="var(--color-text-body)"
              class="icon close"
            />
          </span>
          <span class="text">閉じる</span>
        </template>
        <template v-if="type === 'compact'">
          <Icon
            :iconSrc="iconHamburgerCompactCloseJa"
            :width="44"
            :height="44"
            color="var(--color-text-body)"
            v-if="lang === 'ja'"
          />
          <Icon
            :iconSrc="iconHamburgerCompactCloseEn"
            :width="44"
            :height="44"
            color="var(--color-text-body)"
            v-if="lang === 'en'"
          />
        </template>
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
  transition: background-color var(--base-duration) var(--easing-out-expo);

  &:focus-visible {
    background-color: var(--color-focus);
    border-radius: 5px;
    outline: 4px solid var(--color-text-body);
  }

  @media (hover: hover) {
    &:hover {
      background-color: var(--color-background-tertiary);

      .text {
        text-decoration: underline;
      }
    }
  }

  &.default {
    width: 93px;
    height: 28px;
    padding-left: 2px;

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
  width: 100%;
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
