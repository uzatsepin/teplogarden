<template>
    <div class="ProductCardReviews">
        <ProductReviewsEmpty
            v-if="reviews?.length < 1"
            @open="openPopup"
        />

        <div
            class="ProductCardReviews__container"
            v-else
        >
            <div class="ProductCardReviews__top">
                <h2 class="ProductCardReviews__top-title"
                    >Отзывы про <span>{{ productName }}</span></h2
                >
                <OthersPrimaryButton @click="openPopup">Оставить отзыв</OthersPrimaryButton>
            </div>
            <ProductReviewsItem
                v-for="review in reviews"
                :key="review.id"
                :review="review"
            />
        </div>

        <ProductReviewsAddReviewPopup
            :isOpen="isPopupOpen"
            :name="`Оставить отзыв ${productName}`"
            @close="closePopup"
            @submit="handleSubmit"
        />
    </div>
</template>

<script setup lang="ts">
    import { useProductStore } from '~/store/productStore';
    import type { IReview } from '~/types/review.types';
    const productStore = useProductStore();

    export interface IReviewForm {
        collectionId: string;
        collectionName: string;
        id: string;
        rating: number;
        reviewer: string;
        comment: string;
        product: string;
    }

    const props = withDefaults(
        defineProps<{
            productName?: string;
            reviews?: IReview[];
        }>(),
        {
            reviews: () => [],
            productName: '',
        },
    );

    const isPopupOpen = ref(false);

    const openPopup = () => {
        isPopupOpen.value = true;
        useScrollLock().lockScroll();
    };

    const closePopup = () => {
        isPopupOpen.value = false;
        useScrollLock().unlockScroll();
    };

    const handleSubmit = async (formData: IReviewForm) => {
        if (!productStore.product?.id) return;

        const result = await productStore.createProductReview({
            ...formData,
            product: productStore.product.id,
        });

        if (result) {
            await refreshNuxtData('product');
        }
    };
</script>

<style scoped lang="scss">
    .ProductCardReviews {
        &__container {
            display: flex;
            flex-direction: column;
            gap: 16px;
        }

        &__top {
            display: flex;
            align-items: center;
            justify-content: space-between;

            &-title {
                font-weight: 400;
                font-size: 18px;
                line-height: 140%;
                color: #141414;

                & span {
                    font-weight: 600;
                    color: #444444;
                }
            }
        }
    }
</style>
