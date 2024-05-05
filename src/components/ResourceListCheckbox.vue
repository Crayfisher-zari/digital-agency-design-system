<script lang="ts" setup generic="T">
import { ref } from "vue";
import PartsCheckbox from "./parts/PartsCheckbox.vue";

type Props = {
  /** ラベル */
  label?: string;
  /** リストタイトル */
  title?: string;
  /** name属性の値 */
  name: string;
  /** 格納するリアクティブな値（v-modelでも使える） */
  modelValue?: T | T[] | undefined;
  /** 選択肢固有の値です */
  value: T | undefined;
  /** ボタンが非活性状態か。未指定の場合はfalse */
  isDisabled?: boolean;
  /** サポートテキスト */
  supportText?: string;
  /** サブラベル */
  subLabel?: string;
};
const props = withDefaults(defineProps<Props>(), {
  label: undefined,
  title: undefined,
  supportText: undefined,
  subLabel: undefined,
});

const model = defineModel<T | T[] | undefined>();

const isChecked = ref();
</script>
<template>
  <div class="resourceListWrapper">
    <label class="resourceList label" :class="{ isChecked: isChecked }">
      <div class="checkboxArea">
        <PartsCheckbox
          v-model="model"
          v-model:isChecked="isChecked"
          :name
          :value="props.value"
          :isDisabled
        />
      </div>
      <div v-if="$slots.frontIcon">
        <slot name="frontIcon"></slot>
      </div>
      <div>
        <p v-if="label" class="label">{{ label }}</p>
        <p v-if="title" class="title">{{ title }}</p>
        <p v-if="supportText" class="supportText">{{ supportText }}</p>
      </div>
      <div v-if="subLabel" class="subLabelWrapper">
        <p class="subLabel">{{ subLabel }}</p>
      </div>
      <div v-if="$slots.endIcon">
        <slot name="endIcon"></slot>
      </div>
      <div class="bg"></div>
    </label>
  </div>
</template>
<style lang="scss" scoped>
@use "@/assets/style/utils/utils.scss" as *;
@use "./styles/resourceListStyle.scss";

.resourceList.label.isChecked {
  background-color: var(--color-blue-50);
}
</style>
