<script lang="ts" setup>
type Props = {
  /** インプットのラベルです */
  label: string;
  /** インプットのタイプです。未指定の場合はtextになります */
  type: "text" | "email" | "tel";
  /** プレースホルダのテキストです */
  placeHolder?: string;
  /** 必須かどうか。未指定の場合はfalse */
  isRequired: boolean;
};

const props = withDefaults(defineProps<Props>(), {
  type: "text",
  isRequired: false,
});
</script>
<template>
  <label>
    <span>{{ props.label }}</span
    ><span v-show="props.isRequired">必須</span>
    <input :type="props.type" :placeholder="props.placeHolder" />
  </label>
</template>
