import { defineComponent, h, readonly, ref } from "vue";
import Pagination from "../components/Pagination.vue";

export const usePagination = () => {
  const current = ref(995);
  const handleNext = () => {
    current.value++;
  };
  const handlePrevious = () => {
    current.value--;
  };
  const handleClickNumber = (number: number) => {
    current.value = number;
  };
  const handleClickFirst = () => {
    current.value = 1;
  };
  const handleClickEnd = () => {
    current.value = 999;
  };
  const render = () =>
    h(Pagination, {
      type: "basic",
      current: current.value,
      min: 1,
      max: 999,
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
