<template>
    <Header />
    <div class="About">
        <NuxtLayout name="container">
            <div class="About__container">
                <div class="About__image">
                    <NuxtImg
                        src="/images/contacts.jpg"
                        height="450px"
                    />
                    <div class="About__image-text">
                        <h1>Про компанию <span>TeploGarden</span></h1>
                    </div>
                </div>

                <div class="About__mission">
                    <h2 class="About__mission-title">Миссия и ценности Teplogarden</h2>

                    <section class="About__mission-ecology">
                        <h2 class="About__mission-ecology-title"
                            >Наши теплицы — это ваши натуральные и безопасные продукты</h2
                        >
                        <p class="About__mission-ecology-descr"
                            >Teplogarden стремится сделать натуральные продукты доступными каждому.
                            Мы создаём инновационные теплицы, которые обеспечивают вашим растениям
                            оптимальные условия для роста и плодоношения.</p
                        >
                        <p class="About__mission-ecology-descr"
                            >Благодаря использованию современных технологий и материалов, наши
                            теплицы обеспечивают стабильный урожай в любое время года. Мы понимаем,
                            насколько важно поддерживать здоровье ваших растений, поэтому уделяем
                            особое внимание качеству конструкции и ее функциональности.</p
                        >
                        <p class="About__mission-ecology-descr"
                            >С нашими теплицами вы получите не только долговечность и надежность, но
                            и удовольствие от процесса выращивания. Ваша уверенность в натуральности
                            и безопасности продуктов начинается с Teplogarden!</p
                        >

                        <NuxtImg
                            src="/images/vegetables.png"
                            class="About__mission-ecology-img"
                            width="300"
                        />
                    </section>

                    <section class="About__mission-benefits">
                        <h2 class="About__mission-benefits-title">Наши преимущества:</h2>
                        <ul class="About__mission-benefits-list">
                            <li class="About__mission-benefits-list-item">
                                <NuxtImg src="/images/icons/animated-plant.svg" />
                                Инновационные и премиальные технологии и материалы.
                            </li>
                            <li class="About__mission-benefits-list-item">
                                <NuxtImg src="/images/icons/animated-bad-weather.svg" />
                                Устойчивость к неблагоприятным погодным условиям.
                            </li>
                            <li class="About__mission-benefits-list-item">
                                <NuxtImg src="/images/icons/animated-sun.svg" />
                                Отличные светопропускные свойства.
                            </li>
                        </ul>
                    </section>

                    <section class="About__mission-why">
                        <h2 class="About__mission-why-title">Почему выбирают Teplogarden?</h2>
                        <p class="About__mission-why-descr"
                            ><strong>Teplogarden</strong> — это компания по производству качественных премиальных
                            теплиц из алюминия с полимерной покраской. Мы предлагаем широкий выбор
                            дополнительных опций, которые помогут вам создать идеальные условия для
                            вашего урожая.</p
                        >
                    </section>
                    <section class="About__mission-options">
                        <h2 class="About__mission-options-title">Дополнительные опции:</h2>
                        <ul class="About__mission-options-list">
                            <li class="About__mission-options-list-item">Полка откидная.</li>
                            <li class="About__mission-options-list-item">Грядки П-образные.</li>
                            <li class="About__mission-options-list-item">Отливы.</li>
                            <li class="About__mission-options-list-item">Термоприводы.</li>
                            <li class="About__mission-options-list-item">Фитолампы.</li>
                            <li class="About__mission-options-list-item"
                                >Форточки для нижнего или торцевого проветривания.</li
                            >
                            <li class="About__mission-options-list-item"
                                >Замена двери на дверь-купе.</li
                            >
                            <li class="About__mission-options-list-item">Свайный фундамент.</li>
                            <li class="About__mission-options-list-item">Облицовка.</li>
                        </ul>
                    </section>
                    <section class="About__mission-bottom">
                        <p>Сегодня <strong>Teplogarden</strong> — завтра сочный урожай!</p>
                    </section>
                </div>

                <NuxtLink
                    to="/catalog"
                    class="About__button"
                >
                    <OthersPrimaryButton>Продолжить покупки</OthersPrimaryButton>
                </NuxtLink>
            </div>
        </NuxtLayout>

        <Footer />
    </div>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
    .Header {
        border-bottom: 1px solid #dbd5bd;
    }
    .About {
        background: $lightBeige;

        &__container {
            max-width: 1170px;
            margin: 0 auto;
        }

        &__image {
            position: relative;
            margin-top: 48px;

            & img {
                width: 100%;
                object-fit: cover;
                border-radius: 16px;
                filter: blur(3px);
            }

            &-text {
                font-family: 'Rubik', sans-serif;
                font-size: 48px;
                font-weight: 600;
                line-height: 140%;
                color: #fff;
                position: absolute;
                top: 50%;
                right: 50%;
                transform: translate(50%, -50%);
                width: 100%;
                text-align: center;

                & span {
                    text-transform: uppercase;
                }
            }
        }

        &__mission {
            margin-top: 48px;

            &-title {
                font-size: 24px;
                font-weight: 700;
                line-height: 140%;
                color: #141414;
                text-align: center;
            }

            &-ecology {
                margin-top: 24px;
                padding: 24px;
                border-radius: 16px;
                background: $mainBeige;
                position: relative;

                &-title {
                    font-size: 24px;
                    font-weight: 600;
                    line-height: 140%;
                    color: #141414;
                    text-align: center;
                }

                &-descr {
                    font-size: 18px;
                    line-height: 140%;
                    color: #666;
                    margin-top: 16px;
                    max-width: 710px;
                }

                &-img {
                    position: absolute;
                    top: 24px;
                    right: 24px;
                }
            }

            &-benefits {
                margin-top: 24px;

                &-title {
                    font-size: 24px;
                    font-weight: 600;
                    line-height: 140%;
                    color: #141414;
                    text-align: center;
                }

                &-list {
                    margin-top: 16px;
                    display: grid;
                    grid-template-columns: repeat(3, 1fr);
                    gap: 48px;

                    &-item {
                        padding: 24px;
                        border: 1px solid $red;
                        border-radius: 16px;
                        display: flex;
                        flex-direction: column;
                        gap: 16px;
                        color: #141414;
                        font-size: 18px;
                        font-weight: 400;
                        text-align: center;

                        & img {
                            display: block;
                            width: 86px;
                            height: 86px;
                            margin: 0 auto;
                        }
                    }
                }
            }

            &-why {
                margin-top: 24px;

                &-title {
                    font-size: 24px;
                    font-weight: 600;
                    line-height: 140%;
                    color: #141414;
                    text-align: center;
                }

                &-descr {
                    font-size: 18px;
                    line-height: 140%;
                    color: #666;
                    margin-top: 16px;


                    & strong {
                        font-weight: 600;
                    }
                }
            }

            &-options {
                margin-top: 24px;

                &-title {
                    font-size: 24px;
                    font-weight: 600;
                    line-height: 140%;
                    color: #141414;
                    margin-bottom: 16px;

                }

                &-list {
                    display: flex;
                    flex-direction: column;
                    gap: 8px;
                    padding-left: 22px;

                    &-item {
                        font-size: 18px;
                        line-height: 140%;
                        color: #666;
                        list-style-type: disc;
                    }
                }
            }

            &-bottom {
                text-align: center;
                margin-top: 24px;
                font-size: 32px;
                font-weight: 600;
            }
        }

        &__button {
            .PrimaryButton {
                width: fit-content;
                margin: 48px auto 0;
            }
        }
    }
</style>
