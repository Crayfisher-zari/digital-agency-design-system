import { computed, defineComponent, h, readonly, ref, watch } from "vue";
import TextInput from "../components/TextInput.vue";

/**
 * 電話番号のインプットコンポーネントを作成するcomposableです
 */
export const useTelInput = () => {
  const tel = ref<string>("");
  const isChanged = ref<boolean>(false);
  const errorText = ref<string | undefined>();
  const validate = () => {
    // 内容が変更されて、空の場合はinvalid
    if (isChanged.value && tel.value === "") {
      errorText.value = "必須項目です";
      return;
    }
    if (tel.value.length > 11) {
      errorText.value = "10桁以内で入力してください";
      return;
    }
    // 上記以外ではvalid
    errorText.value = undefined;
  };

  const isValid = computed(() => errorText.value === undefined);

  // フォーカスアウト時にハイフン削除とバリデートを行う
  const handleBlur = () => {
    tel.value = tel.value.replaceAll("-", "");
    validate();
  };

  watch(tel, () => {
    // 入力内容が変更されたらisChangedをtrueにする
    if (!isChanged.value && tel.value !== "") {
      isChanged.value = true;
    }
  });

  // コンポーネント描画関数
  const render = () =>
    h(TextInput, {
      type: "tel",
      label: "電話番号",
      modelValue: tel.value,
      placeHolder: "0123456789",
      supportText: "日中に連絡のつきやすい電話番号を記入します。",
      errorText: errorText.value,
      isRequired: true,
      isValid: isValid.value,
      "onUpdate:modelValue": (value: string) => {
        tel.value = value;
      },
      onBlur: handleBlur,
      isDisabled: true,
    });

  const UseTelInputComponent = defineComponent({ render });
  return { tel: readonly(tel), UseTelInputComponent };
};
