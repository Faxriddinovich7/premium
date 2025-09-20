<template>
  <div>
    <Header />

    <pre>{{ leads }}</pre>

    <Footer />
  </div>
</template>

<script setup>
import Header from '../components/header.vue'
import Footer from '../components/footer.vue'
import { ref, onMounted } from "vue";
import customApi from "../api/useApi.js";

const leads = ref(null)

async function renderLeads() {
  const res = await customApi.get(`/Students`, {
  })
  leads.value = res.data
}

onMounted(() => {
  renderLeads()
})
</script>
