<script setup lang="ts">
import { LinkTag, useLink } from "../composables/useLinkComponent";
type Props = {
  title: string;
  text?: string;
  linkTag?: LinkTag;
  linkText?: string;
  linkUrl?: string;
};
const props = defineProps<Props>();
const { LinkComponent } = useLink({ tag: props.linkTag });
</script>
<template>
  <div>
    <p class="title">{{ title }}</p>
    <p class="text">{{ text }}</p>
    <p class="url">
      <LinkComponent :to="linkUrl">{{ linkText }}</LinkComponent>
    </p>
  </div>
</template>
<style scoped lang="scss">
@use "@/assets/style/utils/utils.scss" as *;

.title{
  font-size: pxToRem(28);
  font-weight: var(--weight-bold);
  color: var(--color-text-body);
  line-height: 1.5;
  letter-spacing: 0.04em;
}

.text{
  font-size: pxToRem(16);
  font-weight: var(--weight-regular);
  color: var(--color-text-description);
  line-height: 1.7;
  letter-spacing: 0.04em;
}

.url{
  margin-top: 40px;
  color: var(--color-text-link);
  letter-spacing: 0.04em;
  line-height: 1.7;
}
</style>
