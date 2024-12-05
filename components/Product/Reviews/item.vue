<template>
    <div class="ProductCardReviewsItem">
        <div class="ProductCardReviewsItem__container">
            <div class="ProductCardReviewsItem__top">
                <div class="ProductCardReviewsItem__top-rating">
                    <div class="ProductCardReviewsItem__top-rating-icon">
                        <NuxtImg src="/images/star-fill.svg" alt="star" width="16" height="16"/>
                        <NuxtImg src="/images/star-fill.svg" alt="star" width="16" height="16"/>
                        <NuxtImg src="/images/star-fill.svg" alt="star" width="16" height="16"/>
                        <NuxtImg src="/images/star-fill.svg" alt="star" width="16" height="16"/>
                        <NuxtImg src="/images/star-fill.svg" alt="star" width="16" height="16"/>
                    </div>
                    <div class="ProductCardReviewsItem__top-rating-name">Иван Иванов</div>
                </div>
                <div class="ProductCardReviewsItem__top-date">
                    14 октября 2024
                </div>
            </div>
            <div class="ProductCardReviewsItem__comment">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">

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
        font-size: 14px;
    }
}
</style>