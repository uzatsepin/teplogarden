<template>
    <NuxtLayout name="container">
        <section class="Categories">
            <OthersTitle>{{ category.name }}</OthersTitle>
            <div class="Categories__container">
                <CategoriesBanner v-if="categoryBanner?.length" :bannerData="categoryBanner[0]"/>
                <div class="Categories__products">
                    <Product v-for="product in category.expand?.products" :product="product"/>
                </div>
            </div>
        </section>
    </NuxtLayout>
</template>

<script setup lang="ts">
import { useAdditionalsStore } from '~/store/additionalsStore';
import type { ICategory } from '~/types/categories.types';

const props = defineProps<{ category: ICategory }>();

const additionalsStore = useAdditionalsStore();

const { data: banner } = await useAsyncData('banners', () => {
    return additionalsStore.fetchBanners();
})

const categoryBanner = computed(() => {
    if (!props.category?.id) return [];
    
    return banner.value?.filter(item => item.category.includes(props.category.id));
});

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

        @media screen and (max-width: 1365px) {
            gap: 16px;
        }

        @media screen and (max-width: 767px) {
            gap: 8px;
        }

        .Product {
            width: 340px;
            min-width: 340px;
        }
    }
}

</style>