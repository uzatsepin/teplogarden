<template>
    <div class="Catalog">
        <Header />
        <NuxtLayout name="container">
            <h1 class="Catalog__title">Каталог теплиц</h1>

            <div class="Catalog__container">
                <CatalogItem v-for="category in categories" :key="category.id" :category="category"/>
            </div>

            <div class="Catalog__seo">
                <h2
                    >Инновационные теплицы от Teplogarden: надежное решение для
                    вашего урожая</h2
                >
                <p
                    >Ищете надежные и долговечные теплицы для вашего сада? Компания Teplogarden
                    предлагает инновационные теплицы из поликарбоната, которые помогут вам
                    выращивать овощи, фрукты и зелень круглый год. Мы специализируемся на
                    производстве и реализации высококачественных теплиц с использованием современных
                    технологий, чтобы ваш урожай всегда был на высоте!
                </p>

                <h3>Почему выбирают теплицы Teplogarden?</h3>
                <ol>
                    <li
                        ><p>Прочный поликарбонат</p> Наши теплицы изготовлены из высококачественного
                        поликарбоната, который обеспечивает защиту растений от внешних факторов,
                        таких как ультрафиолетовые лучи, сильный ветер и осадки.</li
                    >
                    <li
                        ><p>Долговечность и устойчивость</p> Усиленные каркасы из металла
                        гарантируют устойчивость конструкции даже при сильных нагрузках. Теплицы
                        подходят для регионов с суровыми климатическими условиями.</li
                    >
                    <li
                        ><p>Энергоэффективность</p> Поликарбонат удерживает тепло внутри теплицы, снижая затраты на дополнительный обогрев. Это позволяет поддерживать оптимальный микроклимат для растений в любое время года.</li
                    >
                    <li
                        ><p>Широкий ассортимент моделей</p>Мы предлагаем теплицы различной формы и размера: арочные, двускатные, компактные варианты для небольших участков и просторные решения для фермеров.</li
                    >
                    <li
                        ><p>Услуги доставки и монтажа</p>Компания Teplogarden предоставляет услугу доставки теплиц по всей России. При необходимости наши специалисты выполнят профессиональную установку на вашем участке.</li
                    >
                </ol>
                <h3>
                    Преимущества сотрудничества с Teplogarden
                </h3>

                <ul>
                        <li><b>Прямое производство:</b> гарантия доступных цен без посредников.</li>
                        <li><b>Качество, подтвержденное сертификатами.</b></li>
                        <li><b>Индивидуальный подход:</b>помощь в выборе подходящей модели с учетом ваших нужд.</li>
                        <li><b>Гарантийное обслуживание и поддержка.</b></li>
                    </ul>

                <h3>
                    Закажите теплицу сегодня!
                </h3>
                <p>
                    Инновационные теплицы Teplogarden — это ваш верный помощник в создании комфортных условий для выращивания растений. Оцените удобство и эффективность наших решений, сделав заказ прямо сейчас. Мы готовы доставить вашу теплицу в кратчайшие сроки!
                </p>
            </div>
        </NuxtLayout>

        <Footer />
    </div>
</template>

<script setup lang="ts">
import { useCategoriesStore } from '~/store/categoriesStore';
const { setSeo } = useSitewide();

const categoriesStore = useCategoriesStore();

const { categories } = storeToRefs(categoriesStore);

setSeo({
  title: 'Все категории теплиц',
  description: 'Полный каталог премиальных теплиц TeploGarden из алюминия со стеклом. Выбирайте теплицы разных размеров и комплектаций с доставкой и установкой.',
  type: 'website',
  keywords: 'каталог теплиц, теплицы категории, купить теплицу, алюминиевые теплицы каталог, стеклянные теплицы каталог, премиальные теплицы каталог',
  robots: 'index, follow'
});

useSchemaOrg([
  defineBreadcrumb({
    itemListElement: [
      {
        name: 'Главная',
        item: 'https://teplogarden.ru'
      },
      {
        name: 'Каталог',
        item: 'https://teplogarden.ru/category'
      }
    ]
  }),
  defineWebPage({
    '@type': 'CollectionPage',
    name: 'Каталог теплиц TeploGarden',
    description: 'Полный каталог премиальных теплиц TeploGarden',
    hasPart: categories.value?.map(category => ({
      '@type': 'ItemList',
      name: category.name,
      description: category?.name,
      url: `https://teplogarden.ru/category/${category.slug}`
    }))
  })
])

</script>

<style scoped lang="scss">
    .Catalog {
        &__title {
            margin-top: 24px;
            font-weight: 600;
            font-size: 24px;
            line-height: 140%;
            color: #141414;
        }

        &__container {
            display: flex;
            flex-wrap: nowrap;
            width: 100%;
            gap: 16px;
            margin-top: 16px;

            @media screen and (max-width: 767px) {
                flex-direction: column;
            }
        }

        &__seo {
            margin-top: 36px;

            h2 {
                font-weight: 600;
                font-size: 20px;
                line-height: 140%;
                color: #141414;
                margin-bottom: 16px;
            }

            p {
                font-size: 16px;
                line-height: 140%;
                color: #141414;
                margin-bottom: 16px;
            }

            ol {
                padding-left: 24px;
                margin-bottom: 16px;
                margin-top: 16px;
                list-style-type: decimal;

                li {
                    font-size: 16px;
                    line-height: 140%;
                    color: #141414;
                    margin-bottom: 16px;

                    p {
                        font-weight: 600;
                        margin-bottom: 8px;
                    }
                }
            }

            h3 {
                font-weight: 600;
                font-size: 20px;
                line-height: 140%;
                color: #141414;
                margin-bottom: 16px;
            }

            ul {
                padding-left: 24px;
                margin-top: 16px;
                list-style-type: disc;

                li {
                    font-size: 16px;
                    line-height: 140%;
                    color: #141414;
                    margin-bottom: 16px;
                }
            }
        }
    }
</style>
