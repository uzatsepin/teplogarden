<template>
    <div class="ProductOptionsItem">
        <h4 class="ProductOptionsItem__name">{{ option.name }}</h4>
        <p class="ProductOptionsItem__price">+ {{ formatPrice(Number(option.price)) }} ₽</p>
    </div>
</template>

<script setup lang="ts">
import type { IOptions } from '~/types/product.types';

const props = defineProps<{
    option: IOptions
}>()
</script>

<style scoped lang="scss">
.ProductOptionsItem {
    padding: 8px 16px;
    border-radius: 16px;
    background: #ECEAE1;
    display: flex;
    flex-direction: column;
    gap: 8px;
    justify-content: center;
    align-items: center;
    border: 1px solid transparent;
    transition: all 250ms ease-in-out;

    &:hover {
        border-color: $red;
        cursor: pointer;
    }

    &.active {
        border-color: $red;
    }

    &__name {
        font-size: 16px;
        color: #141414;
    }

    &__price {
        font-weight: 600;
    }
}
</style>