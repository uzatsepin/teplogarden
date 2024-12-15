<template>
    <div
        class="burger-menu"
        :class="{ 'is-active': isMobileMenuActive }"
    >
        <span></span>
        <span></span>
        <span></span>
    </div>
</template>

<script setup lang="ts">
const props = defineProps<{
    isMobileMenuActive: boolean;
}>();
</script>

<style lang="scss" scoped>
    .burger-menu {
        width: 24px;
        height: 24px;
        position: relative;
        cursor: pointer;
        display: none;

        @media (max-width: 767px) {
            display: block;
        }

        span {
            display: block;
            position: absolute;
            height: 3px;
            width: 100%;
            background: #141414;
            border-radius: 2px;
            opacity: 1;
            left: 0;
            transform: rotate(0deg);
            transition: 0.25s ease-in-out;

            &:nth-child(1) {
                top: 0px;
            }

            &:nth-child(2) {
                top: 9px;
            }

            &:nth-child(3) {
                top: 18px;
            }
        }

        &.is-active {
            span {
                &:nth-child(1) {
                    top: 9px;
                    transform: rotate(45deg);
                }

                &:nth-child(2) {
                    opacity: 0;
                }

                &:nth-child(3) {
                    top: 9px;
                    transform: rotate(-45deg);
                }
            }
        }
    }
</style>
