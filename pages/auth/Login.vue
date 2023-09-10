<template>

    <div>
        <div class="mx-8 flex flex-col justify-center items-center min-h-screen gap-y-4">

            <h1>Login</h1>

            <TextInput v-model:input="form.email" inputType="text" :error="errorInput && errorInput.type === 'email' ? errorInput.message : ''" placeholder="email"/>

            <TextInput v-model:input="form.password" inputType="password" :error="errorInput && errorInput.type === 'password' ? errorInput.message : ''" placeholder="password"/>
           
            <button  @click="login" class="bg-black/60 text-white px-2 rounded-full">Login</button>

            <span class="text-red-500 text-xs font-semibold">{{ errorRes }}</span>
               
        </div>
    </div>

</template>

<script setup>
import { useAuthStore } from '../../stores/useAuthStore';

const form = ref({

    email : '',
    password : ''

});


const errorlogin = ref(null);
let errorInput = ref(null);
const auth = useAuthStore();
const errorRes = ref('');


async function login () {

    errorInput.value = null;
    errorlogin.value = null;

    if (!form.value.email) {
        
        errorInput.value = {
            type : 'email',
            message : 'Require Email address'
        }

        return;
    }

    if (!form.value.password) {

        errorInput.value = {
            type : 'password',
            message : 'Require password'
        }

        return;
    }

    await useApiFetch('sanctum/csrf-cookie');
    
    const token = useCookie('XSRF-TOKEN');


    const {data, error : loginError, status : loginStatus } =  await auth.login(form.value);

        console.log(loginStatus);

        if (loginError.value) {
            errorRes.value = loginError.value.data.message;
        }

        if (loginStatus.value === 'success') {
            if (auth.isAdmin) {
                navigateTo('/users');
            } else {
                navigateTo('/profile')
            }

        }


}

</script>

<style>

</style>