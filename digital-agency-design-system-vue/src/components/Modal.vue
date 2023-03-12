<script lang="ts" setup>
import { ref, defineProps, Ref } from "vue";
import BasicButton from "../components/BasicButton.vue"
type Props = {
  title: string;
  text: string;
  modelValue: boolean;
  onClickPositive: () => void;
  onClickNegative?: () => void;
};

type Emits = { (e: "update:modelValue", value: Boolean): void };

const props = defineProps<Props>();
const emits = defineEmits<Emits>();

const handleClickPositive = () => {
  props.onClickPositive();
  emits("update:modelValue", false);
};

const handleClickNegative = () => {
  if (!props.onClickNegative) {
    return;
  }
  props.onClickNegative();
  emits("update:modelValue", false);
};
</script>
<template>
  <Teleport to="body">
    <div class="modalBg" v-show="modelValue">
      <div class="modal">
        <h1>ダイアログ</h1>
        <BasicButton
          label="ボタン"
          type="secondary"
          @click="handleClickPositive"
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
</style>
