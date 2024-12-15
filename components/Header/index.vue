<template>
    <header class="Header">
        <div class="Header__container">
            <div class="Header__left">
                <NuxtLink
                    to="/"
                    class="Header__logo"
                    title="TeploGarden – на главную"
                >
                    <NuxtImg
                        src="/images/logo.svg"
                        alt="logo"
                        title="TeploGarden – лого"
                        class="Header__logo-img"
                    />
                </NuxtLink>

                <div class="Header__burger">
                    <OthersBurgerButton
                        :isMobileMenuActive="isMobileMenuActive"
                        @click="openMobileMenu"
                    />
                </div>
                <div
                    class="Header__catalog"
                    @click="toggleCatalogPopup"
                    @mouseenter="toggleCatalogPopup"
                    :class="{ active: isCatalogVisible }"
                >
                    Каталог
                </div>
                <div class="Header__divider"></div>
                <nav class="Header__nav">
                    <ul class="Header__list">
                        <li class="Header__item">
                            <NuxtLink
                                to="/user-center/delivery"
                                class="Header__link"
                                title="Доставка"
                                >Доставка</NuxtLink
                            >
                        </li>
                        <li class="Header__item">
                            <NuxtLink
                                to="/about"
                                class="Header__link"
                                title="О нас"
                                >О нас</NuxtLink
                            >
                        </li>
                        <li class="Header__item">
                            <NuxtLink
                                to="/user-center/payment"
                                class="Header__link"
                                title="Оплата"
                                >Оплата</NuxtLink
                            >
                        </li>
                        <li class="Header__item">
                            <NuxtLink
                                to="/user-center/contacts"
                                class="Header__link"
                                title="Контакты"
                                >Контакты</NuxtLink
                            >
                        </li>
                        <li class="Header__item">
                            <NuxtLink
                                to="/reviews"
                                class="Header__link"
                                title="Отзывы"
                                >Отзывы</NuxtLink
                            >
                        </li>
                    </ul>
                </nav>
            </div>
            <div class="Header__right">
                <div
                    class="Header__contact"
                    @click="toggleContactPopup"
                    :class="{ active: isContactVisible }"
                >
                    Связаться
                </div>
            </div>
        </div>

        <!-- Каталог popup -->
        <Transition name="popup">
            <div
                v-if="isCatalogVisible"
                class="Header__popup-overlay"
                @click="closeCatalogPopup"
            >
                <div
                    class="Header__catalog-popup"
                    :class="{ first: currentLevel === 0 }"
                    @click.stop
                >
                    <div class="Header__catalog-popup-content">
                        <div class="Header__catalog-popup-header">
                            <button
                                v-if="currentLevel > 0"
                                class="Header__catalog-back"
                                @click="goBack"
                            >
                                ← Назад
                            </button>
                            <h3>{{ currentMenu.title }}</h3>
                        </div>

                        <transition name="menu-slide">
                            <ul
                                :key="currentLevel"
                                class="Header__catalog-popup-content-menu"
                                :class="{ first: currentLevel === 0 }"
                            >
                                <li
                                    v-for="item in currentMenu.items"
                                    :key="item.id"
                                    class="Header__catalog-popup-content-menu-list"
                                >
                                    <NuxtLink
                                        v-if="!item.children"
                                        :to="item.link"
                                        class="Header__catalog-popup-content-menu-link"
                                        :title="item.title"
                                    >
                                        <NuxtImg
                                            :src="item.image"
                                            :alt="item.title"
                                            :title="item.title"
                                        />
                                        <div class="Header__catalog-popup-content-menu-link-text">
                                            <p>{{ item.title }}</p>
                                            <span>{{ item.description }}</span>
                                        </div>
                                    </NuxtLink>

                                    <div
                                        v-else
                                        class="Header__catalog-popup-content-menu-link"
                                        @click="openSubmenu(item)"
                                    >
                                        <NuxtImg
                                            :src="item.image"
                                            :alt="item.title"
                                        />
                                        <div class="Header__catalog-popup-content-menu-link-text">
                                            <p>{{ item.title }}</p>
                                            <span>{{ item.description }}</span>
                                        </div>
                                        <span class="Header__catalog-arrow">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="1rem"
                                                height="1rem"
                                                viewBox="0 0 24 24"
                                            >
                                                <path
                                                    fill="none"
                                                    stroke="currentColor"
                                                    stroke-linecap="round"
                                                    stroke-linejoin="round"
                                                    stroke-width="2"
                                                    d="m10 17l5-5m0 0l-5-5"
                                                />
                                            </svg>
                                        </span>
                                    </div>
                                </li>
                            </ul>
                        </transition>
                    </div>
                </div>
            </div>
        </Transition>

        <!-- Контакты popup -->
        <Transition name="popup">
            <div
                v-if="isContactVisible"
                class="Header__popup-overlay"
                @click="closeContactPopup"
            >
                <div
                    class="Header__contact-popup"
                    @click.stop
                >
                    <div class="Header__contact-popup-content">
                        <h3>Свяжитесь с нами</h3>
                        <!-- Добавьте содержимое контактов здесь -->
                    </div>
                </div>
            </div>
        </Transition>
    </header>

    <HeaderMobileNav
        :isMobileMenuActive="isMobileMenuActive"
        @close="closeMobileMenu"
        :categoriesData="categoriesData || []"
    />
</template>

<script setup lang="ts">
    import { ref, computed } from 'vue';
    import { useCategoriesStore } from '~/store/categoriesStore';
    import { useAsyncData } from '#app';

    interface Product {
        id: string;
        name: string;
        shortDescription: string;
        image: string;
        slug: string;
    }

    export interface Category {
        id: string;
        name: string;
        shortDescription: string;
        image: string;
        slug: string;
        products: Product[];
    }

    interface MenuItem {
        id: string;
        title: string;
        description?: string;
        image: string;
        link?: string;
        children?: MenuItem[];
    }

    interface MenuLevel {
        title: string;
        items: MenuItem[];
    }

    const categoriesStore = useCategoriesStore();

    const { data: categoriesData } = await useAsyncData('categories', () => {
        return categoriesStore.fetchCategories();
    });

    const menuData = computed<MenuItem[]>(() => {
        if (!categoriesData.value || !Array.isArray(categoriesData.value)) {
            return [];
        }
        return categoriesData.value.map((category: any) => ({
            id: category.id,
            title: category.name,
            description: category.shortDescription,
            image: `/${genImageUrl(category.collectionId, category.id, category.image)}`,
            children: category.expand.products.map((product: any) => ({
                id: product.id,
                title: product.name,
                description: product.shortDescription,
                image: `/${genImageUrl(product.collectionId, product.id, product.image)}`,
                link: `/product/${product.slug}`,
            })),
        }));
    });

    const isContactVisible = ref(false);
    const isCatalogVisible = ref(false);
    const isMobileMenuActive = ref(false);

    const openMobileMenu = () => {
        isMobileMenuActive.value = true;
        useScrollLock().lockScroll();
    };

    const closeMobileMenu = () => {
        isMobileMenuActive.value = false;
        useScrollLock().unlockScroll();
    };

    const toggleContactPopup = () => {
        isContactVisible.value = !isContactVisible.value;
        if (isContactVisible.value) {
            isCatalogVisible.value = false;
        }
    };

    const toggleCatalogPopup = () => {
        isCatalogVisible.value = !isCatalogVisible.value;
        if (isCatalogVisible.value) {
            isContactVisible.value = false;
        }
    };

    const closeContactPopup = () => {
        isContactVisible.value = false;
    };

    const closeCatalogPopup = () => {
        isCatalogVisible.value = false;
    };

    const currentLevel = ref(0);
    const menuHistory = ref<MenuLevel[]>([{ title: 'Каталог', items: menuData.value }]);

    const currentMenu = computed(() => menuHistory.value[currentLevel.value]);

    const openSubmenu = (item: MenuItem) => {
        if (item.children && item.children.length > 0) {
            menuHistory.value.push({
                title: item.title,
                items: item.children,
            });
            currentLevel.value++;
        }
    };

    const goBack = () => {
        if (currentLevel.value > 0) {
            menuHistory.value.pop();
            currentLevel.value--;
        }
    };
</script>

<style scoped lang="scss">
    .Header {
        height: 76px;
        background: $mainBeige;
        width: 100%;
        padding: 14px 0;
        position: relative;
        z-index: 1000;

        &__container {
            max-width: 1276px;
            margin: 0 auto;
            display: flex;
            align-items: center;
            justify-content: space-between;

            @media screen and (max-width: 1365px) {
                padding: 0 24px;
            }

            @media screen and (max-width: 767px) {
                padding: 0 16px;
            }
        }

        &__left,
        &__right {
            display: flex;
            align-items: center;
        }

        &__left {
            @media screen and (max-width: 767px) {
                justify-content: space-between;
                width: 100%;
            }
        }

        &__right {
            @media screen and (max-width: 767px) {
                display: none;
            }
        }

        &__logo {
            width: 86px;
            height: 48px;

            &-img {
                width: 100%;
                height: 100%;
            }
        }

        &__burger {
            @media screen and (max-width: 767px) {
                display: flex;
                width: 100%;
                justify-content: flex-end;
            }
        }

        

        &__catalog {
            margin-left: 48px;
            font-weight: 700;
            line-height: 27px;
            display: flex;
            align-items: center;
            padding: 8px 16px;
            border-radius: 16px;
            transition: all 250ms ease-in-out;

            @media screen and (max-width: 767px) {
                display: none;
            }

            &::before {
                content: '';
                display: inline-block;
                width: 24px;
                height: 24px;
                margin-right: 8px;
                background-image: url('@/assets/images/garden-icon.svg');
                background-repeat: no-repeat;
                background-position: center center;
            }

            &:hover {
                cursor: pointer;
                background: $secondaryBeige;
            }

            &.active {
                background: $secondaryBeige;
            }

            &-popup {
                position: absolute;
                top: 12px;
                left: calc(50% - 638px + 134px);
                width: 850px;
                background: $mainBeige;
                border-radius: 8px;
                box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);

                &.first {
                    width: 450px;
                }

                &-header {
                    display: flex;
                    border-bottom: 1px solid $mainBeige;
                    flex-direction: column;
                    gap: 16px;

                    h3 {
                        font-size: 24px;
                        font-weight: 600;
                        margin-bottom: 16px;
                    }
                }

                &-content {
                    padding: 16px;

                    &-menu {
                        display: grid;
                        grid-template-columns: repeat(2, 1fr);
                        /* display: flex;
                        flex-direction: column; */
                        gap: 24px;

                        &.first {
                            display: flex;
                            flex-direction: column;
                        }

                        &-link {
                            display: flex;
                            align-items: center;
                            gap: 24px;

                            &-text {
                                & p {
                                    font-weight: 700;
                                    font-size: 24px;
                                    line-height: 140%;
                                    transition: color 250ms ease-in-out;

                                    &:hover {
                                        color: $red;
                                        cursor: pointer;
                                    }
                                }
                                & span {
                                    font-weight: 400;
                                    font-size: 16px;
                                    line-height: 140%;
                                    color: #5e5e5e;
                                }
                            }
                            & img {
                                width: 140px;
                                border-radius: 24px;
                            }
                        }
                    }
                }
            }

            &-arrow {
                width: 28px;
                height: 28px;
                margin-left: auto;
                cursor: pointer;

                svg {
                    width: 28px;
                    height: 28px;

                    path {
                        transition: all 250ms ease-in-out;
                    }
                }

                &:hover {
                    svg path {
                        stroke: $red;
                    }
                }
            }
        }

        &__divider {
            width: 1px;
            height: 50px;
            background: #dbd5bd;
            margin: 0 48px;

            @media screen and (max-width: 1365px) {
                display: none;
            }
        }

        &__list {
            display: flex;
            gap: 36px;
            align-items: center;

            @media screen and (max-width: 1365px) {
                display: none;
            }
        }

        &__link {
            font-size: 14px;
            line-height: 24px;
            transition: all 250ms ease-in-out;
            position: relative;
            font-weight: 600;

            &::after {
                content: '';
                height: 3px;
                background: $red;
                position: absolute;
                top: 43px;
                left: 0;
                opacity: 0;
                transition: opacity, width 250ms ease-in-out;
                width: 0;
            }

            &:hover {
                color: $red;
            }

            &:hover:after {
                opacity: 1;
                width: 100%;
            }

            &.router-link-exact-active {
                color: $red;
            }

            &.router-link-exact-active:after {
                opacity: 1;
                width: 100%;
            }
        }

        &__contact {
            font-weight: 700;
            font-size: 14px;
            line-height: 24px;
            display: flex;
            align-items: center;
            position: relative;
            padding: 8px 16px;
            border-radius: 16px;
            transition: all 250ms ease-in-out;

            @media screen and (max-width: 767px) {
                display: none;
            }

            &:before {
                content: '';
                display: inline-block;
                width: 24px;
                height: 24px;
                margin-right: 8px;
                background-image: url('@/assets/images/phone-icon.svg');
                background-repeat: no-repeat;
                background-position: center center;
            }

            &:after {
                content: '';
                display: inline-block;
                width: 24px;
                height: 24px;
                margin-left: 8px;
                background-image: url('@/assets/images/arrow-down.svg');
                background-repeat: no-repeat;
                background-position: center center;
                transition: transform 0.3s ease;
            }

            &:hover {
                cursor: pointer;
                background: $secondaryBeige;
            }

            &.active {
                background: $secondaryBeige;
            }

            &.active:after {
                transform: rotate(180deg);
            }

            &-popup {
                position: absolute;
                top: 12px;
                right: calc(50% - 638px + 50px);
                width: 320px;
                background: $mainBeige;
                border-radius: 8px;
                box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);

                &-content {
                    padding: 24px;

                    &-menu {
                        &-list {
                        }
                    }
                }
            }
        }

        &__buttons {
            display: flex;
            align-items: center;
            gap: 24px;
            margin-left: 48px;

            &-button {
                width: 40px;
                height: 40px;
                position: relative;
                background-repeat: no-repeat;
                background-position: center;
                background-size: 24px 24px;
                border-radius: 50%;
                transition: all 250ms ease-in-out;

                &:hover {
                    cursor: pointer;
                    background-color: #3f3f3f;
                }

                &.profile {
                    background-image: url('@/assets/images/profile-icon.svg');
                }

                &.liked {
                    background-image: url('@/assets/images/liked-icon.svg');
                }

                &.cart {
                    background-image: url('@/assets/images/cart-icon.svg');
                }
            }
        }

        &__popup-overlay {
            position: fixed;
            top: 72px;
            left: 0;
            right: 0;
            bottom: 0;
            background: rgba(0, 0, 0, 0.3);
            backdrop-filter: blur(10px);
            z-index: 999;
        }

        .popup-enter-active,
        .popup-leave-active {
            transition: transform 0.3s ease, opacity 0.3s ease;
        }

        .popup-enter-from {
            transform: translateY(20px);
            opacity: 0;
        }

        .popup-leave-to {
            transform: translateY(20px);
            opacity: 0;
        }

        .popup-enter-to,
        .popup-leave-from {
            transform: translateY(0);
            opacity: 1;
        }
    }
</style>
