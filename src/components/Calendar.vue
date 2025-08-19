<script lang="ts" setup>
import { ref, computed } from "vue";
import BasicButton from "./BasicButton.vue";
import Selector from "./Selector.vue";
import Icon from "./Icon.vue";
import iconArrowLeft from "@/assets/images/icon_arrow_left.svg";
import iconArrowRight from "@/assets/images/icon_arrow_right.svg";

const currentDate = new Date();
const selectedYear = ref(2025);
const selectedMonth = ref(currentDate.getMonth());

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
  return [
    {
      label: "令和7年",
      value: 2025,
    },
    {
      label: "令和6年",
      value: 2024,
    },
    {
      label: "令和5年",
      value: 2023,
    },
    {
      label: "令和4年",
      value: 2022,
    },
    {
      label: "令和3年",
      value: 2021,
    },
    {
      label: "令和2年",
      value: 2020,
    },
    {
      label: "令和元年 / 平成31年",
      value: 2019,
    },
    {
      label: "平成30年",
      value: 2018,
    },
  ];
});

const calendarDays = computed(() => {
  const year = selectedYear.value;
  const month = selectedMonth.value;
  const firstDay = new Date(year, month, 1);
  const startDate = new Date(firstDay);
  startDate.setDate(startDate.getDate() - firstDay.getDay());

  const days = [];
  const current = new Date(startDate);

  for (let i = 0; i < 42; i++) {
    days.push({
      date: current.getDate(),
      month: current.getMonth(),
      year: current.getFullYear(),
      isCurrentMonth: current.getMonth() === month,
      isToday: current.toDateString() === currentDate.toDateString(),
    });
    current.setDate(current.getDate() + 1);
  }

  return days;
});

const prevMonth = () => {
  if (selectedMonth.value === 0) {
    selectedMonth.value = 11;
    selectedYear.value--;
  } else {
    selectedMonth.value--;
  }
};

const nextMonth = () => {
  if (selectedMonth.value === 11) {
    selectedMonth.value = 0;
    selectedYear.value++;
  } else {
    selectedMonth.value++;
  }
};

const goToToday = () => {
  selectedYear.value = currentDate.getFullYear();
  selectedMonth.value = currentDate.getMonth();
};
</script>
<template>
  <div class="calendarPanel">
    <div class="calendarHeader">
      <Selector v-model="selectedYear" :options="yearList" size="small" />
      <button @click="prevMonth" class="navigationButton">
        <Icon :iconSrc="iconArrowLeft" :width="16" :height="16" />
      </button>
      <span class="monthDisplay">{{ monthNames[selectedMonth] }}</span>
      <button @click="nextMonth" class="navigationButton">
        <Icon :iconSrc="iconArrowRight" :width="16" :height="16" />
      </button>
    </div>

    <div class="calendarGrid">
      <div class="weekdayHeader">
        <div v-for="day in weekdays" :key="day" class="weekday">
          {{ day }}
        </div>
      </div>

      <div class="calendarBody">
        <div
          v-for="(day, index) in calendarDays"
          :key="index"
          class="calendarDay"
          :class="{
            otherMonth: !day.isCurrentMonth,
            today: day.isToday && day.isCurrentMonth,
          }"
        >
          {{ day.date }}
        </div>
      </div>
    </div>

    <div class="calendarFooter">
      <BasicButton
        size="x-small"
        type="tertiary"
        label="削除"
        class="footerBtn deleteBtn"
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

.yearSelect {
  flex: 1;
  padding: 4px 8px;
  font-size: 14px;
  background: white;
  border: 1px solid #ccc;
  border-radius: 4px;
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
}

.navBtn:hover {
  background: #f5f5f5;
}

.monthDisplay {
  min-width: 40px;
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

.calendarDay {
  display: flex;
  align-items: center;
  justify-content: center;
  aspect-ratio: 1;
  font-size: 1rem;
  color: var(--color-text-body);
  cursor: pointer;
  border-radius: 50%;
  transition: background-color var(--base-duration) var(--easing-out-expo);
}

.calendarDay:hover {
  background: var(--color-mono-hover);
}

.calendarDay.otherMonth {
  visibility: hidden;
}

.calendarDay.today {
  color: var(--color-text-onFill);
  background: var(--color-button-normal);
}

.calendarDay.today:hover {
  background: var(--color-button-hover);
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
