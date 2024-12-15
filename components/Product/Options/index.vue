<template>
    <div class="ProductOptions">
        <h2 class="ProductOptions__title">Дополнительные опции</h2>
        <div class="ProductOptions__container">
            <ProductOptionsItem v-for="option in options" :key="option.name" :option="option"/>
        </div>
    </div>
</template>

<script setup lang="ts">
import type { IOptions } from '~/types/product.types';


const props = defineProps<{
    options: IOptions[]
}>()

</script>

<style scoped lang="scss">

.ProductOptions {
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
        flex-wrap: wrap;
        

        &::-webkit-scrollbar {
            display: none;
        }
    }
}

</style>