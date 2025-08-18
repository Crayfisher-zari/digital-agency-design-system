<script lang="ts" setup>
import { ref, computed } from 'vue'
import BasicButton from './BasicButton.vue'
import Selector from './Selector.vue'

const currentDate = new Date()
const selectedYear = ref(2025)
const selectedMonth = ref(currentDate.getMonth())

const monthNames = ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月']
const weekdays = ['日', '月', '火', '水', '木', '金', '土']

const displayYearMonth = computed(() => `${selectedYear.value}年(令和${selectedYear.value - 2018}年)`)

const yearList = computed(() => {
  return [
    {
      label: '令和7年',
      value: 2025
    },
    {
      label: '令和6年',
      value: 2024
    },
    {
      label: '令和5年',
      value: 2023
    },
    {
      label: '令和4年',
      value: 2022
    },
    {
      label: '令和3年',
      value: 2021
    },
    {
      label: '令和2年',
      value: 2020
    },
    {
      label: '令和元年 / 平成31年',
      value: 2019
    },
    {
      label: '平成30年',
      value: 2018
    },
    
  ]
})

const calendarDays = computed(() => {
  const year = selectedYear.value
  const month = selectedMonth.value
  const firstDay = new Date(year, month, 1)
  const lastDay = new Date(year, month + 1, 0)
  const startDate = new Date(firstDay)
  startDate.setDate(startDate.getDate() - firstDay.getDay())
  
  const days = []
  const current = new Date(startDate)
  
  for (let i = 0; i < 42; i++) {
    days.push({
      date: current.getDate(),
      month: current.getMonth(),
      year: current.getFullYear(),
      isCurrentMonth: current.getMonth() === month,
      isToday: current.toDateString() === currentDate.toDateString()
    })
    current.setDate(current.getDate() + 1)
  }
  
  return days
})

const prevMonth = () => {
  if (selectedMonth.value === 0) {
    selectedMonth.value = 11
    selectedYear.value--
  } else {
    selectedMonth.value--
  }
}

const nextMonth = () => {
  if (selectedMonth.value === 11) {
    selectedMonth.value = 0
    selectedYear.value++
  } else {
    selectedMonth.value++
  }
}

const goToToday = () => {
  selectedYear.value = currentDate.getFullYear()
  selectedMonth.value = currentDate.getMonth()
}
</script>
<template>
  <div class="calendarPanel">
    <div class="calendarHeader">
      <Selector v-model="selectedYear" :options="yearList" size="small" />
      <button @click="prevMonth" class="navBtn">‹</button>
      <span class="monthDisplay">{{ monthNames[selectedMonth] }}</span>
      <button @click="nextMonth" class="navBtn">›</button>
    </div>

    <div class="calendarGrid">
      <div class="weekdayHeader">
        <div v-for="day in weekdays" :key="day" class="weekday">
          {{ day }}
        </div>
      </div>
      
      <div class="calendarBody">
        <div v-for="(day, index) in calendarDays" 
             :key="index" 
             class="calendarDay"
             :class="{ 
               'otherMonth': !day.isCurrentMonth,
               'today': day.isToday && day.isCurrentMonth
             }">
          {{ day.date }}
        </div>
      </div>
    </div>

    <div class="calendarFooter">
      <BasicButton size="x-small" type="tertiary" label="削除" class="footerBtn deleteBtn" />
      <BasicButton size="x-small" type="secondary" label="今日" class="footerBtn todayBtn" @click="goToToday" />
    </div>
  </div>
</template>
<style scoped>
.calendarPanel {
  width: 360px;
  background: var(--color-background-primary);
  border: 1px solid var(--color-border-divider);
  border-radius: 8px;
  padding: 16px;
  box-shadow: 0 2px 8px 1px rgba(0, 0, 0, 0.1);
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
}

.calendarHeader {
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 16px;
}

.yearSelect {
  flex: 1;
  padding: 4px 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 14px;
  background: white;
}

.navBtn {
  width: 32px;
  height: 32px;
  border: 1px solid #ccc;
  border-radius: 4px;
  background: white;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 16px;
  color: #666;
}

.navBtn:hover {
  background: #f5f5f5;
}

.monthDisplay {
  font-size: 14px;
  font-weight: 500;
  min-width: 40px;
  text-align: center;
}

.weekdayHeader {
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  gap: 2px;
  margin-bottom: 8px;
}

.weekday {
  text-align: center;
  font-size: 12px;
  color: #666;
  padding: 4px;
  font-weight: 500;
}

.calendarBody {
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  gap: 2px;
}

.calendarDay {
  aspect-ratio: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  cursor: pointer;
  border-radius: 4px;
  transition: background-color 0.2s;
}

.calendarDay:hover {
  background: #f5f5f5;
}

.calendarDay.otherMonth {
  visibility: hidden;
}

.calendarDay.today {
  background: #2563eb;
  color: white;
  font-weight: 600;
}

.calendarDay.today:hover {
  background: #1d4ed8;
}

.calendarFooter {
  display: flex;
  justify-content: space-between;
  margin-top: 16px;
}

.footerBtn {
  padding: 6px 12px;
  border: 1px solid #ccc;
  border-radius: 4px;
  background: white;
  cursor: pointer;
  font-size: 12px;
  color: #666;
}

.footerBtn:hover {
  background: #f5f5f5;
}

.todayBtn {
  border-color: #2563eb;
  color: #2563eb;
}

.todayBtn:hover {
  background: #eff6ff;
}
</style>