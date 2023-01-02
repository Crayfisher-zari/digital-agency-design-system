<script setup lang="ts">
import Heading from "./components/Heading.vue";
import BasicButton from "./components/BasicButton.vue";
import { useNameInput } from "./composables/useNameInput";
import { useTelInput } from "./composables/useTelInput";
import { useTextAreaInput } from "./composables/useTextAreaInput";
import RadioButton from "./components/RadioButton.vue";
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
        <RadioButton v-model="v" label="選択肢1" radioValue="a" name="z" />
        <RadioButton v-model="v" label="選択肢2" radioValue="b" name="z" />
        <RadioButton v-model="v" label="選択肢3" radioValue="c" name="z" />
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
