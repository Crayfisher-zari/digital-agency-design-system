<script setup lang="ts">
import BasicButton from "./BasicButton.vue";
import PartsListBox from "./parts/PartsListBox.vue";

type Target = {
  label: string;
  value: string;
};

type Props = {
  /** ラベル。不可視のaria-label属性として利用します */
  label?: string;
  /** 検索対象のラベル */
  targetLabel?: string;
  /** 検索対象のリスト */
  targetList?: Target[];
};

type Emits = {
  /** 検索ボタンクリック時のイベントハンドラ */
  clickSearch: [searchText: string];
  /** 検索対象クリック時のイベントハンドラ */
  clickTarget: [targetValue: string];
};

const props = withDefaults(defineProps<Props>(), {});

const emits = defineEmits<Emits>();

const searchText = defineModel<string>("searchText");

const handleClickSearch = () => {
  emits("clickSearch", searchText.value ?? "");
};

const handleClickTarget = (targetValue: Target["value"]) => {
  emits("clickTarget", targetValue);
};
</script>

<template>
  <div class="searchbox">
    <div class="searchInputWrapper">
      <div class="targetLabelWrapper" v-if="props.targetLabel !== undefined">
        <PartsListBox>
          <template #summary>
            {{ props.targetLabel }}
          </template>
          <template #content>
            <ul>
              <li v-for="item in props.targetList" :key="item.value">
                <button type="button" @click="handleClickTarget(item.value)">
                  {{ item.label }}
                </button>
              </li>
            </ul>
          </template>
        </PartsListBox>
      </div>
      <input
        type="text"
        v-model="searchText"
        :aria-label="props.label || undefined"
        class="searchInput"
        :class="{ withTarget: props.targetLabel !== undefined }"
      />
      <BasicButton
        type="primary"
        label="検索"
        size="large"
        @click="handleClickSearch"
      ></BasicButton>
    </div>
  </div>
</template>

<style scoped>
.searchInputWrapper {
  display: flex;
  column-gap: 16px;
}

.searchInput {
  width: 100%;
  height: 56px;
  padding: 0 10px 0 48px;
  font-size: 1rem;
  background-image: url("@/assets/images/icon_search.svg");
  background-repeat: no-repeat;
  background-position: left 16px center;
  background-size: 24px;
  border: 1px solid #ccc;
  border-radius: 12px;
}
</style>
