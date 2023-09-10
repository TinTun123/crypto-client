import { useAuthStore } from "~/stores/useAuthStore"


export default defineNuxtRouteMiddleware((to, from) => {
    const auth = useAuthStore();

    if (!auth.isLoggedIn || !auth.isAdmin) {
        return navigateTo('/', {replace : true});
    }
})