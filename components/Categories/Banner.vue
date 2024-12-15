<template>
    <div class="Banner">
        <div class="Banner__img">
            <NuxtImg :src="genImageUrl(bannerData.collectionId, bannerData.id, bannerData.image)"/>
        </div>
        <div class="Banner__details">
            <div class="Banner__title">{{ bannerData?.title }}</div>
            <div class="Banner__offer">{{bannerData.text}}</div>
            <OthersPrimaryButton>
                <NuxtLink :to="bannerData.link" :title="bannerData.title">Узнать детальнее</NuxtLink>
            </OthersPrimaryButton>
        </div>
    </div>
</template>

<script setup lang="ts">
import type { IBanner } from '~/types/additionals.types';

const props = defineProps<{ bannerData: IBanner }>();
</script>

<style scoped lang="scss">
.Banner {
    width: 340px;
    min-width: 340px;
    height: auto;
    position: relative;

    &__img {
        & img {
            width: 100%;
            height: -webkit-fill-available;
            border-radius: 16px;
            overflow: hidden;
            position: absolute;
            top: 0;
            left: 0;
            z-index: -1;
            object-fit: cover;
        }
    }

    &__details {
        display: flex;
        height: 100%;
        flex-direction: column;
        justify-content: space-between;
    }

    &__title {
        font-weight: 600;
        font-size: 34px;
        line-height: 140%;
        text-align: center;
        padding: 24px;
        color: #FFF;
    }

    &__offer {
        background: rgba(181,57,5, 0.6);
        padding: 28px 14px;
        text-align: center;
        font-weight: 600;
        font-size: 24px;
        line-height: 140%;
        color: #FFFFFF;
    }

    .PrimaryButton {
        margin-bottom: 24px;
        max-width: 90%;
        margin-left: auto;
        margin-right: auto;
    }
}
</style>