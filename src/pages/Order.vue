<template>
  <p v-if="loading"></p>
<pre v-else >
  {{user}}
</pre>

</template>

<script setup>
import {useRoute} from "vue-router";
import {ref} from "vue";
let route = useRoute();

let userId = route.params.id

let user = ref([])
let loading = ref(false);
let error = ref("");
async function render () {
  try {
    loading.value = true;
    let data = await fetch(`https://fakerestapi.azurewebsites.net/api/v1/Books/${userId}`)
    let result = await data.json()
    user.value = result
  }catch (error) {
    error.value = error
  }
  finally {
    loading.value = false;
  }
}
render()
</script>