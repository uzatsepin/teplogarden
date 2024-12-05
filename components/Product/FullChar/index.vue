<template>
    <div class="ProductCardFullChar">
        <div class="ProductCardFullChar__title">
            Характеристики <span>Теплица Salisbury с тамбуром</span>
        </div>
        <div class="ProductCardFullChar__container">
            <div class="ProductCardFullChar__item">
                <div class="ProductCardFullChar__item-title">Высота</div>
                <div class="ProductCardFullChar__item-value">2,5 м</div>
            </div>
            <div class="ProductCardFullChar__item">
                <div class="ProductCardFullChar__item-title">Ширина</div>
                <div class="ProductCardFullChar__item-value">2,5 м</div>
            </div>
            <div class="ProductCardFullChar__item">
                <div class="ProductCardFullChar__item-title">Комплектация</div>
                <div class="ProductCardFullChar__item-value">Агроволокно - 1 шт., дуги ПНД (диаметр 20 мм) - 6 шт., колышки (длина 20 см) -
                    13 шт., клипсы (диаметр 20 мм) - 13 шт.
                </div>
            </div>
            <div class="ProductCardFullChar__item">
                <div class="ProductCardFullChar__item-title">Назначение</div>
                <div class="ProductCardFullChar__item-value">Парник «Подснежник» легкий по весу. Позволяет растениям дышать, поддерживая
                    оптимальный баланс тепла и влаги. Парники ускоряют рост рассады в 2-3 раза. Пропускает до 93% солнечного света. Теплица
                    Подснежник отлично защищает от паразитов, насекомых и птиц. Агроволокно используют свыше 5 лет.
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">

</script>

<style scoped lang="scss">
.ProductCardFullChar {
    margin-top: 16px;

    &__title {
        font-weight: 400;
        font-size: 24px;
        line-height: 140%;
        color: #141414;

        & span {
            font-weight: 600;
            color: #666;
        }
    }

    &__container {
        margin-top: 16px;
        padding: 0 16px;
        background: $mainBeige;
        border-radius: 16px;
        width: max-content;
    }

    &__item {
        display: flex;
        font-size: 14px;
        line-height: 140%;
        color: #141414;
        padding: 16px 0;
        border-bottom: 1px solid $secondaryBeige;
        width: max-content;

        &:last-child {
            border-bottom: unset;
        }

        &-title {
            font-weight: 600;
            width: 450px;
        }

        &-value {
            font-weight: 500;
            font-size: 14px;
            position: relative;
            width: 450px;
        }
    }
}
</style>