<script lang="ts" setup>
import { watch } from "vue";
import BasicButton from "../components/BasicButton.vue";
import Layout from "../components/Layout.vue";
type Props = {
  title: string;
  text: string;
  labelPrimary: string;
  labelSecondary?: string;
  modelValue: boolean;
  onClickPrimary: () => void;
  onClickSecondary?: () => void;
};

type Emits = { (e: "update:modelValue", value: boolean): void };

const props = withDefaults(defineProps<Props>(), {
  labelSecondary: "",
  onClickSecondary: undefined,
});
const emits = defineEmits<Emits>();

const handleClickPrimary = () => {
  props.onClickPrimary();
  emits("update:modelValue", false);
};

const lockScroll = () => {
  document.body.style.overflow = "hidden";
  // スクロールバーのガタツキ対策
  const element = document.querySelector<HTMLElement>(".scrollbar-gutter");
  if (element) {
    element.style.scrollbarGutter = "stable";
  }
};

const releaseScroll = () => {
  document.body.style.overflow = "visible";
  // スクロールバーのガタツキ対策
  const element = document.querySelector<HTMLElement>(".scrollbar-gutter");
  if (element) {
    element.style.scrollbarGutter = "auto";
  }
};

watch(
  () => props.modelValue,
  (modelValue) => {
    if (modelValue) {
      lockScroll();
    } else {
      releaseScroll();
    }
  }
);

const handleClickSecondary = () => {
  if (!props.onClickSecondary) {
    return;
  }
  props.onClickSecondary();
  emits("update:modelValue", false);
};
</script>
<template>
  <Teleport to="body">
    <Transition>
      <div
        v-show="modelValue"
        class="modalBg"
        role="dialog"
        :aria-modal="modelValue ? modelValue : undefined"
        :aria-hidden="!modelValue"
        tabindex="-1"
      >
        <layout class="modalWrapper">
          <div class="modal colStart-4 colEnd-10">
            <h1>{{ title }}</h1>
            <p>{{ text }}</p>
            <div class="buttonWrapper">
              <BasicButton
                :label="labelPrimary"
                type="primary"
                class="button"
                @click="handleClickPrimary"
              ></BasicButton>
              <BasicButton
                v-if="handleClickSecondary"
                :label="labelSecondary"
                class="button"
                type="secondary"
                @click="handleClickSecondary"
              ></BasicButton>
            </div>
          </div>
        </layout>
      </div>
    </Transition>
  </Teleport>
</template>
<style lang="scss">
.modalBg {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 9999;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 70%);
  &.v-enter-active,
  &.v-leave-active {
    transition: opacity var(--base-duration) var(--easing-out-quat);
    .modal {
      transition: transform var(--base-duration) var(--easing-out-quat);
    }
  }
  &.v-enter-from,
  &.v-leave-to {
    opacity: 0;
    .modal {
      transform: scale(0.8);
    }
  }
}

.modalWrapper {
  height: 100%;
}

.modal {
  align-self: center;
  padding: 40px 56px;
  background-color: var(--color-background-primary);
  border-radius: 12px;
}

.title {
  margin-bottom: 16px;
  font-size: 1.375rem;
  font-weight: bold;
}

.text {
  font-size: 1rem;
  line-height: 1.75;
}

.buttonWrapper {
  display: grid;
  grid-auto-flow: row;
  row-gap: 8px;
  margin-top: 40px;
}

.button {
  width: 100%;
}
</style>
