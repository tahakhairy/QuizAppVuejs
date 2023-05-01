<template>
  <div class="results">
    <p>Your Results...</p>
    <h1>{{ score }} / {{ quizLength }}</h1>
    <router-link to="/">Go Back</router-link>
  </div>
</template>
<script setup>
import { defineProps } from 'vue'

defineProps(['quizLength', 'score'])
</script>
<style scoped>
.results {
  text-align: center;
  padding: 100px 0;
}

p {
  font-size: 25px;
}

h1 {
  font-size: 80px;
}
</style>
