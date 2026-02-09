<script setup>
const config = useRuntimeConfig()

const users = await $fetch(`${config.public.apiBase}/users`)
</script>

<template>
    <div class="bg-amber-400 p-4">
        <h1 class="text-xl font-bold mb-2">Nuxt + Hono This is Login page</h1>
        <ul>
        <li
            v-for="u in users"
            :key="u.uid"
            class="bg-white mb-2 p-2 rounded"
        >
            <p>ชื่อ: {{ u.name }}</p>
            <p>Email: {{ u.email }}</p>
        </li>
        </ul>
        <nuxt-link to="/register">register</nuxt-link>
    </div>
</template>
