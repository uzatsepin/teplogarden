<template>
    <section class="Popular">
        <NuxtLayout name="container">
            <OthersTitle>Популярные товары</OthersTitle>
            <div class="Popular__container">
                <Product v-for="product in products" :key="product.id" :product="product"/>
            </div>
        </NuxtLayout>
    </section>
</template>

<script setup lang="ts">
import {useProductStore} from '~/store/productStore';

const productsStore = useProductStore();

const {data: products} = await useAsyncData('popular-products', () => {
    return productsStore.fetchPopularProducts();
});

</script>

<style scoped lang="scss">
.Popular {
    margin-top: 48px;
    padding: 48px 0px;

    @media screen and (max-width: 767px) {
        padding: 24px 0px;
        margin-top: 0;
    }

    &__container {
        display: flex;
        gap: 24px;
        align-items: center;
        margin-top: 24px;
        overflow: scroll;

        &::-webkit-scrollbar {
            display: none;
        }

        @media screen and (max-width: 1365px) {
            gap: 16px;
        }
    }
}
</style>
