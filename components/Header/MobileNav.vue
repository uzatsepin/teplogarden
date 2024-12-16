<template>
    <Transition name="mobile-menu">
        <div
            v-if="isMobileMenuActive"
            class="Header__mobile-wrapper"
        >
            <div
                class="Header__mobile-overlay"
                @click="$emit('close')"
            ></div>
            <div
                class="Header__mobile-cross"
                @click="$emit('close')"
            >
                <Icon name="charm:cross" />
            </div>
            <div class="Header__mobile">
                <div class="Header__mobile-logo">
                    <NuxtLink
                        to="/"
                        class="Header__mobile-logo-link"
                        title="На главную"
                    >
                        <img
                            src="/images/logo.svg"
                            alt="logo"
                        />
                    </NuxtLink>
                </div>
                <div class="Header__mobile-text"> Категории </div>
                <nav class="Header__mobile-nav">
                    <ul class="Header__mobile-nav-list">
                        <li
                            class="Header__mobile-nav-item"
                            v-for="category in categoriesData"
                            :key="category.id"
                        >
                            <NuxtLink
                                :to="`/category/${category.slug}`"
                                class="Header__mobile-nav-link"
                                :title="category.name"
                            >
                                <NuxtImg
                                    :src="
                                        genImageUrl(
                                            category?.collectionId,
                                            category?.id,
                                            category.image,
                                        )
                                    "
                                    :alt="category?.name"
                                    :title="category.name"
                                />
                                {{ category.name }}
                            </NuxtLink>
                        </li>
                    </ul>
                </nav>
                <div class="Header__mobile-text"> Полезные ссылки </div>

                <ul class="Header__mobile-links">
                    <li class="Header__mobile-links-list">
                        <NuxtLink
                            to="/user-center/delivery"
                            class="Header__mobile-links-link"
                            title="Доставка"
                        >
                            Доставка
                        </NuxtLink>
                    </li>

                    <li class="Header__mobile-links-list">
                        <NuxtLink
                            to="/about"
                            class="Header__mobile-links-link"
                            title="О нас"
                        >
                            О нас
                        </NuxtLink>
                    </li>

                    <li class="Header__mobile-links-list">
                        <NuxtLink
                            to="/user-center/contacts"
                            class="Header__mobile-links-link"
                            title="Полезные ссылки"
                        >
                            Контакты
                        </NuxtLink>
                    </li>

                    <li class="Header__mobile-links-list">
                        <NuxtLink
                            to="/reviews"
                            class="Header__mobile-links-link"
                        >
                            Отзывы
                        </NuxtLink>
                    </li>
                </ul>

                <div class="Header__mobile-text"> Контакты </div>

                <ul class="Header__mobile-contacts">
                    <li class="Header__mobile-contacts-list">
                        <Icon name="line-md:phone" />
                        <NuxtLink
                            :to="`tel:${contacts?.phone || '+79946668833'}`"
                            title="Позвонить"
                            >{{ contacts?.phone || '+79946668833' }}
                        </NuxtLink>
                    </li>
                    <li class="Header__mobile-contacts-list">
                        <Icon name="lets-icons:time" />
                        <p class="footer__contacts-works-time">
                            {{ contacts?.workHours }}
                        </p>
                    </li>
                    <li class="Header__mobile-contacts-list">
                        <Icon name="iconamoon:location" />
                        <p>{{ contacts.fullAddress }}</p>
                    </li>

                    <li class="Header__mobile-contacts-list">
                        <Icon name="tabler:mail" />
                        <NuxtLink
                            :to="`mailto:${contacts?.email}`"
                            title="Написать"
                            >{{ contacts?.email }}
                        </NuxtLink>
                    </li>
                </ul>
            </div>
        </div>
    </Transition>
</template>

<script setup lang="ts">
    import { useAdditionalsStore } from '~/store/additionalsStore';

    const props = defineProps<{
        isMobileMenuActive: boolean;
        categoriesData: any;
    }>();

    defineEmits(['close']);

    const additionalsStore = useAdditionalsStore();

    const contacts = additionalsStore.contacts[0];

    const { lockScroll, unlockScroll } = useScrollLock();

    watch(
        () => props.isMobileMenuActive,
        (newValue) => {
            if (newValue) {
                lockScroll();
            } else {
                unlockScroll();
            }
        },
    );
</script>

<style scoped lang="scss">
    .Header__mobile {
        position: fixed;
        top: 0;
        right: 0;
        width: 80%;
        height: 100vh;
        background: $mainBeige;
        z-index: 100;
        padding: 16px;
        box-shadow: -4px 0 12px rgba(0, 0, 0, 0.1);
        overflow: auto;
        padding-bottom: 140px;

        &-wrapper {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100vh;
            z-index: 1000;
        }

        &-overlay {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: rgba(0, 0, 0, 0.3);
            backdrop-filter: blur(2px);
        }

        &-logo {
            display: flex;
            justify-content: center;
        }

        &-text {
            margin-top: 24px;
            font-weight: 600;
        }

        &-cross {
            position: absolute;
            top: 16px;
            right: 16px;
            cursor: pointer;
            z-index: 999;

            & span {
                width: 32px;
                height: 32px;
                min-width: 32px;
            }
        }

        &-menu {
            position: fixed;
            top: 0;
            right: 0;
            width: 80%;
            height: 100vh;
            background: white;
            z-index: 1001;
            padding: 24px;
            box-shadow: -4px 0 12px rgba(0, 0, 0, 0.1);
            overflow-y: auto;
        }

        &-nav {
            margin-top: 16px;

            &-list {
                display: flex;
                flex-direction: column;
                gap: 8px;
            }

            &-item {
                display: flex;
                align-items: center;
                gap: 8px;
                border-bottom: 1px solid $secondaryBeige;
                padding-bottom: 8px;

                &:last-child {
                    border-bottom: none;
                    padding-bottom: 0;
                }
            }

            &-link {
                display: flex;
                align-items: center;
                justify-content: space-between;
                gap: 12px;
                width: 100%;
                font-weight: 600;
                font-size: 16px;

                & img {
                    width: 52px;
                    height: 52px;
                    object-fit: cover;
                    border-radius: 8px;
                }

                &:after {
                    content: '';
                    display: block;
                    width: 24px;
                    height: 24px;
                    background: url('../../assets/images/icons/arrow-right-black.svg') no-repeat
                        center;
                    background-size: contain;
                }
            }
        }

        &-links {
            margin-top: 16px;

            &-list {
                padding: 12px 0;
            }

            &-link {
                display: flex;
                align-items: center;
                gap: 8px;

                &:before {
                    content: '';
                    display: block;
                    width: 24px;
                    height: 24px;
                    background: url('../../assets/images/icons/arrow-right-up-broken.svg') no-repeat
                        center;
                    background-size: contain;
                    margin-right: 8px;
                }
            }
        }

        &-contacts {
            margin-top: 24px;
            display: flex;
            flex-direction: column;
            gap: 16px;

            &-list {
                display: flex;
                align-items: center;
                gap: 12px;
                padding-bottom: 16px;
                border-bottom: 1px solid $secondaryBeige;
                line-height: 20px;

                &:last-child {
                    border-bottom: none;
                    padding-bottom: 0;
                }

                & span {
                    width: 24px;
                    height: 24px;
                    min-width: 24px;
                    color: $red;
                }
            }
        }
    }

    .mobile-menu-enter-active,
    .mobile-menu-leave-active {
        transition: all 0.3s ease;

        .Header__mobile {
            transition: transform 0.3s ease;
        }

        .Header__mobile-overlay {
            transition: opacity 0.3s ease;
        }
    }

    .mobile-menu-enter-from,
    .mobile-menu-leave-to {
        .Header__mobile {
            transform: translateX(100%);
        }

        .Header__mobile-overlay {
            opacity: 0;
        }
    }
</style>
