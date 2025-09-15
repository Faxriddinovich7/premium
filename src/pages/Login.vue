<template>
  <div class="min-h-screen flex items-center justify-center bg-[#f2f4f6]">
    <div class="bg-white rounded-2xl shadow-xl w-[350px] md:w-[400px] p-6 relative">

      <h2 class="text-2xl font-semibold text-center mb-4">Sign in</h2>
      <form @submit.prevent="handleSubmit"  class="flex flex-col gap-4">
        <input
            v-model="phone"
            type="tel"
            placeholder="Enter your number"
            class="border border-gray-300 rounded-xl px-4 py-2 outline-none focus:border-purple-500"
        />

        <input
            v-model="password"
            type="text"
            placeholder="Enter your password"
            class="border border-gray-300 rounded-xl px-4 py-2 outline-none focus:border-purple-500"
        />

        <button type="submit" class="bg-purple-600 text-white rounded-xl py-2 hover:bg-purple-700 transition">
          Sign in
        </button>
      </form>
      <p class="text-center text-gray-500 mt-6 text-sm">
        Don't have an account?
        <a href="#" class="text-blue-600 font-medium"> Sign up</a>
      </p>
    </div>
  </div>
</template>

<script setup>
import { loginUseStore } from "../store/loginUse.js";
import { ref} from "vue";

const useStore = loginUseStore()
const phone = ref('')
const password = ref('')

const handleSubmit =  () => {
  useStore.login({
    phoneNumber: phone.value,
    password: password.value,
  })
}
</script>