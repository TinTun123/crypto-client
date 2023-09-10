<template>

            <transition name="modal">
        
                <div v-if="auth.openSend" class="modal-mask">
                    <div class="modal-container md:w-[25%] rounded-[24px] relative">
                        
                        
                        <div class="flex flex-col gap-y-4">
                            <div class="relative">
                                <h1 class="text-[#222222] text-[16px] font-[700] text-center">Send</h1>

                                <span @click.stop="auth.openSend = false" class="text-[12px] lg:cursor-pointer font-[700] text-[#222222]/50 absolute right-0 top-0">
                                    cancel
                                </span>
                            </div>


                            <div id="available-protfolio" class="h-[47px] bg-[#DDDDDD]/50 rounded-[8px] flex items-center px-4 gap-x-2">
                                <input type="text" class="text-[12px] font-[400] text-[#222222]/50 bg-transparent w-full focus:outline-none" placeholder="Enter Address">
                                <span class="font-[700] flex-none text-[#222222] text-[12px]">29, 345.15 USDT</span>
                            </div>


                            <div id="send-div" class="bg-[#FFE5A4] rounded-[16px] flex justify-between items-center px-4 py-[26px]">
                                <div class="flex flex-col">
                                    <span class="font-[500] text-[12px] text-[#222222]">Send</span>
                                    <span class="font-[700] text-[14px] text-[#222222]">
                                        29,354.15
                                    </span>
                                </div>

                                <div class="flex items-center gap-x-2 relative">

                                    <select id="change" class="bg-transparent text-[#222222] font-[500] text-[12px]">
                                        <option selected>USDT</option>
                                        <option value="BTC">BTC</option>
                                    </select>
                                </div>
                            </div>


                            <div class="flex justify-between p-4 border border-[#C1C1C1] rounded-[16px]">
                                <div id="fee-total-div" class="flex flex-col">
                                    
                                        <span class="font-[400] text-[14px] text-[#222222]">
                                            Fee
                                        </span>

                                        <span class="font-[600] text-[14px] text-[#222222]">
                                            Total <span class="font-[400] text-[14px] text-[#222222]">(incl. fee)</span>
                                        </span>
                                
                                </div>

                                <div id="exchange-rate" class="flex flex-col items-end">
                                    <span class="font-[400] text-[12px] text-[#222222]">
                                            1 USDT
                                        </span>

                                        <span class="font-[600] text-[12px] text-[#222222]">
                                            29,346.16 USDT
                                        </span>
                                </div>
                            </div>


                            <!-- text para -->

                            <p class="font-[400] text-[12px] text-center text-[#222222]/70">
                                Proceed to get live aggregated quotes from a variety of different fiat onramp providers.
                            </p>

                            <div id="button">
                                <button class="bg-[#222222] w-full rounded-[8px] px-4 py-3 text-[14px] font-[600] text-white">Confirm</button>
                            </div>
                        
                        </div>
                    </div>

                </div>                
        </transition>
</template>

<script setup>
import { useAuthStore } from '~/stores/useAuthStore';


const auth = useAuthStore();


</script>