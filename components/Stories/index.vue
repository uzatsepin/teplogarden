<template>
  <NuxtLayout name="container">
    <section class="Stories">
      <OthersTitle>Линейка Teplo M</OthersTitle>
      <div class="Stories__container">
        <StoriesItem />
        <StoriesItem />
        <StoriesItem />
        <StoriesItem />
        <StoriesItem />
        <StoriesItem />
        <StoriesItem />
      </div>
      <div class="Stories__products">
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
      </div>
    </section>
  </NuxtLayout>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
.Stories {
  margin-top: 48px;

  &__container {
    margin-top: 24px;
    display: flex;
    gap: 16px;
    overflow-x: scroll;

    &::-webkit-scrollbar {
      display: none;
    }
  }

  &__products {
    display: flex;
    gap: 24px;
    overflow-x: scroll;
    margin-top: 24px;

    &::-webkit-scrollbar {
      display: none;
    }
  }
}
</style>
