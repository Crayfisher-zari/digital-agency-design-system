<script lang="ts" setup>
import { computed } from "vue";

type Props = {
  /** 格納するリアクティブな値（v-modelでも使える） */
  modelValue: [] | string[] | boolean;
  /** 選択肢固有の値です */
  value?: string;
  /** ボタンのラベルです */
  label: string;
  /** name属性の値です */
  name?: string;
  /** 妥当性 */
  isValid?: boolean;
  /** ボタンが非活性状態か。未指定の場合はfalse */
  isDisabled?: boolean;
};

type Emits = { (e: "update:modelValue", value: any): void };

const props = withDefaults(defineProps<Props>(), {
  isDisabled: false,
  isValid: true,
  value: "on",
});
const emits = defineEmits<Emits>();

const isChecked = computed<boolean>(() => {
  if (Array.isArray(props.modelValue)) {
    if (props.modelValue.length === 0 || props.value === undefined) {
      return false;
    }
    return (props.modelValue as string[]).includes(props.value);
  } else {
    return props.modelValue;
  }
});

// 入力時のコールバック関数です。入力内容をemitして親に伝えられます。
const handleInput = (e: Event) => {
  // checkboxのv-modelの挙動の参考 https://github.com/vuejs/core/blob/49023549257d8962c6e059808067b1b67b398534/packages/runtime-dom/src/directives/vModel.ts#L105
  const checked = (e.target as HTMLInputElement).checked;
  const value = (e.target as HTMLInputElement).value;
  let newValue: [] | string[] | boolean;

  // リアクティブな値が配列の場合（複数チェックボックス想定）
  if (Array.isArray(props.modelValue)) {
    const findIndex = props.modelValue.findIndex(
      (item) => item === props.value
    );
    const find = findIndex !== -1;

    if (!find && checked) {
      // 配列になく、チェックが入った場合は追加
      newValue = [...props.modelValue].concat([value]);
    } else if (find && !checked) {
      // 配列にあり、チェックがない場合は削除
      newValue = [...props.modelValue];
      newValue.splice(findIndex, 1);
    } else {
      // 上記以外は変更なし
      newValue = [...props.modelValue];
    }
  } else {
    newValue = checked;
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
label {
  position: relative;
  display: flex;
  align-items: center;
  padding: 8px 0 8px 40px;
  font-size: 1rem;
}

.checkIcon {
  width: 19px;
  height: 19px;
  display: block;
  position: absolute;
  left: 4px;
  border: 2px solid var(--color-icon-label);
  border-radius: 3px;
  background-color: #fff;
  &:after {
    content: "";
    display: block;
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    background-image: url("@/assets/images/icon_check.svg");
    background-size: 18px 18px;
    background-position: center center;
  }
}
input:checked ~ .checkIcon {
  border-color: var(--color-icon-active);
  background-color: var(--color-icon-active);
  &:after {
    background-color: var(--color-icon-active);
  }
}

input:disabled ~ .checkIcon {
  border-color: var(--color-border-disabled);
}

input:disabled:checked ~ .checkIcon {
  &:after {
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
