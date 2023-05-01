<template>
  <div>
    <header>
      <h4>Question {{ questionStatus }}</h4>
      <div class="bar">
        <div class="completion" :style="{ width: progressBar }"></div>
      </div>
    </header>
    <div v-if="!showResult">
      <div class="question-container">
        <h1 class="question">{{ currQuestion[currQuestionIndex].text }}</h1>
      </div>
      <div class="options-container">
        <div
          @click="answerQuestion(option.isCorrect)"
          v-for="option in currQuestion[currQuestionIndex].options"
          :key="option.id"
          class="option"
        >
          <p class="option-label">{{ option.label }}</p>
          <div class="option-value">
            <p>{{ option.text }}</p>
          </div>
        </div>
      </div>
    </div>
    <results-view v-else :quizLength="quiz.questions.length" :score="score"></results-view>
  </div>
</template>

<script setup>
import { useRoute } from 'vue-router'
import { ref, computed } from 'vue'
import ResultsView from '@/views/ResultsView.vue'
import quizes from '../data/quizes.json'

const route = useRoute()
const quizId = parseInt(route.params.id)
const quiz = quizes.find((q) => q.id === quizId)
const currQuestionIndex = ref(0)
const currQuestion = ref(quiz.questions)
const score = ref(0)
const showResult = ref(false)
const questionStatus = computed(() => `${currQuestionIndex.value}/${quiz.questions.length}`)
const progressBar = computed(() => `${(currQuestionIndex.value / quiz.questions.length) * 100}%`)

const answerQuestion = (isCorrect) => {
  if (isCorrect) {
    score.value++
  }
  if (quiz.questions.length - 1 === currQuestionIndex.value) {
    showResult.value = true
  }
  currQuestionIndex.value++
}
</script>

<style scoped>
header {
  margin-top: 20px;
  display: block;
}

header h4 {
  font-size: 30px;
}

.bar {
  width: 300px;
  height: 50px;
  border: 3px solid bisque;
}

.completion {
  height: 100%;
  width: 0%;
  background-color: bisque;
}

.question-container {
  margin-top: 20px;
}

.question {
  font-size: 40px;
  margin-bottom: 20px;
}

.option {
  display: flex;
  margin-bottom: 20px;
  cursor: pointer;
}

.option-label {
  width: 50px;
  height: 50px;
  background-color: bisque;
  font-size: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.option-value {
  background-color: rgb(244, 239, 239);
  width: 100%;
  font-size: 30px;
  padding: 0 20px;
}
</style>
