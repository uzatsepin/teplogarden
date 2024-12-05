import type { IProduct } from "~/types/product.types"

export const useProductStore = defineStore('products', () => {
    const state = reactive({
      products: [] as IProduct[],
      loading: false,
    })
  
    async function fetchProducts() {
      const { $pb } = useNuxtApp()
      state.loading = true
      try {
        const response: IProduct[] = await $pb.collection('product').getFullList()
        state.products = response
        return response
      } catch (error) {
        console.error(error)
        return []
      } finally {
        state.loading = false
      }
    }
  
    return {
      ...toRefs(state),
      fetchProducts,
    }
})