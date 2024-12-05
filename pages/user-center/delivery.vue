<template>
    <div class="Delivery">
        <h1 class="Delivery__title">Доставка</h1>
        <div class="Delivery__wrapper">
            <div class="Delivery__info">
                <div class="Delivery__info-regions">
                    <h3 class="Delivery__info-regions-title">
                        <Icon name="hugeicons:truck-delivery" />
                        Регионы доставки – вся Россия
                    </h3>
                    <p class="Delivery__info-regions-descr">
                        Мы осуществляем доставку теплиц и тепличного оборудования по всей территории
                        России. Независимо от вашего местонахождения — будь то крупный город или
                        удаленное село, мы гарантируем доставку вашего заказа. Наши специалисты
                        работают с клиентами из самых разных регионов страны, включая сложнодо
                        ступные зоны.
                    </p>
                </div>
                <div class="Delivery__methods">
                    <NuxtImg
                        src="/images/delivery.jpg"
                        alt="TeploGarden доставка по всей территории России"
                        height="350"
                        class="Delivery__methods-image"
                    />
                    <div class="Delivery__methods-inner">
                        <h3 class="Delivery__methods-inner-title"> Способы доставки </h3>
                        <div class="Delivery__methods-inner-container">
                            <div
                                class="Delivery__methods-inner-item"
                                v-for="method in deliveryMethods"
                                :key="method.name"
                            >
                                <Icon
                                    :name="method.icon"
                                    class="Delivery__methods-inner-item-icon"
                                />
                                <h4 class="Delivery__methods-inner-item-title">{{
                                    method.name
                                }}</h4>
                                <p class="Delivery__methods-inner-item-descr">{{
                                    method.description
                                }}</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="Delivery__price-and-time">
                    <div class="Delivery__time">
                        <h3 class="Delivery__time-title">
                            <Icon name="hugeicons:delivery-delay-01" />
                            Сроки доставки
                        </h3>
                        <p class="Delivery__time-descr">
                            Каждая теплица изготавливается индивидуально по запросу клиента. Мы
                            учитываем выбранную вами комплектацию, что влияет на сроки выполнения
                            заказа. Обычно процесс производства и доставки занимает от 3 до 4
                            недель. Однако в зависимости от сложности комплектации и удаленности
                            региона доставка может быть скорректирована. Наши менеджеры всегда
                            готовы предоставить вам точную информацию о сроках.
                        </p>
                    </div>

                    <div class="Delivery__price">
                        <h3 class="Delivery__price-title">
                            <Icon name="solar:tag-price-bold" />
                            Стоимость доставки
                        </h3>
                        <p class="Delivery__price-descr">
                            Стоимость доставки по Москве и регионам, расположенным в радиусе 150 км
                            от МКАД, включена в стоимость теплицы. Для заказов с более удаленных
                            регионов доставка рассчитывается индивидуально. Мы стараемся
                            минимизировать расходы для наших клиентов, подбирая оптимальные варианты
                            транспортировки.
                        </p>
                    </div>
                </div>

                <div class="Delivery__additional">
                    <h3 class="Delivery__additional-title">
                        <Icon name="material-symbols:info-outline" />
                        Дополнительные условия
                    </h3>
                    <p class="Delivery__additional-descr">
                        Мы предлагаем уникальное преимущество: <span>монтаж теплицы и тепличного
                        оборудования включен в стоимость комплектации теплицы</span>. Наши профессиональные
                        монтажники прибудут на место и установят теплицу быстро и качественно. Вам
                        не нужно беспокоиться о самостоятельной сборке — все работы будут выполнены
                        на высшем уровне. 
                        <br />
                        <br />
                        Обратившись в TeploGarden, вы получаете полный комплекс услуг: от
                        индивидуального изготовления до профессиональной доставки и установки, что
                        делает покупку теплицы максимально удобной и выгодной для вас.
                    </p>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
    const deliveryMethods = [
        {
            name: 'Собственная служба доставки',
            description:
                'Мы сами организуем доставку заказа, обеспечивая безопасность и своевременность перевозки.',
            icon: 'mdi:truck',
        },
        {
            name: 'Транспортные компании',
            description:
                'Сотрудничаем с проверенными перевозчиками, что позволяет доставлять теплицы на дальние расстояния без задержек и повреждений.',
            icon: 'hugeicons:delivery-tracking-01',
        },
        {
            name: 'Самовывоз',
            description:
                'Если вы хотите самостоятельно забрать свой заказ, вы можете сделать это на нашем складе. Мы предоставим все необходимые инструкции для безопасной транспортировки.',
            icon: 'solar:delivery-broken',
        },
    ];
</script>

<style scoped lang="scss">
    .Delivery {
        &__title {
            font-size: 24px;
            font-weight: 700;
            margin-bottom: 20px;
        }

        &__wrapper {
            display: flex;
            justify-content: space-between;
            align-items: center;
            flex-direction: column;
            gap: 24px;
        }

        &__info {
            display: flex;
            flex-direction: column;
            gap: 16px;

            &-regions {
                display: flex;
                flex-direction: column;
                gap: 16px;

                &-title {
                    font-size: 24px;
                    font-weight: 700;
                    display: flex;
                    align-items: center;
                    gap: 8px;
                    justify-content: center;

                    & span {
                        width: 28px;
                        height: 28px;
                    }
                }

                &-descr {
                    font-size: 16px;
                    line-height: 140%;
                    color: $textColor;
                }
            }
        }

        &__methods {
            position: relative;

            &-image {
                border-radius: 16px;
                overflow: hidden;
                width: 100%;
                object-fit: cover;
                filter: blur(4px) brightness(0.7) contrast(1.1);
            }
            &-inner {
                position: absolute;
                top: 50%;
                right: 50%;
                transform: translate(50%, -50%);
                width: 100%;
                padding: 16px;

                &-title {
                    font-size: 24px;
                    font-weight: 700;
                    margin-bottom: 16px;
                    text-align: center;
                    color: #fff;
                }

                &-container {
                    display: flex;
                    justify-content: space-between;
                    margin-top: 32px;
                }

                &-item {
                    display: flex;
                    flex-direction: column;
                    gap: 8px;
                    align-items: center;
                    text-align: center;
                    width: 30%;

                    &-icon {
                        width: 48px;
                        height: 48px;
                        color: #fff;
                    }

                    &-title {
                        font-size: 18px;
                        font-weight: 700;
                        color: #fff;
                    }

                    &-descr {
                        font-size: 16px;
                        line-height: 140%;
                        color: $textColor;
                        margin-top: 8px;
                        color: #fff;
                    }
                }
            }
        }

        &__price-and-time {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 24px;
        }

        &__time,
        &__price {
            &-title {
                font-size: 24px;
                font-weight: 700;
                display: flex;
                align-items: center;
                justify-content: center;
                gap: 8px;
                color: $textColor;
                margin-top: 24px;
                text-align: center;

                & span {
                    width: 28px;
                    height: 28px;
                }
            }

            &-descr {
                font-size: 16px;
                line-height: 140%;
                color: $textColor;
                margin-top: 16px;
                text-align: center;
            }
        }

        &__additional {
            &-title {
                font-size: 24px;
                font-weight: 700;
                display: flex;
                align-items: center;
                justify-content: center;
                gap: 8px;
                color: $textColor;
                margin-top: 24px;
                text-align: center;

                & span {
                    width: 28px;
                    height: 28px;
                }
            }

            &-descr {
                font-size: 16px;
                line-height: 140%;
                color: $textColor;
                margin-top: 16px;
                text-align: center;

                & span {
                    color: $red;
                    font-weight: 600;
                }
            }
        }
    }
</style>
