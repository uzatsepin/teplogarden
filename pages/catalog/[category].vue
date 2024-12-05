<template>
    <div class="CatalogCategory">
        <Header/>
        <NuxtLayout name="container">
            <h1 class="CatalogCategory__title">Теплицы Teplo M</h1>

            <div class="CatalogCategory__container">
                <Product />
                <Product />
                <Product />
                <Product />
                <Product />
                <Product />
            </div>
        </NuxtLayout>

        <Footer/>
    </div>
</template>

<script setup lang="ts">

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