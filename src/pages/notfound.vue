<template>
  <main class="flex flex-col items-center justify-center min-h-screen bg-gray-100 text-center">
    <h1 class="text-6xl font-bold text-red-500 mb-4">404</h1>
    <p class="text-xl text-gray-700 mb-6">Sahifa topilmadi!</p>

    <router-link to="/card">
      <Button> Bosh sahifaga qaytish </Button>
    </router-link>
  </main>
</template>

<script setup>
import Button from '../components/Button.vue'
</script>
