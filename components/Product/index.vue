<template>
    <div
        class="Product"
        :class="{ 'is-loading': status === 'pending' }"
    >
        <div class="Product__wrapper">
            <div class="Product__wrapper-container">
                <NuxtImg
                    :src="
                        activeImage ||
                        genImageUrl(product?.collectionId, product?.id, product?.image)
                    "
                    :alt="product.name"
                    class="Product__wrapper-img"
                    height="265"
                    :title="product.name"
                    loading="lazy"
                    placeholder
                />
            </div>
            <div class="Product__badges">
                <div
                    class="Product__badges-item"
                    v-if="discountPercentage"
                    >Скидка</div
                >
            </div>
        </div>
        <div class="Product__gallery">
            <NuxtImg
                v-for="(image, idx) in product?.imagesGallery"
                :key="idx"
                :src="genImageUrl(product?.collectionId, product?.id, image)"
                :class="{
                    active: activeImage === genImageUrl(product?.collectionId, product?.id, image),
                }"
                :alt="product.name"
                :title="product.name"
                @click="setActiveImage(genImageUrl(product?.collectionId, product?.id, image))"
                class="Product__gallery-img"
                loading="lazy"
                placeholder
            />
        </div>
        <div class="Product__container">
            <NuxtLink
                :to="`/product/${product?.slug}`"
                class="Product__container-name"
                :title="product.name"
                >{{ product?.name }}</NuxtLink
            >

            <div
                class="Product__container-reviews"
                v-if="product?.expand?.reviews"
            >
                <div class="Product__container-reviews-star">
                    <template
                        v-for="index in 5"
                        :key="index"
                    >
                        <NuxtImg
                            :src="
                                index <= averageRating
                                    ? '/images/star-fill.svg'
                                    : '/images/star-empty.svg'
                            "
                            alt="star"
                            width="16"
                            height="16"
                            title="Звезда рейтинга"
                        />
                    </template>
                </div>
                <div class="Product__container-reviews-count">{{ reviewsCount }}</div>
            </div>
            <div
                class="Product__container-reviews-empty"
                v-else
                >Нет отзывов</div
            >

            <div class="Product__container-size">
                <h4 class="Product__container-size-title">Размеры</h4>
                <div class="Product__container-size-block">
                    <p
                        class="Product__container-size-block-item"
                        v-for="spec in product?.specifications"
                    >
                        <Icon :name="spec.icon" />
                        {{ spec.name }} : {{ spec.value }} см
                    </p>
                </div>
            </div>
            <div class="Product__container-price">
                <div class="Product__container-price-old">
                    <div class="Product__container-price-old-value"
                        >{{ formatPrice(Number(product?.priceOld)) }} ₽</div
                    >
                    <div class="Product__container-price-old-discount"
                        >-{{ discountPercentage }}%</div
                    >
                </div>
                <div class="Product__container-price-new"
                    >{{ formatPrice(Number(product?.priceNew)) }} ₽</div
                >
            </div>
            <NuxtLink title="Детальнее" :to="`/product/${product?.slug}`">
                <OthersPrimaryButton>Детальнее</OthersPrimaryButton>
            </NuxtLink>
        </div>
    </div>
</template>

<script setup lang="ts">
    import type { IProduct } from '~/types/product.types';

    const props = defineProps<{ product: IProduct; status?: string }>();

    const discountPercentage = computed(() => {
        if (!props.product?.priceOld || !props.product?.priceNew) return 0;
        return Math.round(
            ((Number(props.product.priceOld) - Number(props.product.priceNew)) /
                Number(props.product.priceOld)) *
                100,
        );
    });

    const activeImage = ref('');

    const setActiveImage = (imageUrl: string) => {
        activeImage.value = imageUrl;
    };

    const averageRating = computed(() => {
        const reviews = props.product?.expand?.reviews;
        if (!reviews || !Array.isArray(reviews) || reviews.length === 0) return 0;

        const sum = reviews.reduce((acc, review) => acc + (review?.rating || 0), 0);
        return Math.round(sum / reviews.length);
    });

    const reviewsCount = computed(() => {
        const reviews = props.product?.expand?.reviews;
        const count = Array.isArray(reviews) ? reviews.length : 0;
        return getDeclension(count, ['отзыв', 'отзыва', 'отзывов']);
    });
</script>

<style scoped lang="scss">
    .Product {
        border-radius: 16px;
        background: $red;
        padding: 16px;
        min-width: 408px;

        @media screen and (max-width: 767px) {
            min-width: 350px;
            max-width: 350px;
        }

        &.is-loading {
            pointer-events: none;
            opacity: 0.7;
        }

        &__wrapper {
            position: relative;

            &-container {
                position: relative;
                width: 100%;
                height: 265px;
            }

            &-img {
                border-radius: 16px;
                overflow: hidden;
            }

            &-skeleton {
                width: 100%;
                height: 100%;
                background: linear-gradient(
                    90deg,
                    rgba(#eee, 0) 0,
                    rgba(#eee, 0.8) 50%,
                    rgba(#eee, 0) 100%
                );
                background-size: 200% 100%;
                animation: shimmer 1.5s infinite;
            }

            &-img {
                position: absolute;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                object-fit: cover;
            }
        }

        &__badges {
            position: absolute;
            top: 8px;
            right: 8px;
            display: flex;
            gap: 8px;

            &-item {
                padding: 2px 4px;
                border-radius: 8px;
                background: #e6000d;
                font-size: 12px;
                font-weight: 600;
                line-height: 24px;
                color: #ffffff;
                text-transform: uppercase;
            }
        }

        &__gallery {
            display: flex;
            gap: 8px;
            margin-top: 8px;

            &-img {
                border-radius: 8px;
                overflow: hidden;
                object-fit: cover;
                cursor: pointer;
                transition: border 0.3s ease;
                border: 2px solid transparent;

                &:hover {
                    border: 2px solid $lightBeige;
                }

                &.active {
                    border: 2px solid $lightBeige;
                }
            }
        }

        &__container {
            margin-top: 16px;
            display: flex;
            flex-direction: column;
            gap: 16px;

            &-name {
                font-weight: 600;
                font-size: 24px;
                line-height: 140%;
                text-align: center;
                color: #fff;

                &:hover {
                    text-decoration: underline;
                }
            }

            &-reviews {
                display: flex;
                gap: 8px;
                align-items: center;
                line-height: 140%;
                justify-content: center;
                
                &-star {
                    display: flex;
                    gap: 4px;
                }

                &-count {
                    font-size: 16px;
                    line-height: 140%;
                    color: #fff;
                }
            }

            &-reviews-empty {
                font-size: 16px;
                line-height: 140%;
                color: #fff;
                text-align: center;
            }

            &-size {
                text-align: center;

                &-title {
                    color: #fff;
                    font-size: 18px;
                    font-weight: 600;
                }

                &-block {
                    margin-top: 8px;
                    display: flex;
                    flex-direction: column;
                    gap: 8px;
                    color: #fff;
                    font-size: 16px;
                    text-align: left;

                    &-item {
                        display: flex;
                        gap: 8px;
                        align-items: center;
                        color: #fff;

                        & span {
                            width: 24px;
                            height: 24px;
                        }
                    }
                }
            }

            &-price {
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: center;
                gap: 12px;

                &-old {
                    display: flex;
                    gap: 8px;
                    align-items: center;

                    &-value {
                        font-size: 14px;
                        font-weight: 400;
                        line-height: 140%;
                        text-decoration-line: line-through;
                        color: #ebeaea;
                    }
                    &-discount {
                        padding: 2px 4px;
                        border-radius: 4px;
                        background: #fbe7e8;
                        font-size: 12px;
                        font-weight: 600;
                        line-height: 140%;
                        color: #e6000d;
                    }
                }

                &-discount {
                    padding: 2px 4px;
                    border-radius: 4px;
                    background: #fbe7e8;
                    font-size: 12px;
                    font-weight: 600;
                    line-height: 140%;
                    color: #e6000d;
                }

                &-new {
                    font-size: 24px;
                    font-weight: 700;
                    line-height: 140%;
                    color: #fff;
                }
            }

            .PrimaryButton {
                text-align: center;
                margin-top: 8px;
                font-size: 16px;
                display: block;
                width: -webkit-fill-available;
            }
        }
    }

    @keyframes shimmer {
        0% {
            background-position: -200% 0;
        }
        100% {
            background-position: 200% 0;
        }
    }
</style>
