import { createRouter, createWebHistory } from 'vue-router'
import QuizesView from '@/views/QuizesView.vue'
import QuizView from '@/views/QuizView.vue'
const routes = [
  {
    path: '/',
    name: 'quizes',
    component: QuizesView
  },
  {
    path: '/quiz/:id',
    name: 'quiz',
    component: QuizView
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
