<template>
  <div class="w-[600px] max-w-7xl mx-auto mt-10">
    <form @submit.prevent="handleSubmit" class="grid grid-cols-2 gap-4 mb-6">
      <input v-model="title" type="text" placeholder="Enter name"
             class="border border-gray-300 p-2 rounded-lg outline-none" required>
      <input v-model="description" type="text" placeholder="Enter description"
             class="border border-gray-300 p-2 rounded-lg outline-none" required>
      <input v-model="image_url" type="text" placeholder="Enter photo urls"
             class="border border-gray-300 p-2 rounded-lg outline-none" required>
      <button type="submit"
              class="bg-blue-500 text-white font-semibold rounded-lg px-4 py-2">
        {{ editingId ? "Update" : "Enter" }}
      </button>
    </form>
    <div v-for="(item, index) in store.books" :key="index"
         class="border p-4 text-center mb-6 rounded shadow bg-white">
      <h2 class="font-bold text-lg">{{ item.title }}</h2>
      <p class="text-gray-700 mt-1">{{ item.description }}</p>
      <img v-if="item.image_url" :src="item.image_url" alt="image"
           class="w-[180px] object-cover m-auto mt-3 rounded">
      <div class="mt-3 flex justify-center gap-2">
        <button class="px-3 py-1 bg-red-500 text-white rounded"
                @click="deleteBook(item.id)">delete</button>
        <button class="px-3 py-1 bg-blue-500 text-white rounded"
                @click="startEdit(item)">Edit</button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useStoreBook } from '../store/storeBook.js'

const store = useStoreBook()
const title = ref("")
const description = ref("")
const image_url = ref("")
const editingId = ref(null)

onMounted(() => store.fetchBooks())

async function handleSubmit() {
  if (editingId.value) {
    await store.updateBook(editingId.value, {
      title: title.value,
      description: description.value,
      image_url: image_url.value,
      category: "home",
      condition: "used",
    })
  } else {
    await store.addBook({
      title: title.value,
      description: description.value,
      image_url: image_url.value,
      category: "home",
      condition: "used",
    })
  }
  resetForm()
}

function startEdit(item) {
  title.value = item.title
  description.value = item.description
  image_url.value = item.image_url
  editingId.value = item.id
}

function deleteBook(id) {
  store.deleteBook(id)
  if (editingId.value === id) resetForm()
}
function resetForm() {
  title.value = ""
  description.value = ""
  image_url.value = ""
  editingId.value = null
}
</script>
