<template>

    <div>
        <div class="mx-8 flex flex-col justify-center items-center min-h-screen gap-y-4">
            <h1>Register</h1>
            <TextInput v-model:input="form.name" inputType="text" :error="errorInput && errorInput.type === 'name' ? errorInput.message : ''" placeholder="Username"/>
            <TextInput v-model:input="form.email" inputType="text" :error="errorInput && errorInput.type === 'email' ? errorInput.message : ''" placeholder="email"/>

            <TextInput v-model:input="form.password" inputType="password" :error="errorInput && errorInput.type === 'password' ? errorInput.message : ''" placeholder="password"/>
            <TextInput v-model:input="form.password_confirmation" inputType="password" :error="errorInput && errorInput.type === 'password_confirmation' ? errorInput.message : ''" placeholder="Confirm password"/>

                <select id="user_level" v-model="form.user_level" class=" border border-gray-300 text-gray-500 focus:outline-none text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 p-2.5  dark:border-gray-600 dark:placeholder-gray-500  dark:focus:ring-blue-500 dark:focus:border-blue-500">
                    <option selected value="0">user</option>
                    <option value="1">admin</option>
                </select>
        

            <button  @click="register" class="bg-black/60 text-white px-2 rounded-full">register</button>
            <span :class="[errorRes.type === 'info' ? 'text-green-500' : 'text-red-500']" class="text-xs font-semibold">{{ errorRes.message }}</span>
        </div>
    </div>

</template>

<script setup>
import { useAuthStore } from '../../stores/useAuthStore';

const errorRes = ref('');
const form = ref({

    email : '',
    password : '',
    name : null,
    password_confirmation : null,
    user_level : 0
});

const errorInput = ref({});

const auth = useAuthStore();


const register = async () => {
    errorInput.value = {};

    if (!form.value.email) {
        errorInput.value = {
            type : 'email',
            message : 'Email required'
        }

        return;
    }

    if (!form.value.name) {
        errorInput.value = {
            type : 'name',
            message : 'Username required'
        }

        return;
    }

    if (!form.value.password) {
        errorInput.value = {
            type : 'password',
            message : 'Password required'
        }
        return;
    }

    if (!form.value.password_confirmation) {
        errorInput.value = {
            type : 'password_confirmation',
            message : 'Password confirmation required'
        }

        return;
    }

    if (form.value.password !== form.value.password_confirmation) {
        errorInput.value = {
            type : 'password_confirmation',
            message : 'Passwords do not match'
        }
        return;
    }

    const { data : registerRes, error : registerErr, status } = await auth.register(form.value);

    if (!registerErr.value && !auth.isLoggedIn) {
        navigateTo('/');
    }

    if (registerErr.value) {
        errorRes.value = {
            type : 'error',
            message : registerErr.value.data.message
        };
    }

    

    if (status.value && registerRes.value) {
        errorRes.value = {
            type : 'info',
            message : registerRes.value.message
        }
    }
}


</script>

<style>

</style>