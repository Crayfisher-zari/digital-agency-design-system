<script setup lang="ts">
import { computed } from 'vue';

type Props = {
  type?: "vertical" | "horizontal";
  onClick?: () => void;
};
type Emits = { (e: "update:modelValue", value: [] | string[] | boolean): void };

const props = withDefaults(defineProps<Props>(), {
  type: "vertical",
});

const handleInput = ()=>{}

const emit = defineEmits<Emits>();

const state = computed({get:()=>{},set:()=>{}})
</script>
<template>
  <button @click="handleInput">メニュー</button>
</template>
<style lang="scss" scoped></style>
