import { useAuthStore } from "~/stores/useAuthStore"


export default defineNuxtRouteMiddleware((to, from) => {
    const auth = useAuthStore();

    if (process.server) {
        console.log('server ', auth.isLoggedIn);
        
    }

    if (process.client) {
        console.log('client: ', auth.isLoggedIn);
        
    }
    if (!auth.isLoggedIn) {
        return navigateTo('/auth/login', {replace : true});
    }
})