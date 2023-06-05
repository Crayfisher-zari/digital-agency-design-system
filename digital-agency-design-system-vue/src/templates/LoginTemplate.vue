<script setup lang="ts">
import Layout from "../components/Layout.vue";
import Heading from "../components/Heading.vue";
import BasicButton from "../components/BasicButton.vue";
import { useEmailInput } from "../composables/useEmailInput";
import { usePasswordInput } from "../composables/usePasswordInput";

const { UseEmailInputComponent, email } = useEmailInput();
const { UsePasswordInputComponent, password } = usePasswordInput();

const handleSubmit = () => {
  console.log(email.value, password.value);
};
</script>
<template>
  <Layout>
    <div class="colSpan-9">
      <Heading :headingLevel="1"> ログイン </Heading>
      <form action="#">
        <div class="loginForm">
          <UseEmailInputComponent />
          <UsePasswordInputComponent />
        </div>
        <div class="loginButtons">
          <BasicButton label="ログイン" @click="handleSubmit" />
          <BasicButton label="新規登録" type="secondary" />
          <BasicButton label="パスワードをお忘れの方" type="tertiary" />
        </div>
      </form>
    </div>
  </Layout>
</template>
<style lang="scss" scoped>
.loginForm {
  display: grid;
  grid-auto-flow: row;
  row-gap: 16px;
}

.loginButtons {
  display: grid;
  grid-auto-flow: row;
  row-gap: 8px;
  margin-top: 40px;
}
</style>
