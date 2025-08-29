<template>
  <div>
    <nav class="bg-blue-200 p-4 flex gap-6">
      <router-link to="/card" class="hover:underline">Card</router-link>
      <router-link to="/orders" class="hover:underline">Orders</router-link>
      <router-link to="/support" class="hover:underline">Support</router-link>
      <router-link to="/contact" class="hover:underline">Contact</router-link>
      <router-link to="/profile" class="hover:underline">Profile</router-link>
    </nav>
    <router-view />
  </div>
</template>

<script setup>

</script>






