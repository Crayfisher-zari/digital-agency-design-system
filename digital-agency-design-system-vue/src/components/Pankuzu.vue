<script lang="ts" setup>
// 実用上はVue Routerなどのルーティングを使用するはずなので、構成例として作成する
type Props = {
  list: { text: string; url?: string }[];
};
const props = defineProps<Props>();
</script>
<template>
  <ul>
    <li v-for="pankuzu in props.list">
      <a v-if="pankuzu.url" :href="pankuzu.url">{{ pankuzu.text }}</a>
      <span v-else>{{ pankuzu.text }}</span>
    </li>
  </ul>
</template>
<style lang="scss">
ul {
  display: flex;
  flex-wrap: wrap;
}

li {
  list-style: none;
  display: inline-flex;
  align-items: center;
  font-size: 0.875rem;
  line-height: 2;
  &:after {
    content: "";
    display: block;
    width: 16px;
    height: 16px;
    background-image: url("@/assets/images/icon_pankuzu.svg");
    background-size: 5px;
    background-repeat: no-repeat;
    background-position: 50% 50%;
  }
  @media (prefers-color-scheme: dark) {
    &:after{
      background-image: url("@/assets/images/icon_pankuzu_dark.svg");
    }
  }
  &:last-child {
    &::after {
      display: none;
    }
  }
 
}
</style>
