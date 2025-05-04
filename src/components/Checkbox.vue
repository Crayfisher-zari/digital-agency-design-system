<script lang="ts" setup generic="T">
import { computed } from "vue";
import PartsCheckbox from "./parts/PartsCheckbox.vue";

type Props = {
  /** サイズ */
  size?: "large" | "medium" | "small";
  /** v-modelの型です */
  modelValue: T | T[];
  /** 選択肢固有の値です */
  value: T | undefined;
  /** ボタンのラベルです */
  label: string;
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

const props = withDefaults(defineProps<Props>(), {
  size: "medium",
  isDisabled: false,
  isValid: true,
  name: undefined,
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
const handleChangeCheck = (value: boolean) => {
  console.log(value);
};
</script>
<template>
  <label :class="[stateClassName ?? '', size]">
    <div class="checkboxArea">
      <PartsCheckbox
        v-model="model"
        :value="props.value"
        :size="size"
        :name="name"
        :isDisabled="isDisabled"
        :isValid="isValid"
        :isIndeterminate="isIndeterminate"
        @changeCheck="handleChangeCheck"
      />
    </div>
    {{ label }}
  </label>
</template>
<style lang="scss" scoped>
@use "@/assets/style/utils/utils.scss" as *;

label {
  position: relative;
  display: flex;
  column-gap: 8px;
  align-items: center;
  font-size: pxToRem(16);

  @media (hover: hover) {
    &:hover {
      :deep(.checkIcon) {
        box-shadow: 0 0 0 4px var(--color-border-divider);
      }
    }

    &.small {
      &:hover {
        :deep(.checkIcon) {
          box-shadow: 0 0 0 3px var(--color-border-divider);
        }
      }
    }

    &.large {
      &:hover {
        :deep(.checkIcon) {
          box-shadow: 0 0 0 5px var(--color-border-divider);
        }
      }
    }
  }
}

.isInvalid {
  color: var(--color-text-alert);
}

.isDisabled {
  color: var(--color-text-disabled);
}
</style>
