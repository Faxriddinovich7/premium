<template>
  <div>
    <Header />
    <main class="p-6">
      <h2 class="text-2xl mb-4 text-blue-500 font-bold">Support Sahifasi</h2>
      <div class="flex  justify-around items-center">
        <form class="max-w-md space-y-4">
          <input type="text" placeholder="Ismingiz" class="w-full border px-3 py-2 rounded"/>
          <input type="email" placeholder="Email" class="w-full border px-3 py-2 rounded"/>
          <textarea placeholder="Savol..." class="w-full border px-3 py-2 rounded h-28"></textarea>
          <Button id="support-submit">Yuborish</Button>
        </form>
        <div class="p-6">
          <div class="w-full max-w-sm mx-auto">
            <canvas ref="myChart"></canvas>
          </div>
        </div>
      </div>
      <h1 class="text-center font-bold text-3xl text-blue-500">Pictures</h1>
      <Swiper
          :scrollbar="{ hide: true }"
          :modules="modules"
          :space-between="20"
          :slides-per-view="3"
          class="mySwiper mt-6 h-[350px] rounded-2xl shadow-xl overflow-hidden"
      >
        <SwiperSlide>
          <img :src="registan" alt="apple14" class="w-full h-full object-cover"/>
        </SwiperSlide>
        <SwiperSlide>
          <img :src="nature" alt="book" class="w-full h-full object-cover"/>
        </SwiperSlide>
        <SwiperSlide>
          <img :src="ocean" alt="bookred" class="w-full h-full object-cover"/>
        </SwiperSlide>
        <SwiperSlide>
          <img :src="nature2" alt="laptop" class="w-full h-full object-cover"/>
        </SwiperSlide>
        <SwiperSlide>
          <img :src="china" alt="mockup8" class="w-full h-full object-cover"/>
        </SwiperSlide>
        <SwiperSlide>
          <img :src="beach" alt="notebook" class="w-full h-full object-cover"/>
        </SwiperSlide>
        <SwiperSlide>
          <img :src="forest" alt="notebookHp" class="w-full h-full object-cover"/>
        </SwiperSlide>
        <SwiperSlide>
          <img :src="horse" alt="samsung23" class="w-full h-full object-cover"/>
        </SwiperSlide>
        <SwiperSlide>
          <img :src="cat" alt="tony" class="w-full h-full object-cover"/>
        </SwiperSlide>
      </Swiper>

    </main>
    <Footer />
  </div>
</template>

<script setup>
import Header from '../components/header.vue'
import Footer from '../components/footer.vue'
import Button from '../components/button.vue'

import { Swiper, SwiperSlide } from 'swiper/vue'
import 'swiper/css'
import 'swiper/css/scrollbar'
import { Scrollbar } from 'swiper/modules'
const modules = [Scrollbar]

import registan from '../assets/registan.png'
import nature from '../assets/nature.png'
import ocean from '../assets/ocean.png'
import nature2 from '../assets/nature2.png'
import china from '../assets/china.png'
import beach from '../assets/beach.png'
import forest from '../assets/forest.png'
import horse from '../assets/horse.png'
import cat from '../assets/cat.png'

import { ref, onMounted } from 'vue'
import Chart from 'chart.js/auto'

const myChart = ref(null)

const data = {
  labels: ['Red', 'Green', 'Yellow', 'Grey', 'Blue'],
  datasets: [{
    label: 'My First Dataset',
    data: [11, 16, 7, 3, 14],
    backgroundColor: [
      'rgb(255, 99, 132)',
      'rgb(75, 192, 192)',
      'rgb(255, 205, 86)',
      'rgb(201, 203, 207)',
      'rgb(54, 162, 235)'
    ]
  }]
}

const config = {
  type: 'polarArea',
  data: data,
  options: {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: { position: 'top' },
      title: { display: true, text: 'Polar Area Chart' }
    }
  }
}

onMounted(() => {
  if (myChart.value) {
    new Chart(myChart.value, config)
  }
})
</script>
