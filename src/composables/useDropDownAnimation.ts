import { onBeforeUnmount, onMounted, ref, useTemplateRef } from "vue";

/**
 * ドロップダウンメニューのアニメーションを行います。
 * contentsElementにtransitionが設定されていると開閉アニメーションします。
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
export const useDropDownAnimation = () => {
  const detailsElement = useTemplateRef<HTMLDetailsElement | null>(
    "detailsElement",
  );
  const contentsElement = useTemplateRef<HTMLElement | null>("contentsElement");
  const contentsInnerElement = useTemplateRef<HTMLElement | null>(
    "contentsInnerElement",
  );

  const isOpened = ref<boolean | null>(null);
  const hasAnimation = ref<boolean>(true);

  /**
   * アコーディオンの開閉イベント
   */
  const handleDropDown = (e: Event) => {
    if (
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
      if (!hasAnimation.value) {
        removeOpenAttribute();
      }
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
    if (contentsElement.value) {
      const contents = contentsElement.value;

      // 初期化のために閉じておく
      contents.style.height = `0px`;
      if (getComputedStyle(contents).transitionDuration === "0s") {
        // トランジションがない場合はアニメーションをしない
        hasAnimation.value = false;
      } else {
        // 閉じるトランジションが終了したらopen属性を取り除く
        contents.addEventListener("transitionend", removeOpenAttribute);
      }
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

  return {
    detailsElement,
    contentsElement,
    contentsInnerElement,
    isOpened,
    hasAnimation,
    handleDropDown,
  };
};
