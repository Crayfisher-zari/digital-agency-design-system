<script lang="ts" setup>
import { ref } from "vue";
type Props = {
  onClick:()=>void;
}

const isShown = ref(false);
const handleClick = () => {
  console.log();
};
</script>
<template>
  <Teleport to="body">
    <div class="modalBg" v-show="isShown">
      <div class="modal">
        <h1>ダイアログ</h1>
        <BasicButton
          label="ボタン"
          type="secondary"
          @click="handleClick"
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
