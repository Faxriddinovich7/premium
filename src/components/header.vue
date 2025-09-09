<template>
  <header class="bg-white shadow-md">
    <div class="max-w-6xl mx-auto px-4 py-3 flex justify-between items-center text-gray-900">
      <div class="flex items-center gap-2">
        <img src="../assets/vue.svg" alt="logo" class="w-8 h-8"/>
        <h1 class="text-xl font-bold text-blue-600">{{ $t("appName") }}</h1>
      </div>
      <nav class="hidden md:flex gap-6 text-gray-700 font-medium">
        <router-link to="/card" class="hover:text-blue-500">{{ $t("card") }}</router-link>
        <router-link to="/orders" class="hover:text-blue-500">{{ $t("orders") }}</router-link>
        <router-link to="/support" class="hover:text-blue-500">{{ $t("support") }}</router-link>
        <router-link to="/contact" class="hover:text-blue-500">{{ $t("contact") }}</router-link>
        <router-link to="/profile" class="hover:text-blue-500">{{ $t("profile") }}</router-link>
      </nav>

      <select v-model="locale.value" @change="saveLang" class="text-black  border rounded px-2 py-1 text-sm">
        <option value="uz">Uzbek</option>
        <option value="ru">Русский</option>
        <option value="en">English</option>
      </select>
    </div>
  </header>
</template>

<script setup>
import { useI18n } from 'vue-i18n'

const { t, locale } = useI18n()

const savedLang = localStorage.getItem("lang")
if (savedLang) {
  locale.value = savedLang
}

const saveLang = () => {
  localStorage.setItem("lang", locale.value)
}
</script>
