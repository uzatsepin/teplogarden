<template>
    <div class="ProductCardAdvantage">
        <h2 class="ProductCardAdvantage__title">Преимущества</h2>
        <div class="ProductCardAdvantage__container">
            <ProductAdvantageItem v-for="advantage in productAdvantages" :advantage="advantage"/>
        </div>
    </div>
</template>

<script setup lang="ts">
const productAdvantages = [
    {
        name: 'Каркас:',
        value: 'Алюминий',
        image: '/images/product/karkas.png'
    },
    {
        name: 'Наполнение:',
        value: 'Стекло',
        image: '/images/product/glass.png'
    },
    {
        name: 'Покраска:',
        value: 'Полимерная',
        image: '/images/product/paint.png'
    },
    {
        name: 'Грядки:',
        value: 'Лиственница',
        image: '/images/product/gryadky.png'
    },
]
</script>

<style scoped lang="scss">

.ProductCardAdvantage {
    margin-top: 24px;

    &__title {
        font-weight: 600;
        font-size: 18px;
        line-height: 140%;
        color: #141414;
    }

    &__container {
        margin-top: 16px;
        display: flex;
        gap: 24px;
        overflow-x: scroll;

        &::-webkit-scrollbar {
            display: none;
        }
    }
}

</style>