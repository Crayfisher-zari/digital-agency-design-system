<script lang="ts" setup>
import { computed} from "vue";

type Props = {
  /** デフォルト型かタイル型か */
  radioStyle?: "default" | "tile";
  /** 格納するリアクティブな値（v-modelでも使える） */
  modelValue: string | null;
  /** 選択肢固有の値です */
  radioValue: string;
  /** ボタンのラベルです */
  label: string;
  /** name属性の値です */
  name: string;
  /** サブテキスト */
  subText?: string;
  /** 妥当性 */
  isValid?: boolean;
  /** ボタンが非活性状態か。未指定の場合はfalse */
  isDisabled?: boolean;
};

type Emits = { (e: "update:modelValue", value: string): void };

const props = withDefaults(defineProps<Props>(), {
  radioStyle: "default",
  isDisabled: false,
  isValid: true,
});
const emits = defineEmits<Emits>();

const checked = computed<boolean>(() => props.modelValue === props.radioValue);

// 入力時のコールバック関数です。入力内容をemitして親に伝えられます。
const handleInput = (e: Event) => {
  emits("update:modelValue", (e.target as HTMLInputElement).value);
};

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
</script>
<template>
  <label
    :class="`${radioStyle} ${stateClassName ?? ''} ${checked ? 'checked' : ''}`"
  >
    <input
      type="radio"
      class="sr-only"
      :value="radioValue"
      :onChange="handleInput"
      :name="name"
      :disabled="isDisabled"
      :checked="checked"
    />{{ label }}
    <span
      v-if="radioStyle === 'tile' && subText !== undefined"
      class="subText"
      >{{ subText }}</span
    >
    <span class="radioIcon"></span>
  </label>
</template>
<style lang="scss" scoped>
label {
  position: relative;

  padding: 8px 0 8px 40px;
  font-size: 1rem;
}

.radioIcon {
  width: 19px;
  height: 19px;
  display: block;
  position: absolute;
  left: 4px;
  border: 2px solid var(--color-icon-label);
  border-radius: 50%;
  background-color: #fff;
  &:after {
    content: "";
    display: block;
    position: absolute;
    width: 9px;
    height: 9px;
    top: 3px;
    left: 3px;
    border-radius: 50%;
    background-color: transparent;
  }
}
input:checked ~ .radioIcon {
  border-color: var(--color-icon-active);
  &:after {
    background-color: var(--color-icon-active);
  }
}

input:disabled ~ .radioIcon {
  border-color: var(--color-border-disabled);
}

input:disabled:checked ~ .radioIcon {
  &:after {
    background-color: var(--color-border-disabled);
  }
}
.isInvalid {
  color: var(--color-text-alert);
  .radioIcon {
    border-color: var(--color-border-alert);
  }
}

.isDisabled {
  color: var(--color-text-disabled);
}

.subText {
  display: block;
  font-size: 0.75rem;
  color: var(--color-text-description);
}

.default {
  display: flex;
  align-items: center;
}

.tile {
  display: grid;
  padding: 16px 0 16px 56px;
  border: 2px solid var(--color-border-field);
  border-radius: 8px;
  background-color: var(--color-background-primary);
  .radioIcon {
    left: 20px;
    align-self: center;
  }
  &.isInvalid {
    border-color: var(--color-border-alert);
  }
  &.checked {
    border-color: var(--color-border-selected);
  }
  &.isDisabled {
    border-color: var(--color-border-disabled);
    .subText {
      color: var(--color-text-disabled);
    }
  }
}
</style>
