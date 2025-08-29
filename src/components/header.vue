<template>
  <header class="bg-white shadow-md">
    <div class="max-w-6xl mx-auto px-4 py-3 flex justify-between items-center">
      <div class="flex items-center gap-2">
        <img src="../assets/vue.svg" alt="logo" class="w-8 h-8"/>
        <h1 class="text-xl font-bold text-blue-600">Premium App</h1>
      </div>
      <nav class="hidden md:flex gap-6 text-gray-700 font-medium">
        <router-link to="/card" class="hover:text-blue-500">Card</router-link>
        <router-link to="/orders" class="hover:text-blue-500">Orders</router-link>
        <router-link to="/support" class="hover:text-blue-500">Support</router-link>
        <router-link to="/contact" class="hover:text-blue-500">Contact</router-link>
        <router-link to="/profile" class="hover:text-blue-500">Profile</router-link>
      </nav>
    </div>
  </header>
</template>
