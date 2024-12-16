<template>
    <section class="Hero">
        <div class="Hero__img">
            <NuxtImg
                src="/images/hero-bg.webp"
                height="546"
                alt="TeploGarden – премиум теплицы в Москве"
            />
            <div class="Hero__img-text">
                <div class="Hero__img-text-logo">
                    <NuxtImg
                        src="/images/logo-big.svg"
                        alt="TeploGarden – премиум теплицы в Москве"
                    />
                </div>
                <div class="Hero__img-text-title">ИННОВАЦИОННЫЕ ТЕПЛИЦЫ</div>
                <NuxtLink
                    to="/category"
                    title="Каталог"
                >
                    <OthersPrimaryButton>Открыть каталог</OthersPrimaryButton>
                </NuxtLink>
            </div>
        </div>
    </section>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
    .Hero {
        &__img {
            position: relative;

            & img {
                height: 546px;
                overflow: hidden;
                width: 100%;
                object-fit: cover;
            }

            &-text {
                max-width: 620px;
                margin: 0 auto;
                position: absolute;
                top: 50%;
                left: 50%;
                transform: translate(-50%, -50%);

                &-logo {
                    & img {
                        max-height: 138px;
                        object-fit: contain;
                    }
                }

                &-title {
                    margin-top: 24px;
                    color: #fff;
                    font-size: 26px;
                    line-height: 46px;
                    text-align: center;
                    font-weight: 700;
                    max-width: 247px;
                }

                & a {
                  display: flex;
                  justify-content: center;
                }

                .PrimaryButton {
                    margin-top: 32px;
                }
            }
        }
    }
</style>
