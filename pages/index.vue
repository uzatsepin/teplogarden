<template>
  <div v-if="pending">Loading...</div>
  <div v-else>
    <ul v-if="data && data.length">
      <li v-for="product in data" :key="product.id">
        {{ product.name }}
      </li>
    </ul>
    <div v-else>No products found</div>

    <div>
      <Header />
      <Hero />
      <About />
      <Popular />
      <Stories />
      <Categories />
      <Categories />
      <Benefits />
      <Packages /> 
      <Individual />
      <Contact />
      <Footer />
    </div>
  </div>
</template>

<script setup lang="ts">
import { useProductStore } from '@/store/productStore'
const productStore = useProductStore()

const { data, pending } = await useAsyncData('products', () => {
  return productStore.fetchProducts()
})
</script>

<style scoped></style>