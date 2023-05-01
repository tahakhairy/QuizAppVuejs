<template>
  <the-header></the-header>
  <div class="options-container">
    <card-item v-for="quiz in quizes" :key="quiz.id" :quiz="quiz"></card-item>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import q from '@/data/quizes.json'
import CardItem from '@/components/CardItem.vue'
import TheHeader from '../components/TheHeader.vue'

const quizes = ref(q)
</script>

<style scoped>
.options-container {
  display: flex;
  flex-wrap: wrap;
  margin-top: 40px;
}
</style>
