<script lang="ts" setup>

type Props = {
  label: string;
  title: string;
  supportText: string;
};
defineProps<Props>();
</script>
<template>
  <div class="resourceList">
    <p>{{ label }}</p>
    <p>{{ title }}</p>
    <p>{{ supportText }}</p>
  </div>
</template>
<style lang="scss" scoped></style>
