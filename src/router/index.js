import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Pagination from '@/views/PaginationView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/pagination',
      name: 'pagination',
      component: Pagination
    },
    {
      path: '/note-app',
      name: 'note-app',
      component: () => import('@/views/NoteAppView.vue')
    },
    {
      path: '/search-git',
      name: 'search-git',
      component: () => import('@/views/SearchGitView.vue')
    },
  ],
})

export default router
