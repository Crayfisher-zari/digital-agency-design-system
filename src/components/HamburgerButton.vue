<script setup lang="ts">
import Icon from "./Icon.vue";
import iconHamburger from "@/assets/images/icon_hamburger.svg";
import iconClose from "@/assets/images/icon_close.svg";

type Props = {
  /** 見た目の種類 */
  type?: "vertical" | "horizontal";
  /** クリック時のイベントハンドラ */
  onClick?: () => void;
  /** 状態に関するリアクティブな値（v-modelで使える） */
  modelValue: boolean;
};

const props = withDefaults(defineProps<Props>(), {
  type: "vertical",
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
        <span class="iconWrapper">
          <Icon
            :iconSrc="iconHamburger"
            :width="18"
            :height="14"
            color="var(--color-text-body)"
            class="icon hamburger"
          />
        </span>
        <span class="text">メニュー</span>
      </span>
    </Transition>
    <Transition mode="out-in">
      <span v-show="model" class="buttonInner">
        <span class="iconWrapper">
          <Icon
            v-show="model"
            :iconSrc="iconClose"
            :width="14"
            :height="14"
            color="var(--color-text-body)"
            class="icon close"
          />
        </span>
        <span class="text">閉じる</span>
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

  &.vertical {
    width: 48px;
    height: 48px;

    .iconWrapper {
      margin-top: 5px;
      margin-right: auto;
      margin-left: auto;
    }
  }

  &.horizontal {
    width: 72px;
    height: 32px;
    padding-left: 4px;

    .buttonInner {
      display: flex;
      align-items: center;
      justify-content: flex-start;
    }

    .iconWrapper {
      margin-right: 4px;
    }
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
  font-size: pxToRem(10);
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
  top: 5px;
  height: auto;

  &.hamburger {
    left: 3px;
  }

  &.close {
    left: 5px;
  }
}
</style>
