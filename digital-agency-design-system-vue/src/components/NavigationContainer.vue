<script setup lang="ts"></script>
<template>
  <nav>
    <slot></slot>
  </nav>
</template>
<style lang="scss" scoped>
nav {
  display: flex;
  column-gap: 32px;
  justify-content: flex-end;
  font-size: 14px;
  color: var(--color-text-body);

  // > a{
  //   display: block;
  //   margin-right: 32px;
  //   &:last-child{
  //     margin-right: 0;
  //   }
  // }
}
</style>
