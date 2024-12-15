import type { IBanner, IPackages } from "~/types/additionals.types";
import type { IContact } from "~/types/contacts.types";

export const useAdditionalsStore = defineStore('additionals', () => {
    const contacts = ref<IContact[]>([]);
    const packages = ref<IPackages[]>([]);
    const banners = ref<IBanner[]>([]);
    const loading = ref(false);

    async function fetchContacts() {
        const { $pb } = useNuxtApp();
        loading.value = true;
        try {
            const response: IContact[] = await $pb.collection('contacts').getFullList();
            contacts.value = response;
            return response;
        } catch (error) {
            console.error(error);
            return [];
        } finally {
            loading.value = false;
        }
    }

    async function fetchPackages() {
        const { $pb } = useNuxtApp();
        loading.value = true;
        try {
            const response: IPackages[] = await $pb.collection('packages').getFullList();
            packages.value = response;
            return response;
        } catch (error) {
            console.error(error);
            return [];
        } finally {
            loading.value = false;
        }
    }

    async function fetchBanners() {
        const { $pb } = useNuxtApp();
        loading.value = true;
        try {
            const response: IBanner[] = await $pb.collection('banners').getFullList();
            banners.value = response;
            return response;
        } catch (error) {
            console.error(error);
            return [];
        } finally {
            loading.value = false;
        }
    }

    async function fetchShopReviews() {
        const {$pb} = useNuxtApp()
        loading.value = true
        try {
            const response = await $pb.collection('shopReviews').getFullList()
            return response
        } catch (error) {
            console.error(error)
            return []
        } finally {
            loading.value = false
        }
    }

    return {
        contacts,
        packages,
        banners,
        loading,
        fetchContacts,
        fetchPackages,
        fetchBanners,
        fetchShopReviews
    };
});
