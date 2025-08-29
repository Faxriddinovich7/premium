<template>
  <div>
    <Header />
    <main class="p-6">
      <h2 class="text-2xl font-semibold mb-4 text-center text-blue-600">
        Orders Sahifasi
      </h2>

      <div
          class="bg-white border rounded-lg p-4 shadow hover:shadow-lg w-[700px] h-[200px] font-bold mx-auto"
      >
        Restoranda premium taomlar – yuqori sifatli ingredientlardan tayyorlangan taomlar.
        Internet xizmatlarida (Spotify, YouTube, Telegram va h.k.) premium obuna – reklamasiz, tezroq, ko‘proq imkoniyatli versiya.
        Sug‘urtada premium – har oy yoki yil to‘lanadigan summa (ya’ni sug‘urta badali).
      </div>

      <div class="flex justify-center space-x-4 mt-8">
        <Button>Buyurtma</Button>
        <Button>Bekor qilish</Button>
        <Button>Batafsil</Button>
      </div>

      <p v-if="error" class="text-red-500">{{ error }}</p>
      <p v-if="loading">Loading...</p>

      <div v-else v-for="user in users" :key="user.id">
        <router-link
            :to="`/order/${user.id}`"
            class="block p-2 my-2 bg-gray-100 rounded hover:bg-gray-200"
        >
          {{ user.title }}
        </router-link>
      </div>
    </main>
    <Footer />
  </div>
</template>

<script setup>
import Header from '../components/header.vue'
import Footer from '../components/footer.vue'
import Button from '../components/Button.vue'
import { onMounted, ref } from 'vue'

let users = ref([])
let loading = ref(false)
let error = ref("")

async function render() {
  try {
    loading.value = true
    let data = await fetch("https://fakerestapi.azurewebsites.net/api/v1/Books")
    let result = await data.json()
    users.value = result
  } catch (err) {
    error.value = err.message
  } finally {
    loading.value = false
  }
}

onMounted(() => {
  render()
})
</script>
