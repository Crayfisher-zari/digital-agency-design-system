import { computed } from "vue";

/** カスタムカラー。個別で指定したい場合 */
export type CustomColor =
  | {
      /** 背景色 */
      backgroundColor: string;
      /** 枠線色 */
      borderColor?: string;
      /** ラベル文字の色 */
      labelColor: string;
      /** ホバー時の背景色 */
      hoverBackgroundColor: string;
      /** ホバー時の枠線色 */
      hoverBorderColor?: string;
      /** ホバー時のラベル文字色 */
      hoverLabelColor: string;
      /** アクティブ時の背景色 */
      activeBackGroundColor?: string;
      /** アクティブ時の枠線色 */
      activeBorderColor?: string;
      /** アクティブ時のラベル文字色 */
      activeLabelColor?: string;
    }
  | undefined;

export const useButtonColor = (customColor: CustomColor) => {
  const customBackgroundColor = computed<string>(
    () => customColor?.backgroundColor ?? "",
  );

  const customHoverBackgroundColor = computed<string>(
    () => customColor?.hoverBackgroundColor ?? "",
  );

  const customLabelColor = computed<string>(
    () => customColor?.labelColor ?? "",
  );

  const customHoverLabelColor = computed<string>(
    () => customColor?.hoverLabelColor ?? "",
  );

  const customBorderColor = computed<string>(() => {
    if (!customColor) {
      return "";
    } else if (!customColor.borderColor) {
      return customColor.backgroundColor;
    } else {
      return customColor.borderColor;
    }
  });

  const customHoverBorderColor = computed<string>(() => {
    if (!customColor) {
      return "";
    } else if (!customColor.hoverBorderColor) {
      return customColor.hoverBackgroundColor;
    } else {
      return customColor.hoverBorderColor;
    }
  });

  const customActiveBackgroundColor = computed<string>(() => {
    if (!customColor) {
      return "";
    } else if (!customColor.activeBackGroundColor) {
      return customColor.hoverBackgroundColor;
    } else {
      return customColor.activeBackGroundColor;
    }
  });

  const customActiveLabelColor = computed<string>(() => {
    if (!customColor) {
      return "";
    } else if (!customColor.activeLabelColor) {
      return customColor.labelColor;
    } else {
      return customColor.activeLabelColor;
    }
  });

  const customActiveBorderColor = computed<string>(() => {
    if (!customColor) {
      return "";
    } else if (!customColor.activeBorderColor) {
      return customColor.borderColor ?? "";
    } else {
      return customColor.activeBorderColor;
    }
  });

  return {
    customBackgroundColor,
    customHoverBackgroundColor,
    customLabelColor,
    customHoverLabelColor,
    customBorderColor,
    customHoverBorderColor,
    customActiveBackgroundColor,
    customActiveLabelColor,
    customActiveBorderColor,
  };
};
