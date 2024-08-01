<script lang="ts" setup>
type Props = {
  onClick?: () => void;
};

const props = withDefaults(defineProps<Props>(), {
  onClick: undefined,
});

const handleClick = () => {
  if (props.onClick) {
    props.onClick();
  } else {
    window.scroll({
      top: 0,
      behavior: "smooth",
    });
  }
};
</script>
<template>
  <button class="scrollTopButton" @click="handleClick">
    <div class="sr-only">ページ上部に戻る</div>
  </button>
</template>
<style lang="scss">
.scrollTopButton {
  width: 56px;
  height: 56px;
  border-radius: 28px;
}
</style>
