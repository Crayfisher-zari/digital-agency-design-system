import { defineComponent, h, ref } from "vue";
import Pagination from "../components/Pagination.vue";

export const usePagination = () => {
  const pageList = [992, 993, 994, 995, 996, 997, 998];
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
  const render = () =>
    h(Pagination, {
      type:"basic",
      current: current.value,
      max: 999,
      onClickNumber: handleClickNumber,
      onClickNext: handleNext,
      onClickPrevious: handlePrevious,
    });
  const UsePaginationComponent = defineComponent({ render });
  return {
    UsePaginationComponent,
  };
};
