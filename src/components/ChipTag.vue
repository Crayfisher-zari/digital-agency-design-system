<script lang="ts" setup>
import Icon from "./Icon.vue";
import iconClose from "@/assets/images/icon_close.svg";
</script>

<template>
  <div class="chipTag">
    <span class="frontIcon" v-if="$slots.frontIcon">
      <slot name="frontIcon" />
    </span>
    <span class="label">
      <slot name="default" />
    </span>
    <button class="deleteButton">
      <Icon :iconSrc="iconClose" :width="24" :height="24" />
    </button>
  </div>
</template>

<style>
.chipTag {
  display: inline-flex;
}
</style>
