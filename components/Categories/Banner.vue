<template>
    <div class="Banner">
        <div class="Banner__img">
            <NuxtImg src="/images/banner-img.png"/>
        </div>
        <div class="Banner__details">
            <div class="Banner__title">Теплицы из монолита</div>
            <div class="Banner__offer">Купить со скидкой 20%</div>
            <OthersPrimaryButton>Узнать детальнее</OthersPrimaryButton>
        </div>
    </div>
</template>

<script setup lang="ts">

</script>

<style scoped lang="scss">
.Banner {
    width: 340px;
    min-width: 340px;
    height: auto;
    position: relative;

    &__img {
        & img {
            width: 100%;
            height: -webkit-fill-available;
            border-radius: 16px;
            overflow: hidden;
            position: absolute;
            top: 0;
            left: 0;
            z-index: -1;
            object-fit: cover;
        }
    }

    &__details {
        display: flex;
        height: 100%;
        flex-direction: column;
        justify-content: space-between;
    }

    &__title {
        font-weight: 600;
        font-size: 34px;
        line-height: 140%;
        text-align: center;
        padding: 24px;
    }

    &__offer {
        background: rgba(81,130,87, 0.6);
        padding: 28px 14px;
        text-align: center;
        font-weight: 600;
        font-size: 24px;
        line-height: 140%;
        color: #FFFFFF;
    }

    .PrimaryButton {
        margin-bottom: 24px;
        max-width: 90%;
        margin-left: auto;
        margin-right: auto;
    }
}
</style>