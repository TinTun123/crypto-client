<template>

    <mainLayout>
        <div>
             <pre>
                {{ auth.user }}
             </pre>
            <h1 class="text-red-400">index page</h1>
        </div>
    </mainLayout>

</template>

<script setup>
import mainLayout from '~/layouts/mainLayout.vue';
import { useAuthStore } from '~/stores/useAuthStore';


definePageMeta({
    middleware : ['auth']
});
const auth = useAuthStore();

</script>

<style>
</style>