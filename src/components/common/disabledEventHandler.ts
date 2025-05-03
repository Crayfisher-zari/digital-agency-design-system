/**
 * 非活性時のイベントハンドラー
 */
export const disabledEventHandler = (e: MouseEvent | KeyboardEvent) => {
  if (e instanceof KeyboardEvent) {
    if (e.key !== "Tab") {
      e.preventDefault();
      e.stopPropagation();
    }
  } else {
    e.preventDefault();
    e.stopPropagation();
  }
};
