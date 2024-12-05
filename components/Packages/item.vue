<template>
    <div class="PackageItem">
        <div class="PackageItem__wrapper">
            <NuxtImg src="https://placeholder.co/250x200" width="350"/>
        </div>

        <h3 class="PackageItem__name">
            Teplo Base
        </h3>

        <p class="PackageItem__descr">
            Базовая комплектация для тех, у кого есть все необходимое или кто только начинает открывать для себя новое!  
        </p>

        <ul class="PackageItem__list">
            <p class="PackageItem__list-title">
                БАЗОВИЙ ПАКЕТ:
            </p>
            <li class="PackageItem__list-item">
                <Icon name="raphael:arrowright" />
                Каркас
            </li>
            <li class="PackageItem__list-item">
                <Icon name="raphael:arrowright" />
                Стекло обычное
            </li>
            <li class="PackageItem__list-item">
                <Icon name="raphael:arrowright" />
                Форточка на крыше
            </li>
            <li class="PackageItem__list-item">
                <Icon name="raphael:arrowright" />
                Форточка на торце
            </li>
            <li class="PackageItem__list-item">
                <Icon name="raphael:arrowright" />
                Грядки 270мм прямые
            </li>
            <li class="PackageItem__list-item">
                <Icon name="raphael:arrowright" />
                Термоприводы
            </li>
            <li class="PackageItem__list-item">
                <Icon name="raphael:arrowright" />
                Линии
            </li>
            <li class="PackageItem__list-item">
                <Icon name="raphael:arrowright" />
                Доставка
            </li>
            <li class="PackageItem__list-item">
                <Icon name="raphael:arrowright" />
                Монтаж
            </li>
            <li class="PackageItem__list-item">
                <Icon name="raphael:arrowright" />
                Покраска 9016/8017
            </li>
        </ul>

        <OthersPrimaryButton>
            Получить консультацию
        </OthersPrimaryButton>
    </div>
</template>

<script setup lang="ts">

</script>

<style scoped lang="scss">
.PackageItem {
    border-radius: 16px;
    background: $red;
    padding: 16px;
    
    &__wrapper {
        display: flex;
        justify-content: center;
        align-items: center;

        & img {
            border-radius: 16px;
            object-fit: cover;
        }
    }

    &__name {
        color: #FFF;
        font-size: 24px;
        font-weight: 600;
        text-align: center;
        margin-top: 16px;
    }

    &__descr {
        text-align: center;
        font-size: 16px;
        margin-top: 8px;
        color: #e2e2e2;
    }

    &__list {
        margin-top: 16px;
        display: flex;
        flex-direction: column;
        gap: 8px;

        &-title {
            text-align: center;
            color: #FFF;
            font-size: 18px;
            font-weight: 600;
        }

        &-item {
            font-size: 16px;
            color: #FFF;
            display: flex;
            gap: 8px;
            align-items: center;

            & span {
                width: 24px;
                height: 24px;
            }
        }
    }

    .PrimaryButton {
        margin-top: 24px;
    }
}

</style>