<template>
    <div class="ProductSameCategory">
        <h2 class="ProductSameCategory__title">Другие теплицы линейки Teplo S</h2>

        <div class="ProductSameCategory__container">
            <ProductSameCategoryItem v-for="product in sameCategory" :key="product?.id" :product="product || []"/>
        </div>
    </div>
</template>

<script setup lang="ts">
import type { IProduct } from '~/types/product.types';

const props = defineProps<{
    sameCategory: IProduct[]
}>()

</script>

<style scoped lang="scss">
.ProductSameCategory {
    margin-top: 24px;

    &__title {
        font-weight: 600;
        font-size: 18px;
        line-height: 140%;
        color: #141414;
    }

    &__container {
        margin-top: 16px;
        display: flex;
        flex-wrap: wrap;
        gap: 16px;
    }
}
</style>