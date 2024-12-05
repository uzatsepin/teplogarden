<template>
  <section class="Popular">
    <NuxtLayout name="container">
      <OthersTitle>Популярные товары</OthersTitle>
      <div class="Popular__container">
        <Product />
        <Product />
        <Product />
      </div>
    </NuxtLayout>
  </section>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
.Popular {
  margin-top: 48px;
  /* background: #fff; */
  padding: 48px 0px;

  &__container {
    display: flex;
    gap: 24px;
    align-items: center;
    margin-top: 24px;
  }
}
</style>
