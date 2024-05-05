<script lang="ts" setup>
import { computed } from "vue";
import { useLink } from "../composables/useLinkComponent";
import type { LinkTag } from "../composables/useLinkComponent";
import PartsCheckbox from "./parts/PartsCheckbox.vue";
import PartsRadioButton from "./parts/PartsRadioButton.vue";

type Props = {
  /** ラベル */
  label?: string;
  /** リストタイトル */
  title?: string;
  /** name属性の値 */
  name: string;
  /** 格納するリアクティブな値（v-modelでも使える） */
  modelValue?: string | null;
  /** 選択肢固有の値です */
  value: string;
  /** ボタンが非活性状態か。未指定の場合はfalse */
  isDisabled?: boolean;
  /** サポートテキスト */
  supportText?: string;
  /** サブラベル */
  subLabel?: string;
};
withDefaults(defineProps<Props>(), {
  type: "button",
  label: undefined,
  title: undefined,
  supportText: undefined,
  subLabel: undefined,
  linkTag: "auto",
});


const model = defineModel<string | null>();

</script>
<template>
  <div class="resourceListWrapper">
    <label
      class="resourceList label"
    >
      <div v-if="type === 'checkbox'" class="checkboxArea">
        <PartsCheckbox v-model="model" :name :value :isDisabled />
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
    </label>
  </div>
</template>
<style lang="scss" scoped>
@use "@/assets/style/utils/utils.scss" as *;
@use "./styles/resourceListStyle.scss";
</style>
