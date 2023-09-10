<template>
    <mainLayout>
        <transition appear>
            <div class="md:w-[67%] gap-y-4 flex md:flex-row flex-col mx-4 md:gap-x-4 md:mx-auto mt-4 rounded-[16px] overflow-hidden">
                <table class="w-full text-left">
                    <thead class=" bg-[#DDDDDD]/50 border-b border-[#222222]/10">
                        <tr>
                            <th scope="col" class="px-6 py-3 text-[#222222] text-[14px] font-[500]">
                                Name
                            </th>
                            <th scope="col" class="px-6 py-3 text-[#222222] text-[14px] font-[500]">
                                Username
                            </th>
                            <th scope="col" class="px-6 py-3 text-[#222222] text-[14px] font-[500]">
                                Address
                            </th>
                            <th scope="col" class="px-6 py-3 text-[#222222] text-[14px] font-[500]">
                                
                            </th>
                            
                        </tr>
                    </thead>
                    <tbody>
                        <template v-for="(user, i) in users" :key="i">
                            <tr @click.stop="toogleDrop(user)" class="bg-[#DDDDDD]/50 lg:hover:bg-[#DDDDDD] transition lg:cursor-pointer border-b">
                                <th scope="row" class="px-6 py-4 text-[#222222] text-[14px] font-[400]">
                                    Mark Skrypka
                                </th>
                                <td class="px-6 py-4 text-[#222222] text-[14px] font-[400]">
                                    @m_skrypka
                                </td>
                            
                                <td class="px-6 py-4 text-[#222222] text-[14px] font-[400]">
                                    TPByFdb5vfcxDHаxdsdvds3…
                                </td>
                                <td>
                                    <div @click.stop="toggleUserSelect(user)">
                                        <svg v-if="selectedUserId !== user" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <rect x="0.5" y="0.5" width="15" height="15" rx="3.5" stroke="#C1C1C1"/>
                                        </svg>

                                        <svg v-else width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M6.36646 10.1L12.0165 4.45C12.1498 4.31667 12.3082 4.25 12.4918 4.25C12.6754 4.25 12.8336 4.31667 12.9665 4.45C13.0998 4.58333 13.1665 4.74178 13.1665 4.92533C13.1665 5.10889 13.0998 5.26711 12.9665 5.4L6.83313 11.5333C6.6998 11.6667 6.54424 11.7333 6.36646 11.7333C6.18868 11.7333 6.03313 11.6667 5.8998 11.5333L3.03313 8.66667C2.89979 8.53333 2.83579 8.37489 2.84113 8.19133C2.84646 8.00778 2.91602 7.84956 3.04979 7.71667C3.18313 7.58333 3.34157 7.51667 3.52513 7.51667C3.70868 7.51667 3.86691 7.58333 3.99979 7.71667L6.36646 10.1Z" fill="#222222"/>
                                            <rect x="0.5" y="0.5" width="15" height="15" rx="3.5" stroke="#C1C1C1"/>
                                        </svg>
                                    </div>
                                </td>
                                
                            </tr>

                            <tr  scope="row" class="relative  bg-[#DDDDDD]/50">
                                <td colspan="4">
                                    <div :class="[dropid === user ? 'max-h-[1000px]' : 'max-h-0']" class="w-[88%] mx-auto rounded-[8px] transition-all overflow-hidden">
                                        <table class="w-full text-left ">
                                            <thead class=" bg-[#F5F5F5] border-b border-[#222222]/10">
                                                <tr>
                                                    <th scope="col" class="px-6 py-3 text-[#222222] text-[14px] font-[500]">
                                                        Date
                                                    </th>
                                                    <th scope="col" class="px-6 py-3 text-[#222222] text-[14px] font-[500]">
                                                        Type
                                                    </th>
                                                    <th scope="col" class="px-6 py-3 text-[#222222] text-[14px] font-[500]">
                                                        Coin
                                                    </th>
                                                    <th scope="col" class="px-6 py-3 text-[#222222] text-[14px] font-[500]">
                                                        Amount
                                                    </th>
                                                    <th scope="col" class="px-6 py-3 text-right text-[#222222] text-[14px] font-[500]">
                                                        Status
                                                    </th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr class="bg-[#F5F5F5] border-b">
                                                    <th scope="row" class="px-6 py-4 text-[#222222] text-[14px] font-[400]">
                                                        06.09.23
                                                    </th>
                                                    <td class="px-6 py-4 text-[#222222] text-[14px] font-[400]">
                                                        Withdraw
                                                    </td>
                                                    <td class="px-6 py-4 text-[#222222] text-[14px] font-[400]">
                                                        BTC
                                                    </td>
                                                    <td class="px-6 py-4 text-[#222222] text-[14px] font-[400]">
                                                        1 233 121.00
                                                    </td>
                                                    
                                                    <td class="px-6 py-4 text-[#00881E] font-[400] text-[14px] text-right">
                                                        Done
                                                    </td>
                                                </tr>
                                                <tr class="bg-[#F5F5F5] border-b">
                                                    <th scope="row" class="px-6 py-4 text-[#222222] text-[14px] font-[400]">
                                                        06.09.23
                                                    </th>
                                                    <td class="px-6 py-4 text-[#222222] text-[14px] font-[400]">
                                                        Withdraw
                                                    </td>
                                                    <td class="px-6 py-4 text-[#222222] text-[14px] font-[400]">
                                                        BTC
                                                    </td>
                                                    <td class="px-6 py-4 text-[#222222] text-[14px] font-[400]">
                                                        1 233 121.00
                                                    </td>
                                                    
                                                    <td class="px-6 py-4 text-[#00881E] font-[400] text-[14px] text-right">
                                                        Done
                                                    </td>
                                                </tr>
                                                <tr class="bg-[#F5F5F5]">
                                                    <th scope="row" class="px-6 py-4 text-[#222222] text-[14px] font-[400]">
                                                        06.09.23
                                                    </th>
                                                    <td class="px-6 py-4 text-[#222222] text-[14px] font-[400]">
                                                        Withdraw
                                                    </td>
                                                    <td class="px-6 py-4 text-[#222222] text-[14px] font-[400]">
                                                        BTC
                                                    </td>
                                                    <td class="px-6 py-4 text-[#222222] text-[14px] font-[400]">
                                                        1 233 121.00
                                                    </td>
                                                    
                                                    <td class="px-6 py-4 text-[#00881E] font-[400] text-[14px] text-right">
                                                        Done
                                                    </td>
                                                </tr>

                                            </tbody>
                                        </table>
                                    </div>
                                </td>
                            </tr>
                        </template>

                        <tr @click.stop="router.push({path : '/auth/Register'})" class="bg-[#222222]/40 lg:cursor-pointer lg:hover:bg-[#222222]/20 ">
                            <th scope="row" colspan="4" class="px-6 py-4 text-[#222222] text-[14px] text-center  font-[400]">
                                <span class="px-6 py-4 text-[#222222] text-[14px] font-[400]">Add new user</span>
                            </th>
                            
                        </tr>
                    </tbody>
                </table>
            </div>
        </transition>

    </mainLayout>

</template>

<script setup>
import mainLayout from '../layouts/mainLayout.vue'

const dropid = ref(null);
const users = ref([1, 2, 3, 4, 5, 6]);
const selectedUserId = ref(null);
const router = useRouter();

function toogleDrop(id) {

    if (id === dropid.value) {
        dropid.value = null;
    } else {
        dropid.value = id;
    }

}

function toggleUserSelect(id) {

    if (id === selectedUserId.value) {
        selectedUserId.value = null;
    } else {
        selectedUserId.value = id
    }
}


</script>

<style>
.slide-down-leave-active {
    transition: 0.3s ease-in;
}

.slide-down-enter-from {
    max-height: 0px;
    opacity: 0;
}

.slide-down-enter-to {
    max-height: 1000px;
    opacity: 1;
}

.slide-down-leave-from {
    max-height: 0px;
    opacity: 0;
}

.slide-down-leave-to {
    max-height: 0px;
    opacity: 0;
}
</style>