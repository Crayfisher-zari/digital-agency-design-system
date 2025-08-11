<script lang="ts" setup generic="T">
import { computed } from "vue";
import PartsRadioButton from "./parts/PartsRadioButton.vue";
import PartsResourceListInner from "./parts/PartsResourceListInner.vue";

type Props = {
  /** リソースリストのスタイル */
  designStyle: "list" | "form";
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
  modelValue: T;
  /** 選択肢固有の値です */
  value: T;
  /** ボタンが非活性状態か。未指定の場合はfalse */
  isDisabled?: boolean;
};

const props = withDefaults(defineProps<Props>(), {
  label: undefined,
  title: undefined,
  supportText: undefined,
  subLabel: undefined,
});

const model = defineModel<T | T[] | undefined>();

const isChecked = computed(() => {
  if (model.value === undefined || props.value === undefined) {
    return false;
  } else {
    return model.value === props.value;
  }
});
</script>
<template>
  <div class="resourceListWrapper" :class="{ designStyle }">
    <label
      class="resourceListContainer label"
      :class="[{ isChecked: isChecked }, designStyle]"
    >
      <div class="hoverArea resourceList">
        <div class="radioArea">
          <PartsRadioButton
            v-model="model"
            :name="name"
            :radioValue="value"
            :isDisabled="isDisabled"
          />
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
      </div>
      <div v-if="$slots.endIcon" class="endIconWrapper">
        <slot name="endIcon"></slot>
      </div>
    </label>
  </div>
</template>
<style lang="scss" scoped>
@use "@/assets/style/utils/utils.scss" as *;
@use "./styles/resourceListStyle";

.resourceListContainer.label.isChecked {
  background-color: var(--color-background-checked);
}
</style>
