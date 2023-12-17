/**
 * 画面のスクロールを制御します
 */
export const useScrollLock = () => {
  const lockScroll = () => {
    document.body.style.overflow = "hidden";
    // スクロールバーのガタツキ対策
    const element = document.querySelector<HTMLElement>(".scrollbar-gutter");
    if (element) {
      element.style.scrollbarGutter = "stable";
    }
  };

  const releaseScroll = () => {
    document.body.style.overflow = "visible";
    // スクロールバーのガタツキ対策
    const element = document.querySelector<HTMLElement>(".scrollbar-gutter");
    if (element) {
      element.style.scrollbarGutter = "auto";
    }
  };

  return {
    lockScroll,
    releaseScroll,
  };
};
