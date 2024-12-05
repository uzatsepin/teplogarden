<template>
    <div class="ProductSameCategory">
        <h2 class="ProductSameCategory__title">Другие теплицы линейки Teplo S</h2>

        <div class="ProductSameCategory__container">
            <ProductSameCategoryItem v-for="product in sameCategoryProduct" :key="product.name" :product="product"/>
        </div>
    </div>
</template>

<script setup lang="ts">
const sameCategoryProduct = [
    {
        name: 'Teplo S-3',
        size: '2’238x3’087,5x2’001',
        price: 1118185,
    },
    {
        name: 'Teplo S-5',
        size: '2’238x3’087,5x2’001',
        price: 1118185,
    },
    {
        name: 'Teplo S-7',
        size: '2’238x3’087,5x2’001',
        price: 1118185,
    },
    {
        name: 'Teplo S-9',
        size: '2’238x3’087,5x2’001',
        price: 1118185,
    },
    {
        name: 'Teplo S-11',
        size: '2’238x3’087,5x2’001',
        price: 1118185,
    },
    {
        name: 'Teplo S-13',
        size: '2’238x3’087,5x2’001',
        price: 1118185,
    },
]
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