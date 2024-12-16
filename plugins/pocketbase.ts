import PocketBase from 'pocketbase'
import { defineNuxtPlugin } from '#app'

export default defineNuxtPlugin((nuxtApp) => {
    const config = useRuntimeConfig();
    const pb = new PocketBase(config.public.apiBase);

    pb.beforeSend = (url, options) => {
        const headers = { ...options.headers };
        if (process.server) {
            headers['Accept-Encoding'] = 'gzip';
        }
        return { url, options: { ...options, headers } };
    };

    return {
        provide: {
            pb
        }
    };
});