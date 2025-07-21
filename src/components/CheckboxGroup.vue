<script lang="ts" setup>
import Checkbox from "./Checkbox.vue";
import FormControlLabel from "./FormControlLabel.vue";

type Props = {
  /** タイプ */
  type: "stacked" | "inline";
  /** サイズ */
  size?: "large" | "medium" | "small";
  /** 格納するリアクティブな値（v-modelでも使える） */
  modelValue: [] | string[];
  /** チェックボタングループのラベル */
  groupLabel: string;
  /** チェックボタンを紐付けるname属性 */
  name: string;
  /** 各選択肢の文字列 */
  labels: string[];
  /** 各選択肢の値 */
  values: string[];
  /** 内容を補足するサポートテキスト */
  supportText?: string;
  /** エラー時に表示するテキスト */
  errorText?: string;
  /** 必須かどうか。未指定の場合はfalse */
  isRequired?: boolean;
  /** 妥当性 */
  isValid?: boolean;
  /** フォーカスアウト時のコールバック関数 */
  onBlur?: () => void;
  /** ボタンが非活性状態か。未指定の場合はfalse */
  isDisabled?: boolean;
};

const props = withDefaults(defineProps<Props>(), {
  type: "stacked",
  size: "medium",
  isRequired: false,
  isValid: true,
  isDisabled: false,
  supportText: undefined,
  errorText: undefined,
  onBlur: undefined,
});

// 選択された値
const model = defineModel<[] | string[]>();
</script>
<template>
  <div class="checkboxGroup" :class="[{ isError: !isValid }, size, type]">
    <FormControlLabel
      :size="size"
      :label="groupLabel"
      :supportText="supportText"
      :isRequired="isRequired"
      :isValid="isValid"
      :isDisabled="isDisabled"
    />
    <div class="buttons">
      <Checkbox
        v-for="(label, index) in labels"
        :key="values[index]"
        v-model="model"
        :size="size"
        :label="label"
        :value="values[index]"
        :name="name"
        :isValid="isValid"
        :isDisabled="props.isDisabled"
      />
    </div>

    <p v-if="errorText !== undefined" v-show="!isValid" class="errorText">
      {{ errorText }}
    </p>
  </div>
</template>
<style lang="scss" scoped>
@use "@/assets/style/utils/utils.scss" as *;

.buttons {
  display: flex;
  margin-top: 4px;
}

.stacked {
  .buttons {
    flex-direction: column;
  }

  &.small {
    .buttons {
      row-gap: 0;
      margin-top: 0;
    }

    .errorText {
      margin-top: 2px;
    }
  }

  &.medium {
    .buttons {
      row-gap: 8px;
      margin-top: 8px;
    }

    .errorText {
      margin-top: 12px;
    }
  }

  &.large {
    .buttons {
      row-gap: 8;
      margin-top: 8px;
    }

    .errorText {
      margin-top: 12px;
    }
  }
}

.inline {
  .buttons {
    flex-direction: row;
  }

  .errorText {
    margin-top: 12px;
  }

  &.small {
    .buttons {
      column-gap: 16px;
    }
  }

  &.medium {
    .buttons {
      column-gap: 32px;
    }
  }

  &.large {
    .buttons {
      column-gap: 40px;
    }
  }
}

.errorText {
  font-size: pxToRem(16);
  line-height: 1.3;
  color: var(--color-text-alert);
}

.isError {
  .label {
    color: var(--color-text-alert);
  }
}
</style>
