<template>
  <button
      :id="id"
      class="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition"
      @click="$emit('click')">
    <slot ></slot>
  </button>
</template>

<script setup>
defineProps({
  id: String
})
</script>
