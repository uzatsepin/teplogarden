<template>
    <div class="CatalogItem">
        <div class="CatalogItem__wrapper">
            <NuxtImg
                :src="genImageUrl(category?.collectionId, category?.id, category.image)"
                height="150"
                :alt="category?.name"
                v-if="!loading"
                :title="category?.name"
            />
            <Icon v-else name="svg-spinners:270-ring-with-bg" class="CatalogItem__wrapper-loading" />
        </div>
        <h2 class="CatalogItem__name"> {{ category?.name }} </h2>
        <p class="CatalogItem__descr"> {{ category?.width }} см </p>

        <div class="CatalogItem__sizes">
            <h3 class="CatalogItem__sizes-title">Доступные размеры</h3>

            <ul class="CatalogItem__sizes-list">
                <li class="CatalogItem__sizes-item" v-for="product in category?.expand?.products" :key="product.id">
                    <NuxtLink :to="`/product/${product.slug}`" class="CatalogItem__sizes-item-link" :title="product?.name">{{ product.name }}</NuxtLink>
                </li>
            </ul>
        </div>
    </div>
</template>

<script setup lang="ts">
import { useCategoriesStore } from '~/store/categoriesStore';
import type { ICategory } from '~/types/categories.types';

const categoriesStore = useCategoriesStore();

const { loading } = storeToRefs(categoriesStore);


const props = defineProps<{
    category: ICategory
}>();

</script>

<style scoped lang="scss">
    .CatalogItem {
        display: flex;
        flex-direction: column;
        border: 1px solid #e0e0e0;
        padding: 24px;
        border-radius: 16px;
        background: $red;
        width: 100%;

        &__wrapper {
            & img {
                width: 100%;
                height: auto;
                object-fit: cover;
                border-radius: 16px;
                overflow: hidden;
            }

            &-loading {
                width: 150px;
                height: 150px;
                display: flex;
                justify-content: center;
                align-items: center;
                margin: 0 auto;
                background: $secondaryBeige;
            }
        }

        &__name {
            font-weight: 600;
            font-size: 20px;
            line-height: 140%;
            color: #fff;
            margin-top: 16px;
            text-align: center;
        }

        &__descr {
            font-size: 16px;
            line-height: 140%;
            color: #e2e2e2;
            margin-top: 8px;
            text-align: center;
        }

        &__sizes {
            margin-top: 16px;

            &-title {
                font-weight: 600;
                font-size: 16px;
                line-height: 140%;
                color: #fff;
                margin-bottom: 8px;
            }

            &-item {
                font-size: 16px;
                line-height: 140%;
                color: #fff;
                margin-bottom: 8px;
                padding: 8px 16px;
                background: $lightRed;
                border-radius: 8px;
                text-align: center;
                transition: background 250ms ease-in-out;

                &-link {
                    display: block;
                    width: 100%;
                }

                &:hover {
                    background: #c2410a;
                    cursor: pointer;
                }
            }
        }
    }
</style>
