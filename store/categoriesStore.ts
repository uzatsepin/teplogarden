import type { ICategory } from "~/types/categories.types"

export const useCategoriesStore = defineStore('categories', () => {
      const categories = ref<ICategory[]>([])
      const loading = ref(false)
  
    async function fetchCategories() {
      const { $pb } = useNuxtApp()
      loading.value = true
      try {
        const response: ICategory[] = await $pb.collection('Category').getFullList({
          expand: 'products, products.reviews'
        })
        categories.value = response
        return response
      } catch (error) {
        console.error(error)
        return []
      } finally {
        loading.value = false
      }
    }

    async function fetchCategoryBySlug(slug: string) {
      const {$pb} = useNuxtApp()
      loading.value = true
      try {
        const response: ICategory[] = await $pb.collection('Category').getFullList({
          filter: `slug = '${slug}'`,
          expand: 'products'
        })
        return response[0]
      } catch (error) {
        console.error(error)
        return null
      } finally {
        loading.value = false
      }
    }
  
    return {
      categories,
      loading,
      fetchCategories,
      fetchCategoryBySlug
    }
})