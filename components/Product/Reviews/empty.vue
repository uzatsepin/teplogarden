<template>
    <div class="ProductCardReviewsEmpty">
        <div class="ProductCardReviewsEmpty__container">
            <OthersTitle>На этот товар пока нет отзывов</OthersTitle>
            <p class="ProductCardReviewsEmpty__subtitle">Желаете оставить отзыв?</p>
            <OthersPrimaryButton @click="$emit('open')">Оставить отзыв</OthersPrimaryButton>
        </div>
    </div>
</template>

<script setup lang="ts">
defineEmits(['open'])
</script>

<style scoped lang="scss">
.ProductCardReviewsEmpty {
    margin-top: 16px;

    &__container {
        .title {
            text-align: center;
        }

        .PrimaryButton {
            width: fit-content;
            margin: 24px auto 0;
        }
    }

    &__subtitle {
        margin-top: 8px;
        text-align: center;
        font-size: 16px;
        line-height: 140%;
        color: #414141;
    }
}
</style>