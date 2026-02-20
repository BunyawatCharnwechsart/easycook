<template>
    <div class="relative w-[70%] overflow-hidden">
        <!-- รูปสไลด์ -->
        <div class="flex transition-transform duration-700 ease-in-out" :style="{ transform: `translateX(-${currentIndex * 100}%)` }">
            <div v-for="(slide, index) in slides" :key="index" class="w-full h-full shrink-0">
                <img :src="slide" class="w-full h-full object-cover" >
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from "vue"

const slides = [
    "/ADS1.png",
    "/ADS2.png",
    "/ADS3.png",
    "/ADS4.png",
    "/ADS5.png",
]

const currentIndex = ref(0)
let intervalId = null

onMounted(() => {
    intervalId = setInterval(() => {
        currentIndex.value = (currentIndex.value + 1) % slides.length
    }, 2000) // ทุกๆ 2 วินาที
})

onBeforeUnmount(() => {
    clearInterval(intervalId)
})
</script>