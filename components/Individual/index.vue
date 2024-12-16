<template>
    <NuxtLayout name="container">
        <section class="Individual">
            <div class="Individual__container">
                <OthersTitle>ТЕПЛОГАРДЕН - это инвестиция в качество жизни</OthersTitle>

                <div class="Individual__content">
                    <NuxtImg
                        class="Individual__content-img"
                        src="/images/teplogarden-descr.webp"
                        alt="От дилера до лидера: как TEPLOGARDEN задаёт стандарты садоводства"
                        title="От дилера до лидера: как TEPLOGARDEN задаёт стандарты садоводства"
                    />
                    <div class="Individual__content-text">
                        <h3 class="Individual__content-text-title">
                            От дилера до лидера: как TEPLOGARDEN задаёт стандарты садоводства
                        </h3>
                        <p class="Individual__content-text-descr">
                            <strong>TEPLOGARDEN</strong> — это бренд, который более 20 лет
                            развивается на рынке теплиц, превращая функциональные конструкции в
                            стильные и экологичные оранжереи премиум-класса. От первых шагов в
                            качестве дилера алюминиевых конструкций до создания собственных
                            инновационных моделей из алюминия, стекла и лиственницы — каждый этап
                            был посвящен изучению потребностей клиентов и внедрению передовых
                            решений.
                            <br />
                            <br />
                            Сегодня <strong>TEPLOGARDEN</strong> задает новые стандарты в
                            садоводстве, предлагая уникальный продукт, который объединяет эстетику,
                            надежность и заботу о природе. Это теплицы, которые не только украшают
                            сад, но и становятся отражением ценностей их владельцев: стремления к
                            качеству, экологичности и осознанной жизни.
                        </p>
                    </div>
                </div>

                <div class="Individual__content reversed">
                    <NuxtImg
                        class="Individual__content-img"
                        src="/images/teplogarden-descr-1.webp"
                        width="400"
                        placeholder
                        alt="Превратите сад в оазис с премиальными теплицами TEPLOGARDEN"
                        title="Превратите сад в оазис с премиальными теплицами TEPLOGARDEN"
                    />
                    <div class="Individual__content-text">
                        <h3 class="Individual__content-text-title">
                          Превратите сад в оазис с премиальными теплицами <strong>TEPLOGARDEN</strong>
                        </h3>
                        <p class="Individual__content-text-descr">
                          Выбирая теплицы <strong>TEPLOGARDEN</strong>, вы выбираете надежность, эстетику и экологичность. Это инвестиция в качество жизни, которая объединяет природу и инженерное мастерство. Каждая наша теплица — это место, где приятно проводить время, наслаждаться результатами труда и гордиться своим выбором. 
                          <br />
                          <br />
                          Добро пожаловать в мир <strong>TEPLOGARDEN</strong> — мир, где премиальные теплицы превращают мечты о гармонии, красоте и удобстве в реальность.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    </NuxtLayout>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
    .Individual {
        margin-top: 48px;

        &__container {
            max-width: 1110px;
            margin: 0 auto;
            display: flex;
            flex-direction: column;
            gap: 36px;

            .title {
                text-align: center;
            }
        }

        &__content {
            display: flex;
            gap: 36px;
            align-items: center;

            @media screen and (max-width: 1170px) {
                flex-direction: column;
            }

            &.reversed {
                flex-direction: row-reverse;

                @media screen and (max-width: 1170px) {
                    flex-direction: column;
                }
            }

            &-img {
                min-width: 400px;
                height: 444px;
                border-radius: 16px;
                overflow: hidden;
                object-fit: cover;


                @media screen and (max-width: 1170px) {
                    min-width: 100%;
                    width: 100%;
                    border-radius: 0;
                }
            }

            &-text {
                display: flex;
                flex-direction: column;
                gap: 16px;

                &-title {
                    font-weight: 700;
                    font-size: 20px;
                    line-height: 140%;
                    text-align: center;
                }

                &-descr {
                    font-size: 18px;
                    font-weight: 400;
                    line-height: 140%;

                    & strong {
                        font-weight: 600;
                        color: $red;
                    }
                }
            }
        }
    }
</style>
