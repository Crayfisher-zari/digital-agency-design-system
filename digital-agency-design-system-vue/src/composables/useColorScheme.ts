import { readonly, ref, watch, watchEffect } from "vue";

type Props = {
  onChange: (newVal: ColorSheme | null) => void;
};

export type ColorSheme = "light" | "dark";

/**
 * ライトテーマ、ダークテーマを管理します
 */
export const useColorScheme = ({ onChange }: Props) => {
  const colorScheme = ref<ColorSheme | null>(null);

  const changeColorSheme = (color: ColorSheme) => {
    colorScheme.value = color;
  };

  watchEffect(() => {
    if (colorScheme.value === "light") {
      onChange("light");
    } else if (colorScheme.value === "dark") {
      onChange("dark");
    }
  });

  return { colorScheme: readonly(colorScheme), changeColorSheme };
};
