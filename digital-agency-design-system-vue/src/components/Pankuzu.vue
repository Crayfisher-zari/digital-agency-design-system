<script lang="ts" setup>
// 実用上はVue Routerなどのルーティングを使用するはずなので、構成例として作成する
type Props = {
  list: { text: string; url?: string }[];
};
const props = defineProps<Props>();
</script>
<template>
  <ul>
    <li v-for="pankuzu in props.list" :key="pankuzu.text">
      <a v-if="pankuzu.url" :href="pankuzu.url">{{ pankuzu.text }}</a>
      <span v-else>{{ pankuzu.text }}</span>
    </li>
  </ul>
</template>
<style lang="scss" scoped>
ul {
  display: flex;
  flex-wrap: wrap;
}

li {
  display: inline-flex;
  align-items: center;
  font-size: 0.875rem;
  line-height: 2;
  list-style: none;

  &::after {
    display: block;
    width: 16px;
    height: 16px;
    content: "";
    background-image: url("@/assets/images/icon_pankuzu.svg");
    background-repeat: no-repeat;
    background-position: 50% 50%;
    background-size: 5px;
  }

  &:last-child {
    &::after {
      display: none;
    }
  }
}

// ダークモード時
body:not(.color-scheme-light) li {
  @media (prefers-color-scheme: dark) {
    &::after {
      background-image: url("@/assets/images/icon_pankuzu_dark.svg");
    }
  }
}
body.color-scheme-dark li {
  &::after {
    background-image: url("@/assets/images/icon_pankuzu_dark.svg");
  }
}
</style>
