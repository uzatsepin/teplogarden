<template>
    <Transition name="fade">
        <div class="PopupBuy" v-if="isOpen">
            <div
                class="PopupBuy__overlay"
                @click="$emit('close')"
            ></div>
            <div class="PopupBuy__container">
                <div class="PopupBuy__head">
                    <div class="PopupBuy__head-name">{{ name }}</div>
                    <div
                        class="PopupBuy__head-close"
                        @click="$emit('close')"
                    >
                        <Icon name="charm:cross" />
                    </div>
                </div>
                <div class="PopupBuy__body">
                    <slot />
                </div>
            </div>
        </div>
    </Transition>
</template>

<script setup lang="ts">
    const props = defineProps<{
        isOpen: boolean;
        name: string;
    }>();

    const emit = defineEmits(['close']);
</script>

<style lang="scss" scoped>
    .PopupBuy {
        position: fixed;
        width: 100%;
        height: 100vh;
        z-index: 999;
        left: 0;
        top: 0;

        &__overlay {
            width: 100%;
            height: 100vh;
            background: rgba(0, 0, 0, 0.5);
            position: fixed;
            left: 0;
            top: 0;
            z-index: 998;
        }

        &__container {
            width: 464px;
            display: flex;
            flex-direction: column;
            padding: 24px;
            left: 0;
            top: 0;
            bottom: 0;
            right: 0;
            margin: auto;
            z-index: 999;
            position: fixed;
            height: max-content;
            background: $mainBeige;
            overflow: hidden;
            border-radius: 16px;

            @media screen and (max-width: 767px) {
                width: 100%;
                height: 100%;
                border-radius: 0;
                padding: 16px;
                overflow-y: auto;
            }
        }

        &__head {
            display: flex;
            align-items: center;
            justify-content: space-between;
            margin: -8px -8px 0 0;

            &-name {
                font-weight: 500;
                font-size: 24px;
                color: $textColor;
                line-height: 32px;
            }

            &-close {
                cursor: pointer;
                display: flex;
                align-items: center;
                justify-content: center;
                width: 40px;
                height: 40px;
                border-radius: 50%;
                transition: background 0.3s ease;

                &:hover {
                    background: #f5f5f5;
                }

                & span {
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    width: 24px;
                    height: 24px;
                }
            }
        }

        &__body {
            display: flex;
            flex-direction: column;
            margin-top: 24px;
        }

        &__preloader {
            position: absolute;
            left: 0;
            top: 0;
            pointer-events: none;
            opacity: 0;
            display: flex;
            align-items: center;
            justify-content: space-around;
            transition: all 250ms ease-in-out;
            width: 100%;
            height: 100%;
            background: rgba(255, 255, 255, 0.5);

            &.active {
                pointer-events: auto;
                opacity: 1;
            }
        }
    }

    .fade-enter-active,
    .fade-leave-active {
        transition: opacity 0.3s ease;
    }

    .fade-enter-from,
    .fade-leave-to {
        opacity: 0;
    }
</style>
