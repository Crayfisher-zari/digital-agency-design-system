<script setup lang="ts">
type Props = {
  summary: string;
  details: string;
  hasSummaryIcon?: boolean;
  hasDetailIcon?: boolean;
};

const props = withDefaults(defineProps<Props>(), {
  hasSummaryIcon: false,
  hasDetailIcon: false,
});
</script>
<template>
  <div>
    <details class="accordion">
      <summary class="summary">
        <span v-if="hasSummaryIcon" class="icon"
          ><slot name="summary"></slot
        ></span>
        <span class="summaryInner">{{ summary }}</span>
        <img
          class="dropDownIcon"
          src="@/assets/images/icon_arrow_accordion.svg"
          alt=""
          width="24"
          height="14"
        />
      </summary>
      <div class="details">
        <span v-if="hasDetailIcon" class="icon"
          ><slot name="detail"></slot
        ></span>
        {{ details }}
      </div>
    </details>
  </div>
</template>
<style lang="scss" scoped>
@use "@/assets/style/utils/utils.scss" as *;

.accordion {
  border-bottom: 1px solid var(--color-border-divider);

  &[open] {
    .dropDownIcon {
      transform: rotate(180deg);
    }
  }
}

.icon {
  display: block;
  flex-shrink: 0;
  width: 24px;
  height: 24px;
  margin-right: 38px;
  margin-left: 6px;
  font-size: pxToRem(24);
  line-height: 1;
}

.summary {
  display: flex;
  align-items: center;
  justify-content: space-between;
  min-height: 68px;
  padding-top: 19px;
  padding-right: 28px;
  padding-bottom: 19px;
  font-size: pxToRem(20);
  line-height: 1.5;
  letter-spacing: 0.04em;
  transition: background-color var(--base-duration) var(--easing-out-expo);

  &:hover {
    background-color: var(--color-background-secondary);
  }

  &:-webkit-details-marker {
    display: none;
  }

  &:focus-visible {
    outline: 2px solid var(--color-border-focused);
  }
}

.summaryInner {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  width: 100%;
}

.dropDownIcon {
  display: block;
  flex-shrink: 0;
  transition: transform var(--base-duration) var(--easing-out-expo);
}

.details {
  display: flex;
  padding-top: 24px;
  padding-right: 32px;
  padding-bottom: 40px;
  font-size: pxToRem(16);
  line-height: 1.7;
}
</style>
