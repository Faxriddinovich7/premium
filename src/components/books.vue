<template>
  <div class="max-w-2xl mx-auto mt-6 p-6 bg-white rounded-xl shadow-lg border border-gray-200">
    <h2 class="text-3xl font-bold text-gray-800 mb-4">Our Book Collection</h2>
    <p class="text-gray-600 mb-6">
      Explore our wide variety of books. From fiction to non-fiction, we have something for every reader.
    </p>

    <div class="grid md:grid-cols-2 gap-6">
      <div v-for="book in books" :key="book.id" class="border rounded-lg p-4 shadow hover:shadow-xl transition duration-300">
        <img :src="book.img" alt="" class="w-full h-48 object-cover rounded mb-4"/>
        <h3 class="font-semibold text-lg mb-2">{{ book.title }}</h3>
        <p class="text-gray-500 mb-4">{{ book.description }}</p>
        <button class="w-full py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition">Read More</button>
      </div>
    </div>
  </div>
</template>

<script setup>
import book from '../assets/book.jpeg'
import bookRed from '../assets/bookRed.jpeg'

const books = [
  { id: 1, title: 'The Great Gatsby', description: 'Classic novel by F. Scott Fitzgerald.', img: book },
  { id: 3, title: 'To Kill a Mockingbird', description: 'Novel by Harper Lee.', img: bookRed },
]
</script>
