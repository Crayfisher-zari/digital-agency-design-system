<script setup lang="ts">
import { ref } from "vue";
import Heading from "./components/Heading.vue";
import BasicButton from "./components/BasicButton.vue";
import TextInput from "./components/TextInput.vue";
import { useNameInput } from "./composables/useNameInput";

const handleClick = () => {
  console.log("click");
};

const name = ref("あああ");

const { name: familyName, UseNameInputComponent: FamilyNameInput } =
  useNameInput({
    label: "姓",
    isRequired: true,
    supportText: "住民票に記載された姓を記入します。",
    placeHolder: "山田",
  });
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
    <FamilyNameInput />
  </div>
</template>

<style scoped>
.wrapper {
  padding: 20px;
}
</style>
