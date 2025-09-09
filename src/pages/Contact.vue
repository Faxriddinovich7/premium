<template>
  <div class="max-w-md mx-auto p-4">
    <input v-model="v.title" placeholder="Sarlavha" class="border rounded p-2 mb-2 w-full" />
    <input v-model="v.desc" placeholder="Tavsif" class="border rounded p-2 mb-2 w-full" />
    <input v-model="v.category" placeholder="Kategoriya" class="border rounded p-2 mb-2 w-full" />
    <input v-model="v.date" type="date" class="border rounded p-2 mb-2 w-full" />
    <input type="file" @change="rasmTanlandi" class="mb-4" />
    <img v-if="v.img" :src="v.img" alt="Rasm" class="w-32 h-32 object-cover mb-4 rounded border" />

    <button @click="saqlash" class="bg-blue-500 text-white px-4 py-2 rounded mb-6">
      {{ editId ? 'Saqlash' : 'Qo‘shish' }}
    </button>

    <ul>
      <li v-for="item in list" :key="item.id" class="border p-4 mb-4 rounded shadow">
        <img :src="item.img" alt="rasm" class="w-24 h-24 object-cover rounded mb-2" />
        <p><strong>Sarlavha:</strong> {{ item.title }}</p>
        <p><strong>Tavsif:</strong> {{ item.desc }}</p>
        <p><strong>Kategoriya:</strong> {{ item.category }}</p>
        <p><strong>Sana:</strong> {{ item.date }}</p>
        <button @click="tahrir(item)" class="bg-green-500 text-white px-3 py-1 rounded mr-2">Tahrirlash</button>
        <button @click="ochir(item.id)" class="bg-red-500 text-white px-3 py-1 rounded">O‘chirish</button>
      </li>
    </ul>
  </div>
</template>

<script setup>
import { ref } from 'vue'

let v = ref({ title: '', desc: '', category: '', date: '', img: '' })
let editId = ref(null)
let list = ref(JSON.parse(localStorage.getItem('vazifalar') || '[]'))

function saqlash() {
  if (!v.value.title.trim() || !v.value.desc.trim() || !v.value.category.trim() || !v.value.date || !v.value.img) {
    alert('Iltimos, barcha maydonlarni to‘ldiring va rasm tanlang!')
    return
  }

  if (editId.value) {
    let index = list.value.findIndex(i => i.id === editId.value)
    if (index !== -1) list.value[index] = { id: editId.value, ...v.value }
    editId.value = null
  } else {
    list.value.push({ id: Date.now(), ...v.value })
  }

  v.value = { title: '', desc: '', category: '', date: '', img: '' }
  localStorage.setItem('vazifalar', JSON.stringify(list.value))
}

function ochir(id) {
  list.value = list.value.filter(i => i.id !== id)
  localStorage.setItem('vazifalar', JSON.stringify(list.value))
}

function tahrir(item) {
  editId.value = item.id
  v.value = { ...item }
}

function rasmTanlandi(e) {
  let file = e.target.files[0]
  if (!file) return
  let reader = new FileReader()
  reader.onload = () => v.value.img = reader.result
  reader.readAsDataURL(file)
}
</script>
