<template>
    <div class="ProductCardAdvantageItem">
        <div class="ProductCardAdvantageItem__img">
            <NuxtImg :src="advantage.image" alt="ProductAdvantageItem" :title="advantage.name"/>
        </div>
        <div class="ProductCardAdvantageItem__text">{{advantage.name}}</div>
        <p class="ProductCardAdvantageItem__descr">
            {{ advantage.value }}
        </p>
    </div>
</template>

<script setup lang="ts">
defineProps({
    advantage: {
        type: Object,
        required: true
    }
})
</script>

<style scoped lang="scss">

.ProductCardAdvantageItem {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 8px;

    &__img {
        & img {
            width: 130px;
            height: 100px;
            object-fit: cover;
            overflow: hidden;
        }
    }

    &__text {
        font-weight: 400;
        font-size: 16px;
        line-height: 140%;
        text-align: center;
        color: #666;
    }

    &-descr {
        font-weight: 400;
        font-size: 16px;
        line-height: 140%;
        text-align: center;
        color: #141414;
    }
}

</style>