import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import CarsList from '../views/CarsList.vue'
import CarDetails from '../views/CarDetails.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/Carslist',
      name: 'Carslist',
      component: CarsList,
    },
    {
      path: '/Carslist/:id',
      name: 'CarDetails',
      component: CarDetails,
    }
  ]
})

export default router
