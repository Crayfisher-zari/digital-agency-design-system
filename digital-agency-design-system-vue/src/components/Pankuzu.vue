<script lang="ts" setup>
import { LinkTag, useLink } from "../composables/useLinkComponent";
import Icon from "./Icon.vue";
import iconPankuzu from "@/assets/images/icon_pankuzu.svg";
// 実用上はVue Routerなどのルーティングを使用するはずなので、構成例として作成する
type Props = {
  list: { text: string; url?: string }[];
  linkTag: LinkTag;
};
const props = defineProps<Props>();
const { LinkComponent } = useLink({ tag: props.linkTag });
</script>
<template>
  <ul>
    <li v-for="pankuzu in props.list" :key="pankuzu.text">
      <LinkComponent v-if="pankuzu.url" :to="pankuzu.url">{{
        pankuzu.text
      }}</LinkComponent>
      <span v-else>{{ pankuzu.text }}</span>
      <span class="iconWrapper">
        <Icon
          :iconSrc="iconPankuzu"
          :width="5"
          :height="9"
          color="var(--color-text-body)"
          :ariaHidden="true"
          role="img"
        />
      </span>
    </li>
  </ul>
</template>
<style lang="scss" scoped>
@use "@/assets/style/utils/utils.scss" as *;

ul {
  display: flex;
  flex-wrap: wrap;
}

li {
  display: inline-flex;
  align-items: center;
  font-size: pxToRem(14);
  line-height: 2;
  list-style: none;

  &:last-child {
    .iconWrapper {
      display: none;
    }
  }
}

.iconWrapper {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 16px;
  height: 16px;
}
</style>
