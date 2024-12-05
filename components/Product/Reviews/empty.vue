<template>
    <div class="ProductCardReviewsEmpty">
        <div class="ProductCardReviewsEmpty__container">
            <OthersTitle>На этот товар пока нет отзывов</OthersTitle>
            <p class="ProductCardReviewsEmpty__subtitle">Желаете оставить отзыв?</p>
            <OthersPrimaryButton>Оставить отзыв</OthersPrimaryButton>
        </div>

        <div class="ProductCardReviewsEmpty__form" v-if="isFormShow">
            <input type="text" required placeholder="Заголовок" class="Contact__form-input"/>
            <input type="text" required placeholder="Ваше имя" class="Contact__form-input"/>
            <textarea placeholder="Текст отзыва" class="Contact__form-input"></textarea>
            <OthersPrimaryButton>Оставить заявку</OthersPrimaryButton>
        </div>
    </div>
</template>

<script setup lang="ts">

const isFormShow = ref(false);

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
        color: #e2e2e2;
    }
}
</style>