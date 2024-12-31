
# デジタル庁デザインシステム Vue.js
[デジタル庁が公開しているデザインシステム](https://www.digital.go.jp/policies/servicedesign/designsystem)をVue.jsで実装したものです。各コンポーネントは[Storybook](https://crayfisher-zari.github.io/digital-agency-design-system/)で紹介しています。

現在、ダークモードのカラースキームは対応していません。

propsなどはDocsに記載しています。`modelValue`propsおよび`update:modelValue`はコンポーネントの`v-model`で利用できます。

## 必要動作環境
Vue 3.4以上

## インストール
```
npm install digital-agency-design-system-vue
```

## 使い方
インストール後、CSSのスタイルを読み込む必要があります。`digital-agency-design-system-vue/style.css`として公開していますので、任意の方法でCSSファイルを読み込んでください。Viteを使っている場合下記コードで読み込めます。

```ts
import "digital-agency-design-system-vue/style.css"
```

### コンポーネントの使用方法
コンポーネントは下記のようにインポートできます。

```ts
import { BasicButton } from "digital-agency-design-system-vue"
```

コンポーネントのPropsや使い方については[Storybook](https://crayfisher-zari.github.io/digital-agency-design-system/)をご確認ください。

## デザインのライセンスに関する表記
Copyright Digital Agency, Government of Japan 2023. Licensed under CC by 4.0