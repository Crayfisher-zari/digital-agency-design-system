import { Meta } from "@storybook/vue3";

// genericを含むコンポーネントのストーリーブックの型解決
// see also https://github.com/storybookjs/storybook/issues/24238
export type GenericMeta<C> = Omit<Meta<C>, "component"> & {
  component: Record<keyof C, unknown>;
};
