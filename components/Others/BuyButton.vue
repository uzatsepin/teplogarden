<template>
    <div class="BuyButton">
        <slot />
    </div>
</template>

<script setup lang="ts">

</script>

<style scoped lang="scss">
.BuyButton {
    padding: 12px 24px;
    border-radius: 20px;
    font-weight: 600;
    font-size: 16px;
    line-height: 140%;
    background: #8C2B02;
    color: #fff;
    transition: all 250ms ease-in-out;
    text-transform: uppercase;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;

    &:hover {
        background: #A03204;
        cursor: pointer;
    }

    &:active {
        background: #B53905;
    }

    &::before {
        content: "";
        width: 24px;
        height: 24px;
        display: inline-block;
        margin-right: 8px;
        background-image: url("~/assets/images/buy-icon.svg");
        background-repeat: no-repeat;
        background-position: center center;
        background-size: 100% 100%;
        transition: all 250ms ease-in-out;
    }
}
</style>