<template>
    <div class="ProductCardPrice">
        <div class="ProductCardPrice__title">Цена</div>
        <div class="ProductCardPrice__block">
            <div class="ProductCardPrice__old">
                <div class="ProductCardPrice__old-value">1 418 195 ₽</div>
                <div class="ProductCardPrice__old-discount">-17%</div>
            </div>
            <div class="ProductCardPrice__new">1 118 195 ₽</div>
        </div>
        <div class="ProductCardPrice__buy">
            <OthersBuyButton>Купить</OthersBuyButton>
            <OthersCallButton>Остались вопросы?</OthersCallButton>
        </div>
    </div>
</template>

<script setup lang="ts">

</script>

<style scoped lang="scss">
.ProductCardPrice {
    display: flex;
    flex-direction: column;
    gap: 16px;
    margin-top: 24px;

    &__title {
        font-weight: 600;
        font-size: 18px;
        line-height: 140%;
        color: #141414;
    }

    &__old {
        display: flex;
        gap: 8px;
        align-items: center;

        &-value {
            font-weight: 400;
            font-size: 16px;
            line-height: 140%;
            color: #666;
            text-decoration-line: line-through;
        }

        &-discount {
            padding: 2px 4px;
            border-radius: 4px;
            background: #FBE7E8;
            font-size: 12px;
            font-weight: 600;
            line-height: 140%;
            color: #E6000D;
        }
    }

    &__new {
        font-weight: 600;
        font-size: 28px;
        line-height: 140%;
        color: #141414;
    }

    &__buy {
        display: flex;
        gap: 24px;

    }
}
</style>