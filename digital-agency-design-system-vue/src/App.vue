<script setup lang="ts">
import Heading from "./components/Heading.vue";
import BasicButton from "./components/BasicButton.vue";
import { useNameInput } from "./composables/useNameInput";
import { useTelInput } from "./composables/useTelInput";
import { useTextAreaInput } from "./composables/useTextAreaInput";
import RadioGroup from "./components/RadioGroup.vue";
import CheckboxGroup from "./components/CheckboxGroup.vue";
import Checkbox from "./components/Checkbox.vue";
import { ref } from "vue";
import { usePagination } from "./composables/usePagination";
import Layout from "./components/Layout.vue";

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

const selected = ref<string | null>(null);
const selected2 = ref<string | null>("3");
const checked = ref(["2"]);
const checked2 = ref(true);

const { UsePaginationComponent, pageNumber } = usePagination();
</script>

<template>
  <Layout>
    <div class="colspan-12">
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
          <CheckboxGroup
            v-model="checked"
            groupLabel="ラベル"
            :labels="['選択肢1', '選択肢2', '選択肢3']"
            :values="['1', '2', '3']"
            helpText="ヘルプテキスト"
            errorText="エラーテキスト"
            name="group3"
          />
        </div>
        <div>
          <Checkbox v-model="checked2" label="真偽値1" />
        </div>
      </div>
      <div class="tableWrapper">
        <table class="customTable">
          <thead>
            <th>Table Hader</th>
            <th>Table Hader</th>
            <th>Table Hader</th>
            <th>Table Hader</th>
            <th>Table Hader</th>
          </thead>
          <tbody>
            <tr>
              <th>Table Hader</th>
              <td>Table Data</td>
              <td>Table Data</td>
              <td>Table Data</td>
              <td>Table Data</td>
            </tr>
            <tr>
              <th>Table Hader</th>
              <td>Table Data</td>
              <td>Table Data</td>
              <td>Table Data</td>
              <td>Table Data</td>
            </tr>
            <tr>
              <th>Table Hader</th>
              <td>Table Data</td>
              <td>Table Data</td>
              <td>Table Data</td>
              <td>Table Data</td>
            </tr>
            <tr>
              <th>Table Hader</th>
              <td>Table Data</td>
              <td>Table Data</td>
              <td>Table Data</td>
              <td>Table Data</td>
            </tr>
            <tr>
              <th>Table Hader</th>
              <td>Table Data</td>
              <td>Table Data</td>
              <td>Table Data</td>
              <td>Table Data</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div>
        <img
          :src="`https://picsum.photos/id/${pageNumber}/200/200`"
          alt=""
          width="200"
          height="200"
        />
        <UsePaginationComponent />
      </div>
    </div>
  </Layout>
  <Layout>
    <div class="layoutBlock colSpan-3">4分の1</div>
    <div class="layoutBlock colSpan-6">4分の2</div>
    <div class="layoutBlock colSpan-3">4分の1</div>

    <div class="layoutBlock colSpan-3">4分の1</div>
    <div class="layoutBlock colSpan-3">4分の1</div>
    <div class="layoutBlock colSpan-3 colSpanTablet-1">4分の1</div>
    <div class="layoutBlock colSpan-3 colSpanTablet-1">4分の1</div>

    <div class="layoutBlock colSpan-9">4分の3</div>
    <div class="layoutBlock colSpan-3">4分の1</div>

    <div class="layoutBlock colSpan-9">4分の3</div>

    <div class="layoutBlock colSpan-4">3分の1</div>
    <div class="layoutBlock colSpan-4">3分の1</div>
    <div class="layoutBlock colSpan-4">3分の1</div>
  </Layout>
</template>

<style scoped lang="scss">
.wrapper {
  padding: 20px;
}

.inputWrapper {
  display: flex;
  flex-direction: column;
  row-gap: 24px;
  width: 300px;
}

.tableWrapper {
  overflow: scroll;
}

.layoutBlock {
  display: flex;
  align-items: center;
  justify-content: center;
  width: auto;
  height: 120px;
  font-size: 18px;
  font-weight: bold;
  text-align: center;
  background-color: var(--color-background-secondary);
}
</style>
