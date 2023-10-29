<script setup lang="ts">
import Heading from "./components/Heading.vue";
import BasicButton from "./components/BasicButton.vue";
import { useNameInput } from "./composables/useNameInput";
import { useTelInput } from "./composables/useTelInput";
import { useTextAreaInput } from "./composables/useTextAreaInput";
import RadioGroup from "./components/RadioGroup.vue";
import CheckboxGroup from "./components/CheckboxGroup.vue";
import Checkbox from "./components/Checkbox.vue";
import Selector from "./components/Selector.vue";
import { ref, watchEffect } from "vue";
import { usePagination } from "./composables/usePagination";
import { useBirthDate } from "./composables/useBirthDate";
import Modal from "./components/Modal.vue";
import Layout from "./components/Layout.vue";
import Pankuzu from "./components/Pankuzu.vue";
import LoginTemplate from "./templates/LoginTemplate.vue";
import YMDSelector from "./components/YMDSelector.vue";
import Accordion from "./components/Accordion.vue";
import { ColorSheme, useColorScheme } from "./composables/useColorScheme";
import LanguageSelector from "./components/LanguageSelector.vue";
import Menu from "./components/Menu.vue";
import MenuAccordion from "./components/MenuAccordion.vue";
import DropDown from "./components/DropDown.vue";
import HeaderContainer from "./components/HeaderContainer.vue";
import UtilityLink from "./components/UtilityLink.vue";
import NavigationContainer from "./components/NavigationContainer.vue";
import MenuLink from "./components/MenuLink.vue";
import HamburgerButton from "./components/HamburgerButton.vue";
import Drawer from "./components/Drawer.vue";
import MegaMenuContainer from "./components/MegaMenuContainer.vue";
import DropDownSummary from "./components/DropDownSummary.vue";
import { useScrollLock } from "./composables/useScrollLock";

const handleClick = () => {
  console.log("click");
};

const { UseNameInputComponent: FamilyNameInput } = useNameInput({
  label: "姓",
  isRequired: true,
  supportText: "住民票に記載された姓を記入します。",
});
const { UseNameInputComponent: FamilyNameKanaInput } = useNameInput({
  label: "姓（カナ）",
  isRequired: false,
  supportText: "住民票に記載された姓を記入します。",
});
const { UseTelInputComponent: UseTelInputComponent } = useTelInput();
const { UseTextAreaInputComponent } = useTextAreaInput({
  label: "お問い合わせ詳細",
  isRequired: true,
  supportText: "できる限りくわしくお書きください",
});
const { UseTextAreaInputComponent: MaxCountTextArea } = useTextAreaInput({
  label: "困っていることを教えてください",
  isRequired: true,
  maxCount: 256,
});

const selected = ref<string | null>(null);
const selected2 = ref<string | null>("3");
const checked = ref(["2"]);
const checked2 = ref(true);
const selector = ref("");
const prefectures = [
  { label: "北海道", value: "Hokkaido" },
  { label: "東京", value: "Tokyo" },
  { label: "大阪", value: "Osaka" },
  { label: "沖縄", value: "Okinawa" },
];

const { UsePaginationComponent, pageNumber } = usePagination();

const { UseBirthDateComponent } = useBirthDate({
  label: "生年月日",
  supportText: "半角数字で入力してください。",
  isRequired: true,
});

const { lockScroll, releaseScroll } = useScrollLock();

const isShown = ref(false);

const modalClick1 = () => {
  console.log("ボタン1");
};

const modalClick2 = () => {
  console.log("ボタン2");
};

// パンくずリスト
const pankuzu = [
  { text: "ホーム", url: "#!" },
  { text: "政策", url: "#!" },
  { text: "審議会・研究会", url: "#!" },
  { text: "デジタル庁における入札制限等の在り方に関する検討会" },
];

const colorSchemeHandler = (newVal: ColorSheme | null) => {
  console.log(newVal);
  if (newVal === null) {
    return;
  }
  if (newVal === "light") {
    document.body.classList.remove("color-scheme-dark");
    document.body.classList.add("color-scheme-light");
  }
  if (newVal === "dark") {
    document.body.classList.remove("color-scheme-light");
    document.body.classList.add("color-scheme-dark");
  }
};

const { changeColorSheme } = useColorScheme({
  onChange: colorSchemeHandler,
});

const selectedColor = ref<ColorSheme | null>(null);
watchEffect(() => {
  const color = selectedColor.value;
  if (!color) {
    return;
  }
  changeColorSheme(color);
});

// 年月日
const year = ref(1980);
const month = ref(null);
const day = ref(null);

// アコーディオンの内容
const accordionText = [
  {
    summary: "1.ダミーテキストはどのような場合に使用されますか。",
    details:
      " これはダミーテキストです。ダミーテキストは、デザインやレイアウトの作成時に使用される仮の文章です。ダミーテキストを使用すると、デザインの全体像を評価したり、テキストの配置や長さを確認したりすることができます。ダミーテキストは実際の文章ではないので、内容には意味がありません。 ",
  },
  {
    summary: "2.ダミーテキストはどのような場合に使用されますか。",
    details:
      " これはダミーテキストです。ダミーテキストは、デザインやレイアウトの作成時に使用される仮の文章です。ダミーテキストを使用すると、デザインの全体像を評価したり、テキストの配置や長さを確認したりすることができます。ダミーテキストは実際の文章ではないので、内容には意味がありません。 ",
  },
  {
    summary:
      "3.ダミーテキストはどのような場合に使用されますか。ダミーテキストはどのような場合に使用されますか。ダミーテキストはどのような場合に使用されますか。",
    details:
      " これはダミーテキストです。ダミーテキストは、デザインやレイアウトの作成時に使用される仮の文章です。ダミーテキストを使用すると、デザインの全体像を評価したり、テキストの配置や長さを確認したりすることができます。ダミーテキストは実際の文章ではないので、内容には意味がありません。 ",
  },
];

const languageList = [
  { label: "日本語", link: "#!", isCurrent: true },
  { label: "English", link: "#!", isCurrent: false },
  { label: "简体中文", link: "#!", isCurrent: false },
  { label: "한국어", link: "#!", isCurrent: false },
];

const menuList: InstanceType<typeof Menu>["menuList"] = [
  {
    categoryName: "アイコンなし",
    itemList: [
      { type: "link", item: { to: "!#", text: "メニュー" } },
      { type: "link", item: { to: "!#", text: "メニュー", selected: true } },
      {
        type: "accordion",
        item: {
          accordionTitle: "アコーディオン",
          linkList: [
            { to: "!#", text: "メニュー" },
            { to: "!#", text: "メニュー" },
            { to: "!#", text: "メニュー", selected: true },
          ],
        },
      },
    ],
  },
  {
    categoryName: "アイコンあり",
    itemList: [
      { type: "link", item: { to: "!#", text: "メニュー" } },
      {
        type: "accordion",
        item: {
          accordionTitle: "アコーディオン",
          hasIcon: true,
          linkList: [
            { to: "!#", text: "メニュー" },
            { to: "!#", text: "メニュー" },
            { to: "!#", text: "メニュー" },
          ],
        },
      },
      { type: "link", item: { to: "!#", text: "メニュー", selected: true } },
    ],
  },
];

const menuList2: InstanceType<typeof Menu>["menuList"] = [
  { to: "!#", text: "メニュー" },
  { to: "!#", text: "メニュー" },
  { to: "!#", text: "メニュー" },
];

const menuList3: InstanceType<typeof Menu>["menuList"] = [
  { to: "!#", text: "メニュー" },
  { to: "!#", text: "メニュー" },
  { to: "!#", text: "メニュー" },
  { to: "!#", text: "メニュー" },
  { to: "!#", text: "メニュー" },
  { to: "!#", text: "メニュー" },
];

const menuList4: InstanceType<typeof Menu>["menuList"] = [
  {
    categoryName: "政策",
    itemList: [
      { type: "link", item: { to: "!#", text: "観光" } },
      { type: "link", item: { to: "!#", text: "スポーツ支援" } },
      { type: "link", item: { to: "!#", text: "国際化" } },
      { type: "link", item: { to: "!#", text: "市民手続きのデジタル化" } },
      { type: "link", item: { to: "!#", text: "子育て支援" } },
    ],
  },
];

const isDrawerVisible = ref(false);

const isMegaMenuVisible = ref(true);

watchEffect(() => {
  if (isDrawerVisible.value) {
    lockScroll();
  } else {
    releaseScroll();
  }
});
</script>

<template>
  <div class="headerAndDrawer" :class="{ isDrawerActive: isDrawerVisible }">
    <HeaderContainer>
      <template #logo
        ><img src="/logo.png" width="240" height="80" class="headerLogo"
      /></template>
      <template #item>
        <NavigationContainer class="headerNav" gap="small">
          <UtilityLink to="#!">サイトポリシー</UtilityLink>
          <UtilityLink to="#!">プライバシーポリシー</UtilityLink>
          <UtilityLink to="#!">コピーライトポリシー</UtilityLink>
          <UtilityLink to="#!">ウェブアクセシビリティ</UtilityLink>
        </NavigationContainer>
        <LanguageSelector
          :languageList="languageList"
          linkTag="a"
          class="headerLanguage"
        />
      </template>
      <template #menu>
        <NavigationContainer class="headerMenu" alignItems="end">
          <button
            class="megaMenuButton"
            @click="
              () => {
                isMegaMenuVisible = !isMegaMenuVisible;
              }
            "
          >
            <DropDownSummary
              summaryText="メガメニュー"
              :isActive="isMegaMenuVisible ?? false"
            />
          </button>
          <MenuLink to="#!">政策</MenuLink>
          <DropDown summary="市民向けサービス">
            <Menu :menuList="menuList2" linkTag="a"></Menu>
          </DropDown>
          <DropDown summary="事業者向け">
            <Menu :menuList="menuList2" linkTag="a"></Menu>
          </DropDown>
          <MenuLink to="#!">採用情報</MenuLink>
          <MenuLink to="#!">ご意見・ご要望</MenuLink>
        </NavigationContainer>
      </template>
      <template #hamburger>
        <HamburgerButton v-model="isDrawerVisible" class="headerHamburger"
      /></template>
    </HeaderContainer>
    <div class="drawerWrapper" :class="{ isActive: isDrawerVisible }">
      <Drawer :isVisible="isDrawerVisible">
        <Menu :menuList="menuList" linkTag="a"></Menu>
      </Drawer>
    </div>
    <MegaMenuContainer
      :isVisible="isMegaMenuVisible"
      @update:isVisible="(v) => (isMegaMenuVisible = v)"
    >
      <template #col1>
        <div>
          <h2>メガメニュー</h2>
          <p>サブタイトルはここに記入します</p>
        </div>
      </template>
      <template #col2>
        <Menu :menuList="menuList3" :hasGap="false" linkTag="a"></Menu>
      </template>
      <template #col3>
        <Menu :menuList="menuList4" :hasGap="false" linkTag="a"></Menu>
      </template>
    </MegaMenuContainer>
  </div>

  <div class="globalWrapper">
    <Pankuzu :list="pankuzu" linkTag="a" />
    <Heading :headingLevel="1" designLevel="XL"> コンポーネント </Heading>
    <hr />
    <Layout>
      <div class="colSpan-12">
        <Heading :headingLevel="2"> タイポグラフィ </Heading>

        <Layout>
          <div class="colSpan-6">
            <Heading :headingLevel="1" designLevel="XXL">見出しXXL</Heading>
            <Heading :headingLevel="1" designLevel="XL">見出しXL</Heading>
            <Heading :headingLevel="1"> 見出しL </Heading>
            <Heading :headingLevel="2"> 見出しM </Heading>
            <Heading :headingLevel="3"> 見出しS </Heading>
            <Heading :headingLevel="4"> 見出しXS </Heading>
            <Heading :headingLevel="5"> 見出しXXS </Heading>
          </div>
          <div class="colSpan-6">
            <p class="fontTextL">本文L：デフォルトの本文テキスト。</p>
            <p class="fontTextM">
              本文M：テキストの多いとき、表示領域が限られているときに使用できます。
            </p>
            <p class="fontLabeLL">ラベルL：デフォルトのラベルテキスト。</p>
            <p class="fontLabelM">
              ラベルM：テキストの多いとき、表示領域が限られているときに使用できます。
            </p>
            <p class="fontSupportL">補足L：デフォルトの補足テキスト。</p>
            <p class="fontSupportM">
              補足M：テキストの多いとき、表示領域が限られているときに使用できます。
            </p>
          </div>
        </Layout>
      </div>
      <div class="colSpan-12">
        <Heading :headingLevel="2"> ボタン </Heading>
        <Layout>
          <div class="colSpan-4">
            <div class="buttonWrapper">
              <BasicButton label="ボタン" @click="handleClick" />

              <BasicButton label="ボタン" disabled @click="handleClick" />
            </div>
          </div>
          <div class="colSpan-4">
            <div class="buttonWrapper">
              <BasicButton
                label="ボタン"
                type="secondary"
                @click="handleClick"
              />
              <BasicButton
                disabled
                label="ボタン"
                type="secondary"
                @click="handleClick"
              />
            </div>
          </div>
          <div class="colSpan-4">
            <div class="buttonWrapper">
              <BasicButton
                label="ボタン"
                type="tertiary"
                @click="handleClick"
              />
              <BasicButton
                disabled
                label="ボタン"
                type="tertiary"
                @click="handleClick"
              />
            </div>
          </div>
        </Layout>
      </div>
      <div class="colSpan-12">
        <div class="colorScheme">
          <RadioGroup
            v-model="selectedColor"
            groupLabel="テーマカラー"
            :labels="['ライトモード', 'ダークモード']"
            :values="['light', 'dark']"
            supportText="サイトのテーマカラーを選択できます"
            name="color"
            :isRequired="false"
          />
        </div>
      </div>
      <div class="colSpan-12">
        <Heading :headingLevel="2"> メニュー </Heading>
        <Layout>
          <div class="colSpan-4">
            <Menu :menuList="menuList" linkTag="a"></Menu>
          </div>
          <div class="colSpan-4">
            <Menu :menuList="menuList2" linkTag="a" hasIcon></Menu>
          </div>
          <div class="colSpan-4">
            <Menu>
              <MenuAccordion
                accordionTitle="アコーディオン"
                :linkList="menuList2"
                linkTag="a"
              />
            </Menu>
          </div>
          <div class="colSpan-3 menuWrapper">
            <DropDown summary="ドロップダウン">
              <Menu :menuList="menuList2" linkTag="a"></Menu>
            </DropDown>
          </div>
          <div class="colSpan-3 menuWrapper">
            <DropDown summary="ドロップダウン" hasShadow>
              <Menu :menuList="menuList2" linkTag="a"></Menu>
            </DropDown>
          </div>
          <div class="colSpan-3 menuWrapper">
            <DropDown summary="ドロップダウン" hasShadow side="right">
              <Menu :menuList="menuList2" linkTag="a"></Menu>
            </DropDown>
          </div>
        </Layout>
      </div>
      <div class="colSpan-12">
        <Heading :headingLevel="2"> インプット系 </Heading>
        <Layout>
          <div class="colSpan-4">
            <div class="inputWrapper">
              <FamilyNameInput />
              <FamilyNameKanaInput />
              <UseTelInputComponent />
            </div>
          </div>
          <div class="colSpan-4">
            <div class="inputWrapper">
              <UseTextAreaInputComponent />
              <MaxCountTextArea />
            </div>
          </div>
          <div class="colSpan-4">
            <div class="inputWrapper">
              <div>
                <RadioGroup
                  v-model="selected"
                  groupLabel="ラベル"
                  :labels="['選択肢1', '選択肢2', '選択肢3']"
                  :values="['1', '2', '3']"
                  supportText="サポートテキスト"
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
                  supportText="サポートテキスト"
                  errorText="エラーテキスト"
                  name="group2"
                  :isRequired="false"
                />
              </div>
            </div>
          </div>
          <div class="colSpan-4">
            <div class="inputWrapper">
              <Selector
                v-model="selector"
                :options="prefectures"
                label="都道府県"
                :isRequired="false"
                :isValid="true"
                errorText="エラーテキスト"
                supportText="サポートテキスト"
              />
              <Selector
                v-model="selector"
                :options="prefectures"
                label="都道府県"
                :isRequired="true"
                :isValid="false"
                errorText="エラーテキスト"
                supportText="サポートテキスト"
              />
              <Selector
                v-model="selector"
                :options="prefectures"
                label="都道府県"
                :isRequired="false"
                :isValid="true"
                :isDisabled="true"
                errorText="エラーテキスト"
                supportText="サポートテキスト"
              />
            </div>
          </div>
          <div class="colSpan-5">
            <div class="inputWrapper">
              <YMDSelector
                v-model:year="year"
                v-model:month="month"
                v-model:day="day"
                label="生年月日"
                supportText="月を選択してから日を選んでください"
              />
              <UseBirthDateComponent />
            </div>
          </div>
          <div class="colSpan-3">
            <div class="inputWrapper">
              <CheckboxGroup
                v-model="checked"
                groupLabel="ラベル"
                :labels="['選択肢1', '選択肢2', '選択肢3']"
                :values="['1', '2', '3']"
                supportText="サポートテキスト"
                errorText="エラーテキスト"
                name="group3"
              />
              <div>
                <Checkbox v-model="checked2" label="真偽値1" />
              </div>
            </div>
          </div>
        </Layout>
      </div>
      <div class="colSpan-12">
        <Heading :headingLevel="2"> ランゲージセレクター </Heading>
        <Layout>
          <div class="colSpan-2">
            <div class="languageWrapper">
              <LanguageSelector :languageList="languageList" linkTag="a" />
            </div>
          </div>
        </Layout>
      </div>
      <div class="colSpan-12">
        <Heading :headingLevel="2"> テーブル </Heading>
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
      </div>
      <div class="colSpan-12">
        <Heading :headingLevel="2"> ページネーション </Heading>
        <img
          :src="`https://picsum.photos/id/${pageNumber}/200/200`"
          alt=""
          width="200"
          height="200"
        />
        <UsePaginationComponent />
      </div>
      <div class="colSpan-12">
        <Heading :headingLevel="2"> モーダル </Heading>
        <BasicButton
          label="モーダルを表示"
          @click="
            () => {
              isShown = true;
            }
          "
        />

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
      <div class="colSpan-12">
        <Heading :headingLevel="2"> アコーディオン </Heading>
        <Accordion
          v-for="(accordion, index) in accordionText"
          :key="index"
          :summary="accordion.summary"
          :details="accordion.details"
          :hasSummaryIcon="true"
          :hasDetailIcon="true"
        >
          <template #summary>🤔</template>
          <template #detail>😀</template>
        </Accordion>
      </div>
      <div class="colSpan-12">
        <Heading :headingLevel="2"> レイアウト </Heading>
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
        <p>真ん中半分だけ使う</p>
        <Layout>
          <div class="layoutBlock colStart-4 colEnd-10">4分の2</div>
        </Layout>
      </div>
    </Layout>
    <div class="templates">
      <Heading :headingLevel="1" designLevel="XL"> テンプレート </Heading>
      <hr />
      <Layout>
        <div class="colSpan-12">
          <LoginTemplate />
        </div>
      </Layout>
    </div>
    <p class="copyright">
      Copyright Digital Agency, Government of Japan 2023. Licensed under CC by
      4.0
    </p>
  </div>
</template>

<style scoped lang="scss">
@use "@/assets/style/utils/utils.scss" as *;

.globalWrapper {
  max-width: 1104px;
  padding: 0 40px;
  margin: 24px auto 0;
  @include mediaQueryDown {
    padding: 0 16px;
  }

  &.isModalOpen {
    height: 100vh;
    overflow: hidden;
  }
}

hr {
  border-color: var(--color-border-divider);
}

.colorScheme {
  margin: 36px 0;
}

.headerLogo {
  @include mediaQueryDown {
    width: 160px;
    height: auto;
  }
}

.headerNav {
  padding-right: 160px;
  @include mediaQueryDown {
    display: none;
  }
}

.headerMenu {
  height: 56px;
}

.headerLanguage {
  position: absolute;
  top: 26px;
  right: 4px;
  width: 120px;
  @include mediaQueryDown {
    top: 12px;
  }
}

.languageWrapper {
  position: relative;
  height: 100px;
}

.menuWrapper {
  height: 240px;
}

.headerHamburger {
  position: relative;
  top: 4px;
}

.headerAndDrawer {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 100;
  display: grid;
  grid-template-rows: auto 1fr;
  width: 100%;

  &.isDrawerActive {
    @include mediaQueryDown {
      height: 100vh;
    }
  }
}

.drawerWrapper {
  display: grid;
  align-items: stretch;
  width: 100%;
  height: 0;
  overflow-x: hidden;
  overflow-y: auto;
  transition: height 0s;
  transition-delay: var(--base-duration);

  &.isActive {
    height: 100%;
    visibility: visible;
    transition-delay: 0s;
  }
}

.megaMenuButton {
  appearance: none;
  background: none;
  border: none;
}

.buttonWrapper {
  display: flex;
  flex-direction: column;
  row-gap: 24px;
  max-width: 300px;
}

.inputWrapper {
  display: flex;
  flex-direction: column;
  row-gap: 24px;
  max-width: 300px;
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

.copyright {
  padding: 16px;
  font-size: pxToRem(14);
  text-align: center;
}
</style>
