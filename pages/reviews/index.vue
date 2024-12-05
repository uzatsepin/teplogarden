<template>
    <div class="Reviews">
        <Header />
        <NuxtLayout name="container">
            <div class="reviews__container">
                <section class="reviews">
                    <div class="reviews__header">
                        <h2 class="reviews__title">Отзывы наших клиентов</h2>
                        <div class="reviews__stats">
                            <span class="reviews__count">Всего отзывов: {{ reviews.length }}</span>
                            <OthersSecondaryButton @click="isReviewFormOpen = true">
                                Оставить отзыв
                            </OthersSecondaryButton>
                        </div>
                    </div>

                    <div class="reviews__grid">
                        <div
                            v-for="(review, index) in reviews"
                            :key="index"
                            class="review-card"
                        >
                            <div class="review-card__header">
                                <div class="review-card__avatar">
                                    <NuxtImg
                                        :src="review.avatar || '/images/empty-avatar.webp'"
                                        alt="User avatar"
                                    />
                                </div>
                                <div class="review-card__info">
                                    <h3 class="review-card__name">{{ review.name }}</h3>
                                    <div class="review-card__rating">
                                        <div class="stars">
                                            <span
                                                v-for="n in 5"
                                                :key="n"
                                                class="star"
                                                :class="{ 'star--active': n <= review.rating }"
                                            >
                                                <template v-if="n <= review.rating">
                                                    <!-- Active star (filled) - Replace path with your filled star SVG -->
                                                    <svg
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        width="1em"
                                                        height="1em"
                                                        viewBox="0 0 24 24"
                                                    >
                                                        <path
                                                            fill="currentColor"
                                                            d="M11.083 5.104c.35-.8 1.485-.8 1.834 0l1.752 4.022a1 1 0 0 0 .84.597l4.463.342c.9.069 1.255 1.2.556 1.771l-3.33 2.723a1 1 0 0 0-.337 1.016l1.03 4.119c.214.858-.71 1.552-1.474 1.106l-3.913-2.281a1 1 0 0 0-1.008 0L7.583 20.8c-.764.446-1.688-.248-1.474-1.106l1.03-4.119A1 1 0 0 0 6.8 14.56l-3.33-2.723c-.698-.571-.342-1.702.557-1.771l4.462-.342a1 1 0 0 0 .84-.597z"
                                                        />
                                                    </svg>
                                                </template>
                                                <template v-else>
                                                    <!-- Inactive star (outline) -->
                                                    <svg
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        width="1em"
                                                        height="1em"
                                                        viewBox="0 0 24 24"
                                                    >
                                                        <path
                                                            fill="none"
                                                            stroke="currentColor"
                                                            stroke-width="2"
                                                            d="M11.083 5.104c.35-.8 1.485-.8 1.834 0l1.752 4.022a1 1 0 0 0 .84.597l4.463.342c.9.069 1.255 1.2.556 1.771l-3.33 2.723a1 1 0 0 0-.337 1.016l1.03 4.119c.214.858-.71 1.552-1.474 1.106l-3.913-2.281a1 1 0 0 0-1.008 0L7.583 20.8c-.764.446-1.688-.248-1.474-1.106l1.03-4.119A1 1 0 0 0 6.8 14.56l-3.33-2.723c-.698-.571-.342-1.702.557-1.771l4.462-.342a1 1 0 0 0 .84-.597z"
                                                        />
                                                    </svg>
                                                </template>
                                            </span>
                                        </div>
                                        <span class="review-card__date">{{ review.date }}</span>
                                    </div>
                                </div>
                            </div>
                            <p class="review-card__text">{{ review.text }}</p>

                            <div
                                v-if="review.images?.length"
                                class="review-card__images"
                            >
                                <div
                                    v-for="(image, imageIndex) in review.images"
                                    :key="imageIndex"
                                    class="review-card__image-wrapper"
                                    @click="openImagePreview(review.images, imageIndex)"
                                >
                                    <img
                                        :src="image"
                                        :alt="`Review image ${imageIndex + 1}`"
                                        class="review-card__image"
                                    />
                                </div>
                            </div>

                            <div class="review-card__footer">
                                <button
                                    class="review-card__like"
                                    :class="{ 'review-card__like--active': review.isLiked }"
                                    @click="toggleLike(index)"
                                >
                                    <span class="review-card__like-icon">
                                        <Icon name="mdi:heart-outline" />
                                    </span>
                                    <span>{{ review.likes }}</span>
                                </button>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </NuxtLayout>

        <Footer />

        <!-- Review Form Modal -->
        <div
            v-if="isReviewFormOpen"
            class="modal"
        >
            <div
                class="modal__content"
                @click.stop
            >
                <button
                    class="modal__close"
                    @click="isReviewFormOpen = false"
                    >×</button
                >
                <h3 class="modal__title">Оставить отзыв</h3>
                <form
                    @submit.prevent="submitReview"
                    class="review-form"
                >
                    <div class="review-form__field">
                        <label>Имя</label>
                        <input
                            v-model="newReview.name"
                            type="text"
                            required
                        />
                    </div>
                    <div class="review-form__field">
                        <label>Рейтинг</label>
                        <div class="stars stars--interactive">
                            <span
                                v-for="n in 5"
                                :key="n"
                                class="star"
                                :class="{ 'star--active': n <= newReview.rating }"
                                @click="newReview.rating = n"
                            >
                                <template v-if="n <= newReview.rating">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="1em"
                                        height="1em"
                                        viewBox="0 0 24 24"
                                    >
                                        <path
                                            fill="currentColor"
                                            d="M11.083 5.104c.35-.8 1.485-.8 1.834 0l1.752 4.022a1 1 0 0 0 .84.597l4.463.342c.9.069 1.255 1.2.556 1.771l-3.33 2.723a1 1 0 0 0-.337 1.016l1.03 4.119c.214.858-.71 1.552-1.474 1.106l-3.913-2.281a1 1 0 0 0-1.008 0L7.583 20.8c-.764.446-1.688-.248-1.474-1.106l1.03-4.119A1 1 0 0 0 6.8 14.56l-3.33-2.723c-.698-.571-.342-1.702.557-1.771l4.462-.342a1 1 0 0 0 .84-.597z"
                                        />
                                    </svg>
                                </template>
                                <template v-else>
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="1em"
                                        height="1em"
                                        viewBox="0 0 24 24"
                                    >
                                        <path
                                            fill="none"
                                            stroke="currentColor"
                                            stroke-width="2"
                                            d="M11.083 5.104c.35-.8 1.485-.8 1.834 0l1.752 4.022a1 1 0 0 0 .84.597l4.463.342c.9.069 1.255 1.2.556 1.771l-3.33 2.723a1 1 0 0 0-.337 1.016l1.03 4.119c.214.858-.71 1.552-1.474 1.106l-3.913-2.281a1 1 0 0 0-1.008 0L7.583 20.8c-.764.446-1.688-.248-1.474-1.106l1.03-4.119A1 1 0 0 0 6.8 14.56l-3.33-2.723c-.698-.571-.342-1.702.557-1.771l4.462-.342a1 1 0 0 0 .84-.597z"
                                        />
                                    </svg>
                                </template>
                            </span>
                        </div>
                    </div>
                    <div class="review-form__field">
                        <label>Отзыв</label>
                        <textarea
                            v-model="newReview.text"
                            required
                        ></textarea>
                    </div>
                    <div class="review-form__field">
                        <label>Фотографии</label>
                        <input
                            type="file"
                            multiple
                            accept="image/*"
                            @change="handleImages"
                        />
                    </div>
                    <button
                        type="submit"
                        class="review-form__submit"
                        >Отправить</button
                    >
                </form>
            </div>
        </div>

        <!-- Image Preview Modal -->
        <div
            v-if="showImageModal"
            class="image-modal"
            @click="closeImagePreview"
        >
            <div class="image-modal__content">
                <button
                    class="image-modal__close"
                    @click="closeImagePreview"
                    >×</button
                >
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
                <img
                    :src="currentImages[currentImageIndex]"
                    class="image-modal__img"
                    @click.stop
                />
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
    import { ref } from 'vue';

    interface Review {
        name: string;
        avatar: string;
        rating: number;
        date: string;
        text: string;
        likes: number;
        isLiked: boolean;
        images?: string[];
    }

    const reviews = ref<Review[]>([
        {
            name: 'Анна Иванова',
            avatar: '',
            rating: 5,
            date: '15.03.2024',
            text: 'Отличный сервис! Очень довольна качеством работы и обслуживанием.',
            likes: 12,
            isLiked: false,
            images: [
                'https://zavodteplic.ru/static/img/blog-article/tsena-teplitsy-ot-chego-zavisit/mobile/01%402x.jpg?v=1673272068',
                'https://www.botanik-tm.ru/sites/default/files/collection/2022/%D0%9B%D0%B8%D0%BD%D0%B5%D0%B9%D0%BA%D0%B0%20%D0%A2%20-%201.jpg',
            ],
        },
        {
            name: 'Петр Сидоров',
            avatar: '',
            rating: 4,
            date: '10.03.2024',
            text: 'Хороший магазин, но есть небольшие недочеты в работе доставки.',
            likes: 8,
            isLiked: false,
            images: [
                'https://by.s.bekhost.com/uploads/content/086010de2802889c8ec3576195cdb161.jpg',
            ],
        },
    ]);

    const isReviewFormOpen = ref(false);
    const showImageModal = ref(false);
    const currentImages = ref<string[]>([]);
    const currentImageIndex = ref(0);

    const newReview = ref({
        name: '',
        rating: 0,
        text: '',
        images: [] as File[],
    });

    const toggleLike = (index: number) => {
        const review = reviews.value[index];
        review.isLiked = !review.isLiked;
        review.likes += review.isLiked ? 1 : -1;
    };

    const handleImages = (event: Event) => {
        const files = (event.target as HTMLInputElement).files;
        if (files) {
            newReview.value.images = Array.from(files);
        }
    };

    const submitReview = () => {
        // Here you would typically send the data to your backend
        reviews.value.unshift({
            ...newReview.value,
            date: new Date().toLocaleDateString(),
            avatar: '',
            likes: 0,
            isLiked: false,
            images: newReview.value.images.map((image) => URL.createObjectURL(image)),
        });
        isReviewFormOpen.value = false;
        newReview.value = { name: '', rating: 0, text: '', images: [] };
    };

    const openImagePreview = (images: string[], startIndex: number) => {
        currentImages.value = images;
        currentImageIndex.value = startIndex;
        showImageModal.value = true;
        document.body.style.overflow = 'hidden';
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
@use 'sass:color';

.Header {
        border-bottom: 1px solid #dbd5bd;
    }
.Reviews {
    background: $lightBeige;
}
    .reviews {
        &__container {
            padding: 60px 0;
        }

        &__header {
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-bottom: 40px;
        }

        &__title {
            font-size: 32px;
            font-weight: 600;
        }

        &__stats {
            display: flex;
            align-items: center;
            gap: 20px;
        }

        &__count {
            color: #666;
        }

        &__add-btn {
            padding: 12px 24px;
            background: #4caf50;
            color: white;
            border: none;
            border-radius: 6px;
            cursor: pointer;
            transition: background 0.3s;

            &:hover {
                background: color.adjust(#4caf50, $lightness: -10%);
            }
        }

        &__grid {
            display: grid;
            grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
            gap: 30px;
        }
    }

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
            gap: 12px;
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

    .stars {
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

    .star {
        color: #ddd;
        font-size: 18px;

        &--active {
            color: #ffc107;
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

    .review-form {
        &__field {
            margin-bottom: 20px;

            label {
                display: block;
                margin-bottom: 8px;
                font-weight: 500;
                color: #141414;
            }

            input[type='text'],
            textarea {
                width: 100%;
                padding: 8px;
                border: 1px solid #ddd;
                border-radius: 4px;
            }

            textarea {
                height: 100px;
                resize: vertical;
            }
        }

        &__submit {
            width: 100%;
            padding: 12px;
            background: #4caf50;
            color: white;
            border: none;
            border-radius: 6px;
            cursor: pointer;
            font-size: 16px;

            &:hover {
                background: color.adjust(#4caf50, $lightness: -10%);
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
            border: none;
            background: none;
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
                left: 20px;
            }

            &--next {
                right: 20px;
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
</style>
