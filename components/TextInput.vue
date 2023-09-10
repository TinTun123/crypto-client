<template>

    <div class="flex flex-col gap-y-2">
        <client-only>
            <input 
            class=" bg-white text-gray-800 border text-sm broder-[#EFF0EB] rounded-lg p-3 placeholder-gray-500 focus:outline-none"
            @focusin="isFocused = true"
            @blur="isFocused = false"
            :class="{'border-gray-900' : isFocused}, {'border-red-500' : error}"
            :type="inputType"
            v-model="inputComputed"
            autocomplete="off"
            :placeholder="placeholder"/>
            
        </client-only>

        <span v-if="error" class="text-red-500 text-[14px] font-semibold">

            {{ error }}

        </span>

    </div>

</template>


<script setup>

const emit = defineEmits(['update:input'])
const props = defineProps(['input', 'placeholder', 'max', 'inputType', 'error']);

const {input, placeholder, max, inputType, error} = toRefs(props);

const isFocused = ref(false);

const inputComputed = computed({
    get: () => input.value,
    	set : (val) => emit('update:input', val)
})
</script>

<style>
</style>