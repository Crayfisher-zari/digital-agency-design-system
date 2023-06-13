<script setup lang="ts">
import { computed, ref } from "vue";
import { getYearList } from "../utils/getYearList";

type Props = {
  /** 年の値（v-model:yearで使える） */
  year: number;
  /** 月の値（v-model:monthで使える） */
  month: number;
  /** 日の値（v-model:dayで使える） */
  day: number;
  /** 年月日のラベルです */
  label: string;
  /** 内容を補足するサポートテキスト */
  supportText?: string;
  /** 必須かどうか。未指定の場合はfalse */
  isRequired?: boolean;
  /** 妥当性 */
  isValid?: boolean;
  /** フォーカスアウト時のコールバック関数 */
  onBlur?: () => void;
  /** ボタンが非活性状態か。未指定の場合はfalse */
  isDisabled?: boolean;
  /** デフォルトで選ばれている選択肢の年 */
  defaultYear?: number;
  /** 選択肢の年の配列。省略した場合は1900〜今年まで */
  yearList?: number[];
};

const props = withDefaults(defineProps<Props>(), {
  supportText: undefined,
  isRequired: false,
  isValid: true,
  onBlur: undefined,
  isDisabled: false,
  defaultYear: 1980,
  yearList: undefined,
});

type Emits = {
  "update:year": [value: number];
  "update:month": [value: number];
  "update:day": [value: number];
};

const emits = defineEmits<Emits>();

// 年数の配列
const basicYearList = getYearList();

const yaerList = computed(() => {
  if (props.yearList === undefined) {
    return basicYearList;
  }
  return props.yearList;
});

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

const handleInputYear = (e: Event) => {
  emits("update:year", Number((e.target as HTMLInputElement).value));
};
const handleInputMonth = (e: Event) => {
  emits("update:month", Number((e.target as HTMLInputElement).value));
};
const handleInputDay = (e: Event) => {
  emits("update:day", Number((e.target as HTMLInputElement).value));
};
</script>
<template>
  <fieldset>
    <legend>
      <span class="labelWrapper"
        ><span class="label">{{ props.label }}</span
        ><span class="requiredText" :class="isRequired ? null : 'optional'">{{
          isRequired ? "必須" : "任意"
        }}</span></span
      >
    </legend>
    <p>{{ props.supportText }} {{ props.year }}</p>
    <label>
      <select v-model="year" :onChange="handleInputYear">
        <option default>先</option>
        <option
          v-for="item in yaerList"
          :value="item"
          :key="item"
          :default="item === props.defaultYear ? true : false"
        >
          {{ item }}
        </option>
      </select>
      年
    </label>
    <label>
      <select v-model="month" :onChange="handleInputMonth">
        <option v-for="item in 12" :value="item" :key="item">
          {{ item }}
        </option>
      </select>
      月
    </label>
    <label>
      <select v-model="day" :onChange="handleInputDay">
        <option v-for="item in maxDays" :value="item" :key="item">
          {{ item }}
        </option>
      </select>
      日
    </label>
  </fieldset>
</template>
<style lang="scss" scoped>
fieldset {
  border: none;
}
</style>
