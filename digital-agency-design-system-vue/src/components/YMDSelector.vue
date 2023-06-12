<script setup lang="ts">
import { computed, ref } from "vue";
import { getYearList } from "../utils/getYearList";

// 年数の配列
const defaultYearList = getYearList();

const year = ref();
const month = ref();
const day = ref();

// 日数を小の月・大の月に合わせて算出します
const maxDays = computed(() => {
  if (month.value === 2) {
    return 28;
  } else if ([4, 6, 9, 11].includes(month.value)) {
    return 30;
  }
  return 31;
});
</script>
<template>
  <fieldset>
    <legend>生年月日</legend>
    <label>
      <select v-model="year">
        <option v-for="item in defaultYearList" :value="item" :key="item">
          {{ item }}
        </option>
      </select>
      年
    </label>
    <label>
      <select v-model="month">
        <option v-for="item in 12" :value="item" :key="item">
          {{ item }}
        </option>
      </select>
      月
    </label>
    <label>
      <select v-model="day">
        <option v-for="item in maxDays" :value="item" :key="item">
          {{ item }}
        </option>
      </select>
      日
    </label>
  </fieldset>
</template>
<style lang="scss" scoped></style>
