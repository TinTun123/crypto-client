<template>
    <mainLayout>
        <div>
            
        </div>
    </mainLayout>

</template>


<script setup>
import mainLayout from '~/layouts/mainLayout.vue';

definePageMeta({
    middleware : ['auth', 'admin']
});

</script>

<style>
</style>