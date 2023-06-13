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
  label?: string;
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
  label: undefined,
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

const year = ref(props.defaultYear);
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
    <legend v-if="props.label !== undefined">
      <span class="labelWrapper"
        ><span class="label">{{ props.label }}</span
        ><span class="requiredText" :class="isRequired ? null : 'optional'">{{
          isRequired ? "必須" : "任意"
        }}</span></span
      >
    </legend>
    <p class="supportText">{{ props.supportText }}</p>
    <div class="ymdWrapper">
      <label class="selectorWrapper">
        <select
          v-model="year"
          :onChange="handleInputYear"
          class="selector year"
        >
          <option v-for="item in yaerList" :key="item" :value="item">
            {{ item }}
          </option>
        </select>
        <span class="unit">年</span>
      </label>
      <label class="selectorWrapper">
        <select v-model="month" :onChange="handleInputMonth" class="selector">
          <option v-for="item in 12" :key="item" :value="item">
            {{ item }}
          </option>
        </select>
        <span class="unit">月</span>
      </label>
      <label class="selectorWrapper">
        <select v-model="day" :onChange="handleInputDay" class="selector">
          <option v-for="item in maxDays" :key="item" :value="item">
            {{ item }}
          </option>
        </select>
        <span class="unit">日</span>
      </label>
    </div>
  </fieldset>
</template>
<style lang="scss" scoped>
@use "@/assets/style/utils/utils.scss" as *;

fieldset {
  display: block;
  border: none;
}

.labelWrapper {
  display: flex;
  align-items: center;
  justify-content: flex-start;
}

.label {
  font-size: pxToRem(14);
}

.supportText {
  display: block;
  margin-top: 8px;
  font-size: pxToRem(12);
  line-height: 1.5;
  color: var(--color-text-description);
}

.requiredText {
  margin-left: 8px;
  font-size: pxToRem(12);
  color: var(--color-text-alert);

  &.optional {
    color: var(--color-text-description);
  }
}

.ymdWrapper {
  display: flex;
  margin-top: 8px;
}

.selectorWrapper {
  display: flex;
  align-items: center;
  margin-right: 16px;

  &:last-child {
    margin-right: 0;
  }
}

.unit {
  margin-left: 16px;
  font-size: pxToRem(14);
}

.selector {
  width: 66px;
  padding: 12px 16px;
  color: var(--color-text-body);
  background-color: transparent;
  background-image: url("@/assets/images/icon_selector.svg");
  background-repeat: no-repeat;
  background-position: right 14px top 50%;
  background-size: 8px;
  border: 1px solid var(--color-border-field);
  border-radius: 8px;
  appearance: none;

  &.year {
    width: 95px;
  }

  &:focus-visible {
    border-color: var(--color-border-focused) !important;
    outline: none !important;
    box-shadow: 0 0 0 1px var(--color-border-focused) !important;
  }
}
</style>
