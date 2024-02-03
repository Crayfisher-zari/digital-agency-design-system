import { computed, defineComponent, h, readonly, ref, watch } from "vue";
import TextAreaInput from "../components/TextAreaInput.vue";
import { countCharacters } from "../utils/countCharacters";

type Arg = {
  label: string;
  placeHolder?: string;
  supportText?: string;
  isRequired: boolean;
  maxCount?: number;
};
export const useTextAreaInput = ({
  label,
  placeHolder,
  supportText,
  isRequired,
  maxCount,
}: Arg) => {
  const text = ref<string>("");
  const numberOfCharacters = computed(() => countCharacters(text.value));
  const isChanged = ref<boolean>(false);
  const errorText = ref<string | null>(null);

  const validate = () => {
    // 内容が変更されて、空の場合はinvalid
    if (isChanged.value && text.value === "") {
      errorText.value = "入力必須項目です";
      isValid.value = false;
      return;
    }
    // 文字数が上限を超えた場合はinvalid
    if (maxCount && numberOfCharacters.value > maxCount) {
      // errorText.value ="最大文字数を超えています";
      isValid.value = false;
      return;
    }
    // 上記以外ではvalid
    isValid.value = true;
    errorText.value = null;
  };

  const isValid = ref(true);

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
      label,
      modelValue: text.value,
      placeHolder,
      supportText,
      errorText: errorText.value,
      isRequired,
      isValid: isValid.value,
      maxCount,
      numberOfCharacters: numberOfCharacters.value,
      "onUpdate:modelValue": (value: string) => {
        text.value = value;
      },
      onBlur: handleBlur,
      isDisabled: false,
    });

  const UseTextAreaInputComponent = defineComponent({ render });
  return { text: readonly(text), UseTextAreaInputComponent };
};
