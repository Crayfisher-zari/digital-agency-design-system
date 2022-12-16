import { h, ref } from "vue";
import TextInput from "../components/TextInput.vue";

export const useNameInput = (arg: {
  label: string;
  placeholder?: string;
  supportText?: string;
  errorText?: string;
  isRequired: boolean;
}) => {
  const name = ref<string>();
  const isChanged = ref<boolean>(false);
  const render = () =>
    h(TextInput, {
      type: "text",
      modelValue: name,
      placeholder: arg.placeholder,
      supportText: arg.supportText,
      errorText: arg.errorText,
    });
  return { name, render };
};
