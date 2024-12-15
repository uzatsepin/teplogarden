<template>
    <button class="SecondaryButton">
        <slot />
    </button>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
    .SecondaryButton {
        padding: 12px 16px;
        border-radius: 24px;
        font-weight: 700;
        font-size: 14px;
        line-height: 140%;
        background: $red;
        color: #fff;
        text-transform: uppercase;
        transition: all 250ms ease-in-out;
        text-transform: uppercase;
        text-align: center;

        &:hover {
            background: #a03204;
            cursor: pointer;
        }

        &:active {
            background: #b53905;
        }
    }
</style>
