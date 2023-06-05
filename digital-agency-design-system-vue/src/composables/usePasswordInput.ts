import { computed, ref, h, defineComponent, readonly } from "vue";
import TextInput from "../components/TextInput.vue";

export const usePasswordInput = () => {
  const password = ref("");
  const errorText = ref<string | undefined>();

  const isValid = computed(() => errorText.value === undefined);

  const render = () =>
    h(TextInput, {
      type: "password",
      label: "パスワード",
      modelValue: password.value,
      errorText: errorText.value,
      isRequired: true,
      isValid: isValid.value,
      "onUpdate:modelValue": (value: string) => {
        password.value = value;
      },
    });

  const UsePasswordInputComponent = defineComponent({ render });

  return { password: readonly(password), UsePasswordInputComponent };
};
