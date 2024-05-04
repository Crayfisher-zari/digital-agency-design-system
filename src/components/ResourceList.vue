<script lang="ts" setup>
import { computed } from "vue";
import { useLink } from "../composables/useLinkComponent";
import type { LinkTag } from "../composables/useLinkComponent";
import PartsCheckbox from "./parts/PartsCheckbox.vue";
import PartsRadioButton from "./parts/PartsRadioButton.vue";

type Props = {
  /** リソースリストの種別。未指定の場合はボタン */
  type?: "button" | "checkbox" | "radio" | "link";
  /** ラベル */
  label?: string;
  /** リストタイトル */
  title?: string;
  /** name属性の値 */
  name: string;
  /** 格納するリアクティブな値（v-modelでも使える） */
  modelValue: string | null;
  /** 選択肢固有の値です */
  value: string;
  /** ボタンが非活性状態か。未指定の場合はfalse */
  isDisabled?: boolean;
  /** サポートテキスト */
  supportText?: string;
  /** サブラベル */
  subLabel?: string;
  /** リンクタグの種別 */
  linkTag?: LinkTag;
};
const props = withDefaults(defineProps<Props>(), {
  type: "button",
  label: undefined,
  title: undefined,
  supportText: undefined,
  subLabel: undefined,
  linkTag: "auto",
});

const { LinkComponent } = useLink({ tag: props.linkTag });

const model = defineModel<string | null>();

const wrapperTag = computed(() => {
  const type = props.type;
  switch (type) {
    case "button":
      return "button";
    case "checkbox":
      return "label";
    case "radio":
      return "label";
    case "link":
      return LinkComponent;
    default:
      return "div";
  }
});
</script>
<template>
  <div class="resourceListWrapper">
    <component
      :is="wrapperTag"
      class="resourceList"
      :class="type"
      :type="type === 'button' ? 'button' : undefined"
    >
      <div v-if="type === 'checkbox'" class="checkboxArea">
        <PartsCheckbox v-model="model" :name :value :isDisabled />
      </div>
      <div v-if="type === 'radio'" class="radioArea">
        <PartsRadioButton
          v-model="model"
          :name
          :radioValue="value"
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
    </component>
  </div>
</template>
<style lang="scss" scoped>
@use "@/assets/style/utils/utils.scss" as *;

.resourceListWrapper {
  display: grid;
}

.resourceList {
  display: flex;
  column-gap: 16px;
  align-items: center;
  justify-self: stretch;
  padding: 16px;
  text-align: left;
  appearance: none;
  background: none;
  border: none;
  transition: background-color var(--base-duration) var(--easing-out-expo);

  &.button {
    cursor: pointer;

    &:hover {
      background-color: #f2f2f2;
    }
  }
}

.checkboxArea {
  width: 19px;
  height: 19px;
}

.radioArea {
  width: 19px;
  height: 19px;
}

.label {
  font-size: pxToRem(14);
  line-height: 1.7;
  color: var(--color-text-body);
  letter-spacing: 0.04em;
}

.title {
  font-size: pxToRem(16);
  line-height: 1.7;
  color: var(--color-text-body);
  letter-spacing: 0.04em;
}

.supportText {
  font-size: pxToRem(14);
  line-height: 1.7;
  color: var(--color-text-description);
  letter-spacing: 0.04em;
}

.subLabelWrapper {
  margin-left: auto;
}

.subLabel {
  font-size: pxToRem(14);
  line-height: 1.7;
  color: var(--color-text-description);
  letter-spacing: 0.04em;
}
</style>
