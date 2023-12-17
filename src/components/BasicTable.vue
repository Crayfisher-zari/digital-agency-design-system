<template>
  <div class="tableWrapper">
    <slot></slot>
  </div>
</template>
<style scoped lang="scss">
/* テーブルの基本スタイル */
.tableWrapper {
  display: inline-block;
  max-width: 100%;
  overflow: auto;

  &:deep(table) {
    font-size: pxToRem(16);
    color: var(--color-text-body);
    table-layout: fixed;
    border-collapse: collapse;
  }

  &:deep(th),
  &:deep(td) {
    min-width: 190px;
    height: 80px;
    padding: 8px;
    text-align: left;
    border: 1px solid var(--color-border-divider);
  }

  &:deep(th) {
    font-weight: normal;
    background-color: var(--color-background-tertiary);
  }
}
</style>
