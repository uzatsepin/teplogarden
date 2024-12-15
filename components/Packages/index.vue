<template>
    <NuxtLayout name="container">
        <section class="Packages">
            <OthersTitle>Варианты комплектации</OthersTitle>
            <div class="Packages__container">
                <ProductPackagesItem v-for="pkg in packages" :key="pkg.id" :pkg="pkg"/>
            </div>
        </section>
    </NuxtLayout>
</template>

<script setup lang="ts">
import { useAdditionalsStore } from '~/store/additionalsStore';

const additionalsStore = useAdditionalsStore();

const { data: packages } = await useAsyncData('product-packages', () => {
    return additionalsStore.fetchPackages();
})
</script>

<style scoped lang="scss">
.Packages {
    margin-top: 48px;

    &__container {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: 24px;
        margin-top: 24px;

        :deep(.ProductPackagesItem) {
            flex-direction: column;
            padding: 24px;

            @media screen and (max-width: 767px) {
                padding: 24px 0;
            }

            &:hover {
                border-color: transparent;
                box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
            }
        }

        :deep(.ProductPackagesItem__wrapper) {
            width: 100%;
            height: 200px;
            min-width: 100%;

            @media screen and (max-width: 1365px) {
                height: 300px;
            }
        }

        @media screen and (max-width: 1365px) {
            grid-template-columns: 1fr;
        }
    }
}
</style>
