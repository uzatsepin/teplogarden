<template>
    <header class="Header">
        <div class="Header__container">
            <div class="Header__left">
                <NuxtLink
                    to="/"
                    class="Header__logo"
                >
                    <img
                        src="/images/logo.svg"
                        alt="logo"
                    />
                </NuxtLink>
                <div
                    class="Header__catalog"
                    @click="toggleCatalogPopup"
                    @mouseenter="toggleCatalogPopup"
                    :class="{ active: isCatalogVisible }"
                >
                    Телпицы
                </div>
                <div class="Header__divider"></div>
                <nav class="Header__nav">
                    <ul class="Header__list">
                        <li class="Header__item">
                            <NuxtLink
                                to="/user-center/delivery"
                                class="Header__link"
                                >Доставка</NuxtLink
                            >
                        </li>
                        <li class="Header__item">
                            <NuxtLink
                                to="/about"
                                class="Header__link"
                                >О нас</NuxtLink
                            >
                        </li>
                        <li class="Header__item">
                            <NuxtLink
                                to="/user-center/payment"
                                class="Header__link"
                                >Оплата</NuxtLink
                            >
                        </li>
                        <li class="Header__item">
                            <NuxtLink
                                to="/user-center/contacts"
                                class="Header__link"
                                >Контакты</NuxtLink
                            >
                        </li>
                        <li class="Header__item">
                            <NuxtLink
                                to="/reviews"
                                class="Header__link"
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
                                    >
                                        <NuxtImg
                                            :src="item.image"
                                            :alt="item.title"
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
                    </div>
                </div>
            </div>
        </Transition>
    </header>
</template>

<script setup lang="ts">
    interface MenuItem {
        id: number;
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

    const menuData: MenuItem[] = [
        {
            id: 1,
            title: 'Teplo S',
            description: 'Ширина 2200',
            image: '/images/greenhouse/teplo-s.png',
            children: [
                {
                    id: 11,
                    title: 'Teplo S-3',
                    description: 'Три стекла: 2’238*3’087,5*2’001',
                    image: '/images/greenhouse/teplo-s.png',
                    link: '/catalog/teplo-s-3',
                },
                {
                    id: 12,
                    title: 'Teplo S-5',
                    description: 'Пять стекол: 2’238*3’087,5*3’303',
                    image: '/images/greenhouse/teplo-s.png',
                    link: '/catalog/teplo-s-5',
                },
                {
                    id: 13,
                    title: 'Teplo S-7',
                    description: 'Семь стекол: 2’238*3’087,5*4’605',
                    image: '/images/greenhouse/teplo-s.png',
                    link: '/catalog/teplo-s-7',
                },
                {
                    id: 14,
                    title: 'Teplo S-9',
                    description: 'Девять стекол: 2’238*3’087,5*5’907',
                    image: '/images/greenhouse/teplo-s.png',
                    link: '/catalog/teplo-s-9',
                },
                {
                    id: 15,
                    title: 'Teplo S-11',
                    description: 'Одиннадцать стекол: 2’238*3’087,5*7’209',
                    image: '/images/greenhouse/teplo-s.png',
                    link: '/catalog/teplo-s-11',
                },
                {
                    id: 16,
                    title: 'Teplo S-13',
                    description: 'Тринадцать стекол: 2’238*3’087,5*8’511',
                    image: '/images/greenhouse/teplo-s.png',
                    link: '/catalog/teplo-s-13',
                },
            ],
        },
        {
            id: 2,
            title: 'Teplo M',
            description: 'Ширина 3000',
            image: '/images/greenhouse/teplo-m.png',
            children: [
                {
                    id: 12,
                    title: 'Teplo M-5',
                    description: 'Пять стекол: 3’000*3’087,5*3’303',
                    image: '/images/greenhouse/teplo-s.png',
                    link: '/catalog/teplo-s-5',
                },
                {
                    id: 13,
                    title: 'Teplo M-7',
                    description: 'Семь стекол: 3’000*3’087,5*4’605',
                    image: '/images/greenhouse/teplo-s.png',
                    link: '/catalog/teplo-s-7',
                },
                {
                    id: 14,
                    title: 'Teplo M-9',
                    description: '3’000*3’087,5*5’907',
                    image: '/images/greenhouse/teplo-s.png',
                    link: '/catalog/teplo-s-9',
                },
                {
                    id: 15,
                    title: 'Teplo M-11',
                    description: 'Одиннадцать стекол: 3’000*3’087,5*7’209',
                    image: '/images/greenhouse/teplo-s.png',
                    link: '/catalog/teplo-s-11',
                },
                {
                    id: 16,
                    title: 'Teplo L-13',
                    description: 'Тринадцать стекол: 3’500*3’087,5*8’511',
                    image: '/images/greenhouse/teplo-s.png',
                    link: '/catalog/teplo-s-13',
                },
            ],
        },
        {
            id: 2,
            title: 'Teplo L',
            description: 'Ширина 3000',
            image: '/images/greenhouse/teplo-m.png',
            children: [
                {
                    id: 12,
                    title: 'Teplo L-5',
                    description: 'Пять стекол: 3’500*3’087,5*3’303',
                    image: '/images/greenhouse/teplo-s.png',
                    link: '/catalog/teplo-s-5',
                },
                {
                    id: 13,
                    title: 'Teplo L-7',
                    description: 'Семь стекол: 3’500*3’087,5*4’605',
                    image: '/images/greenhouse/teplo-s.png',
                    link: '/catalog/teplo-s-7',
                },
                {
                    id: 14,
                    title: 'Teplo L-9',
                    description: '3’500*3’087,5*5’907',
                    image: '/images/greenhouse/teplo-s.png',
                    link: '/catalog/teplo-s-9',
                },
                {
                    id: 15,
                    title: 'Teplo L-11',
                    description: 'Одиннадцать стекол: 3’500*3’087,5*7’209',
                    image: '/images/greenhouse/teplo-s.png',
                    link: '/catalog/teplo-s-11',
                },
                {
                    id: 16,
                    title: 'Teplo L-13',
                    description: 'Тринадцать стекол: 3’500*3’087,5*8’511',
                    image: '/images/greenhouse/teplo-s.png',
                    link: '/catalog/teplo-s-13',
                },
            ],
        },
    ];
    const isContactVisible = ref(false);
    const isCatalogVisible = ref(false);

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
    const menuHistory = ref<MenuLevel[]>([{ title: 'Теплицы', items: menuData }]);

    const currentMenu = computed(() => menuHistory.value[currentLevel.value]);

    const openSubmenu = (item: MenuItem) => {
        if (item.children) {
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
        }

        &__left,
        &__right {
            display: flex;
            align-items: center;
        }

        &__logo {
            width: 86px;
            height: 48px;
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
                                    font-size: 28px;
                                    line-height: 140%;
                                    transition: color 250ms ease-in-out;

                                    &:hover {
                                        color: $red;
                                        cursor: pointer;
                                    }
                                }
                                & span {
                                    font-weight: 400;
                                    font-size: 18px;
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
        }

        &__list {
            display: flex;
            gap: 36px;
            align-items: center;
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

    .menu-slide-enter-active,
    .menu-slide-leave-active {
        transition: all 0.3s ease;
    }

    .menu-slide-enter-from {
        opacity: 0;
        transform: translateX(30px);
    }

    .menu-slide-leave-to {
        opacity: 0;
        transform: translateX(-30px);
    }
</style>
