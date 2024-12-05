<template>
    <NuxtLayout name="container">
        <section class="Benefits">
            <OthersTitle>Преимущества Teplogarden</OthersTitle>
            <div class="Benefits__container">
                <BenefitsItem v-for="benefit in benefits" :key="benefit.name" :benefit/>
            </div>
        </section>
    </NuxtLayout>
</template>

<script setup lang="ts">
const benefits = [
    {
        name: 'Инновационны и премиальные технологии и материалы',
        icon: 'lets-icons:materials-light',
        text: 'Мы используем современные разработки и материалы высочайшего качества, обеспечивая максимальную надежность и удобство эксплуатации.'
    },
    {
        name: 'Устойчивость к неблагоприятным погодным условиям',
        icon: 'mdi:weather-cloudy',
        text: 'Наши теплицы разработаны для долгой службы в любых климатических зонах, выдерживая даже самые суровые природные явления.'
    },
    {
        name: 'Отличные светопропускные свойства',
        icon: 'mdi:weather-sunny',
        text: 'Специальные покрытия обеспечивают оптимальный уровень освещения, что способствует лучшему росту растений и экономии энергии.'
    },
]


</script>

<style scoped lang="scss">
.Benefits {
    margin-top: 48px;

    &__container {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: 24px;
        margin-top: 24px;
    }
}
</style>