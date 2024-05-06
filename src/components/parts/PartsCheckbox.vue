<script lang="ts" setup generic="T">
import { computed } from "vue";

type Props = {
  /** v-modelの型です */
  modelValue: T | T[];
  /** 選択肢固有の値です */
  value: T | undefined;
  /** name属性の値です */
  name?: string;
  /** 妥当性 */
  isValid?: boolean;
  /** ボタンが非活性状態か。未指定の場合はfalse */
  isDisabled?: boolean;
};
const model = defineModel<T | T[] | undefined>();

// チェック状態を通知します
const emits = defineEmits<{ changeCheck: [value: boolean] }>();

const props = withDefaults(defineProps<Props>(), {
  isDisabled: false,
  name: undefined,
  isValid: true,
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
</script>
<template>
  <input
    v-model="model"
    type="checkbox"
    class="sr-only"
    :value
    :name
    :disabled="isDisabled"
    @change="handleChange"
  />
  <span class="checkIcon" :class="stateClassName"></span>
</template>
<style scoped lang="scss">
.checkIcon {
  position: relative;
  display: block;
  width: 19px;
  height: 19px;
  background-color: #fff;
  border: 2px solid var(--color-icon-label);
  border-radius: 3px;

  &::after {
    position: absolute;
    top: 0;
    left: 0;
    display: block;
    width: 100%;
    height: 100%;
    content: "";
    background-image: url("@/assets/images/icon_check.svg");
    background-position: center center;
    background-size: 18px 18px;
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
  outline: 2px solid var(--color-border-focused);
  outline-offset: 2px;
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
</style>
