<template>
    <div class="ProductCard">
        <Header />

        <NuxtLayout name="container">
            <div class="ProductCard__breadcrumbs">
                Назад
            </div>
            <div class="ProductCard__container">

                <div class="ProductCard__left">
                    <carousel class="ProductCard__carousel" :wrap-around="true">
                        <slide class="ProductCard__carousel-item" v-for="slide in 4" :key="slide">
                            <NuxtImg src="https://i.postimg.cc/nLk0TrY6/dnez8jz655ejazh2acwonqo2e32g0h34.jpg" alt="carousel-item"/>
                        </slide>
                        <template #addons>
                            <navigation />
                        </template>
                    </carousel>
                    <div class="ProductCard__carousel-small">
                        <NuxtImg src="https://i.postimg.cc/nLk0TrY6/dnez8jz655ejazh2acwonqo2e32g0h34.jpg" alt="carousel-item"/>
                        <NuxtImg src="https://i.postimg.cc/nLk0TrY6/dnez8jz655ejazh2acwonqo2e32g0h34.jpg" alt="carousel-item"/>
                        <NuxtImg src="https://i.postimg.cc/nLk0TrY6/dnez8jz655ejazh2acwonqo2e32g0h34.jpg" alt="carousel-item"/>
                        <NuxtImg src="https://i.postimg.cc/nLk0TrY6/dnez8jz655ejazh2acwonqo2e32g0h34.jpg" alt="carousel-item"/>
                    </div>
                </div>
                <div class="ProductCard__right">
                    <h1 class="ProductCard__title">Теплица Salisbury с тамбуром</h1>
                    <div class="ProductCard__top">
                        <div class="ProductCard__reviews">
                            <div class="ProductCard__reviews-star">
                                <NuxtImg src="/images/star-fill.svg" alt="star" width="16" height="16"/>
                                <NuxtImg src="/images/star-fill.svg" alt="star" width="16" height="16"/>
                                <NuxtImg src="/images/star-fill.svg" alt="star" width="16" height="16"/>
                                <NuxtImg src="/images/star-fill.svg" alt="star" width="16" height="16"/>
                                <NuxtImg src="/images/star-fill.svg" alt="star" width="16" height="16"/>
                            </div>
                            <div class="ProductCard__reviews-count">4 отзыва</div>
                        </div>
                        <div class="ProductCard__article">Артикул: <span>221212</span></div>
                    </div>
                    <ProductAdvantage />
                    <ProductPrice />
                    <ProductOptions />
                    <ProductPackages />
                    <ProductSameCategory />
                    <ProductCategory />
                </div>
            </div>

            <div class="ProductCard__tabs">
                <div class="ProductCard__tabs-item" @click="selectedTab = 'descr'" :class="{active: selectedTab === 'descr'}">Описание</div>
                <div class="ProductCard__tabs-item" @click="selectedTab = 'reviews'" :class="{active: selectedTab === 'reviews'}">Отзывы</div>
                <div class="ProductCard__tabs-item" @click="selectedTab = 'questions'" :class="{active: selectedTab === 'questions'}">Вопросы</div>
                <div class="ProductCard__tabs-item" @click="selectedTab = 'char'" :class="{active: selectedTab === 'char'}">Характеристики
                </div>
            </div>
            <div class="ProductCard__tabs-content">
                <transition name="popup-anim">
                    <ProductDescr v-if="selectedTab === 'descr'"/>
                </transition>
                <transition name="popup-anim">
                    <ProductReviews v-if="selectedTab === 'reviews'"/>
                </transition>
                <transition name="popup-anim">
                    <ProductQuestions v-if="selectedTab === 'questions'"/>
                </transition>
                <transition name="popup-anim">
                    <ProductFullChar v-if="selectedTab === 'char'"/>
                </transition>
            </div>
        </NuxtLayout>

        <Footer />
    </div>
</template>

<script setup lang="ts">
import {Carousel, Navigation, Slide} from "vue3-carousel";

const selectedTab = ref('descr');
</script>

<style scoped lang="scss">
.Header {
    border-bottom: 1px solid #dbd5bd;
}
.ProductCard {
    background: $lightBeige;
    
    &__container {
        display: grid;
        grid-template-columns: minmax(600px, 1fr) minmax(400px, 1fr);
        gap: 40px;
    }

    &__breadcrumbs {
        font-weight: 500;
        font-size: 14px;
        line-height: 24px;
        color: #141414;
        display: flex;
        align-items: center;
        margin-top: 16px;
        transition: all 250ms ease-in-out;

        &:before {
            content: "";
            width: 16px;
            height: 16px;
            display: inline-block;
            margin-right: 8px;
            background-image: url("~/assets/images/arrow-left.svg");
            background-repeat: no-repeat;
            background-position: center center;
            background-size: 100% 100%;
            transition: all 250ms ease-in-out;
            margin-top: 4px;
        }

        &:hover {
            color: #3f3e3e;
            cursor: pointer;

            &:before {
                background-image: url("~/assets/images/arrow-left-hover.svg");
            }
        }
    }

    &__carousel {
        width: 100%;

        &-item {
            & img {
                width: 100%;
                height: 100%;
                border-radius: 16px;
                overflow: hidden;
                object-fit: cover;
            }
        }

        &-small {
            display: flex;
            gap: 8px;
            margin-top: 16px;

            & img {
                width: 72px;
                height: 72px;
                border-radius: 16px;
                overflow: hidden;
                object-fit: cover;
            }
        }
    }

    &__left {
        position: sticky;
        top: 20px;
        height: fit-content;
        align-self: start;
    }

    &__right {
        min-height: 100%;
    }

    &__title {
        font-size: 28px;
        font-weight: 600;
        line-height: 140%;
    }

    &__top {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    &__article {
        font-size: 14px;
        line-height: 140%;
        color: #666;
        margin-top: 8px;

        span {
            color: #141414;
            font-weight: 60;
        }
    }

    &__reviews {
        display: flex;
        gap: 8px;
        margin-top: 16px;
        align-items: center;
        line-height: 140%;
    }

    &__tabs {
        margin-top: 32px;
        display: flex;
        gap: 32px;

        &-item {
            font-weight: 600;
            font-size: 18px;
            line-height: 140%;
            color: #141414;
            cursor: pointer;
            transition: all 250ms ease-in-out;
            position: relative;

            &::after {
                content: "";
                height: 2px;
                background: $red;
                position: absolute;
                top: 30px;
                left: 0;
                opacity: 0;
                transition: opacity, width 250ms ease-in-out;
                width: 0;
            }

            &:hover {
                color: $red;
            }

            &:hover:after {
                opacity: 1;
                width: 100%;
            }

            &.active {
                color: $red;
            }

            &.active:after {
                opacity: 1;
                width: 100%;
            }
        }

        &-content {
            margin-top: 24px;
        }
    }
}
</style>