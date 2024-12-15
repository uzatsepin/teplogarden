<template>
    <NuxtLink :to="`/product/${product?.slug}`" class="ProductSameCategoryItem" :title="product?.name">
        <div class="ProductSameCategoryItem__name">{{ product?.name }}</div>
        <div class="ProductSameCategoryItem__size">{{ product?.shortDescription }}</div>
        <div class="ProductSameCategoryItem__price">{{ formatPrice(Number(product?.priceNew)) }} ₽ </div>
    </NuxtLink>
</template>

<script setup lang="ts">
import type { IProduct } from '~/types/product.types';

const props = defineProps<{
    product: IProduct
}>()

</script>

<style scoped lang="scss">
.ProductSameCategoryItem {
    padding: 8px 16px;
    background: $mainBeige;
    border-radius: 16px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 8px;
    transition: all 250ms ease-in-out;
    border: 1px solid transparent;

    &:hover {
        border-color: $red;
        cursor: pointer;
    }

    &.router-link-exact-active {
        border-color: $red;
    }

    &.router-link-exact-active & {
        &__name {
            color: $red;
        }
    }

    &__name {
        font-weight: 600;
        font-size: 16px;
        color: #141414;
    }

    &__size {
        font-size: 14px;
        color: #666;
        font-weight: 400;
    }

    &__price {
        font-weight: 600;
        color: #141414;
    }
}
</style>