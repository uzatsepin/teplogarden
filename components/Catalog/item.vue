<template>
    <div class="CatalogItem">
        <div class="CatalogItem__wrapper">
            <NuxtImg
                src="https://placeholder.co/200x120"
                height="150"
            />
        </div>
        <h2 class="CatalogItem__name"> Teplo S </h2>
        <p class="CatalogItem__descr"> ширина 2200 </p>

        <div class="CatalogItem__sizes">
            <h3 class="CatalogItem__sizes-title">Доступные размеры</h3>

            <ul class="CatalogItem__sizes-list">
                <li class="CatalogItem__sizes-item">2200x3000</li>
                <li class="CatalogItem__sizes-item">2200x4000</li>
                <li class="CatalogItem__sizes-item">2200x5000</li>
            </ul>
        </div>
    </div>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
    .CatalogItem {
        display: flex;
        flex-direction: column;
        border: 1px solid #e0e0e0;
        padding: 24px;
        border-radius: 16px;
        background: $red;
        width: 100%;

        &__wrapper {
            & img {
                width: 100%;
                height: auto;
                object-fit: cover;
                border-radius: 16px;
                overflow: hidden;
            }
        }

        &__name {
            font-weight: 600;
            font-size: 20px;
            line-height: 140%;
            color: #fff;
            margin-top: 16px;
            text-align: center;
        }

        &__descr {
            font-size: 16px;
            line-height: 140%;
            color: #e2e2e2;
            margin-top: 8px;
            text-align: center;
        }

        &__sizes {
            margin-top: 16px;

            &-title {
                font-weight: 600;
                font-size: 16px;
                line-height: 140%;
                color: #fff;
                margin-bottom: 8px;
            }

            &-item {
                font-size: 16px;
                line-height: 140%;
                color: #fff;
                margin-bottom: 8px;
                padding: 8px 16px;
                background: $lightRed;
                border-radius: 8px;
                text-align: center;
            }
        }
    }
</style>
