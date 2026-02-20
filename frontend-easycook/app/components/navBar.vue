<template>
    <nav class="w-full bg-white px-8 py-4 border-gray-300 border">
        <div class="max-w-7xl mx-auto flex items-center justify-between">
        
        <!-- โลโก้ -->
        <div class="flex">
            <router-link to="/app/main">
                <img src="/logonavbar.png" alt="logoeasycook" class="h-10 w-auto">
            </router-link>
        </div>

        <!-- หมวดหมู่ -->
        <ul class="flex items-center gap-20 text-black font-medium">
            <li class="cursor-pointer hover:underline transition-all duration-200">เพิ่มสูตร</li>
            <li class="cursor-pointer hover:underline transition-all duration-200">หมวดหมู่</li>
            <li class="cursor-pointer hover:underline transition-all duration-200">เกี่ยวกับ</li>
        </ul>

        <!-- เข้าสู่ระบบหรือสมัคร -->
        <ul class="flex items-center gap-4">
            <li>
            <button class="px-4 py-2 text-black border cursor-pointer border-none hover:underline transition-all duration-200">
                เข้าสู่ระบบ
            </button>
            </li>
            <li>
            <button class="px-4 py-2 bg-[#2C9A40] text-white rounded-lg hover:bg-black transition-colors duration-200 cursor-pointer">
                ลงทะเบียน
            </button>
            </li>
        </ul>

        </div>
    </nav>
</template>