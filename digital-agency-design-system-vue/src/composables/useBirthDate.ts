import { computed, defineComponent, h, readonly, ref } from "vue";
import YMDInput from "../components/YMDInput.vue";

type Arg = {
  label: string;
  supportText?: string;
  isRequired?: boolean;
};

export const useBirthDate = ({ label, supportText, isRequired }: Arg) => {
  const year = ref<string | null>(null);
  const month = ref<string | null>(null);
  const day = ref<string | null>(null);
  const isValid = ref(true);
  const errorText = ref("");

  const numberedYear = computed<number | null>(() => {
    const yearStr = year.value;
    if (Number.isNaN(Number(yearStr)) || yearStr === null) {
      return null;
    }
    return Number(yearStr);
  });

  const numberedMonth = computed<number | null>(() => {
    const monthStr = month.value;
    if (Number.isNaN(Number(monthStr)) || monthStr === null) {
      return null;
    }
    return Number(monthStr);
  });

  const numberedDay = computed<number | null>(() => {
    const dayStr = day.value;
    if (Number.isNaN(Number(dayStr)) || dayStr === null) {
      return null;
    }
    return Number(dayStr);
  });

  // バリデーション
  const handleOnBlur = () => {
    const regex = /[０-９|0-9]/g;
    if (
      (year.value && !year.value.match(regex) && year.value !== "") ||
      (month.value && !month.value.match(regex) && month.value !== "") ||
      (day.value && !day.value.match(regex) && day.value !== "")
    ) {
      isValid.value = false;
      errorText.value = "半角数字で入力してください";
      return;
    }
    if (numberedYear.value && numberedYear.value < 1900) {
      isValid.value = false;
      errorText.value = "正しい年を入力してください";
      return;
    }
    if (
      numberedMonth.value === 2 &&
      (numberedDay.value === 30 || numberedDay.value === 31)
    ) {
      isValid.value = false;
      errorText.value = "正しい月日を入力してください";
      return;
    }
    if (
      numberedMonth.value === 0 ||
      (numberedMonth.value && numberedMonth.value > 12) ||
      numberedDay.value === 0 ||
      (numberedDay.value && numberedDay.value > 31)
    ) {
      isValid.value = false;
      errorText.value = "正しい月日を入力してください";
      return;
    }

    // いずれのテストにもパスする
    isValid.value = true;
    errorText.value = "";
  };

  const render = () =>
    h(YMDInput, {
      "onUpdate:year": (value: string) => {
        year.value = value;
      },
      "onUpdate:month": (value: string) => {
        month.value = value;
      },
      "onUpdate:day": (value: string) => {
        day.value = value;
      },
      year,
      month,
      day,
      supportText,
      isRequired,
      label,
      isValid: isValid.value,
      errorText: errorText.value,
      onBlur: handleOnBlur,
    });
  const UseBirthDateComponent = defineComponent({ render });
  return {
    year: readonly(year),
    month: readonly(month),
    day: readonly(day),
    numberedYear: readonly(numberedYear),
    numberedMonth: readonly(numberedMonth),
    numberedDay: readonly(numberedDay),
    UseBirthDateComponent,
  };
};
