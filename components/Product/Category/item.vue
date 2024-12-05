<template>
    <div class="ProductCategoryItem">
        <NuxtImg :src="category?.image" width="131" height="90"/>
        <h3 class="ProductCategoryItem__title">{{ category?.name }}</h3>
        <p class="ProductCategoryItem__size">{{ category?.size }}</p>
    </div>
</template>

<script setup lang="ts">
defineProps({
    category: Object
})
</script>

<style scoped lang="scss">
    .ProductCategoryItem {
        padding: 8px 16px;
        border-radius: 16px;
        background: $mainBeige;
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 8px;
        transition: all 250ms ease-in-out;
        border: 1px solid transparent;

        &:hover {
            border-color: $red;
            cursor: pointer;
        }

        & img {
            width: 100%;
            border-radius: 16px;
            min-width: 131px;
        }

        &__title {
            font-weight: 600;
            font-size: 16px;
            color: #141414;
        }

        &__size {
            font-size: 14px;
            color: #666;
            font-weight: 400;
        }
    }
</style>
