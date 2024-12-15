<template>
    <Transition name="fade">
        <div
            class="AddReviewPopup"
            v-if="isOpen"
        >
            <div
                class="AddReviewPopup__overlay"
                @click="$emit('close')"
            ></div>
            <div class="AddReviewPopup__container">
                <div class="AddReviewPopup__head">
                    <div class="AddReviewPopup__head-name">{{ name }}</div>
                    <div
                        class="AddReviewPopup__head-close"
                        @click="$emit('close')"
                    >
                        <Icon name="charm:cross" />
                    </div>
                </div>
                <template v-if="!isSuccess">
                    <div class="AddReviewPopup__body">
                        <div class="AddReviewPopup__form">
                            <div class="AddReviewPopup__form-rating">
                                <div class="AddReviewPopup__form-rating-stars">
                                    <div
                                        v-for="star in 5"
                                        :key="star"
                                        class="AddReviewPopup__form-rating-star"
                                        @mouseover="hoverRating = star"
                                        @mouseleave="hoverRating = 0"
                                        @click="form.rating = star"
                                    >
                                        <NuxtImg
                                            :src="
                                                (hoverRating || form.rating) >= star
                                                    ? '/images/star-fill.svg'
                                                    : '/images/star-empty.svg'
                                            "
                                            alt="star"
                                            width="24"
                                            height="24"
                                        />
                                    </div>
                                </div>
                            </div>

                            <form
                                @submit.prevent="handleSubmit"
                                class="AddReviewPopup__form-content"
                            >
                                <div class="AddReviewPopup__form-content-group">
                                    <input
                                        v-model="form.reviewer"
                                        type="text"
                                        placeholder="Ваше имя"
                                        required
                                    />
                                </div>

                                <div class="AddReviewPopup__form-content-group">
                                    <textarea
                                        v-model="form.comment"
                                        placeholder="Ваш отзыв"
                                        rows="4"
                                        required
                                    ></textarea>
                                </div>

                                <OthersSecondaryButton
                                    type="submit"
                                    @click="handleSubmit"
                                >
                                    Отправить отзыв
                                </OthersSecondaryButton>
                            </form>
                        </div>
                    </div>
                </template>
                <template v-else>
                    <div class="AddReviewPopup__success">
                        <Icon
                            name="mdi:check-circle"
                            class="AddReviewPopup__success-icon"
                        />
                        <p class="AddReviewPopup__success-text">
                            Спасибо за ваш отзыв!
                        </p>
                    </div>
                </template>
            </div>
        </div>
    </Transition>
</template>

<script setup lang="ts">
    const props = defineProps<{
        isOpen: boolean;
        name: string;
    }>();

    const emit = defineEmits(['close', 'submit']);

    const form = reactive({
        rating: 0,
        reviewer: '',
        comment: '',
    });
    const isSuccess = ref(false);

    const handleSubmit = async () => {
        isSuccess.value = true;

        setTimeout(() => {
            emit('submit', form);
            emit('close');
            isSuccess.value = false;
        }, 3000);

        form.rating = 0;
        form.reviewer = '';
        form.comment = '';
    };

    const hoverRating = ref(0);
</script>

<style lang="scss" scoped>
    .AddReviewPopup {
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
            width: 440px;
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
            /* align-items: center; */
            justify-content: space-between;
            margin: -8px -8px 0 0;
            gap: 24px;

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
                min-width: 40px;
                min-height: 40px;

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

        &__form {
            display: flex;
            flex-direction: column;
            gap: 16px;

            &-rating {
                &-stars {
                    display: flex;
                    gap: 8px;
                }

                &-star {
                    cursor: pointer;
                }
            }

            &-content {
                &-group {
                    width: 100%;

                    & input {
                        padding: 12px 16px;
                        background: #fff;
                        border-radius: 16px;
                        cursor: pointer;
                        display: block;
                        color: #141414;
                        border: 2px solid transparent;
                        transition: all 250ms ease-in-out;
                        width: -webkit-fill-available;
                        font-family: 'Cygre', sans-serif;
                        font-size: 16px;

                        &::placeholder {
                            color: #a2a2a2;
                        }

                        &:hover {
                            border: 2px solid #8c2b02;
                        }

                        &:focus {
                            border: 2px solid #8c2b02;
                        }
                    }

                    & textarea {
                        padding: 12px 16px;
                        background: #fff;
                        border-radius: 16px;
                        cursor: pointer;
                        display: block;
                        color: #141414;
                        border: 2px solid transparent;
                        transition: all 250ms ease-in-out;
                        outline: none;
                        width: 100%;
                        margin-top: 16px;
                        font-family: 'Cygre', sans-serif;
                        font-size: 16px;

                        &::placeholder {
                            color: #a2a2a2;
                        }

                        &:hover {
                            border: 2px solid #8c2b02;
                        }

                        &:focus {
                            border: 2px solid #8c2b02;
                        }
                    }
                }

                .SecondaryButton {
                    margin-top: 24px;
                }
            }
        }

        &__success {
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 16px;
            margin-top: 24px;
            text-align: center;

            &-icon {
                color: #00a86b;
                font-size: 64px;
            }

            &-text {
                font-size: 18px;
                color: #141414;
                line-height: 140%;
            }
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
