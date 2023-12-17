import { readonly, ref } from "vue";

/**
 * ドロワーを制御します
 */
export const useDrawer = () => {
  const isVisible = ref<boolean>(false);

  const showDrawer = () => {
    isVisible.value = true;
  };

  const hideDrawer = () => {
    isVisible.value = false;
  };

  return {
    isVisible: readonly(isVisible),
    showDrawer,
    hideDrawer,
  };
};
