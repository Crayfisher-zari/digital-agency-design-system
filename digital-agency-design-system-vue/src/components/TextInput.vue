<script lang="ts" setup>
type Props = {
  /** 値（v-modelで双方向する想定） */
  modelValue: string;
  /** インプットのラベルです */
  label: string;
  /** テキスト入力のタイプです。未指定の場合はtextになります */
  type:
    | "text"
    | "email"
    | "tel"
    | "number"
    | "password"
    | "date"
    | "datetime-local";
  /** プレースホルダのテキストです */
  placeHolder?: string;
  /** 必須かどうか。未指定の場合はfalse */
  isRequired?: boolean;
  /** 妥当性 */
  isValid?: boolean;
};

type Emits = { (e: "update:modelValue", value: string): void };

const props = withDefaults(defineProps<Props>(), {
  type: "text",
  isRequired: false,
  isValid: true,
});

const emits = defineEmits<Emits>();

const handleInput = (e: Event) => {
  emits("update:modelValue", (e.target as HTMLInputElement).value);
};
</script>
<template>
  <label class="textInputWrapper" :class="!props.isValid ? 'isInvalid' : null">
    <span class="labelWrapper"
      ><span class="label">{{ props.label }}</span
      ><span v-show="props.isRequired" class="requiredText">必須</span></span
    >
    <input
      class="textInput"
      :value="props.modelValue"
      :type="props.type"
      :placeholder="props.placeHolder"
      :onInput="handleInput"
    />
  </label>
</template>

<style lang="scss" scoped>
.textInputWrapper {
  display: block;
}

.labelWrapper {
  display: flex;
  justify-content: flex-start;
  align-items: center;
}

.label {
  font-size: 0.875rem;
}

.requiredText {
  font-size: 0.75rem;
  color: var(--color-text-alert);
  margin-left: 8px;
}

.textInput {
  border-radius: 8px;
  padding: 12px 16px;

  &:invalid {
    border-color: var(--color-status-alert);
  }
}
</style>
