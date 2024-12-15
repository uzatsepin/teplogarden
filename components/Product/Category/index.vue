<template>
    <div class="ProductCategory">
        <h2 class="ProductCategory__title">Другие категории</h2>

        <div class="ProductCategory__container">
            <ProductCategoryItem  v-for="category in otherCategories" :key="category.id" :category="category"/>
        </div>
    </div>
</template>

<script lang="ts" setup>
import type { ICategory } from '~/types/categories.types';


const props = defineProps<{
    otherCategories: ICategory[]
}>()
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