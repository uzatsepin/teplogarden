<template>
    <div class="ProductPackagesItem">
        <div class="ProductPackagesItem__wrapper">
            <NuxtImg :src="pkg?.image" width="131" height="90"/>
        </div>
        <div class="ProductPackagesItem__info">
            <h3 class="ProductPackagesItem__info-title">{{ pkg?.title }}</h3>
            <p class="ProductPackagesItem__info-subtitle">{{ pkg?.subtitle }}</p>
            <p class="ProductPackagesItem__info-descr">{{ pkg?.descr }}</p>
        </div>
        <OthersSecondaryButton>Подробнее</OthersSecondaryButton>
    </div>
</template>

<script setup lang="ts">
defineProps({
    pkg: Object
})
</script>

<style scoped lang="scss">
.ProductPackagesItem {
    border-radius: 16px;
    padding: 8px 16px;
    background: $mainBeige;
    display: flex;
    align-items: center;
    gap: 16px;
    width: 100%;
    border: 1px solid transparent;
    transition: all 250ms ease-in-out;

    &:hover {
        border-color: $red;
        cursor: pointer;
    }

    &__wrapper {
        width: 131px;
        height: 90px;
        min-width: 131px;
        border-radius: 16px;
        overflow: hidden;
    }

    &__info {
        display: flex;
        flex-direction: column;
        gap: 4px;
        flex: 1;

        &-title {
            font-size: 18px;
            font-weight: 600;
        }
        &-subtitle {
            font-size: 16px;
        }

        &-descr {
            font-size: 14px;
            color: #666;
        }
    }
}
</style>