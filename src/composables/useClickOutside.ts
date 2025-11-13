import { onBeforeUnmount, onMounted, type Ref, unref } from "vue";

/**
 * 指定された要素の外側をクリックしたときにコールバックを実行します
 * @param targetRef 監視対象の要素の参照（RefまたはComputedRef、HTMLElement）
 * @param callback 外側をクリックしたときに実行するコールバック関数
 */
export const useClickOutside = (
  targetRef:
    | Ref<HTMLElement | null | undefined>
    | HTMLElement
    | null
    | undefined,
  callback: () => void,
) => {
  const handleClickOutside = (event: MouseEvent) => {
    const element = unref(targetRef);
    if (!element) {
      return;
    }

    const target = event.target as Node | null;
    if (target && !element.contains(target)) {
      callback();
    }
  };

  onMounted(() => {
    document.addEventListener("click", handleClickOutside);
  });

  onBeforeUnmount(() => {
    document.removeEventListener("click", handleClickOutside);
  });
};
