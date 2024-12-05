<template>
  <div class="StoriesItem">
    <div class="StoriesItem__img">
      <NuxtImg src="https://placehold.co/108x108" alt="Stories name" />
    </div>
    <div class="StoriesItem__name">Teplo M</div>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
.StoriesItem {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  min-width: 154px;
  height: 154px;

  &:hover {
    cursor: pointer;
  }

  &:hover & {
    &__name {
      color: $red;
    }

    &__img {
      & img {
        transform: scale(1.07);
      }
    }
  }

  &__img {
    background: linear-gradient(90deg, #8c2b02 0%, #fd986d 100%);
    border-radius: 50%;
    padding: 5px;

    & img {
      width: 104px;
      height: 104px;
      border-radius: 50%;
      overflow: hidden;
      display: block;
      transition: transform 250ms ease-in-out;
    }
  }

  &__name {
    font-weight: 600;
    font-size: 14px;
    line-height: 140%;
    text-align: center;
    transition: color 250ms ease-in-out;
  }
}
</style>
