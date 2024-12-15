<template>
    <div>
        <div class="review-card">
            <div class="review-card__header">
                <div class="review-card__avatar">
                    <NuxtImg
                        src="/images/empty-avatar.webp"
                        alt="User avatar"
                    />
                </div>
                <div class="review-card__info">
                    <h3 class="review-card__name">{{ review?.name }}</h3>
                    <div class="review-card__rating">
                        <div class="review-card__stars">
                            <template
                                v-for="index in 5"
                                :key="index"
                            >
                                <NuxtImg
                                    :src="
                                        index <= review?.rating
                                            ? '/images/star-fill.svg'
                                            : '/images/star-empty.svg'
                                    "
                                    alt="star"
                                    width="16"
                                    height="16"
                                />
                            </template>
                        </div>
                        <span class="review-card__date">{{ formatDate(review?.created) }}</span>
                    </div>
                </div>
            </div>
            <p class="review-card__text">{{ review?.text }}</p>

            <div
                v-if="review?.images?.length"
                class="review-card__images"
            >
                <div
                    v-for="(image, imageIndex) in review?.images"
                    :key="imageIndex"
                    class="review-card__image-wrapper"
                    @click="openImagePreview(review?.images, imageIndex)"
                >
                    <NuxtImg
                        :src="genImageUrl(review?.collectionId, review?.id, image)"
                        :alt="review.name"
                        class="review-card__image"
                        loading="lazy"
                        provider="pocketbase"
                    />
                </div>
            </div>

            <!-- <div class="review-card__footer">
                <button
                    class="review-card__like"
                    :class="{ 'review-card__like--active': review.isLiked }"
                    @click="toggleLike(index)"
                >
                    <span class="review-card__like-icon">
                        <Icon name="mdi:heart-outline" />
                    </span>
                    <span>{{ review?.likes }}</span>
                </button>
            </div> -->
        </div>
    </div>
    <div
        v-if="showImageModal"
        class="image-modal"
        @click="closeImagePreview"
    >
        <div class="image-modal__content">
            <Icon
                name="charm:cross"
                class="image-modal__close"
                @click="closeImagePreview"
            />
            <button
                v-if="currentImages.length > 1"
                class="image-modal__nav image-modal__nav--prev"
                @click.stop="prevImage"
                >❮</button
            >
            <button
                v-if="currentImages.length > 1"
                class="image-modal__nav image-modal__nav--next"
                @click.stop="nextImage"
                >❯</button
            >
            <NuxtImg
                :src="
                    genImageUrl(review?.collectionId, review?.id, currentImages[currentImageIndex])
                "
                class="image-modal__img"
                loading="lazy"
                provider="pocketbase"
                @click.stop
            />
        </div>
    </div>
</template>

<script setup lang="ts">
    // interface Review {
    //     collectionId: string;
    //     collectionName: string;
    //     created: string;
    //     id: string;
    //     images: string[];
    //     name: string;
    //     rating: number;
    //     text: string;
    //     updated: string;
    //     likes: number;
    // }

    const props = defineProps<{
        review: any;
    }>();

    const currentImages = ref<string[]>([]);
    const currentImageIndex = ref(0);
    const showImageModal = ref(false);

    const openImagePreview = (images: string[], startIndex: number) => {
        currentImages.value = images;
        currentImageIndex.value = startIndex;
        showImageModal.value = true;
    };

    const closeImagePreview = () => {
        showImageModal.value = false;
        document.body.style.overflow = '';
    };

    const nextImage = () => {
        currentImageIndex.value = (currentImageIndex.value + 1) % currentImages.value.length;
    };

    const prevImage = () => {
        currentImageIndex.value =
            currentImageIndex.value === 0
                ? currentImages.value.length - 1
                : currentImageIndex.value - 1;
    };
</script>

<style scoped lang="scss">
    .review-card {
        padding: 24px;
        background: $mainBeige;
        border-radius: 12px;
        box-shadow: 0 2px 12px rgba(0, 0, 0, 0.08);

        &__header {
            display: flex;
            gap: 16px;
            margin-bottom: 16px;
        }

        &__avatar {
            width: 50px;
            height: 50px;
            border-radius: 50%;
            overflow: hidden;
            background: #f0f0f0;

            img {
                width: 100%;
                height: 100%;
                object-fit: cover;
            }
        }

        &__name {
            font-size: 18px;
            font-weight: 600;
            margin: 0 0 8px;
            color: #141414;
        }

        &__rating {
            display: flex;
            align-items: center;
            justify-content: space-between;
            gap: 12px;

            &-stars {
                display: flex;
                gap: 1px;

                &--interactive {
                    .star {
                        cursor: pointer;

                        &:hover {
                            color: #ffc107;
                        }
                    }
                }
            }
        }

        &__date {
            color: #141414;
            font-size: 14px;
        }

        &__text {
            margin: 0 0 20px;
            color: #141414;
            line-height: 1.6;
        }

        &__info {
            width: 100%;
        }

        &__images {
            display: grid;
            grid-template-columns: repeat(auto-fill, minmax(100px, 1fr));
            gap: 8px;
            margin: 16px 0;
        }

        &__image-wrapper {
            aspect-ratio: 1;
            cursor: pointer;
            overflow: hidden;
            border-radius: 8px;

            &:hover {
                opacity: 0.9;
            }
        }

        &__image {
            width: 100%;
            height: 100%;
            object-fit: cover;
        }

        &__like {
            display: flex;
            align-items: center;
            gap: 6px;
            padding: 8px 16px;
            border: 1px solid $red;
            border-radius: 20px;
            background: transparent;
            cursor: pointer;
            transition: all 0.3s;
            color: #141414;

            &--active {
                color: #ff4b4b;
                border-color: #ff4b4b;

                .review-card__like-icon {
                    color: #ff4b4b;
                }
            }

            &-icon {
                & span {
                    height: 16px;
                    width: 16px;
                }
            }
        }
    }

    .image-modal {
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: rgba(0, 0, 0, 0.9);
        z-index: 1000;
        display: flex;
        align-items: center;
        justify-content: center;
        opacity: 0;
        animation: fadeIn 0.3s forwards;

        &__content {
            position: relative;
            max-width: 90vw;
            max-height: 90vh;
            transform: scale(0.95);
            animation: zoomIn 0.3s forwards;
        }

        &__img {
            max-width: 100%;
            max-height: 90vh;
            object-fit: contain;
            border-radius: 4px;
            box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);
        }

        &__close {
            position: absolute;
            top: -40px;
            right: -40px;
            width: 40px;
            height: 40px;
            color: white;
            font-size: 32px;
            cursor: pointer;
            transition: transform 0.2s;

            &:hover {
                transform: scale(1.1);
            }
        }

        &__nav {
            position: absolute;
            top: 50%;
            transform: translateY(-50%);
            background: rgba(255, 255, 255, 0.1);
            color: white;
            border: none;
            width: 50px;
            height: 50px;
            border-radius: 50%;
            cursor: pointer;
            transition: all 0.2s;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 24px;

            &:hover {
                background: rgba(255, 255, 255, 0.2);
                transform: translateY(-50%) scale(1.1);
            }

            &--prev {
                left: -60px;
            }

            &--next {
                right: -60px;
            }
        }
    }

    @keyframes fadeIn {
        from {
            opacity: 0;
        }
        to {
            opacity: 1;
        }
    }

    @keyframes zoomIn {
        from {
            transform: scale(0.95);
            opacity: 0;
        }
        to {
            transform: scale(1);
            opacity: 1;
        }
    }

    @media (max-width: 768px) {
        .image-modal {
            &__nav {
                width: 40px;
                height: 40px;
                font-size: 20px;

                &--prev {
                    left: 10px;
                }
                &--next {
                    right: 10px;
                }
            }

            &__close {
                right: 0;
                top: -50px;
            }
        }
    }

    .modal {
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: rgba(0, 0, 0, 0.5);
        display: flex;
        align-items: center;
        justify-content: center;
        z-index: 1000;

        &__content {
            background: white;
            padding: 32px;
            border-radius: 12px;
            width: 100%;
            max-width: 500px;
            position: relative;
        }

        &__close {
            position: absolute;
            top: 16px;
            right: 16px;
            background: none;
            border: none;
            font-size: 24px;
            cursor: pointer;
        }

        &__title {
            margin: 0 0 24px;
            font-size: 24px;
            color: #141414;
        }
    }
</style>
