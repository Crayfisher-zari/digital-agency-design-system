<script setup lang="ts">
import { ref } from "vue";
import DropDownSummary from "./DropDownSummary.vue";

type Props = {
  /** メニューラベル */
  label: string;
};
defineProps<Props>();
type Emits = {
  /** クリック時のイベントハンドラ */
  click: [];
};
const emits = defineEmits<Emits>();
const isMegaMenuVisible = ref<boolean>(false);
</script>
<template>
  <button
    class="megaMenuButton"
    @click="
      () => {
        isMegaMenuVisible = !isMegaMenuVisible;
        emits('click');
      }
    "
  >
    <DropDownSummary summaryText="メガメニュー" :isActive="isMegaMenuVisible" />
  </button>
</template>
<style scoped lang="scss">
.megaMenuButton {
  appearance: none;
  background: none;
  border: none;
}
</style>
