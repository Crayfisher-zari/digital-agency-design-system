<script setup lang="ts">
import { computed, useId, useTemplateRef } from "vue";
import BasicButton from "./BasicButton.vue";
import PartsListBox from "./parts/PartsListBox.vue";
import MenuListItem from "./MenuListItem.vue";
import Icon from "./Icon.vue";
import iconArrowDown from "../assets/images/icon_arrow_accordion.svg";
import { useClickOutside } from "../composables/useClickOutside";

type Target = {
  label: string;
  value: string;
};

type Props = {
  /** ラベル。不可視のaria-label属性として利用します */
  label?: string;
  /** 検索対象のラベル */
  targetLabel?: string;
  /** 検索対象のリスト */
  targetList?: Target[];
};

type Emits = {
  /** 検索ボタンクリック時のイベントハンドラ */
  clickSearch: [searchText: string];
};

const props = withDefaults(defineProps<Props>(), {});

const emits = defineEmits<Emits>();

const searchText = defineModel<string>("search");

const selectedTarget = defineModel<Target["value"]>("target");

const handleClickSearch = () => {
  emits("clickSearch", searchText.value ?? "");
};

const handleClickTarget = (targetValue: Target["value"]) => {
  selectedTarget.value = targetValue;
};

const selectedTargetLabel = computed(() => {
  return props.targetList?.find((item) => item.value === selectedTarget.value)
    ?.label;
});

const listBoxRef = useTemplateRef<InstanceType<typeof PartsListBox> | null>(
  "listBox",
);

const handleCloseListBox = () => {
  if (listBoxRef.value?.detailsElement) {
    listBoxRef.value.closeDropDown();
  }
};

useClickOutside(
  computed(() => listBoxRef.value?.detailsElement ?? null),
  handleCloseListBox,
);

const ariaDescribedById = useId();
const ariaControlsId = useId();
</script>

<template>
  <div class="searchbox">
    <div class="searchInputWrapper">
      <div class="searchInputAndTarget">
        <div class="targetContainer" v-if="props.targetLabel !== undefined">
          <PartsListBox ref="listBox" position="left" hasShadow>
            <template #summary>
              <span class="targetLabelWrapper">
                <span class="targetLabel">
                  {{ props.targetLabel }}
                </span>
                <span
                  class="selectedTargetLabel"
                  :id="ariaDescribedById"
                  :aria-controls="ariaControlsId"
                >
                  {{ selectedTargetLabel }}
                </span>
                <Icon
                  :iconSrc="iconArrowDown"
                  :width="16"
                  :height="16"
                  color="var(--color-mono-reverse)"
                  class="targetIcon"
                />
              </span>
            </template>
            <template #content>
              <div
                :id="ariaControlsId"
                class="targetList"
                role="listbox"
                :aria-describedby="ariaDescribedById"
              >
                <MenuListItem
                  v-for="item in props.targetList"
                  :key="item.value"
                  type="boxed"
                  tag="button"
                  :isCurrent="selectedTarget === item.value"
                  @click="handleClickTarget(item.value)"
                  class="itemButton"
                  :aria-selected="selectedTarget === item.value"
                  role="option"
                >
                  {{ item.label }}</MenuListItem
                >
              </div>
            </template>
          </PartsListBox>
        </div>
        <input
          type="text"
          v-model="searchText"
          :aria-label="props.label || undefined"
          class="searchInput"
          :class="{ withTarget: props.targetLabel !== undefined }"
        />
        <div class="iconArea" v-if="$slots.icon">
          <slot name="icon" />
        </div>
      </div>
      <BasicButton
        type="primary"
        label="検索"
        size="large"
        @click="handleClickSearch"
      ></BasicButton>
    </div>
  </div>
</template>

<style scoped>
.searchInputWrapper {
  display: flex;
  column-gap: 16px;
}

.searchInputAndTarget {
  position: relative;
  display: flex;
  flex-grow: 1;
}

.searchInput {
  width: 100%;
  height: 56px;
  padding: 0 10px 0 48px;
  font-size: 1rem;
  background-image: url("@/assets/images/icon_search.svg");
  background-repeat: no-repeat;
  background-position: left 16px center;
  background-size: 24px;
  border: 1px solid var(--color-border-field);
  border-radius: 12px;

  &.withTarget {
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
  }

  &:focus-visible {
    outline: 4px solid var(--color-text-body);
    outline-offset: 2px;
    box-shadow: 0 0 2px 2px var(--color-focus);
  }
}

.iconArea {
  position: absolute;
  top: 50%;
  right: 16px;
  transform: translateY(-50%);
}

.targetContainer {
  width: 160px;
  height: 56px;
  background-color: var(--color-background-tertiary);
  border: 1px solid var(--color-border-field);
  border-right: none;
  border-top-left-radius: 12px;
  border-bottom-left-radius: 12px;
}

.targetLabelWrapper {
  position: relative;
  display: block;
  width: 160px;
  height: 54px;
  padding: 9px 16px 10px;
  cursor: pointer;
}

.targetLabel {
  display: block;
  margin-bottom: 3px;
  font-size: 1rem;
  line-height: 1;
  color: var(--color-text-description);
}

.selectedTargetLabel {
  display: block;
  font-size: 1.0625rem;
  line-height: 1;
  color: var(--color-text-body);
}

.targetIcon {
  position: absolute;
  top: 50%;
  right: 16px;
  pointer-events: none;
  transform: translateY(-50%);
}

.targetList {
  width: 160px;
  padding: 16px 0;
  list-style: none;
  border: 1px solid var(--color-border-divider);
}

.itemButton {
  display: block;
  width: 100%;
  height: 100%;
  padding: 10px 16px;
  text-align: left;
  appearance: none;
  cursor: pointer;
  background: none;
  border: none;
}

/* .targetList li{
  width: 160px;
  height: 56px;
}

.targetList li button{
  width: 160px;
  height: 56px;
} */
</style>
