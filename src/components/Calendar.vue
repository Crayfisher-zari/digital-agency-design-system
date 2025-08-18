<script lang="ts" setup>
import { ref, computed } from 'vue'

const currentDate = new Date()
const selectedYear = ref(currentDate.getFullYear())
const selectedMonth = ref(currentDate.getMonth())

const monthNames = ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月']
const weekdays = ['日', '月', '火', '水', '木', '金', '土']

const displayYearMonth = computed(() => `${selectedYear.value}年(令和${selectedYear.value - 2018}年)`)

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
  <div class="calendar-panel">
    <div class="calendar-header">
      <select v-model="selectedYear" class="year-select">
        <option v-for="year in Array.from({length: 10}, (_, i) => currentDate.getFullYear() - 5 + i)" 
                :key="year" :value="year">
          {{ year }}年(令和{{ year - 2018 }}年)
        </option>
      </select>
      <button @click="prevMonth" class="nav-btn">‹</button>
      <span class="month-display">{{ monthNames[selectedMonth] }}</span>
      <button @click="nextMonth" class="nav-btn">›</button>
    </div>

    <div class="calendar-grid">
      <div class="weekday-header">
        <div v-for="day in weekdays" :key="day" class="weekday">
          {{ day }}
        </div>
      </div>
      
      <div class="calendar-body">
        <div v-for="(day, index) in calendarDays" 
             :key="index" 
             class="calendar-day"
             :class="{ 
               'other-month': !day.isCurrentMonth,
               'today': day.isToday && day.isCurrentMonth
             }">
          {{ day.date }}
        </div>
      </div>
    </div>

    <div class="calendar-footer">
      <button class="footer-btn delete-btn">削除</button>
      <button @click="goToToday" class="footer-btn today-btn">今日</button>
    </div>
  </div>
</template>
<style scoped>
.calendar-panel {
  width: 280px;
  background: white;
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  padding: 16px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
}

.calendar-header {
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 16px;
}

.year-select {
  flex: 1;
  padding: 4px 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 14px;
  background: white;
}

.nav-btn {
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

.nav-btn:hover {
  background: #f5f5f5;
}

.month-display {
  font-size: 14px;
  font-weight: 500;
  min-width: 40px;
  text-align: center;
}

.weekday-header {
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

.calendar-body {
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  gap: 2px;
}

.calendar-day {
  aspect-ratio: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  cursor: pointer;
  border-radius: 4px;
  transition: background-color 0.2s;
}

.calendar-day:hover {
  background: #f5f5f5;
}

.calendar-day.other-month {
  color: #ccc;
}

.calendar-day.today {
  background: #2563eb;
  color: white;
  font-weight: 600;
}

.calendar-day.today:hover {
  background: #1d4ed8;
}

.calendar-footer {
  display: flex;
  justify-content: space-between;
  margin-top: 16px;
}

.footer-btn {
  padding: 6px 12px;
  border: 1px solid #ccc;
  border-radius: 4px;
  background: white;
  cursor: pointer;
  font-size: 12px;
  color: #666;
}

.footer-btn:hover {
  background: #f5f5f5;
}

.today-btn {
  border-color: #2563eb;
  color: #2563eb;
}

.today-btn:hover {
  background: #eff6ff;
}
</style>