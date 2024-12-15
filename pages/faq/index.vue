<template>
    <div class="Faq">
        <Header />

        <div class="Faq__img">
            <NuxtImg
                src="/images/faq-img.jpg"
                height="700"
                alt="Вопросы и ответы teplogarden"
            />
            <div class="Faq__img-text">Вопросы и ответы</div>
        </div>

        <NuxtLayout name="container">
            <div class="Faq__wrapper">
                <h2 class="Faq__title">Часто задаваемые вопросы:</h2>
                <div class="Faq__list">
                    <div
                        v-for="(item, index) in faqItems"
                        :key="index"
                        class="Faq__item"
                    >
                        <div
                            class="Faq__question"
                            :class="{ active: item.isOpen }"
                            @click="toggleAnswer(index)"
                        >
                            <span>{{ item.question }}</span>
                            <span class="Faq__icon">+</span>
                        </div>
                        <div
                            class="Faq__answer"
                            :class="{ active: item.isOpen }"
                        >
                            {{ item.answer }}
                        </div>
                    </div>
                </div>
            </div>
            <h2 class="Faq__title">Не нашли нужного ответа?</h2>
            <div class="Faq__form">
                <input
                    type="text"
                    required
                    placeholder="Имя"
                    class="Faq__form-input"
                />
                <input
                    type="text"
                    required
                    placeholder="Телефон"
                    class="Faq__form-input"
                />
                <OthersPrimaryButton>Оставить заявку</OthersPrimaryButton>
            </div>
        </NuxtLayout>

        <Footer />
    </div>
</template>

<script setup lang="ts">
const { setSeo } = useSitewide();
    const faqItems = ref([
        {
            question: 'Сколько времени занимает доставка теплицы?',
            answer: 'Доставка теплицы возможна на следующий день после оформления заказа, либо в любой другой удобный для Вас день. Водитель обязательно свяжется с Вами за несколько часов до приезда и согласует детали доставки. Доставка и сборка осуществляются без нарушения ландшафта - мы собственными силами аккуратно вручную разгрузим теплицу в указанное место у Вас на участке. Автомобиль не будет заезжать на ваши газоны, грядки, клумбы и т.д. Стоимость зависит от адреса доставки. Точную стоимость Вам поможет рассчитать наш менеджер при оформлении заказа.',
            isOpen: true,
        },
        {
            question:
                'Если у меня не получится собрать теплицу, то можно будет вызвать бригаду отдельно?',
            answer: 'Конечно. Наши специалисты помогут в сборке, в случае, если Вы не рассчитали свои силы.',
            isOpen: false,
        },
        {
            question: 'Можно ли ставить теплицы на землю без фундамента?',
            answer: "Мы крайне не рекомендуем этого делать, так как во время осенних дождей земля может 'ходить' под теплицей. Таким образом, нагрузка неравномерно будет распределена. Более того, наша гарантия в 15 лет распространяется только на теплицы, поставленные на фундамент.",
            isOpen: false,
        },
        {
            question: 'Какой фундамент выбрать?',
            answer: 'Большинство наших покупателей ставят теплицы на проморенный брус. Впрочем, тип фундамента не особо важен. Важно, чтобы он был ровным (по уровню) и твердым. Экономные люди находят в хозяйстве кирпичи и ставят их по периметру теплицы.',
            isOpen: false,
        },
        {
            question: 'Как произвести расчет размеров фундамента для теплицы?',
            answer: 'В описаниях предложены габариты готовой теплицы. Фундамент рассчитывается, исходя из размеров осей. Для стандартных теплиц оптимальная ширина фундамента составляет 10 см.',
            isOpen: false,
        },
        {
            question: 'Я хочу теплицу нестандартной шириной. Например, 5.7м. Справитесь?',
            answer: 'Да! Звоните нам, чтобы мы рассчитали полную стоимость!',
            isOpen: false,
        },
        {
            question: 'Что такое паро-пропускающая лента и нужна ли мне она?',
            answer: 'Паро-пропускающая лента служит для того, чтобы грязь, плесень, насекомые и прочее не попадали в открытые соты поликарбоната(клеится на поликарбонат по торцам теплицы). Работает она как клапан. То есть в себя всю нечисть в себя не впускает, а из себя конденсат удаляет.',
            isOpen: false,
        },
        {
            question: 'Какие сроки гарантии на теплицы?',
            answer: 'На все теплицы мы предоставляем гарантию 15 лет. При этом, если Вы установили теплицу на фундамент, то гарантия распространяется на 15 лет.',
            isOpen: false,
        },
    ]);

    const toggleAnswer = (index: number) => {
        faqItems.value[index].isOpen = !faqItems.value[index].isOpen;
    };

    setSeo({
  title: 'Часто задаваемые вопросы',
  description: 'Ответы на популярные вопросы о теплицах TeploGarden. Узнайте больше о производстве, установке, гарантии и обслуживании наших теплиц.',
  type: 'website',
  keywords: 'вопросы о теплицах, faq теплицы, вопросы ответы teplogarden, теплицы информация, установка теплиц вопросы, обслуживание теплиц вопросы',
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
        name: 'Вопросы и ответы',
        item: 'https://teplogarden.ru/faq'
      }
    ]
  }),
  {
    '@type': 'FAQPage',
    mainEntity: faqItems.value.map(item => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.answer
      }
    }))
  }
])
</script>

<style scoped lang="scss">
    .Faq {
        &__img {
            position: relative;

            & img {
                width: 100%;
                object-fit: cover;
                object-position: center;
            }

            &-text {
                position: absolute;
                top: 50%;
                left: 50%;
                transform: translate(-50%, -50%);
                font-size: 64px;
                font-weight: 600;
                color: #fff;
            }
        }

        &__wrapper {
            padding: 40px 0;
        }

        &__title {
            font-size: 32px;
            margin-bottom: 30px;
            text-align: center;
        }

        &__list {
            max-width: 800px;
            margin: 0 auto;
        }

        &__item {
            margin-bottom: 16px;
            border-radius: 8px;
            background: #f8f8f8;
        }

        &__question {
            position: relative;
            padding: 20px;
            cursor: pointer;
            display: flex;
            justify-content: space-between;
            align-items: center;
            font-weight: 500;
            transition: all 0.3s ease;

            &.active {
                background: #eee;

                .faq__icon {
                    transform: rotate(45deg);
                }
            }
        }

        &__icon {
            transition: transform 0.3s ease;
            font-size: 20px;
        }

        &__answer {
            max-height: 0;
            overflow: hidden;
            padding: 0 20px;
            transition: all 0.3s ease;
            opacity: 0;

            &.active {
                max-height: 500px;
                padding: 20px;
                opacity: 1;
            }
        }

        &__form {
            max-width: 430px;
            margin: 0 auto;
            margin-top: 24px;
            display: flex;
            flex-direction: column;
            gap: 16px;
            width: 100%;

            &-input {
                padding: 10px 16px;
                background: #e2e2e2;
                border-radius: 16px;
                cursor: pointer;
                display: block;
                color: #141414;
                border: 2px solid transparent;
                transition: all 250ms ease-in-out;

                &::placeholder {
                    color: #9b9ba3;
                }

                &:hover {
                    border: 2px solid #4ca750;
                }

                &:focus {
                    border: 2px solid #4ca750;
                    background: #fff;
                }
            }
        }
    }
</style>
