<template>
    <div style="font-family: 'Bai Jamjuree'">
        <!--import navbar-->
        <navBar/>

        <!--เนื้อหา-->
        <section class="flex flex-col items-center justify-center px-4 py-8 gap-8">
            <div class="max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl">
                <img 
                    src="/logomain.png" 
                    alt="logomain"
                    class="w-full h-auto object-contain"
                >
            </div>

            <!--ช่องค้นหา-->
            <div class="flex gap-3">
                <div class="relative border border-gray-300 w-100 h-10 rounded-xl flex items-center">
                    <input 
                        type="text"
                        class="w-full h-full px-3 rounded-xl outline-none"
                        placeholder=""
                    >
                    <img 
                        src="/searchIcon.png" alt="searchIcon"
                        class="w-5 h-5 object-contain absolute right-3"
                    >
                </div>
                <button class="bg-[#2C9A40] p-1 w-20 rounded-xl text-white cursor-pointer">
                    ค้นหา
                </button>
            </div>
            
            <!--Silde ADS-->
            <ADS/>

            <!--หมวดหมู่แนะนำ-->
            <div class="flex w-full">
                <h1 class="ml-10 text-4xl">หมวดหมู่แนะนำ</h1>
            </div>
        </section>
    </div>
</template>

<script setup>
import navBar from '~/components/navBar.vue';
import ADS from '~/components/ADS.vue';

</script>