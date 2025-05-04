<script lang="ts" setup generic="T">
import { computed, useTemplateRef, watchEffect } from "vue";

type Props = {
  /** サイズ */
  size?: "large" | "medium" | "small";
  /** v-modelの型です */
  modelValue: T | T[];
  /** 選択肢固有の値です */
  value: T | undefined;
  /** name属性の値です */
  name?: string;
  /** 妥当性 */
  isValid?: boolean;
  /** 不確定状態か */
  isIndeterminate?: boolean;
  /** ボタンが非活性状態か。未指定の場合はfalse */
  isDisabled?: boolean;
};
const model = defineModel<T | T[] | undefined>();

const inputElement = useTemplateRef<HTMLInputElement>("inputRef");

// チェック状態を通知します
const emits = defineEmits<{ changeCheck: [value: boolean] }>();

const props = withDefaults(defineProps<Props>(), {
  size: "medium",
  isDisabled: false,
  name: undefined,
  isValid: true,
  isIndeterminate: false,
});

// 状態に応じたクラス名を返します
const stateClassName = computed<string | null>(() => {
  if (props.isDisabled) {
    return "isDisabled";
  }
  if (!props.isValid) {
    return "isInvalid";
  }
  return null;
});

const handleChange = (e: Event) => {
  emits("changeCheck", (e.target as HTMLInputElement).checked);
};

watchEffect(() => {
  if (props.isIndeterminate && inputElement.value) {
    inputElement.value.indeterminate = true;
  } else {
    if (inputElement.value) {
      inputElement.value.indeterminate = false;
    }
  }
});
</script>
<template>
  <input
    ref="inputRef"
    v-model="model"
    type="checkbox"
    class="sr-only"
    :value="props.value"
    :name="name"
    :disabled="isDisabled"
    @change="handleChange"
  />
  <span class="checkIcon" :class="[stateClassName, size]"></span>
</template>
<style scoped lang="scss">
.checkIcon {
  position: relative;
  display: block;
  width: 19px;
  height: 19px;
  background-color: #fff;
  border: 2px solid var(--color-icon-label);
  border-radius: 2px;

  &::after {
    position: absolute;
    top: 0;
    left: 0;
    display: block;
    width: 100%;
    height: 100%;
    content: "";
    background-image: url("@/assets/images/icon_check.svg");
    background-repeat: no-repeat;
    background-position: center center;
    background-size: 18px 18px;
  }

  &.small {
    width: 17px;
    height: 17px;
    border-radius: 2px;

    &::after {
      background-size: 16px 16px;
    }
  }

  &.large {
    width: 31px;
    height: 31px;
    border-radius: 4px;

    &::after {
      background-size: 30px 30px;
    }
  }
}

input:checked ~ .checkIcon {
  background-color: var(--color-icon-active);
  border-color: var(--color-icon-active);

  &::after {
    background-color: var(--color-icon-active);
  }
}

input:focus-visible ~ .checkIcon {
  outline: 4px solid var(--color-text-body);
  outline-offset: 2px;
  box-shadow: 0 0 2px 2px var(--color-focus) !important;
}

input:disabled ~ .checkIcon {
  border-color: var(--color-border-disabled);
}

input:disabled:checked ~ .checkIcon {
  &::after {
    background-color: var(--color-border-disabled);
  }
}

input:checked ~ .checkIcon.isInvalid {
  background-color: var(--color-border-alert);
  border-color: var(--color-border-alert);

  &::after {
    background-color: var(--color-border-alert);
  }
}

.checkIcon.isInvalid {
  border-color: var(--color-border-alert);
}

input:indeterminate ~ .checkIcon {
  background-color: var(--color-icon-active);
  border-color: var(--color-icon-active);

  &::after {
    background-image: url("@/assets/images/icon_check_indeterminate.svg");
    background-size: 11px 2px;
  }
}
</style>
