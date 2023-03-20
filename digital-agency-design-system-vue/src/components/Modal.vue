<script lang="ts" setup>
import { ref, Ref } from "vue";
import BasicButton from "../components/BasicButton.vue";
import Layout from "../components/Layout.vue";
type Props = {
  title: string;
  text: string;
  labelPrimary: string;
  labelSecondary?: string;
  modelValue: boolean;
  onClickPrimary: () => void;
  onClickSecondary?: () => void;
};

type Emits = { (e: "update:modelValue", value: Boolean): void };

const props = withDefaults(defineProps<Props>(), {
  labelSecondary: "",
});
const emits = defineEmits<Emits>();

const handleClickPrimary = () => {
  props.onClickPrimary();
  emits("update:modelValue", false);
};

const handleClickSecondary = () => {
  if (!props.onClickSecondary) {
    return;
  }
  props.onClickSecondary();
  emits("update:modelValue", false);
};
</script>
<template>
  <Teleport to="body">
    <div class="modalBg" v-show="modelValue">
      <layout class="modalWrapper">
        <div class="modal colStart-4 colEnd-10">
          <h3 class="title">{{ title }}</h3>
          <p class="text">{{ text }}</p>
          <div class="buttonWrapper">
            <BasicButton
              :label="labelPrimary"
              class="button"
              type="primary"
              @click="handleClickPrimary"
            ></BasicButton>
            <BasicButton
              v-if="handleClickSecondary"
              :label="labelSecondary"
              class="button"
              type="tertiary"
              @click="handleClickSecondary"
            ></BasicButton>
          </div>
        </div>
      </layout>
    </div>
  </Teleport>
</template>
<style lang="scss">
.modalBg {
  position: fixed;
  z-index: 9999;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.7);
}

.modalWrapper {
  height: 100%;
}

.modal {
  background-color: var(--color-background-primary);
  align-self: center;
  padding: 40px 56px;
  border-radius: 12px;
}

.title {
  margin-bottom: 16px;
  font-size: 1.375rem;
  font-weight: bold;
}

.text{
  font-size: 1rem;
  line-height: 1.75;
}

.buttonWrapper{
  margin-top: 40px;
  display: grid;
  grid-auto-flow: row;
  row-gap: 8px;

}

.button{
  width: 100%;
}
</style>
