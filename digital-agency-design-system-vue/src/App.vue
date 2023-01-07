<script setup lang="ts">
import Heading from "./components/Heading.vue";
import BasicButton from "./components/BasicButton.vue";
import { useNameInput } from "./composables/useNameInput";
import { useTelInput } from "./composables/useTelInput";
import { useTextAreaInput } from "./composables/useTextAreaInput";
import RadioGroup from "./components/RadioGroup.vue";
import Checkbox from "./components/Checkbox.vue";
import { ref } from "vue";

const handleClick = () => {
  console.log("click");
};

const { UseNameInputComponent: FamilyNameInput } = useNameInput({
  label: "姓",
  isRequired: true,
  supportText: "住民票に記載された姓を記入します。",
  placeHolder: "山田",
});
const { UseTelInputComponent: UseTelInputComponent } = useTelInput();
const { UseTextAreaInputComponent } = useTextAreaInput();

const v = ref();
const selected = ref<string | null>(null);
const selected2 = ref<string | null>("3");
const checked = ref();
</script>

<template>
  <div class="wrapper">
    <Heading :headingLevel="1">H1 / Bold(700) / 1.5</Heading>
    <Heading :headingLevel="2">H2 / Bold(700) / 1.5</Heading>
    <Heading :headingLevel="3">H3 / Bold(700) / 1.5</Heading>
    <Heading :headingLevel="4">H4 / Bold(700) / 1.5</Heading>
    <Heading :headingLevel="5">H5 / Bold(700) / 1.5</Heading>
    <Heading :headingLevel="6">H6 / Bold(700) / 1.5</Heading>
    <BasicButton label="ボタン" @click="handleClick"></BasicButton>
    <BasicButton
      label="ボタン"
      type="secondary"
      @click="handleClick"
    ></BasicButton>
    <BasicButton
      label="ボタン"
      type="tertiary"
      @click="handleClick"
    ></BasicButton>
    <div class="inputWrapper">
      <FamilyNameInput />
      <UseTelInputComponent />
      <UseTextAreaInputComponent />
      <div>
        <RadioGroup
          v-model="selected"
          groupLabel="ラベル"
          :labels="['選択肢1', '選択肢2', '選択肢3']"
          :values="['1', '2', '3']"
          helpText="ヘルプテキスト"
          errorText="エラーテキスト"
          name="group"
          :isRequired="true"
        />
      </div>
      <div>
        <RadioGroup
          v-model="selected2"
          radioStyle="tile"
          groupLabel="ラベル"
          :labels="['選択肢1', '選択肢2', '選択肢3']"
          :subTexts="['補足説明1', '補足説明2', '補足説明3']"
          :values="['1', '2', '3']"
          helpText="ヘルプテキスト"
          errorText="エラーテキスト"
          name="group2"
          :isRequired="true"
        />
      </div>
      <div>
        <Checkbox v-model="checked" label="あああ" checkValue="aaa" name="d" />
      </div>
    </div>
  </div>
</template>

<style scoped>
.wrapper {
  padding: 20px;
}

.inputWrapper {
  display: flex;
  flex-direction: column;
  row-gap: 24px;
  width: 300px;
}
</style>
