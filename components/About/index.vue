<template>
    <section class="About">
        <NuxtLayout name="container">
            <div class="About__wrapper">
                <div class="About__info">
                    <h1 class="About__info-title">TeploGarden</h1>
                    <p class="About__info-descr">
                        Производство и реализация инновационных теплиц из поликарбоната с услугой
                        доставки
                    </p>
                    <div class="About__info-inner">
                        <h2 class="About__info-inner-text">ЭТО СВЕЖИЙ УРОЖАЙ</h2>
                        <div class="About__info-inner-contacts">
                            <h3 class="About__info-inner-contacts-text">Связаться с нами:</h3>
                            <div class="About__info-inner-contacts-block">
                                <div class="About__info-inner-contacts-block-item">
                                    <p class="About__info-inner-contacts-block-item-text"
                                        >Телефон</p
                                    >
                                    <a
                                        :href="`tel:${addionalsStore.contacts[0]?.phone || '+79946668833'}`"
                                        class="About__info-inner-contacts-block-item-value"
                                        >{{ addionalsStore.contacts[0]?.phone || '+79946668833' }}</a
                                    >
                                </div>
                                <div class="About__info-inner-contacts-block-item">
                                    <p class="About__info-inner-contacts-block-item-text">Email</p>
                                    <a
                                        :href="`mailto:${addionalsStore?.contacts[0]?.email}`
"
                                        class="About__info-inner-contacts-block-item-value"
                                        >{{ addionalsStore?.contacts[0]?.email || 'teplogarden.ru@gmail.com'}}
                                    </a>
                                </div>
                                <div class="About__info-inner-contacts-block-item">
                                    <p class="About__info-inner-contacts-block-item-text">Адрес</p>
                                    <a
                                        href="mailto:teplogarden.ru@gmail.com
"
                                        class="About__info-inner-contacts-block-item-value"
                                        >с. Некрасово, ул. Тарусская 24Б
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="About__form">
                    <h2 class="About__form-title">Оставьте заявку</h2>
                    <form
                        action=""
                        class="About__form-item"
                    >
                        <input
                            type="text"
                            class="About__form-item-input"
                            placeholder="Размеры"
                        />
                        <input
                            type="text"
                            class="About__form-item-input"
                            placeholder="Культуры"
                        />
                        <input
                            type="text"
                            class="About__form-item-input"
                            placeholder="Регион"
                        />
                        <input
                            type="text"
                            class="About__form-item-input"
                            placeholder="+7-(900)-000-00-00"
                        />
                        <OthersSecondaryButton>Заказать звонок</OthersSecondaryButton>
                    </form>
                </div>

                <div class="About__vegetables">
                    <NuxtImg
                        src="/images/vegetables.png"
                        alt="Овощи Teplogarden"
                        width="490"
                    />
                </div>
            </div>
        </NuxtLayout>
    </section>
</template>

<script setup lang="ts">
import { useAdditionalsStore } from '~/store/additionalsStore';

const addionalsStore = useAdditionalsStore();

</script>

<style scoped lang="scss">
    .About {
        padding: 24px 0;

        &__wrapper {
            display: grid;
            grid-template-columns: 1.5fr 0.5fr;
            gap: 86px;
            align-items: center;
            position: relative;

            @media screen and (max-width: 1365px) {
                grid-template-columns: 1fr;
                gap: 24px;
            }
        }

        &__info {
            display: flex;
            flex-direction: column;

            &-title {
                font-size: 96px;
                font-weight: 700;
                line-height: 163px;
                text-transform: uppercase;
                max-width: 816px;
                font-family: 'Rubik', sans-serif;

                @media screen and (max-width: 1365px) {
                    font-size: 72px;
                    line-height: 120px;
                }

                @media screen and (max-width: 767px) {
                    font-size: 48px;
                    line-height: 72px;
                    text-align: center;
                }
            }

            &-descr {
                font-size: 36px;
                font-weight: 700;
                margin-top: 42px;
                line-height: 48px;

                @media screen and (max-width: 1365px) {
                    font-size: 24px;
                    line-height: 36px;
                    margin-top: 24px;
                }

                @media screen and (max-width: 767px) {
                    font-size: 18px;
                    line-height: 24px;
                    font-weight: 400;
                    text-align: center;
                }
            }

            &-inner {
                display: flex;
                justify-content: space-between;
                align-items: center;
                margin-top: 48px;

                @media screen and (max-width: 1365px) {
                    flex-direction: column;
                    gap: 24px;
                    margin-top: 24px;
                }

                &-text {
                    max-width: 250px;
                    font-size: 36px;
                    line-height: 48px;
                    font-weight: 700;

                    @media screen and (max-width: 1365px) {
                        font-size: 24px;
                        line-height: 36px;
                        text-align: center;
                    }

                    @media screen and (max-width: 767px) {
                        max-width: 100%;
                    }
                }

                &-contacts {
                    display: flex;
                    flex-direction: column;
                    gap: 16px;

                    &-text {
                        font-size: 24px;
                        font-weight: 700;
                        line-height: 36px;
                    }

                    &-block {
                        display: flex;
                        flex-direction: column;
                        border: 2px solid $red;
                        border-radius: 24px;
                        padding: 16px;
                        gap: 8px;

                        &-item {
                            display: flex;
                            justify-content: space-between;
                            align-items: center;

                            &-text {
                                font-size: 18px;
                                font-weight: 700;
                                line-height: 24px;
                            }

                            &-value {
                                font-size: 18px;
                                line-height: 24px;
                                color: $textColor;
                                margin-left: 24px;
                                transition: all 250ms ease-in-out;

                                &:hover {
                                    color: $red;
                                }
                            }
                        }
                    }
                }
            }
        }

        &__form {
            min-width: 324px;
            max-width: 324px;
            padding: 24px;
            background: rgba(208, 195, 174, 0.8);
            -webkit-backdrop-filter: blur(5px);
            backdrop-filter: blur(5px);
            border-radius: 24px;
            transform: translateZ(0);
            position: relative;
            z-index: 1;

            @supports not (backdrop-filter: blur(5px)) {
                background: rgba(208, 195, 174, 0.8);
            }

            @media screen and (max-width: 1365px) {
                margin: 0 auto;
            }

            @media screen and (max-width: 767px) {
                min-width: 100%;
                max-width: 100%;
            }

            &-title {
                font-size: 24px;
                font-weight: 700;
                line-height: 36px;
                margin-bottom: 16px;
                color: $red;
                text-align: center;
            }

            &-item {
                display: flex;
                flex-direction: column;
                gap: 16px;

                &-input {
                    padding: 12px 16px;
                    background: #fff;
                    border-radius: 16px;
                    cursor: pointer;
                    display: block;
                    color: #141414;
                    border: 2px solid transparent;
                    transition: all 250ms ease-in-out;

                    &::placeholder {
                        color: #a2a2a2;
                    }

                    &:hover {
                        border: 2px solid #8c2b02;
                    }

                    &:focus {
                        border: 2px solid #8c2b02;
                    }
                }

                .SecondaryButton {
                    font-size: 16px;
                }
            }
        }

        &__vegetables {
            position: absolute;
            top: 0;
            right: 0;

            & img {
                width: 490px;

                @media screen and (max-width: 1365px) {
                    width: 220px;
                }
            }

            @media screen and (max-width: 1365px) {
                z-index: -1;
            }

            @media screen and (max-width: 767px) {
                opacity: 0.15;
            }
        }
    }
</style>
