<script lang="ts" setup>
import { ref, computed } from "vue";
import BasicButton from "./BasicButton.vue";
import Selector from "./Selector.vue";
import Icon from "./Icon.vue";
import iconArrowLeft from "@/assets/images/icon_arrow_left.svg";
import iconArrowRight from "@/assets/images/icon_arrow_right.svg";
import { getEraYearList } from "../utils/getEraYearList";

type Month = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;

interface Props {
  /** 開始年 */
  startYear?: number;
  /** 開始月 */
  startMonth?: Month;
  /** セレクターの年数。開始年から下る。省略した場合は10年 */
  yearCount?: number;
}

const props = withDefaults(defineProps<Props>(), {
  startYear: () => new Date().getFullYear(),
  startMonth: () => (new Date().getMonth() + 1) as Month,
  yearCount: 10,
});

const emits = defineEmits<{
  delete: [event: MouseEvent];
}>();

const selectedYear = defineModel<number | undefined>("selectedYear");
const selectedMonth = defineModel<number | undefined>("selectedMonth");
const selectedDate = defineModel<number | undefined>("selectedDate");

const monthNames = [
  "1月",
  "2月",
  "3月",
  "4月",
  "5月",
  "6月",
  "7月",
  "8月",
  "9月",
  "10月",
  "11月",
  "12月",
];
const weekdays = ["日", "月", "火", "水", "木", "金", "土"];

const yearList = computed(() => {
  return getEraYearList(props.startYear, props.yearCount);
});

// 表示用の年月
const currentDisplayYear = ref(props.startYear);
const currentDisplayMonth = ref(props.startMonth);

const calendarDays = computed(() => {
  const currentDate = new Date();

  const year = currentDisplayYear.value;
  const month = currentDisplayMonth.value;
  const firstDay = new Date(year, month - 1, 1);
  const startDate = new Date(firstDay);
  startDate.setDate(startDate.getDate() - firstDay.getDay());

  const days = [];
  const current = new Date(startDate);

  for (let i = 0; i < 42; i++) {
    days.push({
      date: current.getDate(),
      month: current.getMonth(),
      year: current.getFullYear(),
      isCurrentMonth: current.getMonth() === month - 1,
      isToday: current.toDateString() === currentDate.toDateString(),
    });
    current.setDate(current.getDate() + 1);
  }

  return days;
});

// 年の範囲制限のための上限下限
const maxYear = computed(() => props.startYear);
const minYear = computed(() => props.startYear - props.yearCount + 1);

const canGoPrev = computed(() => {
  const currentYear = currentDisplayYear.value;
  const currentMonth = currentDisplayMonth.value;

  // 最小年の1月より前に行こうとしている場合は無効化
  if (currentYear === minYear.value && currentMonth === 1) {
    return false;
  }
  return true;
});

const canGoNext = computed(() => {
  const currentYear = currentDisplayYear.value;
  const currentMonth = currentDisplayMonth.value;

  // 最大年の12月より後に行こうとしている場合は無効化
  if (currentYear === maxYear.value && currentMonth === 11) {
    return false;
  }
  return true;
});

const prevMonth = () => {
  if (!canGoPrev.value) return;

  if (currentDisplayMonth.value === 1) {
    currentDisplayMonth.value = 11;
    currentDisplayYear.value--;
  } else {
    currentDisplayMonth.value--;
  }
};

const nextMonth = () => {
  if (!canGoNext.value) return;

  if (currentDisplayMonth.value === 12) {
    currentDisplayMonth.value = 1;
    currentDisplayYear.value++;
  } else {
    currentDisplayMonth.value++;
  }
};

/**
 * 今日の日付に移動
 */
const goToToday = () => {
  const currentDate = new Date();
  selectedYear.value = currentDate.getFullYear();
  selectedMonth.value = currentDate.getMonth() + 1;
  selectedDate.value = currentDate.getDate();
};

/**
 * 日付をクリックした時の処理
 * @param date クリックした日付
 */
const handleDateClick = (date: number) => {
  selectedYear.value = currentDisplayYear.value;
  selectedMonth.value = currentDisplayMonth.value;
  selectedDate.value = date;
};

const handleDelete = (e: MouseEvent) => {
  emits("delete", e);
};
</script>
<template>
  <div class="calendarPanel">
    <div class="calendarHeader">
      <div class="yearSelectorWrapper">
        <Selector
          v-model="currentDisplayYear"
          :options="yearList"
          size="small"
        />
      </div>
      <div class="navigationButtonWrapper">
        <button
          @click="prevMonth"
          class="navigationButton"
          :aria-disabled="!canGoPrev"
        >
          <Icon :iconSrc="iconArrowLeft" :width="16" :height="16" />
        </button>
        <span class="monthDisplay">{{
          monthNames[currentDisplayMonth - 1]
        }}</span>
        <button
          @click="nextMonth"
          class="navigationButton"
          :aria-disabled="!canGoNext"
        >
          <Icon :iconSrc="iconArrowRight" :width="16" :height="16" />
        </button>
      </div>
    </div>

    <div class="calendarGrid">
      <div class="weekdayHeader">
        <div v-for="day in weekdays" :key="day" class="weekday">
          {{ day }}
        </div>
      </div>

      <div class="calendarBody">
        <div
          class="calendarDayWrapper"
          v-for="(day, index) in calendarDays"
          :key="index"
        >
          <button
            class="calendarDay"
            :class="{
              otherMonth: !day.isCurrentMonth,
              today: day.isToday && day.isCurrentMonth,
            }"
            @click="handleDateClick(day.date)"
          >
            {{ day.date }}
          </button>
        </div>
      </div>
    </div>

    <div class="calendarFooter">
      <BasicButton
        size="x-small"
        type="tertiary"
        label="削除"
        class="footerBtn deleteBtn"
        @click="handleDelete"
      />
      <BasicButton
        size="x-small"
        type="secondary"
        label="今日"
        class="footerBtn todayBtn"
        @click="goToToday"
      />
    </div>
  </div>
</template>
<style scoped>
.calendarPanel {
  width: 360px;
  padding: 16px;
  font-family:
    -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  background: var(--color-background-primary);
  border: 1px solid var(--color-border-divider);
  border-radius: 8px;
  box-shadow: 0 2px 8px 1px rgba(0, 0, 0, 10%);
}

.calendarHeader {
  display: flex;
  gap: 8px;
  align-items: center;
  margin-bottom: 16px;
}

.yearSelectorWrapper {
  width: 180px;
}

.navigationButtonWrapper {
  display: flex;
  gap: 8px;
  align-items: center;
}

.navigationButton {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 44px;
  height: 44px;
  color: var(--color-text-link);
  cursor: pointer;
  background: transparent;
  border: 1px solid var(--color-text-link);
  border-radius: 6px;
  transition: background-color var(--base-duration) var(--easing-out-expo);

  &:hover:not([aria-disabled="true"]) {
    background: var(--color-background-secondary);
  }

  &:focus-visible {
    outline: 4px solid var(--color-border-strong-divider);
    outline-offset: 2px;
    box-shadow: 0 0 0 2px var(--color-focus);
  }

  &[aria-disabled="true"] {
    color: var(--color-text-disabled);
    pointer-events: none;
    background: transparent;
    border-color: var(--color-text-disabled);
  }
}

.navBtn:hover {
  background: var(--color-text-link-);
}

.monthDisplay {
  min-width: 35px;
  font-size: 1rem;
  font-weight: var(--weight-bold);
  color: var(--color-text-secondary);
  text-align: center;
}

.weekdayHeader {
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  gap: 2px;
  margin-bottom: 8px;
}

.weekday {
  padding: 4px;
  font-size: 1rem;
  font-weight: var(--weight-bold);
  color: var(--color-text-description);
  text-align: center;
}

.calendarBody {
  display: grid;
  grid-template-columns: repeat(7, 1fr);
}

.calendarDayWrapper {
  display: grid;
  place-items: center;
  width: 48px;
  height: 48px;
}

.calendarDay {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  aspect-ratio: 1;
  font-size: 1rem;
  color: var(--color-text-body);
  appearance: none;
  cursor: pointer;
  background-color: transparent;
  border: none;
  border-radius: 50%;
  transition: background-color var(--base-duration) var(--easing-out-expo);

  &:hover {
    text-decoration: underline;
    background-color: var(--color-mono-hover);
  }

  &:focus-visible {
    background-color: var(--color-focus);
    outline: 4px solid var(--color-border-strong-divider);
  }
}

.calendarDay.otherMonth {
  visibility: hidden;
}

.calendarDay.today {
  color: var(--color-text-onFill);
  background-color: var(--color-button-normal);

  &:focus-visible {
    border: 2px solid var(--color-focus);
  }
}

.calendarFooter {
  display: flex;
  justify-content: space-between;
  margin-top: 16px;
}

.footerBtn {
  padding: 6px 12px;
  font-size: 12px;
  color: #666;
  cursor: pointer;
  background: white;
  border: 1px solid #ccc;
  border-radius: 4px;
}

.footerBtn:hover {
  background: #f5f5f5;
}

.todayBtn {
  color: #2563eb;
  border-color: #2563eb;
}

.todayBtn:hover {
  background: #eff6ff;
}
</style>
