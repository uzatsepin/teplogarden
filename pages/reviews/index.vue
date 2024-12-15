<template>
    <div class="Reviews">
        <Header />
        <NuxtLayout name="container">
            <div class="reviews__container">
                <section class="reviews">
                    <div class="reviews__header">
                        <h1 class="reviews__title">Отзывы наших клиентов</h1>
                        <div class="reviews__stats">
                            <span class="reviews__count">Всего отзывов: {{ reviews?.length }}</span>
                            <OthersSecondaryButton @click="isReviewFormOpen = true">
                                Оставить отзыв
                            </OthersSecondaryButton>
                        </div>
                    </div>

                    <div class="reviews__grid">
                        <ProductReviewsCard
                            v-for="review in reviews"
                            :key="review.id"
                            :review="review"
                        />
                    </div>
                </section>

                <div class="reviews__seo">
                    <h2> Отзывы о теплицах TeploGarden </h2>
                    <p>
                        Вы ищете качественную теплицу, которая обеспечит идеальные условия для
                        выращивания растений? В магазине TeploGarden мы предлагаем широкий выбор
                        теплиц, которые станут надежными помощниками в вашем саду. Ознакомьтесь с
                        множеством положительных отзывов от наших довольных клиентов, которые уже
                        оценили преимущества наших теплиц.
                    </p>

                    <h3>Почему стоит выбрать теплицы</h3>
                    <p>
                        TeploGarden? Наши теплицы — это инновационные решения с использованием
                        премиальных материалов и технологий. Мы предлагаем три линейки теплиц:
                        <strong>Teplo S</strong>, <strong>Teplo M</strong> и
                        <strong>Teplo L</strong>, каждая из которых отличается разными размерами и
                        уровнями комплектации, чтобы максимально удовлетворить потребности наших
                        клиентов.
                    </p>

                    <h3>Основные преимущества наших теплиц:</h3>
                    <ul>
                        <li
                            >Прочные каркасные материалы — алюминиевые конструкции обеспечивают
                            долговечность и стойкость к погодным условиям.
                        </li>
                        <li>
                            Высокое качество стекла — стандартное или закаленное стекло, которое
                            эффективно пропускает свет и сохраняет тепло.
                        </li>
                        <li>
                            Гибкость комплектации — возможность выбрать базовый пакет или
                            дополнительные опции, такие как грядки из лиственницы, форточки,
                            термоприводы, фитолампы и многое другое.
                        </li>
                        <li>
                            Устойчивость к любым погодным условиям — наши теплицы обеспечивают
                            устойчивость к сильным ветрам, дождям и снегопадам, что гарантирует
                            долгосрочную эксплуатацию.
                        </li>
                    </ul>
                    <h3>Доступные комплектации</h3>
                    <ul>
                        <li
                            >Teplo Base — идеальный выбор для новичков и тех, кто хочет получить
                            базовую комплектацию с возможностью дальнейшей настройки. Включает
                            каркас, стекло, форточки, грядки и опции доставки и монтажа.
                        </li>
                        <li>
                            Teplo Optium — оптимальный пакет с дополнительными возможностями, такими
                            как сваи, покраска по RAL и более мощные термоприводы для лучшей
                            регулировки температуры и вентиляции.
                        </li>
                        <li>
                            Teplo Premium — премиум-класс для тех, кто хочет получить лучшее:
                            закаленное стекло, облицовка, полная комплектация с дополнительными
                            опциями, а также гарантийное обслуживание с консультациями садоводов.
                        </li>
                    </ul>

                    <h3> Как выбрать идеальную теплицу? </h3>
                    <p>
                        В TeploGarden мы заботимся о том, чтобы каждый клиент нашел теплицу, которая
                        идеально подойдет для его участка. Независимо от того, нужен ли вам
                        компактный вариант или просторная теплица для выращивания разных культур,
                        наши линейки Teplo S, M и L удовлетворят все требования.
                    </p>

                    <p>
                        <strong>Отзывы наших клиентов:</strong> Наши покупатели отмечают, что
                        теплицы TeploGarden отлично сохраняют тепло в холодные месяцы, обладают
                        отличными светопропускными свойствами и позволяют выращивать любые культуры
                        — от ранних овощей до более позднего сбора. Также пользователи довольны
                        простотой монтажа и долговечностью материалов.
                    </p>
                    <h3> Преимущества работы с нами: </h3>
                    <ul>
                        <li>Удобная доставка и профессиональный монтаж.</li>
                        <li>Бесплатная консультация садоводов.</li>
                        <li>Гарантийное обслуживание и выезд сервисного специалиста.</li>
                    </ul>
                    <p>
                        Присоединяйтесь к числу довольных владельцев теплиц TeploGarden и оставьте
                        свой отзыв! Мы всегда рады услышать ваше мнение и помочь с выбором
                        подходящей модели.
                    </p>
                </div>
            </div>
        </NuxtLayout>

        <Footer />

        <!-- Review Form Modal -->
        <!-- <div
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
        </div> -->
    </div>
</template>

<script setup lang="ts">
    const { setSeo } = useSitewide();
    import { ref } from 'vue';
    import { useAdditionalsStore } from '~/store/additionalsStore';

    import type { RecordModel } from 'pocketbase';

    interface Review extends RecordModel {
        images: string[];
        name: string;
        rating: number;
        text: string;
        likes: number;
    }

    const additionalsStore = useAdditionalsStore();

    const { data: reviews } = await useAsyncData('shopReviews', () => {
        return additionalsStore.fetchShopReviews();
    });

    const isReviewFormOpen = ref(false);

    const newReview = ref({
        name: '',
        rating: 0,
        text: '',
        images: [] as File[],
    });

    const handleImages = (event: Event) => {
        const files = (event.target as HTMLInputElement).files;
        if (files) {
            newReview.value.images = Array.from(files);
        }
    };

    const submitReview = () => {};

    setSeo({
        title: 'Отзывы',
        description:
            'Отзывы наших клиентов о теплицах TeploGarden. Узнайте мнение покупателей о качестве наших теплиц, сервисе и установке. Оставьте свой отзыв!',
        type: 'website',
        keywords:
            'отзывы теплицы teplogarden, отзывы клиентов, отзывы о теплицах, теплицы отзывы покупателей, отзывы о теплицах teplogarden, отзывы про алюминиевые теплицы, отзывы о теплицах с алюминиевым каркасом, отзывы о теплицах с алюминиевым каркасом и стеклом, отзывы о теплицах с алюминиевым каркасом и стеклом купить, отзывы о теплицах с алюминиевым каркасом и стеклом купить в москве, отзывы о теплицах с алюминиевым каркасом и стеклом купить в московской области, отзывы о теплицах с алюминиевым каркасом и стеклом купить в россии, отзывы о теплицах с алюминиевым каркасом и стеклом купить в интернете, отзывы о теплицах с алюминиевым каркасом и стеклом купить в интернет-магазине, отзывы о теплицах с алюминиевым каркасом и стеклом купить в интернет-магазине teplogarden, отзывы о теплицах с алюминиевым каркасом и стеклом купить в интернет-магазине teplogarden.ru',
        robots: 'index, follow',
    });

    useSchemaOrg([
        defineBreadcrumb({
            itemListElement: [
                {
                    name: 'Главная',
                    item: 'https://teplogarden.ru',
                },
                {
                    name: 'Отзывы',
                    item: 'https://teplogarden.ru/reviews',
                },
            ],
        }),
        defineWebPage({
            name: 'Отзывы клиентов',
            description: 'Отзывы наших клиентов о теплицах TeploGarden',
        }),
        {
            '@type': 'ItemList',
            name: 'Отзывы о теплицах TeploGarden',
            description: 'Коллекция отзывов наших клиентов',
            numberOfItems: reviews.value?.length || 0,
            itemListElement: reviews.value?.map((review, index) => ({
                '@type': 'Review',
                position: index + 1,
                reviewBody: review.text,
                reviewRating: {
                    '@type': 'Rating',
                    ratingValue: review.rating,
                    bestRating: 5,
                },
                author: {
                    '@type': 'Person',
                    name: review.name,
                },
                datePublished: review.created,
            })),
        },
    ]);
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

            @media screen and (max-width: 767px) {
                flex-direction: column;
                gap: 16px;
            }
        }

        &__title {
            font-size: 32px;
            font-weight: 600;
        }

        &__stats {
            display: flex;
            align-items: center;
            gap: 16px;

            @media screen and (max-width: 767px) {
                justify-content: space-between;
                gap: 16px;
                width: 100%;
            }
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

        &__seo {
            margin-top: 48px;
            padding: 48px 0;
            border-top: 1px solid #dbd5bd;

            h2 {
                font-size: 32px;
                font-weight: 600;
                line-height: 140%;
                margin-bottom: 24px;
                color: #141414;

                @media screen and (max-width: 767px) {
                    font-size: 24px;
                    margin-bottom: 16px;
                }
            }

            h3 {
                font-size: 24px;
                font-weight: 600;
                line-height: 140%;
                margin: 32px 0 16px;
                color: #141414;

                @media screen and (max-width: 767px) {
                    font-size: 20px;
                    margin: 24px 0 12px;
                }
            }

            p {
                font-size: 16px;
                line-height: 160%;
                color: #5e5e5e;
                margin-bottom: 16px;

                strong {
                    color: #141414;
                    font-weight: 600;
                }
            }

            ul {
                list-style: none;
                padding-left: 24px;
                margin: 16px 0;

                li {
                    position: relative;
                    font-size: 16px;
                    line-height: 160%;
                    color: #5e5e5e;
                    margin-bottom: 12px;

                    &:before {
                        content: '';
                        position: absolute;
                        left: -24px;
                        top: 8px;
                        width: 8px;
                        height: 8px;
                        border-radius: 50%;
                        background: #8c2b02;
                    }
                }
            }

            @media screen and (max-width: 767px) {
                margin-top: 32px;
                padding: 32px 0;
            }
        }
    }
</style>
