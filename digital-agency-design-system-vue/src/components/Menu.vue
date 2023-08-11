<script setup lang="ts"></script>
<template>
  <div class="menu">
    <slot name="before"></slot>
    <div class="category">
      <p class="category_name">カテゴリ</p>
      <ul>
        <li>
          <a href="#!">メニュー</a>
        </li>
        <li>
          <a href="#!">メニュー</a>
        </li>
        <li>
          <a href="#!">メニュー</a>
        </li>
        <li>
          <details>
            <summary>アコーディオン</summary>
            <div>
              <ul>
                <li>
                  <a href="#!">メニュー</a>
                </li>
                <li>
                  <a href="#!">メニュー</a>
                </li>
                <li>
                  <a href="#!">メニュー</a>
                </li>
              </ul>
            </div>
          </details>
        </li>
      </ul>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.menu {
  li {
    list-style: none;
  }
}
</style>
