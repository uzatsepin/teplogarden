<template>
    <div class="CatalogCategory">
        <Header />
        <NuxtLayout name="container">
            <h1 class="CatalogCategory__title">Теплицы {{ category?.name }}</h1>

            <div class="CatalogCategory__container">
                <Product
                    v-for="product in category?.expand?.products"
                    :key="product.id"
                    :product="product"
                />
            </div>

            <div class="CatalogCategory__seo">
                <h4>Категории теплиц TEPLOGARDEN: идеальные решения для урожайного сада</h4>

                <p
                    >Добро пожаловать на страницу "Категории" интернет-магазина TEPLOGARDEN, где вы
                    найдёте лучшие теплицы для вашего участка! Мы предлагаем три уникальные
                    категории теплиц — <strong>Teplo S</strong>, <strong>Teplo M</strong> и
                    <strong>Teplo L</strong>, каждая из которых разработана с учётом современных
                    требований к качеству, стилю и функциональности.</p
                >

                <h2>Почему стоит выбрать теплицы TEPLOGARDEN?</h2>
                <ul>
                    <li
                        ><strong>Прочный алюминиевый каркас</strong>, устойчивый к коррозии,
                        обеспечит долговечность конструкции.</li
                    >
                    <li
                        ><strong>Закалённое стекло</strong> или стандартные панели гарантируют
                        отличную светопропускную способность и комфортный микроклимат.</li
                    >
                    <li
                        ><strong>Экологичные грядки из лиственницы</strong> подчеркнут натуральный
                        стиль вашего сада.</li
                    >
                    <li
                        >Возможность <strong>раннего посева и позднего сбора урожая</strong>,
                        независимо от погодных условий.</li
                    >
                    <li
                        >Широкий выбор дополнительных опций: автоматическое проветривание,
                        двери-купе, фитолампы, облицовка и многое другое.</li
                    >
                </ul>

                <h2>Выберите размер теплицы для вашего участка</h2>
                <ul>
                    <li
                        ><strong>Teplo S</strong> — компактная теплица для небольших садов и
                        ограниченного пространства.</li
                    >
                    <li
                        ><strong>Teplo M</strong> — универсальное решение для большинства загородных
                        участков.</li
                    >
                    <li
                        ><strong>Teplo L</strong> — просторная теплица для масштабных садоводческих
                        проектов.</li
                    >
                </ul>
                <h2>Разнообразие комплектаций</h2>

                <ul>
                    <li
                        ><strong>Teplo BASE:</strong> оптимальный вариант для начинающих
                        садоводов.</li
                    >
                    <li
                        ><strong>Teplo OPTIUM:</strong> расширенная комплектация для более серьёзных
                        задач.</li
                    >
                    <li
                        ><strong>Teplo PREMIUM:</strong> премиальное решение с максимальными
                        возможностями и дополнительными услугами, включая консультацию садовода.</li
                    >
                </ul>

                <h2>Преимущества теплиц TEPLOGARDEN</h2>
                <ul>
                    <li
                        ><strong>Эстетика и стиль:</strong> теплицы украсят ваш сад и станут его
                        главной изюминкой.</li
                    >
                    <li
                        ><strong>Функциональность и комфорт:</strong> адаптация под любые задачи и
                        культуры.</li
                    >
                    <li
                        ><strong>Долговечность и надежность:</strong> материалы и технологии,
                        которые служат годами.</li
                    >
                    <li
                        ><strong>Инновации:</strong> возможность добавления современных опций для
                        максимального удобства.</li
                    >
                </ul>
                <p
                    >Откройте для себя новый стандарт теплиц с TEPLOGARDEN! Выберите идеальную
                    теплицу и создайте собственный оазис для натурального урожая и садоводческих
                    вдохновений. Ваш сад станет примером красоты, функциональности и экологии.</p
                >

                <p
                    >Закажите теплицу вашей мечты уже сегодня и обеспечьте себя качественным и
                    безопасным урожаем круглый год!</p
                >
            </div>
        </NuxtLayout>

        <Footer />
    </div>
</template>

<script setup lang="ts">
    import { useCategoriesStore } from '~/store/categoriesStore';
    const { setSeo } = useSitewide();

    const route = useRoute();
    const categoryStore = useCategoriesStore();

    const { data: category } = await useAsyncData('category', () => {
        return categoryStore.fetchCategoryBySlug(
            Array.isArray(route.params.category) ? route.params.category[0] : route.params.category,
        );
    });

    setSeo({
        title: `Теплицы ${category.value?.name || ''} - TeploGarden`,
        description: `Теплицы ${
            category.value?.name || ''
        } от производителя TeploGarden. Премиальные теплицы из алюминия со стеклом. Доставка и установка.`,
        type: 'website',
        keywords: `теплицы ${category.value?.name?.toLowerCase() || ''}, купить теплицу ${
            category.value?.name?.toLowerCase() || ''
        }, алюминиевые теплицы ${
            category.value?.name?.toLowerCase() || ''
        }, стеклянные теплицы, премиальные теплицы`,
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
                    name: 'Каталог',
                    item: 'https://teplogarden.ru/category',
                },
                {
                    name: `Теплицы ${category.value?.name || ''}`,
                    item: `https://teplogarden.ru/category/${category.value?.slug || ''}`,
                },
            ],
        }),
        defineWebPage({
            '@type': 'ItemPage',
            name: `Теплицы ${category.value?.name || ''} - TeploGarden`,
            description: `Теплицы ${category.value?.name || ''} от производителя TeploGarden`,
        }),
    ]);
</script>

<style scoped lang="scss">
    .CatalogCategory {
        :deep(.Header) {
            border-bottom: 1px solid #dbd5bd;
        }

        &__title {
            margin-top: 24px;
            font-weight: 600;
            font-size: 24px;
            line-height: 140%;
            color: $textColor;
        }

        &__container {
            display: grid;
            grid-template-columns: repeat(auto-fill, minmax(409px, 1fr));
            gap: 16px;
            margin-top: 16px;
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
                color: $textColor;

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
                color: $textColor;

                @media screen and (max-width: 767px) {
                    font-size: 20px;
                    margin: 24px 0 12px;
                }
            }

            h4 {
                font-size: 20px;
                font-weight: 600;
                line-height: 140%;
                margin: 16px 0 16px;
                color: $textColor;
            }

            p {
                font-size: 16px;
                line-height: 160%;
                color: #5e5e5e;
                margin-bottom: 16px;

                strong {
                    color: $textColor;
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

                    strong {
                        color: $textColor;
                        font-weight: 600;
                    }

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
