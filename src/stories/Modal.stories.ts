import type { Meta, StoryObj } from "@storybook/vue3";
import Modal from "../components/Modal.vue";
import { ref } from "vue";

const meta = {
  title: "モーダル",
  component: Modal,
  tags: ["autodocs"],
  argTypes: {
    title: {
      control: "text",
    },
    text: {
      control: "text",
    },
    labelPrimary: {
      control: "text",
    },
    labelSecondary: {
      control: "text",
    },
  },
  args: {
    title: "ダイアログタイトル",
    text: "ダイアログの補助テキストが入ります。",
    labelPrimary: "ボタン",
    labelSecondary: "ボタン",
  },
} satisfies Meta<typeof Modal>;
export default meta;
type Story = StoryObj<typeof meta>;

export const Base: Story = {
  render: (args) => ({
    components: { Modal },
    setup: () => {
      const isShown = ref(false);
      const showModal = () => {
        isShown.value = true;
      };
      const hideModal = () => {
        isShown.value = false;
      };
      return {
        ...args,
        isShown,
        showModal,
        hideModal,
      };
    },
    template: `
      <div>
      <button @click="showModal">表示</button>
      <Modal 
        v-model="isShown" 
        :title="title" 
        :text="text" 
        :labelPrimary="labelPrimary" 
        :labelSecondary="labelSecondary" 
        :onClickPrimary="hideModal"
        :onClickSecondary="hideModal" 
      />
      </div>
    `,
  }),
};
