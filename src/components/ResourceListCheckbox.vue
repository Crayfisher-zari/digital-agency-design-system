<script lang="ts" setup generic="T">
import { computed } from "vue";
import PartsCheckbox from "./parts/PartsCheckbox.vue";
import PartsResourceListInner from "./parts/PartsResourceListInner.vue";

type Props = {
  /** ラベル */
  label?: string;
  /** リストタイトル */
  title?: string;
  /** サポートテキスト */
  supportText?: string;
  /** サブラベル */
  subLabel?: string;
  /** name属性の値 */
  name: string;
  /** 格納するリアクティブな値（v-modelでも使える） */
  modelValue?: T | T[] | undefined;
  /** 選択肢固有の値です */
  value: T | undefined;
  /** ボタンが非活性状態か。未指定の場合はfalse */
  isDisabled?: boolean;
};

const props = withDefaults(defineProps<Props>(), {
  label: undefined,
  title: undefined,
  supportText: undefined,
  subLabel: undefined,
  modelValue: undefined,
});

const model = defineModel<T | T[] | undefined>();

const isChecked = computed(() => {
  if (model.value === undefined || props.value === undefined) {
    return false;
  } else if (Array.isArray(model.value)) {
    return model.value.includes(props.value);
  } else if (typeof model.value === "boolean") {
    return model;
  } else {
    return model.value === props.value;
  }
});
</script>
<template>
  <div class="resourceListWrapper">
    <label class="resourceList label" :class="{ isChecked: isChecked }">
      <div class="checkboxArea">
        <PartsCheckbox v-model="model" :name :value="props.value" :isDisabled />
      </div>
      <div v-if="$slots.frontIcon" class="frontIconWrapper">
        <slot name="frontIcon"></slot>
      </div>
      <PartsResourceListInner
        :label="props.label"
        :title="props.title"
        :supportText="props.supportText"
        :subLabel="props.subLabel"
      />
      <div v-if="$slots.endIcon" class="endIconWrapper">
        <slot name="endIcon"></slot>
      </div>
    </label>
  </div>
</template>
<style lang="scss" scoped>
@use "@/assets/style/utils/utils.scss" as *;
@use "./styles/resourceListStyle.scss";

.resourceList.label.isChecked {
  background-color: var(--color-background-checked);
}
</style>
