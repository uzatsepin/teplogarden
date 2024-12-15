import type { IReviewForm } from "~/components/Product/Reviews/index.vue"
import type {IProduct} from "~/types/product.types"
import type { IReview } from "~/types/review.types"

export const useProductStore = defineStore('products', () => {
    const products = ref<IProduct[]>([])
    const popularProducts = ref<IProduct[]>([])
    const product = ref<IProduct | null>(null)
    const loading = ref(false)
    const productReviews = ref<IReview[]>([])

    async function fetchProducts() {
        const {$pb} = useNuxtApp()
        loading.value = true
        try {
            const response: IProduct[] = await $pb.collection('product').getFullList()
            products.value = response
            return response
        } catch (error) {
            console.error(error)
            return []
        } finally {
            loading.value = false
        }
    }

    async function fetchPopularProducts() {
        const {$pb} = useNuxtApp()
        loading.value = true
        try {
            const response: IProduct[] = await $pb.collection('PopularProducts').getFullList({
                sort: 'views',
                expand: 'reviews'
            })
            popularProducts.value = response
            return response
        } catch (error) {
            console.error(error)
            return []
        } finally {
            loading.value = false
        }
    }

    async function fetchProductBySlug(slug: string) {
        const {$pb} = useNuxtApp()
        try {
            const response: IProduct = await $pb.collection('product').getFirstListItem(`slug='${slug}'`, {
                expand: 'category.products, reviews'
            })
            product.value = response
            return response
        } catch (error) {
            console.error(error)
            return null
        }
    }

    async function fetchProductReviews(productId: string) {
        const {$pb} = useNuxtApp()
        try {
              const response:IReview[] = await $pb.collection('reviews').getFullList({
                filter: `product = '${productId}'`,
              })              
                productReviews.value = response;
                return response;
        } catch (error) {
            console.error(error)
            return []
        }
    }

    async function createProductReview(review: IReviewForm) {
        const { $pb } = useNuxtApp()
        try {

            const newReview = await $pb.collection('reviews').create(review)
            
            const productReview = await $pb.collection('product').getOne(newReview.product)
            
            const updatedProduct = await $pb.collection('product').update(newReview.product, {
                reviews: [...(productReview.reviews || []), newReview.id]
            })
    
            return {
                review: newReview,
                product: updatedProduct
            }
        } catch (error) {
            console.error('Error creating review:', error)
            return null
        }
    }

    return {
        products,
        popularProducts,
        loading,
        product,
        productReviews,
        createProductReview,
        fetchProducts,
        fetchPopularProducts,
        fetchProductBySlug,
        fetchProductReviews
    }
})