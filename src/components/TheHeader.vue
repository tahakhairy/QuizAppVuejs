<template>
  <header>
    <h1>Quizes</h1>
    <input v-model="search" type="text" placeholder="Search" />
  </header>
</template>

<script setup>
import { ref, watch } from 'vue'
import q from '@/data/quizes.json'

const quizes = ref(q)
const search = ref('')

watch(search, () => {
  quizes.value = q.filter((quiz) => quiz.name.toLowerCase().includes(search.value.toLowerCase()))
})
</script>

<style>
header {
  margin-bottom: 10px;
  margin-top: 30px;
  display: flex;
  align-items: center;
}

header h1 {
  font-weight: bold;
  margin-right: 30px;
}

header input {
  border: none;
  background-color: rgba(128, 128, 128, 0.1);
  padding: 10px;
  border-radius: 5px;
}
</style>
