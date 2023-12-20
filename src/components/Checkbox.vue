<script lang="ts" setup generic="T">
import { computed } from "vue";

type Props = {
  /** 格納するリアクティブな値（v-modelでも使える） */
  modelValue: T | T[];
  /** 選択肢固有の値です */
  value: T | undefined;
  /** ボタンのラベルです */
  label: string;
  /** name属性の値です */
  name?: string;
  /** 妥当性 */
  isValid?: boolean;
  /** ボタンが非活性状態か。未指定の場合はfalse */
  isDisabled?: boolean;
};

type Emits = { (e: "update:modelValue", value: T | T[] | undefined): void };

const props = withDefaults(defineProps<Props>(), {
  isDisabled: false,
  isValid: true,
  name: undefined,
});
const emits = defineEmits<Emits>();

const isChecked = computed<boolean>(() => {
  if (typeof props.modelValue === "boolean") {
    return props.modelValue;
  } else if (Array.isArray(props.modelValue)) {
    if (props.modelValue.length === 0 || props.value === undefined) {
      return false;
    }
    return (props.modelValue as T[]).includes(props.value);
  } else {
    return props.modelValue === props.value;
  }
});

// 入力時のコールバック関数です。入力内容をemitして親に伝えられます。
const handleInput = (e: Event) => {
  // checkboxのv-modelの挙動の参考 https://github.com/vuejs/core/blob/49023549257d8962c6e059808067b1b67b398534/packages/runtime-dom/src/directives/vModel.ts#L105
  const checked = (e.target as HTMLInputElement).checked;
  let newValue: T | T[] | undefined;

  if (props.value === undefined) {
    newValue = props.value;
  } else if (Array.isArray(props.modelValue)) {
    // リアクティブな値が配列の場合（複数チェックボックス想定）

    const findIndex = props.modelValue.findIndex(
      (item) => item === props.value,
    );
    const find = findIndex !== -1;

    if (!find && checked) {
      // 配列になく、チェックが入った場合は追加
      newValue = [...props.modelValue, props.value];
    } else if (find && !checked) {
      // 配列にあり、チェックがない場合は削除
      newValue = [...props.modelValue];
      newValue.splice(findIndex, 1);
    } else {
      // 上記以外は変更なし
      newValue = [...props.modelValue];
    }
  } else {
    if (typeof props.value === "boolean") {
      newValue = checked as T;
    } else if (typeof props.value === "string") {
      newValue = checked ? props.value : ("" as T);
    } else {
      newValue = checked ? props.value : undefined;
    }
  }
  emits("update:modelValue", newValue);
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
  <label :class="`${stateClassName ?? ''} `">
    <input
      type="checkbox"
      class="sr-only"
      :value="value"
      :name="name"
      :disabled="isDisabled"
      :onChange="handleInput"
      :checked="isChecked"
    />{{ label }}
    <span class="checkIcon"></span>
  </label>
</template>
<style lang="scss" scoped>
@use "@/assets/style/utils/utils.scss" as *;

label {
  position: relative;
  display: flex;
  align-items: center;
  padding: 8px 0 8px 40px;
  font-size: pxToRem(16);
}

.checkIcon {
  position: absolute;
  left: 4px;
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

.isInvalid {
  color: var(--color-text-alert);

  .checkIcon {
    border-color: var(--color-border-alert);
  }
}

.isDisabled {
  color: var(--color-text-disabled);
}
</style>
