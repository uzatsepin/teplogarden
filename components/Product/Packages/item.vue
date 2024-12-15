<template>
    <div
        class="ProductPackagesItem"
        @click="openPopup"
    >
        <div class="ProductPackagesItem__wrapper">
            <NuxtImg
                :src="genImageUrl(pkg.collectionId, pkg.id, pkg.image)"
                :alt="pkg?.name"
                :title="pkg?.name"
            />
        </div>
        <div class="ProductPackagesItem__info">
            <h3 class="ProductPackagesItem__info-title">{{ pkg.name }}</h3>
            <p class="ProductPackagesItem__info-subtitle">{{ pkg.translate }}</p>
            <p class="ProductPackagesItem__info-descr">{{ pkg?.short_descr }}</p>
        </div>
        <OthersSecondaryButton>Подробнее</OthersSecondaryButton>
    </div>
    <LazyProductPackagesPopup
        :isOpen="isOpen"
        @close="closePopup"
        :popupData="pkg.descr"
    />
</template>

<script setup lang="ts">
    import type { IPackages } from '~/types/additionals.types';
    const { lockScroll, unlockScroll } = useScrollLock()


    const props = defineProps<{
        pkg: IPackages;
    }>();

    const isOpen = ref(false);

    const openPopup = () => {
        isOpen.value = true;
        lockScroll()
    };

    const closePopup = () => {
        isOpen.value = false;
        unlockScroll()
    };
</script>

<style scoped lang="scss">
    .ProductPackagesItem {
        border-radius: 16px;
        padding: 8px 16px;
        background: $mainBeige;
        display: flex;
        align-items: center;
        gap: 16px;
        width: 100%;
        border: 1px solid transparent;
        transition: all 250ms ease-in-out;

        @media screen and (max-width: 1365px) {
            flex-direction: column;
        }

        &:hover {
            border-color: $red;
            cursor: pointer;
        }

        &__wrapper {
            width: 131px;
            height: 90px;
            min-width: 131px;
            border-radius: 16px;
            overflow: hidden;

            & img {
                object-fit: cover;
                width: 100%;
                height: 100%;
            }

            @media screen and (max-width: 767px) {
                width: 100%;
                height: 200px;
            }
        }

        &__info {
            display: flex;
            flex-direction: column;
            gap: 4px;
            flex: 1;

            &-title {
                font-size: 18px;
                font-weight: 600;
                line-height: 140%;
            }
            &-subtitle {
                margin-top: 4px;
                font-size: 16px;
                line-height: 140%;
            }

            &-descr {
                font-size: 14px;
                color: #666;
                line-height: 140%;
                margin-top: 4px;
            }
        }
    }
</style>
