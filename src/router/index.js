// import { createRouter, createWebHistory } from 'vue-router'
import { createRouter, createWebHashHistory } from 'vue-router'

import mainRouter from '../modules/main/router'

const routes = [
  {
    path: '/',
    ...mainRouter //Como es un objeto, se esparce para agregar las propiedades en este objeto
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

router.beforeEach((to, from, next) => {
  // Get the page title from the route meta data that we have defined
  // See further down below for how we setup this data
  const title = to.meta.title
// If the route has a title, set it as the page title of the document/page
  if (title) {
    document.title = title
  }
  // Continue resolving the route
  next()
})

// const router = createRouter({
//   history: createWebHistory(),
//   routes
// })

export default router