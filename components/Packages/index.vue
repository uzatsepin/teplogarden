<template>
    <NuxtLayout name="container">
        <section class="Packages">
            <OthersTitle>Варианты комплектации</OthersTitle>
            <div class="Packages__container">
                <PackagesItem />
            </div>
        </section>
    </NuxtLayout>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
.Packages {
    margin-top: 48px;

    &__container {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: 24px;
        margin-top: 24px;
    }
}
</style>
