<template>
    <div class="ProductPackages">
        <h2 class="ProductPackages__title">Комплектации</h2>

        <div class="ProductPackages__container">
            <ProductPackagesItem v-for="pkg in packages" :key="pkg.id" :pkg="pkg"/>
        </div>
    </div>
</template>

<script setup lang="ts">
import { useAdditionalsStore } from '~/store/additionalsStore';

const additionalsStore = useAdditionalsStore();

const { data: packages } = await useAsyncData('product-packages', () => {
    return additionalsStore.fetchPackages();
})

</script>

<style scoped lang="scss">
.ProductPackages {
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
        flex-direction: column;
        gap: 16px;
    }
}

</style>