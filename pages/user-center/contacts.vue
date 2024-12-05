<template>
    <div class="Contacts">
        <h1 class="Contacts__title">Контакты</h1>
        <p class="Contacts__descr">
            Наши менеджеры всегда готовы помочь вам с выбором и ответить на все ваши вопросы.
        </p>
        <div class="Contacts__info">
            <div class="Contacts__info-map">
                <NuxtImg
                    src="/images/map-teplogarden.jpg"
                    height="600"
                />
            </div>
            <div class="Contacts__info-contacts">
                <div
                    class="Contacts__info-contacts-item"
                    v-for="item in contacts"
                    :key="item.name"
                >
                    <h2 class="Contacts__info-contacts-item-title">
                        <Icon :name="item.icon" />
                        {{ item.name }}
                    </h2>
                    <NuxtLink
                        :to="item?.link"
                        class="Contacts__info-contacts-item-value"
                        v-if="item.link"
                        >{{ item.value }}</NuxtLink
                    >
                    <time
                        v-else
                        class="Contacts__info-contacts-item-value disabled"
                        >{{ item.value }}</time
                    >
                </div>

                <div class="Contacts__info-contacts-messengers">
                    <h2 class="Contacts__info-contacts-messengers-title">
                        Обратная связь через мессенджеры
                    </h2>
                    <div class="Contacts__info-contacts-messengers-link">
                        <NuxtLink
                            v-for="item in messengers"
                            :key="item.name"
                            :to="item.link"
                            class="Contacts__info-contacts-messengers-link-item"
                        >
                            <Icon :name="item.icon" />
                        </NuxtLink>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
    const contacts = [
        {
            name: 'Адрес',
            value: 'Россия, Калужская область, Тарусский район, с. Некрасово, ул. Тарусская 24Б',
            icon: 'line-md:map-marker',
            link: 'https://yandex.eu/maps/-/CDxVq2-o',
        },
        {
            name: 'Телефон',
            value: '+7 (994) 466-88-33',
            link: 'tel:+79946668833',
            icon: 'line-md:phone',
        },
        {
            name: 'Электронная почта:',
            value: 'teplogarden.ru@gmail.com',
            link: 'mailto:teplogarden.ru@gmail.com',
            icon: 'line-md:email',
        },
        {
            name: 'Режим работы:',
            value: 'С понедельника по пятницу с 9:00 по 18:00',
            icon: 'mingcute:time-line',
            link: '',
        },
    ];

    const messengers = [
        {
            name: 'WhatsApp',
            value: '+79946668833',
            link: 'https://wa.me/79946668833',
            icon: 'logos:whatsapp-icon',
        },
        {
            name: 'Telegram',
            value: '@teplogarden',
            link: 'https://t.me/teplogarden',
            icon: 'logos:telegram',
        },
        {
            name: 'Instagram',
            value: '@teplogarden',
            link: 'https://www.instagram.com/teplogarden/',
            icon: 'skill-icons:instagram',
        },
        {
            name: 'Facebook',
            value: 'teplogarden',
            link: 'https://www.facebook.com/teplogarden',
            icon: 'logos:facebook',
        },
    ];
</script>

<style scoped lang="scss">
    .Contacts {
        &__title {
            font-size: 24px;
            font-weight: 700;
            line-height: 140%;
        }

        &__descr {
            font-size: 16px;
            line-height: 24px;
            color: #666;
            margin-top: 16px;
            line-height: 140%;
        }
        &__info {
            position: relative;
            margin-top: 24px;
            display: grid;
            grid-template-columns: 1.2fr 0.8fr;
            gap: 32px;
            align-items: center;

            &-map {
                & img {
                    border-radius: 16px;
                    width: 100%;
                    object-fit: cover;
                    overflow: hidden;
                    filter: brightness(0.8);
                }
            }

            &-contacts {
                display: flex;
                flex-direction: column;
                gap: 36px;

                &-item {
                    display: flex;
                    flex-direction: column;
                    gap: 8px;

                    &-title {
                        display: flex;
                        align-items: center;
                        gap: 8px;
                        font-size: 18px;
                        font-weight: 600;
                        line-height: 140%;
                        color: #141414;

                        & span {
                            width: 24px;
                            height: 24px;
                        }
                    }

                    &-value {
                        font-size: 16px;
                        line-height: 140%;
                        color: $red;

                        &:hover {
                            text-decoration: underline;
                        }

                        &.disabled {
                            color: #141414;

                            &:hover {
                                text-decoration: none;
                            }
                        }
                    }
                }

                &-messengers {
                    &-title {
                        font-size: 18px;
                        font-weight: 600;
                        line-height: 140%;
                        color: #141414;
                    }

                    &-link {
                        display: flex;
                        align-items: center;
                        gap: 24px;
                        margin-top: 24px;

                        & span {
                            width: 36px;
                            height: 36px;
                        }
                    }
                }
            }
        }
    }
</style>
