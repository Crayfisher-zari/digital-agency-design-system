import { defineComponent, h, readonly, ref } from "vue";
import Pagination from "../components/Pagination.vue";

export const usePagination = () => {
  const current = ref(995);
  const min = 1;
  const max = 999;
  const handleNext = () => {
    if (current.value === max) {
      return;
    }
    current.value++;
  };
  const handlePrevious = () => {
    if (current.value === min) {
      return;
    }
    current.value--;
  };
  const handleClickNumber = (number: number) => {
    current.value = number;
  };
  const handleClickFirst = () => {
    current.value = min;
  };
  const handleClickEnd = () => {
    current.value = max;
  };
  const render = () =>
    h(Pagination, {
      type: "basic",
      current: current.value,
      min,
      max,
      onClickNumber: handleClickNumber,
      onClickNext: handleNext,
      onClickPrevious: handlePrevious,
      onClickFirst: handleClickFirst,
      onClickEnd: handleClickEnd,
    });
  const UsePaginationComponent = defineComponent({ render });
  return {
    pageNumber: readonly(current),
    UsePaginationComponent,
  };
};
