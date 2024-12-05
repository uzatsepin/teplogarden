<template>
    <div class="ProductPackages">
        <h2 class="ProductPackages__title">Комплектации</h2>

        <div class="ProductPackages__container">
            <ProductPackagesItem v-for="pkg in packages" :key="pkg.id" :pkg="pkg"/>
        </div>
    </div>
</template>

<script setup lang="ts">
const packages = [
    {
        id: 1,
        title: 'Teplo Base',
        subtitle: 'Базовий пакет',
        descr: 'Базовая комплектация для тех, у кого есть все необходимое или кто только начинает открывать для себя новое!',
        image: 'https://placeholder.co/131x90',
        link: '/'
    },
    {
        id: 2,
        title: 'Teplo Optium',
        subtitle: 'Оптимальный пакет',
        descr: 'Вариант, где есть всґ необходимое и даже больше!',
        image: 'https://placeholder.co/131x90',
        link: '/'
    },
    {
        id: 3,
        title: 'Teplo Premium',
        subtitle: 'Премиальній пакет',
        descr: 'Гарантийный сервисный выезд 2 раза в год на первый год покупки + 1 бесплатна + консультация садовника!',
        image: 'https://placeholder.co/131x90',
        link: '/'
    }
]
</script>

<style scoped lang="scss">
.ProductPackages {
    margin-top: 24px;

    &__title {
        font-weight: 600;
        font-size: 18px;
        line-height: 140%;
        color: #141414;
    }

    &__container {
        margin-top: 16px;
        display: flex;
        flex-direction: column;
        gap: 16px;
    }
}

</style>