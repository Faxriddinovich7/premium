<template>
  <div class="max-w-4xl mx-auto mt-6 p-6 bg-white rounded-xl shadow-lg border border-gray-200">
    <h2 class="text-3xl font-bold text-gray-800 mb-4">Notebooks</h2>
    <p class="text-gray-600 mb-6">
      Stylish and durable notebooks for students, professionals, and creatives. Choose the perfect notebook for your needs.
    </p>

    <div class="grid md:grid-cols-3 gap-6">
      <div
          v-for="device in notebooks"
          :key="device.id"
          class="border rounded-lg p-4 shadow hover:shadow-xl transition duration-300"
      >
        <img
            :src="device.img"
            alt="notebook image"
            class="w-full h-48 object-cover rounded mb-4"
        />
        <h3 class="font-semibold text-lg mb-2">{{ device.title }}</h3>
        <p class="text-gray-500 mb-4">{{ device.description }}</p>
        <button
            class="w-full py-2 bg-purple-500 text-white rounded hover:bg-purple-600 transition"
        >
          Buy Now
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import apple14 from '../assets/apple14.jpeg'
import samsung23 from '../assets/samsung23.jpeg'
import mockup8 from '../assets/mockup8.jpeg'

const notebooks = [
  { id: 1, title: 'Classic Notebook', description: 'Perfect for everyday notes.', img: apple14 },
  { id: 2, title: 'Leather Journal', description: 'Elegant journal for personal writing.', img: samsung23 },
  { id: 3, title: 'Sketch Notebook', description: 'For drawing and sketching.', img: mockup8 },
]
</script>
