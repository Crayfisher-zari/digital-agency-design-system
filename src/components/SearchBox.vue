<script setup lang="ts">
type Props = {
  /** 検索ワード */
  searchWord: string;
}

const props = withDefaults(defineProps<Props>(), {
  searchWord: "",
});
</script>

<template>
  <div class="searchbox">
  </div>
</template>

<style scoped>

</style>