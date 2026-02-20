<template>
  <div class="font-sans text-gray-800">
    <navBar/>
    <!-- Hero Slider -->
    <section class="relative h-screen overflow-hidden">
      <transition name="fade">
        <img
          :key="current"
          :src="images[current]"
          class="absolute inset-0 w-full h-full object-cover"
        >
      </transition>
    </section>

    <!-- About Section -->
    <section class="bg-white py-20 px-6 text-center">

      <!-- Logo -->
      <img
        src="/logo.png"
        alt="Easy Cook Logo"
        class="mx-auto mb-8 w-40"
      >

      <!-- Description -->
      <div class="max-w-4xl mx-auto text-gray-600 leading-relaxed space-y-4">
        <p>
          “Easycook คือเว็บไซต์รวมสูตรอาหารที่ถูกสร้างขึ้นเพื่อให้การทำอาหารเป็นเรื่องง่ายสำหรับทุกคน
        </p>
        <p>
          Easycook พร้อมเป็นผู้ช่วยของคุณในการสร้างสรรค์เมนูอร่อยได้ทุกวัน
        </p>
        <p>
          เรามุ่งเน้นการออกแบบเว็บไซต์ให้ใช้ง่าย สะดวก และค้นหาสูตรอาหารได้อย่างรวดเร็ว
        </p>
      </div>

      <!-- Team -->
      <div class="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-12 max-w-5xl mx-auto">

        <div class="text-center">
          <img src="/ceomon.jpg" class="w-40 h-40 mx-auto rounded-full object-cover mb-4">
          <p class="font-medium">MS. Phattharaphon Tangtaeng</p>
          <p class="text-sm text-gray-500">C.E.O</p>
        </div>

        <div class="text-center">
          <img src="/ceofah.jpg" class="w-40 h-40 mx-auto rounded-full object-cover mb-4">
          <p class="font-medium">MS. Phattharaphon Tangtaeng</p>
          <p class="text-sm text-gray-500">C.E.O</p>
        </div>

        <div class="text-center">
          <img src="/ceoball.jpg" class="w-40 h-40 mx-auto rounded-full object-cover mb-4">
          <p class="font-medium">MS. Phattharaphon Tangtaeng</p>
          <p class="text-sm text-gray-500">C.E.O</p>
        </div>

      </div>
    </section>

  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from "vue";
import navBar from "~/components/navBar.vue";

const images = [
  "/about.1.png",
  "/about.2.png",
];

const current = ref(0);
let interval;

onMounted(() => {
  interval = setInterval(() => {
    current.value = (current.value + 1) % images.length;
  }, 4000);
});

onUnmounted(() => {
  clearInterval(interval);
});
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 1.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
