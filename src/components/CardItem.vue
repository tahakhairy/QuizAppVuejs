<template>
  <div @click="navToQuiz" class="card">
    <img :src="quiz.img" alt="" />
    <div class="card-text">
      <h2>{{ quiz.name }}</h2>
      <p>{{ quiz.questions.length }} Questions</p>
    </div>
  </div>
</template>

<script setup>
import { defineProps } from 'vue'
import { useRouter } from 'vue-router'

// eslint-disable-next-line vue/no-setup-props-destructure
const { quiz } = defineProps(['quiz'])
const router = useRouter()
const navToQuiz = () => {
  router.push(`/quiz/${quiz.id}`)
}
</script>

<style scoped>
.card {
  width: 300px;
  overflow: hidden;
  border-radius: 2%;
  box-shadow: 1px 1px 10px rgba(0, 0, 0, 0.1);
  margin-bottom: 35px;
  margin-right: 20px;
  cursor: pointer;
}

.card img {
  width: 100%;
  height: 190px;
  margin: 0;
}

.card-text {
  padding: 0 5px;
}

.card-text h2 {
  font-weight: bold;
}
</style>
