import {
  ConcreteComponent,
  defineComponent,
  h,
  resolveComponent,
  SlotsType,
} from "vue";

type Props = {
  /** 明示的にタグを指定します */
  tag?: "a" | "router" | "nuxt" | "auto";
};

/**
 * リンク系のタグで適切なものを選択します
 * 特に指定がない限り、Vue Routerのrouter-linkか、Nuxtのnuxt-linkがあれば優先されます。
 * いずれもない場合はaタグで出力されます。
 * @example
 * const { LinkComponent } = useLink();
 * <linkComponent to="/hoge" />
 */
export const useLink = (props: Props = { tag: "auto" }) => {
  const RouterLink = resolveComponent("RouterLink");
  const NuxtLink = resolveComponent("NuxtLink");
  let Link: ConcreteComponent | string;
  if (props && props.tag) {
    if (props.tag === "router") {
      Link = RouterLink;
    } else if (props.tag === "nuxt") {
      Link = NuxtLink;
    } else {
      Link = "a";
    }
  } else {
    // 明示的なタグがない場合はresolveComponentから探す
    // コンポーネントが見つからない場合はresolveComponentは文字列を返す
    if (NuxtLink !== "NuxtLink") {
      Link = NuxtLink;
    } else if (RouterLink !== "RouterLink") {
      Link = RouterLink;
    } else {
      Link = "a";
    }
  }

  const render = (props: { to: string }, slots: SlotsType) => {
    if (typeof Link === "string") {
      return h(Link, { href: props.to }, slots);
    } else {
      return h(Link, { to: props.to }, slots);
    }
  };
  const LinkComponent = defineComponent(
    (props, { slots }) => {
      return () => render(props, slots);
    },
    {
      props: {
        to: {
          type: String,
          default: "/",
        },
      },
    }
  );
  return { LinkComponent };
};
