import { Ref, onBeforeUnmount, onMounted, ref } from "vue";

/**
 * ドロップダウンメニューのアニメーションを行います。
 * exampleのようなdetails/summaryタグで作成されていることを前提としています
 * @example
 * <details ref="detailsElement">
 *   <summary></summary>
 *   <div ref="contentsElement">
 *     <div ref="contentsInnerElement">
 *     </div>
 *   </div>
 * </details>
 */
export const useDropDownAnimation = (
  detailsElement: Ref<HTMLDetailsElement | null>,
  contentsElement: Ref<HTMLElement | null>,
  contentsInnerElement: Ref<HTMLElement | null>,
) => {
  const isOpened = ref<boolean | null>(null);
  const hasAnimation = ref<boolean>(true);

  /**
   * アコーディオンの開閉イベント
   */
  const handleDropDown = (e: Event) => {
    if (
      // prefers-reduced-motionの場合はアニメーションなし。デフォルトの挙動
      matchMedia("(prefers-reduced-motion:reduce)").matches ||
      !detailsElement.value ||
      !contentsElement.value ||
      !contentsInnerElement.value
    ) {
      return;
    }
    e.preventDefault();

    // 補足：クリック実行時はその直前の状態なので、開く動作のときはisOpenがfalseになる
    const isOpen = detailsElement.value.open;

    const details = detailsElement.value;
    const contents = contentsElement.value;
    const contentsInner = contentsInnerElement.value;

    if (isOpen) {
      // 閉じるとき
      isOpened.value = false;
      contents.style.height = `0px`;
    } else {
      isOpened.value = true;
      details.setAttribute("open", "true");
      // 内部の要素の高さを取得
      const height = contentsInner.offsetHeight;
      contents.style.height = `${height}px`;
    }
  };

  const removeOpenAttribute = () => {
    if (isOpened.value === false && detailsElement.value) {
      detailsElement.value.removeAttribute("open");
    }
  };

  onMounted(() => {
    if (matchMedia("(prefers-reduced-motion:reduce)").matches) {
      // reduce-motionが有効な場合はアニメーションをしない
      hasAnimation.value = false;
    }
    if (
      !matchMedia("(prefers-reduced-motion:reduce)").matches &&
      contentsElement.value
    ) {
      const contents = contentsElement.value;

      // 初期化のために閉じておく
      contents.style.height = `0px`;

      // 閉じるトランジションが終了したらopen属性を取り除く
      contents.addEventListener("transitionend", removeOpenAttribute);
    }
  });
  onBeforeUnmount(() => {
    if (!contentsElement.value) {
      return;
    }
    contentsElement.value.removeEventListener(
      "transitionend",
      removeOpenAttribute,
    );
  });

  return { isOpened, hasAnimation, handleDropDown };
};
