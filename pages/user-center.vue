<template>
    <Header/>
    <div class="UserCenter">
        <NuxtLayout name="container">
            <div class="UserCenter__container">
                <nav class="UserCenter__nav">
                    <ul class="UserCenter__nav-menu">
                        <li class="UserCenter__nav-menu-list">
                            <NuxtLink
                                    class="UserCenter__nav-menu-link"
                                    to="/user-center/delivery"
                                    exact-active-class="UserCenter__nav-menu-link--exact"
                                    title="Доставка"
                            >
                                <Icon
                                        name="mage:delivery-truck"
                                        class="UserCenter__nav-menu-link-icon"
                                />
                                <p>Доставка</p>
                            </NuxtLink>
                        </li>
                        <li class="UserCenter__nav-menu-list">
                            <NuxtLink
                                    class="UserCenter__nav-menu-link"
                                    to="/user-center/payment"
                                    exact-active-class="UserCenter__nav-menu-link--exact"
                                    title="Оплата"
                            >
                                <Icon
                                        name="material-symbols:payments"
                                        class="UserCenter__nav-menu-link-icon"
                                />
                                <p>Оплата</p>
                            </NuxtLink>
                        </li>
                        <li class="UserCenter__nav-menu-list">
                            <NuxtLink
                                    class="UserCenter__nav-menu-link"
                                    to="/user-center/warranty"
                                    exact-active-class="UserCenter__nav-menu-link--exact"
                                    title="Гарантия"
                            >
                                <Icon
                                        name="mdi:book-secure-outline"
                                        class="UserCenter__nav-menu-link-icon"
                                />
                                <p>Гарантия</p></NuxtLink
                            >
                        </li>
                        <li class="UserCenter__nav-menu-list">
                            <NuxtLink
                                    class="UserCenter__nav-menu-link"
                                    to="/user-center/contacts"
                                    exact-active-class="UserCenter__nav-menu-link--exact"
                                    title="Контакты"
                            >
                                <Icon
                                        name="line-md:phone-call"
                                        class="UserCenter__nav-menu-link-icon"
                                />
                                <p>Контакты</p>
                            </NuxtLink
                            >
                        </li>
                    </ul>
                </nav>
                <div class="UserCenter__content">
                    <NuxtPage/>
                </div>
            </div>
        </NuxtLayout>

        <Footer/>
    </div>
</template>

<script setup lang="ts"></script>

<style lang="scss" scoped>
.Header {
    border-bottom: 1px solid #dbd5bd;
}

.UserCenter {
    background: $lightBeige;
    padding-top: 48px;

    @media screen and (max-width: 767px) {
        padding-top: 24px;
    }

    &__container {
        display: grid;
        grid-template-columns: 330px 1fr;
        gap: 48px;

        @media screen and (max-width: 1365px) {
            grid-template-columns: 1fr;
        }
    }

    &__nav {
        background: rgba(208, 195, 174, 0.3);
        -webkit-backdrop-filter: blur(5px);
        backdrop-filter: blur(5px);
        border-radius: 24px;
        transform: translateZ(0);
        position: relative;
        z-index: 1;
        padding: 16px;
        border-radius: 16px;
        height: fit-content;
        border: 1px solid rgba(208, 195, 174, 0.5);

        @media screen and (max-width: 767px) {
            padding: 8px 16px;
        }

        &-menu {
            display: flex;
            flex-direction: column;
            gap: 8px;

            @media screen and (max-width: 1365px) {
                flex-direction: row;
                gap: 16px;
                justify-content: space-between;
            }

            &-link {
                padding: 16px;
                display: block;
                color: $textColor;
                font-size: 16px;
                line-height: 140%;
                text-decoration: none;
                transition: background-color 0.3s;
                display: flex;
                align-items: center;
                gap: 8px;
                border-radius: 8px;

                @media screen and (max-width: 767px) {
                    border-radius: 50%;
                }

                &:hover {
                    background: rgba($red, 0.1);
                    color: $red;
                }

                &.active {
                    background: rgba($red, 0.1);
                    color: $red;
                }

                &-icon {
                    width: 24px;
                    height: 24px;
                }

                &--exact {
                    background: rgba($red, 0.1);
                    color: $red;
                }

                & p {
                    @media screen and (max-width: 767px) {
                        display: none;
                    }
                }
            }
        }
    }
}
</style>
