<script lang="ts" setup>
import { LinkTag } from "../composables/useLinkComponent";
import Icon from "./Icon.vue";
import iconPankuzu from "@/assets/images/icon_pankuzu.svg";
import UtilityLink from "./UtilityLink.vue";
type Props = {
  list: { text: string; url?: string }[];
  linkTag: LinkTag;
};
const props = defineProps<Props>();
</script>
<template>
  <ul>
    <li v-for="pankuzu in props.list" :key="pankuzu.text">
      <UtilityLink v-if="pankuzu.url" :to="pankuzu.url">{{
        pankuzu.text
      }}</UtilityLink>
      <span v-else class="current" aria-current="page">{{ pankuzu.text }}</span>
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
  column-gap: 6px;
}

li {
  display: inline-flex;
  align-items: center;
  font-size: pxToRem(14);
  line-height: 2;
  list-style: none;
  color: var(--color-text-link);

  &:last-child {
    .iconWrapper {
      display: none;
    }
  }
}

.current{
  color: var(--color-text-body);
}

.iconWrapper {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 16px;
  height: 16px;
}
</style>
