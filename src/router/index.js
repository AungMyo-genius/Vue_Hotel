import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import LoginForm from '../views/LoginForm.vue'
import SignUpForm from '../views/SignUpForm.vue'
import AdminPanel from '../views/AdminPanel.vue'
import NotFound from '../views/NotFound.vue'
import MenuData from '../components/Admin/MenuData.vue'
import AddMenu from '../components/Admin/AddMenu.vue'
import EditMenu from '../components/Admin/EditMenu.vue'
import StillWorking from '../components/Admin/StillWorking.vue'
import { auth } from '../firebase/config'

// auth guards
const requireAuth = (to, from,next) => {
  let user = auth.currentUser
  if(!user){
    next({name:'login'})
  } else {
    next()
  }
}

const noAuthrequire = (to,from,next) => {
  let user = auth.currentUser
  if(user){
    next({name:'admin'})
  } else {
    next()
  }
}

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
  },
  {
    path: '/login',
    name: 'login',
    component: LoginForm,
    beforeEnter: noAuthrequire,
  },
  {
    path: '/signup',
    name: 'signup',
    component: SignUpForm,
    beforeEnter: noAuthrequire,
  },
  {
    path: '/adminpanel',
    name: 'adminpanel',
    component: AdminPanel,
    redirect: '/adminpanel/menudata',
    beforeEnter: requireAuth,
    children:[ {
                path:'menudata',
                name:'menudata',
                component:MenuData},
                {
                  path:'addmenu',
                  name:'addmenu',
                  component:AddMenu},
                  {
                    path:'editmenu/:id',
                    name:'editmenu',
                    component:EditMenu},
                {
                  path:'stillworking',
                  name:'stillworking',
                  component:StillWorking} ]
  },
  {
    path: '/:catchAll(.*)',
    component: NotFound
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
