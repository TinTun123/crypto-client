import { defineStore } from "pinia";
import { useApiFetch } from "#imports";
type User = {
    id : number,
    name : string,
    email : string,
    user_level : number
}

type Credential = {
    email : string,
    password : string
}

type RegistertionInfo = {
    email : string,
    name : string,
    password : string,
    password_confirmation : string
}

export const useAuthStore = defineStore('auth', () => {
    // const user = ref<User | null>(null);
    const user = ref<User | null>(null);
    const isLoggedIn = computed(() => user.value ? true : false);
    const isAdmin = computed(() => user.value?.user_level === 1 ? true : false);
    const openSend = ref<Boolean>(false);
    const openReceive = ref<Boolean>(false);

    async function login(credentials : Credential) {
    
        await useApiFetch('sanctum/csrf-cookie');
    
        const token = useCookie('XSRF-TOKEN');
    
        let loginRes =  await useApiFetch("login", {
            method : 'POST',
            body : credentials
        });

        await fetchUser();

        return loginRes;    
    }

    async function logout() {
        await useApiFetch("logout", {
            method : 'POST'
        });

        user.value = null;
        
        navigateTo('/auth/Login');
    }


    async function register(info : RegistertionInfo) {
        await useApiFetch('sanctum/csrf-cookie');

        const register = await useApiFetch('register', {
            method : 'POST',
            body : info
        })

        await fetchUser();

        return register;
    }

    async function fetchUser() {
        const {data, error} = await useApiFetch('api/user');
        user.value = data.value as User;

        if (process.server) {
            console.log(user.value);
            
        }
        
        return error;
    }


    return {user, login, isLoggedIn, isAdmin, fetchUser, logout, register, openSend, openReceive};


})