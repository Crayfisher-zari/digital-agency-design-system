<script lang="ts" setup>
</script>
<template>
  <div class="pagination">
    <button>
      <picture>
        <source srcset="@/assets/images/icon_firstPage_dark.svg" media="(prefers-color-scheme: dark)">
        <source srcset="@/assets/images/icon_firstPage.svg">
        <img src="@/assets/images/icon_firstPage.svg" alt="最初へ戻る" width="24" height="24">
      </picture>
    </button>
    <button>
      <picture>
        <source srcset="@/assets/images/icon_arrow_left_dark.svg" media="(prefers-color-scheme: dark)">
        <source srcset="@/assets/images/icon_arrow_left.svg">
        <img src="@/assets/images/icon_arrow_left.svg" alt="1つ前に戻る" width="24" height="24">
      </picture>
    </button>
    <button>
      <picture>
        <source srcset="@/assets/images/icon_arrow_right_dark.svg" media="(prefers-color-scheme: dark)">
        <source srcset="@/assets/images/icon_arrow_right.svg">
        <img src="@/assets/images/icon_arrow_right.svg" alt="1つ次に進む" width="24" height="24">
      </picture>
    </button>
    <button>
      <picture>
        <source srcset="@/assets/images/icon_endPage_dark.svg" media="(prefers-color-scheme: dark)">
        <source srcset="@/assets/images/icon_endPage.svg">
        <img src="@/assets/images/icon_endPage.svg" alt="最後へ進む" width="24" height="24">
      </picture>
    </button>
    
  </div>
</template>
<style lang="scss" scoped>
button{
  display: block;
  width: 48px;
  height: 48px;
  border-radius: 50%;
  cursor: pointer;
  border: 1px solid var(--color-border-divider);
  background-color: var(--color-background-primary);
}
</style>