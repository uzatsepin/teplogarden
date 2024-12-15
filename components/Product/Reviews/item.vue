<template>
    <div class="ProductCardReviewsItem">
        <div class="ProductCardReviewsItem__container">
            <div class="ProductCardReviewsItem__top">
                <div class="ProductCardReviewsItem__top-rating">
                    <div class="ProductCardReviewsItem__top-rating-icon">
                        <template v-for="index in 5" :key="index">
                            <NuxtImg 
                                :src="index <= review?.rating ? '/images/star-fill.svg' : '/images/star-empty.svg'"
                                alt="star"
                                width="16"
                                height="16"
                            />
                        </template>
                    </div>
                    <div class="ProductCardReviewsItem__top-rating-name">{{review?.reviewer}}</div>
                </div>
                <div class="ProductCardReviewsItem__top-date">
                    {{formatDate(review?.created)}}
                </div>
            </div>
            <div class="ProductCardReviewsItem__comment">
                {{ review?.comment }}
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import type { IReview } from '~/types/review.types';

const props = defineProps<{
    review: IReview;
}>();
</script>

<style scoped lang="scss">
.ProductCardReviewsItem {
    margin-top: 16px;

    &__container {
        border-radius: 16px;
        background: $mainBeige;
        padding: 24px;
    }

    &__top {
        display: flex;
        justify-content: space-between;
        align-items: center;
        border-bottom: 1px solid $secondaryBeige;
        padding-bottom: 16px;

        &-rating {
            display: flex;
            align-items: center;
            gap: 16px;

            &-name {
                font-size: 14px;
                font-weight: 600;
                line-height: 140%;
                color: #141414;
            }
        }

        &-date {
            color: #666;
            font-size: 14px;
            line-height: 140%;
        }
    }

    &__comment {
        margin-top: 16px;
        line-height: 140%;
        font-size: 16px;
    }
}
</style>