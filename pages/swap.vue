<template>
    <mainLayout>
        <div class="min-h-[80vh] flex justify-center items-center md:w-[22%] mx-4 md:mx-auto">
            <div class="rounded-[24px]  flex flex-col gap-y-4 p-4  border border-black/10">
                <div class="relative">
                    <h1 class="text-[#222222] text-[18px] font-[700] text-center">
                        Swap
                    </h1>

                    <div @click.stop="router.back()" class="absolute left-0 top-0 lg:cursor-pointer">
                        <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M17.5 8.75L11.25 15L17.5 21.25" stroke="#C1C1C1" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                            <rect x="0.5" y="0.5" width="29" height="29" rx="3.5" stroke="#C1C1C1"/>
                        </svg>
                    </div>
                </div>


                <div id="send-div" class="bg-[#FFE5A4] rounded-[16px] flex justify-between items-center px-4 py-[26px]">
                    <div class="flex flex-col">
                        <span class="font-[500] text-[12px] text-[#222222]">Send</span>
                        <span class="font-[700] text-[14px] text-[#222222]">
                            29,354.15
                        </span>
                    </div>

                    <div class="flex items-center gap-x-2 relative">
                        <!-- <span class="text-[#222222] font-[500] text-[12px]">
                            USDT
                        </span>

                        <div>
                            <svg width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M0.83366 0.833334L5.00033 5L9.16699 0.833334" stroke="#222222" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                        </div> -->

                        <!-- <div class="bg-[#f3e0b2] absolute top-[18px] right-0 text-[#222222] font-[500] text-[12px] flex flex-col gap-y-1 rounded-md p-2 px-4">
                            <span class=" text-[#222222] font-[500] text-[12px] border-b border-[#CCCCCC]">
                                USDT
                            </span>
                            
                            <span class=" text-[#222222] font-[500] text-[12px]">
                                BTC
                            </span>
                        </div> -->

                        <select id="change" class="bg-transparent text-[#222222] font-[500] text-[12px]">
                            <option selected>USDT</option>
                            <option value="BTC">BTC</option>
                        </select>
                    </div>
                </div>


                <div id="reveive-div" class="bg-[#BAD6A5] rounded-[16px] flex justify-between items-center px-4 py-[26px]">
                    <div class="flex flex-col">
                        <span class="font-[500] text-[12px] text-[#222222]">Receive</span>
                        <span class="font-[700] text-[14px] text-[#222222]">
                            29,354.15
                        </span>
                    </div>

                    <!-- <div class="flex items-center gap-x-2">
                        <span class="text-[#222222] font-[500] text-[12px]">
                            BTC
                        </span>

                        <div>
                            <svg width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M0.83366 0.833334L5.00033 5L9.16699 0.833334" stroke="#222222" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                        </div>
                    </div> -->

                    <select id="change" class="bg-transparent text-[#222222] font-[500] text-[12px]">
                        <option selected>BTC</option>
                        <option value="BTC">USDT</option>
                    </select>
                </div>

                <div id="available-protfolio" class="h-[47px] bg-[#DDDDDD]/50 rounded-[8px] flex items-center px-2 gap-x-2">
                    <input type="text" class="text-[12px] font-[400] text-[#222222]/50 bg-transparent w-full focus:outline-none" placeholder="Available portfolio">
                    <span class="font-[700] flex-none text-[#222222] text-[12px]">29, 345.15 USDT</span>
                </div>

                <div id="button">
                    <button class="bg-[#222222] w-full rounded-[8px] px-4 py-3 text-[14px] font-[600] text-white">Swap Coin</button>
                </div>
            </div>
        </div>

    </mainLayout>

</template>

<script setup>
import mainLayout from '~/layouts/mainLayout.vue';
definePageMeta({
    middleware : ['auth', 'user-only']
});

const router = useRouter();




</script>

<style>

</style>