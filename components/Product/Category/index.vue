<template>
    <div class="ProductCategory">
        <h2 class="ProductCategory__title">Другие категории</h2>

        <div class="ProductCategory__container">
            <ProductCategoryItem  v-for="category in categories" :key="category.id" :category="category"/>
        </div>
    </div>
</template>

<script lang="ts" setup>
const categories = [
    {
        id: 1,
        image: 'https://placeholder.co/131x90',
        name: 'Teplo M',
        size: 'Ширина 3000'
    },
    {
        id: 2,
        image: 'https://placeholder.co/131x90',
        name: 'Teplo L',
        size: 'Ширина 3500'
    }
]
</script>

<style scoped lang="scss">
.ProductCategory {
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
        gap: 16px;
    }
}
</style>