import {
  createRouter,
  createWebHistory,
  type RouteLocationNormalized,
} from 'vue-router'
import { ref } from 'vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'web-page',
      component: () => import('@/views/WebPage.vue'),
      children: [
        {
          path: '',
          name: 'home',
          component: ()=> import('@/views/HomePage.vue'),
        },
        {
          path: '/about',
          name: 'about',
          component: () => import('@/views/AboutPage.vue'),
        },
        {
          path: '/chatbot',
          name: 'chatbot',
          component: ()=>import('@/views/ChatbotPage.vue'),
        },
        {
          path: '/contacts',
          name: 'contacts',
          component: ()=> import('@/views/ContactPage.vue'),
        },
        {
          path: '/service-finder',
          name: 'service-finder',
          component: ()=> import('@/views/ServiceFinder.vue'),
        }
      ]
    }
  ],
  scrollBehavior(to:RouteLocationNormalized, from:RouteLocationNormalized){
 return new Promise((resolve, reject)=>{
   const windowScreen = ref(window.innerWidth)
   // for small devices I delay for 500ms that the side nav closes before scrolling to top
   if(windowScreen.value < 768 ){
     setTimeout(()=>{
       console.log("small screens")
       resolve({
         top: 0,
         behavior: 'smooth'
       })
     }, 500)
   } else {
     setTimeout(()=>{
       console.log("large screens")
       resolve({
          top: 0,
          behavior: 'smooth'
       })
     }, 0)
   }
   }
 )
  }
})

export default router
