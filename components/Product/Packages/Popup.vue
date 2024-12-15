<template>
    <Transition name="fade">
        <div
            v-if="isOpen"
            class="popup-overlay"
            @click="$emit('close')"
        >
            <div
                class="popup-content"
                @click.stop
            >
                <div class="popup-scroll">
                    <slot>
                        <div v-html="popupData"></div>
                    </slot>
                </div>
                <Icon
                    name="mdi:close"
                    class="popup-close"
                    @click="$emit('close')"
                />
            </div>
        </div>
    </Transition>
</template>

<script setup lang="ts">
    defineProps<{
        isOpen: boolean;
        popupData: string;
    }>();

    defineEmits(['close']);
</script>

<style lang="scss">
    .popup-overlay {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(255, 255, 255, 0.1);
        backdrop-filter: blur(5px);
        display: flex;
        align-items: center;
        justify-content: center;
        z-index: 1000;
    }

    .popup-content {
        background: white;
        padding: 24px;
        border-radius: 16px;
        position: relative;
        width: 90%;
        max-width: 500px;
        max-height: 90vh;
        overflow: auto;

        @media screen and (max-width: 767px) {
            width: 100%;
            height: calc(100vh - 80px);
            max-height: 100vh;
            border-radius: 0;
            margin: 0;
            overflow: scroll;
        }

        & div {
            margin-top: 24px;

            h2 {
                margin-top: 18px;
                font-weight: 600;
                font-size: 24px;
                line-height: 140%;
                color: #141414;
            }

            h3 {
                margin-top: 16px;
                font-weight: 600;
                font-size: 20px;
                line-height: 140%;
                color: #141414;
            }

            p {
                margin-top: 8px;
                font-size: 16px;
                line-height: 140%;

                strong {
                    font-weight: 600;
                }
            }

            ul {
                margin-top: 8px;
                padding-left: 20px;
                font-size: 16px;
                line-height: 140%;

                li {
                    list-style-type: disc;
                }
            }

            img {
                max-width: 100%;
                height: auto;
                margin-top: 16px;
                border-radius: 16px;
                overflow: hidden;
            }
        }

        &-scroll {
            overflow-y: auto;
            height: 100%;
            -webkit-overflow-scrolling: touch;

            @media screen and (max-width: 767px) {
                height: calc(100vh - 60px);
                max-height: none;
                padding-bottom: 20px;
            }
        }
    }

    .popup-close {
        position: absolute;
        top: 16px;
        right: 16px;
        cursor: pointer;
        font-size: 24px;
        z-index: 1001;
    }

    // Transitions
    .fade-enter-active,
    .fade-leave-active {
        transition: opacity 0.3s ease;
    }

    .fade-enter-from,
    .fade-leave-to {
        opacity: 0;
    }
</style>
