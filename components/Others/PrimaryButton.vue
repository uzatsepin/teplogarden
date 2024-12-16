<template>
  <button class="PrimaryButton">
    <slot />
  </button>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
.PrimaryButton {
  padding: 12px 16px;
  border-radius: 24px;
  font-weight: 700;
  font-size: 14px;
  line-height: 140%;
  background: $red;
  color: $textColor;
  text-transform: uppercase;
  transition: all 250ms ease-in-out;
  text-transform: uppercase;
  text-align: center;
  background: #d0c3ae;
  text-transform: uppercase;

  &:hover {
    background: #efe0c8;
    cursor: pointer;
    color: $red;
  }

  &:active {
    background: #fbe3bd;
  }

  &:disabled {
    opacity: 0.5;
    pointer-events: none;
    cursor: not-allowed;
  }
}
</style>
