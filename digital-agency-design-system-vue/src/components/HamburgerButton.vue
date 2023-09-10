<script setup lang="ts">
import { computed } from "vue";
import Icon from "./Icon.vue";
import iconHamburger from "@/assets/images/icon_hamburger.svg";
import iconClose from "@/assets/images/icon_close.svg";

type Props = {
  type?: "vertical" | "horizontal";
  onClick?: () => void;
  modelValue: boolean;
};
type Emits = { (e: "update:modelValue", value: boolean): void };

const props = withDefaults(defineProps<Props>(), {
  type: "vertical",
  onClick: undefined,
});

const handleInput = () => {
  state.value = !state.value;
  if (props.onClick) {
    props.onClick;
  }
};

const emit = defineEmits<Emits>();

const state = computed({
  get: () => {
    return props.modelValue;
  },
  set: (value) => {
    emit("update:modelValue", value);
  },
});
</script>
<template>
  <button class="hamburgerButton" :class="type" @click="handleInput">
    <Transition mode="out-in">
      <span v-show="!modelValue" class="buttonInner">
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
      <span v-show="modelValue" class="buttonInner">
        <span class="iconWrapper">
          <Icon
            v-show="modelValue"
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
