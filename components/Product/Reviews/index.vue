<template>
    <div class="ProductCardReviews">
        <ProductReviewsEmpty v-if="false"/>

        <div class="ProductCardReviews__container">
            <div class="ProductCardReviews__top">
                <h2 class="ProductCardReviews__top-title">Отзывы про <span>Теплица Salisbury с тамбуром</span></h2>
                <OthersPrimaryButton>Оставить отзыв</OthersPrimaryButton>
            </div>

            <ProductReviewsItem v-for="review in 4" :key="review"/>
        </div>
    </div>
</template>

<script setup lang="ts">

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
                color: #666;
            }
        }
    }
}
</style>