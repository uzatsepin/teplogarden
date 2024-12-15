<template>
    <div class="CatalogCategory">
        <Header />
        <NuxtLayout name="container">
            <h1 class="CatalogCategory__title">Теплицы Teplo M</h1>

            <div class="CatalogCategory__container">
                <Product
                    v-for="product in category.expand.products"
                    :key="product.id"
                    :product="product"
                />
            </div>
        </NuxtLayout>

        <Footer />
    </div>
</template>

<script setup lang="ts">
    import { useCategoriesStore } from '~/store/categoriesStore';

    const route = useRoute();
    const categoryStore = useCategoriesStore();

    const { data: category } = await useAsyncData('category', () => {
        return categoryStore.fetchCategoryBySlug(
            Array.isArray(route.params.category) ? route.params.category[0] : route.params.category,
        );
    });

</script>

<style scoped lang="scss">
    .CatalogCategory {
        &__title {
            margin-top: 24px;
            font-weight: 600;
            font-size: 24px;
            line-height: 140%;
            color: #141414;
        }

        &__container {
            display: grid;
            grid-template-columns: repeat(auto-fill, minmax(409px, 1fr));
            gap: 16px;
            margin-top: 16px;
        }
    }
</style>
