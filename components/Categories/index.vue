<template>
    <NuxtLayout name="container">
        <section class="Categories">
            <OthersTitle>Линейка Teplo S</OthersTitle>
            <div class="Categories__container">
                <CategoriesBanner />
                <div class="Categories__products">
                    <Product />
                    <Product />
                    <Product />
                    <Product />
                </div>
            </div>
        </section>
    </NuxtLayout>
</template>

<script setup lang="ts">

</script>

<style scoped lang="scss">
.Categories {
    margin-top: 48px;

    &__container {
        display: flex;
        gap: 24px;
        overflow-x: scroll;
        margin-top: 24px;

        &::-webkit-scrollbar {
            display: none;
        }
    }

    &__products {
        display: flex;
        gap: 24px;

        .Product {
            width: 340px;
            min-width: 340px;
        }
    }
}

</style>