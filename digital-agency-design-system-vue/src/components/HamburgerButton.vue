<script setup lang="ts">
import { computed } from "vue";
import Icon from "./Icon.vue";
import iconHamburger from "@/assets/images/icon_hamburger.svg";

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
    <Icon
      :iconSrc="iconHamburger"
      :width="18"
      :height="14"
      color="var(--color-text-body)"
    />
    <span class="text">
      {{ modelValue ? "閉じる" : "メニュー" }}
    </span>
  </button>
</template>
<style lang="scss" scoped>
@use "@/assets/style/utils/utils.scss" as *;

.hamburgerButton {
  background-color: transparent;
  border: none;
  appearance: none;

  &.vertical {
    width: 48px;
    height: 48px;
  }
}

.text {
  display: block;
  font-size: pxToRem(10);
  color: var(--color-text-body);
  text-align: center;
}
</style>
