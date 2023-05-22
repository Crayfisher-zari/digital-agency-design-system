<script setup lang="ts">
import Heading from "./components/Heading.vue";
import BasicButton from "./components/BasicButton.vue";
import { useNameInput } from "./composables/useNameInput";
import { useTelInput } from "./composables/useTelInput";
import { useTextAreaInput } from "./composables/useTextAreaInput";
import RadioGroup from "./components/RadioGroup.vue";
import CheckboxGroup from "./components/CheckboxGroup.vue";
import Checkbox from "./components/Checkbox.vue";
import { ref, watch } from "vue";
import { usePagination } from "./composables/usePagination";
import Modal from "./components/Modal.vue";
import Layout from "./components/Layout.vue";
import Pankuzu from "./components/Pankuzu.vue";
import { useEmailInput } from "./composables/useEmailInput";
import { usePasswordInput } from "./composables/usePasswordInput";

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
const { UseTextAreaInputComponent } = useTextAreaInput({
  label: "お問い合わせ詳細",
  isRequired: true,
  supportText: "できる限りくわしくお書きください",
  placeHolder: "パスワードを忘れてしまった",
});
const { UseTextAreaInputComponent: MaxCountTextArea } = useTextAreaInput({
  label: "困っていることを教えてください",
  isRequired: true,
  placeHolder: "パスワードを忘れてしまった",
  maxCount: 256,
});

const selected = ref<string | null>(null);
const selected2 = ref<string | null>("3");
const checked = ref(["2"]);
const checked2 = ref(true);

const { UsePaginationComponent, pageNumber } = usePagination();

const isShown = ref(false);

const modalClick1 = () => {
  console.log("ボタン1");
};

const modalClick2 = () => {
  console.log("ボタン2");
};

const pankuzu = [
  { text: "ホーム", url: "#!" },
  { text: "政策", url: "#!" },
  { text: "審議会・研究会", url: "#!" },
  { text: "デジタル庁における入札制限等の在り方に関する検討会" },
];

const { UseEmailInputComponent } = useEmailInput();
const { UsePasswordInputComponent } = usePasswordInput();

const colorScheme = ref<"light" | "dark" | null>(null);

// カラースキームの設定
watch(colorScheme, (color) => {
  if (color === "light") {
    document.body.classList.remove("color-scheme-dark");
    document.body.classList.add("color-scheme-light");
  }
  if (color === "dark") {
    document.body.classList.remove("color-scheme-light");
    document.body.classList.add("color-scheme-dark");
  }
});
</script>

<template>
  <div class="globalWrapper">
    <Pankuzu :list="pankuzu" />
    <Heading :headingLevel="1"> H1 / Bold(700) / 1.5 </Heading>
    <Heading :headingLevel="2"> H2 / Bold(700) / 1.5 </Heading>
    <Heading :headingLevel="3"> H3 / Bold(700) / 1.5 </Heading>
    <Heading :headingLevel="4"> H4 / Bold(700) / 1.5 </Heading>
    <Heading :headingLevel="5"> H5 / Bold(700) / 1.5 </Heading>
    <Heading :headingLevel="6"> H6 / Bold(700) / 1.5 </Heading>
    <BasicButton label="ボタン" @click="handleClick" />
    <BasicButton label="ボタン" type="secondary" @click="handleClick" />
    <BasicButton label="ボタン" type="tertiary" @click="handleClick" />
    <div class="colorScheme">
      <RadioGroup
        v-model="colorScheme"
        groupLabel="テーマカラー"
        :labels="['ライトモード', 'ダークモード']"
        :values="['light', 'dark']"
        helpText="サイトのテーマカラーを選択できます"
        name="color"
        :isRequired="false"
      />
    </div>
    <div class="inputWrapper">
      <FamilyNameInput />
      <UseTelInputComponent />
      <UseTextAreaInputComponent />
      <MaxCountTextArea />
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
    <div>
      <BasicButton
        label="モーダルを表示"
        @click="
          () => {
            isShown = true;
          }
        "
      />
      <!-- <UseModalComponent /> -->
      <Modal
        v-model="isShown"
        title="タイトル"
        text="テキスト"
        labelPrimary="ボタン1"
        labelSecondary="ボタン2"
        :onClickPrimary="modalClick1"
        :onClickSecondary="modalClick2"
      />
    </div>

    <Layout>
      <div class="layoutBlock colSpan-3">4分の1</div>
      <div class="layoutBlock colSpan-6">4分の2</div>
      <div class="layoutBlock colSpan-3">4分の1</div>

      <div class="layoutBlock colSpan-3">4分の1</div>
      <div class="layoutBlock colSpan-3">4分の1</div>
      <div class="layoutBlock colSpan-3">4分の1</div>
      <div class="layoutBlock colSpan-3">4分の1</div>

      <div class="layoutBlock colSpan-9">4分の3</div>
      <div class="layoutBlock colSpan-3">4分の1</div>

      <div class="layoutBlock colSpan-9">4分の3</div>

      <div class="layoutBlock colSpan-4">3分の1</div>
      <div class="layoutBlock colSpan-4">3分の1</div>
      <div class="layoutBlock colSpan-4">3分の1</div>
    </Layout>
    <p>タブレットは2列にする</p>
    <Layout>
      <div class="layoutBlock colSpan-6 colSpanTablet-1">4分の2</div>
      <div class="layoutBlock colSpan-6 colSpanTablet-1">4分の2</div>
    </Layout>
    <p>真ん中半分だけ使う</p>
    <Layout>
      <div class="layoutBlock colStart-4 colEnd-10">4分の2</div>
    </Layout>
  </div>
  <div class="templates">
    <Layout>
      <div class="colSpan-9">
        <Heading :headingLevel="1"> ログイン </Heading>
        <form action="#">
          <div class="loginForm">
            <UseEmailInputComponent />
            <UsePasswordInputComponent />
          </div>
          <div class="loginButtons">
            <BasicButton label="ログイン" />
            <BasicButton label="新規登録" type="secondary" />
            <BasicButton label="パスワードをお忘れの方" type="tertiary" />
          </div>
        </form>
      </div>
    </Layout>
  </div>
</template>

<style scoped lang="scss">
@use "@/assets/style/utils/utils.scss" as *;

.globalWrapper {
  max-width: 1104px;
  padding: 0 40px;
  margin: 0 auto;
  @include mediaQueryDown {
    padding: 0 16px;
  }

  &.isModalOpen {
    height: 100vh;
    overflow: hidden;
  }
}

.colorScheme {
  margin: 36px 0;
}

.inputWrapper {
  display: flex;
  flex-direction: column;
  row-gap: 24px;
  width: 300px;
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

.templates {
  padding: 120px 0;
}

.loginForm {
  display: grid;
  grid-auto-flow: row;
  row-gap: 16px;
}

.loginButtons {
  display: grid;
  grid-auto-flow: row;
  row-gap: 8px;
  margin-top: 40px;
}
</style>
