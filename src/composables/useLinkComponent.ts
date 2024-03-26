import {
  Component,
  ConcreteComponent,
  defineComponent,
  h,
  resolveComponent,
  SlotsType,
} from "vue";

export type LinkTag = "a" | "router" | "nuxt" | "auto";

type Props = {
  /** 明示的にタグを指定します */
  tag?: LinkTag;
  target?: "_blank";
};

/**
 * リンク系のタグを選択します
 * 特に指定がない場合は自動判定で出力されます。自動判定はNuxtLink、RouterLinkの順に探し、ない場合はaタグで出力されます
 * @example
 * const { LinkComponent } = useLink({tag:"nuxt"});
 * <linkComponent to="/hoge" />
 */
export const useLink = (props: Props = { tag: "auto" }) => {
  const Link = getLinkComponent(props.tag);

  const render = (props: { to: string; target: string }, slots: SlotsType) => {
    if (typeof Link === "string") {
      return h(Link, { href: props.to, target: props.target ?? null }, slots);
    } else {
      return h(Link, { to: props.to }, slots);
    }
  };

  const LinkComponent: Component = defineComponent(
    (props, { slots }) => {
      return () => render(props, slots);
    },
    {
      props: {
        to: {
          type: String,
          default: "/",
        },
        target: {
          type: String,
          required: false,
          default: undefined,
        },
      },
    },
  );
  return { LinkComponent };
};

/**
 * 指定されたリンクタグに対してコンポーネントが存在するか確かめ、存在すればそのリンク系コンポーネントを返します。なければ文字列"a"を返します
 */
const getLinkComponent = (
  tag: LinkTag | undefined,
): ConcreteComponent | string => {
  if (tag === "auto") {
    const RouterLink = resolveComponent("RouterLink");
    const NuxtLink = resolveComponent("NuxtLink");
    if (NuxtLink !== "NuxtLink") {
      return NuxtLink;
    } else if (RouterLink !== "RouterLink") {
      return RouterLink;
    } else {
      return "a";
    }
  } else if (tag === "router") {
    const RouterLink = resolveComponent("RouterLink");
    if (RouterLink !== "RouterLink") {
      return RouterLink;
    } else {
      return "a";
    }
  } else if (tag === "nuxt") {
    const NuxtLink = resolveComponent("NuxtLink");
    if (NuxtLink !== "NuxtLink") {
      return NuxtLink;
    } else {
      return "a";
    }
  } else {
    return "a";
  }
};
