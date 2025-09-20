<template>
  <main class="p-6">
    <h2 class="text-2xl font-semibold mb-4">Profile Sahifasi</h2>
    <div class="border rounded-lg p-6 shadow max-w-md bg-white">
      <img :src="avatar" alt="User avatar" class="w-24 h-24 rounded-full mb-4"/>
      <h3 class="font-bold text-xl">Muhammadali Ubaydullayev</h3>
      <p class="text-gray-600 mt-2">Premium foydalanuvchi</p>
      <Button>Profilda o‘zgartirish</Button>
    </div>

    <div class="mt-6 flex justify-center items-center">
      <router-link to="/profile/books" class="rounded-lg bg-blue-500 border px-10 py-2 text-white hover:bg-white hover:text-blue-500 hover:border-blue-500">
        books
      </router-link>
      <router-link to="/profile/notebooks" class="ml-3 mr-3 rounded-lg bg-blue-500 border px-10 py-2 text-white hover:bg-white hover:text-blue-500 hover:border-blue-500">
        notebooks
      </router-link>
      <router-link to="/profile/phone" class="rounded-lg bg-blue-500 border px-10 py-2 text-white hover:bg-white hover:text-blue-500 hover:border-blue-500">
        phone
      </router-link>
    </div>

    <div class="mt-6">
      <router-view />
    </div>
  </main>
</template>

<script setup>
import Button from '../components/button.vue'
import avatar from '../assets/tony.jpg'
</script>
