import { computed, ref, h, defineComponent, readonly } from "vue";
import TextInput from "../components/TextInput.vue";

export const useEmailInput = () => {
  const email = ref("");
  const isChanged = ref<boolean>(false);
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const errorText = ref<string | undefined>();
  const validate = () => {
    // 内容が変更されて、空の場合はinvalid
    if (isChanged.value && email.value === "") {
      errorText.value = "必須項目です";
      return;
    }
    if (!email.value.match(emailRegex)) {
      errorText.value = "メールアドレスの形式が正しくありません";
      return;
    }
    // 上記以外ではvalid
    errorText.value = undefined;
  };

  const isValid = computed(() => errorText.value === undefined);

  const handleBlur = () => {
    validate();
  };

  const render = () =>
    h(TextInput, {
      type: "email",
      label: "メールアドレス",
      modelValue: email.value,
      errorText: errorText.value,
      isRequired: true,
      isValid: isValid.value,
      "onUpdate:modelValue": (value: string) => {
        email.value = value;
      },
      onBlur: handleBlur,
    });

  const UseEmailInputComponent = defineComponent({ render });

  return { email: readonly(email), UseEmailInputComponent };
};
