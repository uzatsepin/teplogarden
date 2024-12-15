<template>
    <div>
      <Header />
      <Hero />
      <About />
      <Popular />
      <Categories v-for="category in categoriesStore.categories" :category="category"/>
      <Benefits />
      <Packages /> 
      <!-- <Individual /> -->
      <Contact />
      <Footer />
  </div>
</template>

<script setup lang="ts">
import { useCategoriesStore } from '~/store/categoriesStore';

const categoriesStore = useCategoriesStore();

useSeoMeta({
  title: 'Главная',
  description: 'Производство и продажа премиальных теплиц в России. Алюминиевые теплицы со стеклом, гарантия качества, доставка и установка.',
  keywords: 'теплицы, алюминиевые теплицы, теплицы со стеклом, купить теплицу, teplogarden, теплогарден, купить теплицу в москве, купить теплицу в россии, теплицы для дачи, теплицы для огорода, теплицы для растений, теплицы для овощей, теплицы для цветов, теплицы для дачи купить, теплицы для огорода купить, теплицы для растений купить, теплицы для овощей купить, теплицы для цветов купить, теплицы для дачи цены, теплицы для огорода цены, теплицы для растений цены, теплицы для овощей цены, теплицы для цветов цены, теплицы для дачи фото, теплицы для огорода фото, теплицы для растений фото, теплицы для овощей фото, теплицы для цветов фото',
  robots: 'index, follow',

})

useSchemaOrg([
  defineOrganization({
    name: 'TeploGarden',
    logo: 'https://teplogarden.ru/images/logo.svg',
    sameAs: [
      'https://instagram.com/teplogarden',
      'https://facebook.com/teplogarden',
    ]
  }),
  defineWebSite({
    name: 'TeploGarden',
    url: 'https://teplogarden.ru'
  }),
  defineWebPage({
    name: 'Главная',
    description: 'Производство и продажа премиальных теплиц в России'
  })
])

</script>

<style scoped></style>