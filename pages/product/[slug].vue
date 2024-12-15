<template>
    <div class="ProductCard">
        <Header />

        <NuxtLayout name="container">
            <div class="ProductCard__breadcrumbs"> Назад </div>
            <div class="ProductCard__container">
                <div class="ProductCard__left">
                    <carousel
                        class="ProductCard__carousel"
                        :wrap-around="true"
                        v-model="currentSlide"
                        :per-page="1"
                    >
                        <slide
                            class="ProductCard__carousel-item"
                            v-for="(slide, index) in product?.imagesGallery"
                            :key="index"
                        >
                            <NuxtImg
                                :src="
                                    product?.collectionId && product?.id && slide
                                        ? genImageUrl(product.collectionId, product.id, slide)
                                        : ''
                                "
                                :alt="product?.name"
                                :title="product?.name"
                            />
                        </slide>
                        <template #addons>
                            <Navigation />
                            <Pagination />
                        </template>
                    </carousel>

                    <div class="ProductCard__carousel-small">
                        <div
                            class="ProductCard__carousel-small-item"
                            v-for="(slide, index) in product?.imagesGallery"
                            :key="index"
                            @click="selectSlide(index)"
                            :class="{ active: currentSlide === index }"
                        >
                            <NuxtImg
                                :src="
                                    product?.collectionId && product?.id && slide
                                        ? genImageUrl(product.collectionId, product.id, slide)
                                        : ''
                                "
                                :alt="product?.name"
                                :title="product?.name"
                            />
                        </div>
                    </div>
                </div>
                <div class="ProductCard__right">
                    <h1 class="ProductCard__title">{{ product?.name }}</h1>
                    <div class="ProductCard__top">
                        <div
                            class="ProductCard__reviews"
                            v-if="product?.expand?.reviews"
                        >
                            <div class="ProductCard__reviews-star">
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
                                        title="star icon"
                                    />
                                </template>
                            </div>
                            <div class="ProductCard__reviews-count">{{ reviewsCount }}</div>
                        </div>
                        <div
                            class="ProductCard__reviews-empty"
                            v-else
                            >Нет отзывов</div
                        >
                        <div class="ProductCard__article"
                            >Артикул: <span>{{ product?.article }}</span></div
                        >
                    </div>
                    <ProductAdvantage />
                    <ProductPrice
                        :priceNew="product?.priceNew || '0'"
                        :priceOld="product?.priceOld || '0'"
                    />
                    <ProductOptions :options="product?.options || []" />
                    <ProductPackages />
                    <ProductSameCategory
                        :sameCategory="product?.expand?.category?.expand?.products ?? []"
                    />
                    <ProductCategory :otherCategories="otherCategories" />
                </div>
            </div>

            <div class="ProductCard__tabs">
                <div
                    class="ProductCard__tabs-item"
                    @click="selectedTab = 'descr'"
                    :class="{ active: selectedTab === 'descr' }"
                    >Описание</div
                >
                <div
                    class="ProductCard__tabs-item"
                    @click="selectedTab = 'reviews'"
                    :class="{ active: selectedTab === 'reviews' }"
                    >Отзывы ({{
                        Array.isArray(product?.expand?.reviews)
                            ? product?.expand?.reviews?.length
                            : 0
                    }})</div
                >
                <div
                    class="ProductCard__tabs-item"
                    @click="selectedTab = 'questions'"
                    :class="{ active: selectedTab === 'questions' }"
                    >Вопросы</div
                >
                <div
                    class="ProductCard__tabs-item"
                    @click="selectedTab = 'char'"
                    :class="{ active: selectedTab === 'char' }"
                    >Характеристики
                </div>
            </div>
            <div class="ProductCard__tabs-content">
                <transition name="popup-anim">
                    <ProductDescr
                        v-if="selectedTab === 'descr'"
                        :description="product?.description ?? ''"
                    />
                </transition>
                <transition name="popup-anim">
                    <ProductReviews
                        v-if="selectedTab === 'reviews'"
                        :productName="product?.name"
                        :reviews="product?.expand?.reviews"
                    />
                </transition>
                <transition name="popup-anim">
                    <ProductQuestions v-if="selectedTab === 'questions'" />
                </transition>
                <transition name="popup-anim">
                    <ProductFullChar v-if="selectedTab === 'char'" />
                </transition>
            </div>
        </NuxtLayout>

        <Footer />
    </div>
</template>

<script setup lang="ts">
    import { Carousel, Navigation, Slide } from 'vue3-carousel';
    import { useCategoriesStore } from '~/store/categoriesStore';
    import { useProductStore } from '~/store/productStore';

    const { setSeo } = useSitewide();
    const route = useRoute();

    const productStore = useProductStore();
    const categoriesStore = useCategoriesStore();

    const { data: product } = await useAsyncData('product', () => {
        return productStore.fetchProductBySlug(route.params.slug as string);
    });

    const selectedTab = ref('descr');

    const currentSlide = ref(0);

    const selectSlide = (index: any) => {
        currentSlide.value = index;
    };

    const otherCategories = computed(() => {
        if (!product.value?.expand?.category?.id) return categoriesStore.categories;

        return categoriesStore.categories.filter(
            (category) => category.id !== product.value?.expand?.category?.id,
        );
    });

    const averageRating = computed(() => {
        const reviews = product.value?.expand?.reviews;
        if (!reviews || !Array.isArray(reviews) || reviews.length === 0) return 0;

        const sum = reviews.reduce((acc, review) => acc + (review?.rating || 0), 0);
        return Math.round(sum / reviews.length);
    });

    const reviewsCount = computed(() => {
        const reviews = product.value?.expand?.reviews;
        const count = Array.isArray(reviews) ? reviews.length : 0;
        return getDeclension(count, ['отзыв', 'отзыва', 'отзывов']);
    });

    setSeo({
        title: `${product.value?.name} купить`,
        description:
            product.value?.seoDescr ||
            'Купить теплицу в TeploGarden. Премиальные теплицы из алюминия со стеклом.',
        type: 'article',
        image: product.value?.image[0],
        keywords: `${product.value?.name}, теплица, купить теплицу, алюминиевая теплица, теплица со стеклом, teplogarden`,
        robots: 'index, follow',
        author: {
            '@type': 'Organization',
            name: 'TeploGarden',
            url: 'https://teplogarden.ru',
        },
    });

    useSchemaOrg([
        defineBreadcrumb({
            itemListElement: [
                {
                    name: 'Главная',
                    item: 'https://teplogarden.ru',
                },
                {
                    name: product.value?.expand?.category?.name || 'Каталог',
                    item: `https://teplogarden.ru/category/${product.value?.expand?.category?.slug}`,
                },
                {
                    name: product.value?.name || '',
                    item: `https://teplogarden.ru/product/${product.value?.slug}`,
                },
            ],
        }),
        defineProduct({
            name: product.value?.name,
            description: product.value?.description,
            image: product.value?.image[0],
            sku: product.value?.article,
            brand: {
                '@type': 'Brand',
                name: 'TeploGarden',
            },
            offers: [{
                '@type': 'Offer',
                price: product.value?.priceNew || '0',
                priceCurrency: 'RUB',
                availability: 'https://schema.org/InStock',
            }],
            aggregateRating: product.value?.expand?.reviews?.length
                ? {
                      '@type': 'AggregateRating',
                      ratingValue: averageRating.value,
                      reviewCount: product.value?.expand?.reviews?.length,
                  }
                : undefined,
            review: product.value?.expand?.reviews?.map((review) => ({
                '@type': 'Review',
                reviewRating: {
                    '@type': 'Rating',
                    ratingValue: review.rating,
                },
                author: {
                    '@type': 'Person',
                    name: review.reviewer,
                },
                reviewBody: review.comment,
                datePublished: review.created,
            })),
        }),
    ]);
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
            margin-top: 24px;

            @media screen and (max-width: 1365px) {
                grid-template-columns: 1fr;
                gap: 24px;
            }

            @media screen and (max-width: 767px) {
                gap: 16px;
                margin-top: 0;
            }
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
                content: '';
                width: 16px;
                height: 16px;
                display: inline-block;
                margin-right: 8px;
                background-image: url('~/assets/images/arrow-left.svg');
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
                    background-image: url('~/assets/images/arrow-left-hover.svg');
                }
            }
        }

        &__carousel {
            width: 100%;

            &-item {
                aspect-ratio: 4/3;
                position: relative;

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

                &-item {
                    border: 1px solid transparent;
                    border-radius: 16px;

                    &.active {
                        border: 2px solid $red;
                    }
                }
            }
        }

        &__left {
            position: sticky;
            top: 20px;
            height: fit-content;
            align-self: start;

            @media screen and (max-width: 1365px) {
                position: relative;
            }
        }

        &__right {
            min-height: 100%;
        }

        &__title {
            font-size: 28px;
            font-weight: 600;
            line-height: 140%;

            @media screen and (max-width: 767px) {
                margin-top: 16px;
            }
        }

        &__top {
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-top: 16px;
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
            align-items: center;
            line-height: 140%;
        }

        &__tabs {
            margin-top: 32px;
            display: flex;
            gap: 32px;

            @media screen and (max-width: 1365px) {
                gap: 24px;
                overflow-x: auto;
                padding-bottom: 8px;
            }

            @media screen and (max-width: 767px) {
                gap: 16px;
                margin-top: 24px;
            }

            &-item {
                font-weight: 600;
                font-size: 18px;
                line-height: 140%;
                color: #141414;
                cursor: pointer;
                transition: all 250ms ease-in-out;
                position: relative;

                @media screen and (max-width: 767px) {
                    font-size: 16px;
                }

                &::after {
                    content: '';
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
