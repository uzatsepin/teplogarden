<template>
    <div class="Product">
        <div class="Product__wrapper">
            <NuxtImg
                src="https://placehold.co/377x265"
                alt="ProductImage"
            />

            <div class="Product__badges">
                <div class="Product__badges-item">Скидка</div>
            </div>
        </div>
        <div class="Product__gallery">
            <NuxtImg
                src="https://placehold.co/100x100"
                alt="ProductImage"
            />
            <NuxtImg
                src="https://placehold.co/100x100"
                alt="ProductImage"
            />
            <NuxtImg
                src="https://placehold.co/100x100"
                alt="ProductImage"
            />
            <NuxtImg
                src="https://placehold.co/100x100"
                alt="ProductImage"
            />
            <NuxtImg
                src="https://placehold.co/100x100"
                alt="ProductImage"
            />
        </div>
        <div class="Product__container">
            <NuxtLink
                to="/product/1"
                class="Product__container-name">Teplo M-5: 5 стёкл</NuxtLink
            >

            <div class="Product__container-size">
                <h4 class="Product__container-size-title">Размеры</h4>
                <div class="Product__container-size-block">
                    <p class="Product__container-size-block-item">
                        <Icon name="fluent:arrow-autofit-width-24-filled" />
                        Длина: 2,5 м
                    </p>
                    <p class="Product__container-size-block-item">
                        <Icon name="akar-icons:width" />
                        Ширина: 1,5 м
                    </p>
                    <p class="Product__container-size-block-item">
                        <Icon name="akar-icons:height" />
                        Высота: 2,5 м
                    </p>
                </div>
            </div>
            <div class="Product__container-price">
                <div class="Product__container-price-old">
                    <div class="Product__container-price-old-value">1 418 195 ₽</div>
                    <div class="Product__container-price-old-discount">-17%</div>
                </div>
                <div class="Product__container-price-new">1 118 195 ₽</div>
            </div>
            <NuxtLink to="/product/1">
                <OthersPrimaryButton>Детальнее</OthersPrimaryButton>
            </NuxtLink>
        </div>
    </div>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
    .Product {
        border-radius: 16px;
        background: $red;
        padding: 16px;
        min-width: 408px;

        &__wrapper {
            position: relative;

            & img {
                object-fit: cover;
                width: 100%;
                height: 265px;
                border-radius: 16px;
                overflow: hidden;
            }
        }

        &__badges {
            position: absolute;
            top: 8px;
            right: 8px;
            display: flex;
            gap: 8px;

            &-item {
                padding: 2px 4px;
                border-radius: 8px;
                background: #e6000d;
                font-size: 12px;
                font-weight: 600;
                line-height: 24px;
                color: #ffffff;
                text-transform: uppercase;
            }
        }

        &__gallery {
            display: flex;
            gap: 8px;
            margin-top: 8px;

            & img {
                border-radius: 8px;
                overflow: hidden;
                object-fit: cover;
            }
        }

        &__container {
            margin-top: 16px;
            display: flex;
            flex-direction: column;
            gap: 16px;

            &-name {
                font-weight: 600;
                font-size: 24px;
                line-height: 140%;
                text-align: center;
                color: #fff;

                &:hover {
                    text-decoration: underline;
                }
            }

            &-size {
                text-align: center;

                &-title {
                    color: #FFF;
                    font-size: 18px;
                    font-weight: 600;
                }

                &-block {
                    margin-top: 8px;
                    display: flex;
                    flex-direction: column;
                    gap: 8px;
                    color: #FFF;
                    font-size: 16px;
                    text-align: left;

                    &-item {
                        display: flex;
                        gap: 8px;
                        align-items: center;
                        color: #fff;

                        & span {
                            width: 24px;
                            height: 24px;
                        }
                    }
                }
            }

            &-price {
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: center;
                gap: 12px;

                &-old {
                    display: flex;
                    gap: 8px;
                    align-items: center;

                    &-value {
                        font-size: 14px;
                        font-weight: 400;
                        line-height: 140%;
                        text-decoration-line: line-through;
                        color: #ebeaea;
                    }
                    &-discount {
                        padding: 2px 4px;
                        border-radius: 4px;
                        background: #fbe7e8;
                        font-size: 12px;
                        font-weight: 600;
                        line-height: 140%;
                        color: #e6000d;
                    }
                }

                &-discount {
                    padding: 2px 4px;
                    border-radius: 4px;
                    background: #fbe7e8;
                    font-size: 12px;
                    font-weight: 600;
                    line-height: 140%;
                    color: #e6000d;
                }

                &-new {
                    font-size: 24px;
                    font-weight: 700;
                    line-height: 140%;
                    color: #fff;
                }
            }

            .PrimaryButton {
                text-align: center;
                margin-top: 8px;
                font-size: 16px;
            }
        }
    }
</style>
