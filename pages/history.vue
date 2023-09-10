<template>
    <mainLayout>
        <div class="md:w-[67%] gap-y-4 flex md:flex-row flex-col mx-4 md:gap-x-4 md:mx-auto mt-4">
            <div @click.stop="router.back()" id="back-icon">
                <div>
                    <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M17.5 8.75L11.25 15L17.5 21.25" stroke="#C1C1C1" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                        <rect x="0.5" y="0.5" width="29" height="29" rx="3.5" stroke="#C1C1C1"/>
                    </svg>
                </div>
            </div>

            <div id="history-table" class="flex-1 hidden md:block">
                <HistoryTable />
            </div>



            <div  class="md:hidden md:w-[67%] gap-y-4 flex md:flex-row flex-col md:gap-x-4 md:mx-auto mt-4">
                <div id="left-div" class="flex flex-col gap-y-4 md:w-[32%]">
                    <div id="total-coin-div" class="bg-[#FFE5A4] px-[27px] py-[27px] rounded-[24px]">
                        <div class="flex flex-col gap-y-4">
                            <span class="text-[#222222] text-[12px] font-[400]">Total Balance</span>
                            <span class="text-[#222222] text-[18px] font-[700]">20 438$</span>
                        </div>
                    </div>  

                    <div id="buttons-div" class="flex justify-evenly items-center gap-x-4">

                        <!-- receive coin -->
                        <div class="flex flex-col justify-center items-center gap-y-2">
                            <div>
                                <svg width="39" height="39" viewBox="0 0 39 39" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <rect x="38.8135" y="38.6274" width="38.6274" height="38.6274" rx="8" transform="rotate(-180 38.8135 38.6274)" fill="#DDDDDD" fill-opacity="0.5"/>
                                    <path d="M15.7288 15.5425L23.2713 23.085M23.2713 23.085L23.2713 17.4281M23.2713 23.085L17.6144 23.085" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                </svg>
                            </div>
                            <span class="text-[12px] font-[500] text-[#222222]">Receive</span>
                        </div>

                        <!-- send coin  -->
                        <div class="flex flex-col justify-center items-center gap-y-2">
                            <div>
                                <svg width="40" height="39" viewBox="0 0 40 39" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <rect x="39.3135" y="38.6274" width="38.6274" height="38.6274" rx="8" transform="rotate(-180 39.3135 38.6274)" fill="#DDDDDD" fill-opacity="0.5"/>
                                    <path d="M16.2292 23.0849L23.7717 15.5425M23.7717 15.5425L18.1148 15.5425M23.7717 15.5425L23.7717 21.1993" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                </svg>
                            </div>
                            <span class="text-[12px] font-[500] text-[#222222]">Send</span>
                        </div>

                        <!-- swap coin -->
                        <div class="flex flex-col justify-center items-center gap-y-2">
                            <div>
                                <svg width="39" height="39" viewBox="0 0 39 39" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <rect x="38.8154" y="38.63" width="38.63" height="38.63" rx="8" transform="rotate(-180 38.8154 38.63)" fill="#DDDDDD" fill-opacity="0.5"/>
                                    <path d="M16.4239 14.4362C16.5151 14.3098 16.5647 14.1426 16.5624 13.9699C16.56 13.7972 16.5059 13.6324 16.4113 13.5103C16.3167 13.3881 16.1891 13.3182 16.0554 13.3151C15.9217 13.3121 15.7923 13.3762 15.6944 13.4939L14.3179 15.2717C14.2213 15.3967 14.167 15.5662 14.167 15.7428C14.167 15.9195 14.2213 16.0889 14.3179 16.2139L15.6944 17.9917C15.7417 18.0572 15.7987 18.1097 15.862 18.1462C15.9253 18.1826 15.9936 18.2022 16.0629 18.2038C16.1322 18.2054 16.2011 18.1889 16.2654 18.1554C16.3296 18.1218 16.388 18.0719 16.437 18.0086C16.4861 17.9453 16.5247 17.8699 16.5507 17.7869C16.5766 17.7039 16.5894 17.615 16.5881 17.5255C16.5869 17.436 16.5717 17.3477 16.5435 17.2659C16.5153 17.1841 16.4746 17.1105 16.4239 17.0495L15.9284 16.4095H22.9415C23.0784 16.4095 23.2097 16.3392 23.3065 16.2142C23.4033 16.0892 23.4577 15.9196 23.4577 15.7428C23.4577 15.566 23.4033 15.3964 23.3065 15.2714C23.2097 15.1464 23.0784 15.0762 22.9415 15.0762H15.9284L16.4239 14.4362ZM22.5767 20.605C22.4801 20.73 22.4258 20.8995 22.4258 21.0762C22.4258 21.2528 22.4801 21.4223 22.5767 21.5473L23.0722 22.1873H16.0592C15.9223 22.1873 15.791 22.2575 15.6942 22.3825C15.5974 22.5075 15.543 22.6771 15.543 22.8539C15.543 23.0307 15.5974 23.2003 15.6942 23.3253C15.791 23.4504 15.9223 23.5206 16.0592 23.5206H23.0722L22.5767 24.1606C22.526 24.2216 22.4853 24.2952 22.4571 24.377C22.4289 24.4588 22.4137 24.5471 22.4125 24.6366C22.4113 24.7261 22.424 24.815 22.45 24.898C22.476 24.981 22.5146 25.0564 22.5636 25.1197C22.6126 25.183 22.671 25.233 22.7353 25.2665C22.7996 25.3 22.8684 25.3165 22.9377 25.3149C23.007 25.3133 23.0754 25.2937 23.1387 25.2573C23.202 25.2209 23.259 25.1683 23.3062 25.1028L24.6827 23.325C24.7794 23.2 24.8337 23.0306 24.8337 22.8539C24.8337 22.6773 24.7794 22.5078 24.6827 22.3828L23.3062 20.605C23.2095 20.4802 23.0783 20.4101 22.9415 20.4101C22.8047 20.4101 22.6735 20.4802 22.5767 20.605Z" fill="#222222"/>
                                </svg>
                            </div>
                            <span class="text-[12px] font-[500] text-[#222222]">Swap</span>
                        </div>
                        <!-- history -->

                        <NuxtLink to="/history">
                            <div class="flex flex-col justify-center items-center gap-y-2">
                                <div>
                                    <svg width="39" height="39" viewBox="0 0 39 39" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M8.00004 38.6274L30.6274 38.6274C35.0457 38.6274 38.6274 35.0457 38.6274 30.6274L38.6274 7.99998C38.6274 3.5817 35.0457 -1.90735e-05 30.6274 -1.90735e-05L8.00004 -1.90735e-05C3.58176 -1.90735e-05 3.8147e-05 3.5817 3.8147e-05 7.99998L3.8147e-05 30.6274C3.8147e-05 35.0457 3.58176 38.6274 8.00004 38.6274Z" fill="#DDDDDD" fill-opacity="0.5"/>
                                    <g clip-path="url(#clip0_887_323)">
                                    <path d="M26.4696 19.2348V13.2058C26.4696 12.886 26.3425 12.5793 26.1164 12.3532C25.8903 12.127 25.5836 12 25.2638 12H13.2058C12.886 12 12.5793 12.127 12.3532 12.3532C12.127 12.5793 12 12.886 12 13.2058V25.2638C12 25.5836 12.127 25.8903 12.3532 26.1164C12.5793 26.3425 12.886 26.4696 13.2058 26.4696H19.2348" stroke="black" stroke-linecap="round" stroke-linejoin="round"/>
                                    <path d="M22.4502 24.8618C23.7821 24.8618 24.8618 23.7821 24.8618 22.4502C24.8618 21.1184 23.7821 20.0387 22.4502 20.0387C21.1183 20.0387 20.0386 21.1184 20.0386 22.4502C20.0386 23.7821 21.1183 24.8618 22.4502 24.8618Z" stroke="black"/>
                                    <path d="M24.4603 24.0579L26.4699 25.6657M15.2158 16.0193H23.2545M15.2158 19.2348H18.4313" stroke="black" stroke-linecap="round" stroke-linejoin="round"/>
                                    </g>
                                    <defs>
                                    <clipPath id="clip0_887_323">
                                    <rect width="14.47" height="14.4696" fill="white" transform="translate(12 12)"/>
                                    </clipPath>
                                    </defs>
                                    </svg>
                                </div>
                                <span class="text-[12px] font-[500] text-[#222222]">History</span>
                            </div>
                        </NuxtLink>
                    </div>
                </div>

                <div  id="coin-list-div" class="flex flex-col gap-y-4 flex-1 ">
                    <div v-for="(num, i) in numberrange" :key="i" class="rounded-[16px] bg-[#DDDDDD]/50">
                        <div class="flex justify-between p-4 border-b border-[#22222212]/7">
                            <span class="text-[#222222] text-[14px] font-[500]">
                                Date
                            </span>
                            
                            <span  class="text-[#222222] text-[14px] font-[400]">
                                06.09.23
                            </span>
                        </div>

                        <div class="flex justify-between p-4 border-b border-[#22222212]/7">
                            <span class="text-[#222222] text-[14px] font-[500]">
                                Type
                            </span>
                            
                            <span  class="text-[#222222] text-[14px] font-[400]">
                                Withdraw
                            </span>
                        </div>
                        <div class="flex justify-between p-4 border-b border-[#22222212]/7">
                            <span class="text-[#222222] text-[14px] font-[500]">
                                Coin 
                            </span>
                            
                            <span  class="text-[#222222] text-[14px] font-[400]">
                                BTC
                            </span>
                        </div>

                        <div class="flex justify-between p-4 border-b border-[#22222212]/7">
                            <span class="text-[#222222] text-[14px] font-[500]">
                                Amount 
                            </span>
                            
                            <span  class="text-[#222222] text-[14px] font-[400]">
                                1 121.00
                            </span>
                        </div>

                        <div class="flex justify-between p-4 ">
                            <span class="text-[#222222] text-[14px] font-[500]">
                                Status 
                            </span>
                            
                            <span  class=" text-[14px] font-[400] text-[#00881E]">
                                Done
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </mainLayout>

</template>

<script setup>
import mainLayout from '~/layouts/mainLayout.vue';

const router = useRouter();
const numberrange = computed(() => {
      const start = 1; // Start of the range
      const end = 10; // End of the range (inclusive)
      return Array.from({ length: end - start + 1 }, (_, index) => start + index);
})
definePageMeta({
    middleware : ['auth', 'user-only']
});

const {type} = useBreakPoints();

</script>

<style>

</style>