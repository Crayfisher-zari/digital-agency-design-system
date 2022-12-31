import { computed, defineComponent, h, readonly, ref, watch } from "vue";
import TextAreaInput from "../components/TextAreaInput.vue";

export const useTextAreaInput = () => {
  const text = ref<string>("");
  const isChanged = ref<boolean>(false);
  const errorText = ref<string | null>(null);
  const validate = () => {
    // 内容が変更されて、空の場合はinvalid
    if (isChanged.value && text.value === "") {
      errorText.value = "入力必須項目です";
      return;
    }
    // 上記以外ではvalid
    errorText.value = null;
  };

  const isValid = computed(() => errorText.value === null);

  // フォーカスアウト時にバリデートを行う
  const handleBlur = () => {
    validate();
  };

  watch(text, () => {
    // 入力内容が変更されたらisChangedをtrueにする
    if (!isChanged.value && text.value !== "") {
      isChanged.value = true;
    }
  });

  // コンポーネント描画関数
  const render = () =>
    h(TextAreaInput, {
      label: "お問い合わせ詳細",
      modelValue: text.value,
      placeHolder: "パスワードを忘れてしまった",
      supportText: "できる限りくわしくお書きください",
      errorText: errorText.value,
      isRequired: true,
      isValid: isValid.value,
      "onUpdate:modelValue": (value: string) => {
        text.value = value;
      },
      onBlur: handleBlur,
      isDisabled: false,
    });

  const UseTextAreaInputComponent = defineComponent({ render });
  return { text: readonly(text), UseTextAreaInputComponent };
};
