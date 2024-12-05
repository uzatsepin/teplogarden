<template>
    <div class="CallButton">
        <slot />
    </div>
</template>

<script setup lang="ts">

</script>

<style scoped lang="scss">
.CallButton {
    padding: 12px 24px;
    border-radius: 20px;
    font-weight: 700;
    font-size: 16px;
    line-height: 140%;
    background: transparent;
    color: #141414;
    border: 1px solid #D0C3AE;
    transition: all 250ms ease-in-out;
    text-transform: uppercase;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;

    &:hover {
        background: #EFE0C8;
        border: 1px solid #EFE0C8;
        cursor: pointer;
    }

    &:active {
        background: #FBE3BD;
    }

    &::before {
        content: "";
        width: 24px;
        height: 24px;
        display: inline-block;
        margin-right: 8px;
        background-image: url("~/assets/images/phone-icon.svg");
        background-repeat: no-repeat;
        background-position: center center;
        background-size: 100% 100%;
        transition: all 250ms ease-in-out;
    }
}
</style>