<script lang="ts" setup>
import { ref, defineProps, Ref } from "vue";
import BasicButton from "../components/BasicButton.vue";
type Props = {
  title: string;
  text: string;
  labelPrimary: string;
  labelSecondary?: string;
  modelValue: boolean;
  onClickPrimary: () => void;
  onClickSecondary?: () => void;
};

type Emits = { (e: "update:modelValue", value: Boolean): void };

const props = withDefaults(defineProps<Props>(), {
  labelSecondary: "",
});
const emits = defineEmits<Emits>();

const handleClickPrimary = () => {
  props.onClickPrimary();
  emits("update:modelValue", false);
};

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
    <div class="modalBg" v-show="modelValue">
      <div class="modal">
        <h1>{{ title }}</h1>
        <p>{{ text }}</p>
        <BasicButton
          :label="labelPrimary"
          type="primary"
          @click="handleClickPrimary"
        ></BasicButton>
        <BasicButton
          v-if="handleClickPrimary"
          :label="labelSecondary"
          type="secondary"
          @click="handleClickPrimary"
        ></BasicButton>
      </div>
    </div>
  </Teleport>
</template>
<style lang="scss">
.modalBg {
  position: fixed;
  z-index: 9999;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.9);
}

.modal{
  background-color: var(--color-background-primary);
}
</style>
