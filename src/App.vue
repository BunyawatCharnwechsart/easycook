<script setup>
import { ref, onMounted } from 'vue'

const API_BASE = window.__ENV__.API_BASE

const users = ref([])
const loading = ref(false)
const message = ref('')

const fetchAll = async () => {
    loading.value = true
    message.value = ''
    try {
        const res = await fetch(`${API_BASE}/user`)
        if (!res.ok) throw new Error(`HTTP ${res.status}`)
        users.value = await res.json() 
    } catch (e) {
        message.value = 'Fetch error: ' + e.message
    } finally {
        loading.value = false
    }
}

onMounted(fetchAll)
</script>

<template>
    <div class="p-4">
        <!-- loading -->
        <div v-if="loading" class="text-gray-500">
            กำลังโหลดข้อมูล...
        </div>

        <!-- error -->
        <div v-else-if="message" class="text-red-500">
            {{ message }}
        </div>

        <!-- table -->
        <table v-else class="min-w-full border border-gray-300 rounded-lg overflow-hidden">
            <thead class="bg-gray-100">
                <tr>
                    <th class="px-4 py-2 text-left text-sm font-semibold text-gray-700 border-b">
                        ID
                    </th>
                    <th class="px-4 py-2 text-left text-sm font-semibold text-gray-700 border-b">
                        Name
                    </th>
                    <th class="px-4 py-2 text-left text-sm font-semibold text-gray-700 border-b">
                        Email
                    </th>
                </tr>
            </thead>

            <tbody class="divide-y divide-gray-200">
                <tr v-for="user in users" :key="user.uid" class="hover:bg-gray-50">
                    <td class="px-4 py-2 text-sm text-gray-800">
                        {{ user.uid }}
                    </td>
                    <td class="px-4 py-2 text-sm text-gray-800">
                        {{ user.name }}
                    </td>
                    <td class="px-4 py-2 text-sm text-gray-800">
                        {{ user.email }}
                    </td>
                </tr>

                <tr v-if="users.length === 0">
                    <td colspan="3" class="px-4 py-4 text-center text-gray-500">
                        ไม่มีข้อมูล
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>