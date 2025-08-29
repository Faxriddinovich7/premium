<template>
  <div>
    <Header />
    <main class="p-6">
      <h2 class="text-2xl font-semibold mb-4">Card Sahifasi</h2>
      <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        <div v-for="n in 6" :key="n" class="border rounded-lg p-4 shadow hover:shadow-lg">
          <h3 class="font-bold text-lg">Karta </h3>
          <p class="text-gray-600 mt-2">Bu kartaning tavsifi.</p>
          <Button :id="'card-btn'">Ko‘rish</Button>
        </div>
      </div>
    </main>
    <Footer />
  </div>
</template>

<script setup>
import Header from '../components/header.vue'
import Footer from '../components/footer.vue'
import Button from '../components/Button.vue'
</script>
