<script setup lang="ts">
import BasicButton from "./BasicButton.vue";

type Props = {
  /** ラベル */
  label?: string;
};

type Emits = {
  /** クリック時のイベントハンドラ */
  click: [searchText: string];
};

const props = withDefaults(defineProps<Props>(), {});

const emits = defineEmits<Emits>();

const handleClick = () => {
  emits("click", searchText.value ?? "");
};

const searchText = defineModel<string>("searchText");
</script>

<template>
  <div class="searchbox">
    <input
      type="text"
      v-model="searchText"
      :aria-label="props.label || undefined"
      class="searchInput"
    />
    <BasicButton type="primary" label="検索" size="large" @click="handleClick"></BasicButton>
  </div>
</template>

<style scoped>
.searchbox{
  display: flex;
  column-gap: 16px;
}
.searchInput {
  width: 100%;
  height: 56px;
  padding: 0 10px;
  border: 1px solid #ccc;
  border-radius: 12px;
  font-size: 1rem;
}
</style>
