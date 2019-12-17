import Vue from 'vue'
import VueRouter from 'vue-router'
// import Home from '../views/Home.vue'
// import Category from '../views/Category.vue'
// import Cart from '../views/Cart.vue'
// import Profile from '../views/Profile'
let Home = () => import('../views/Home.vue')
let Category = () => import('../views/Category.vue')
let Cart = () => import('../views/Cart.vue')
let Profile = () => import('../views/Profile.vue')
import Detail from '../views/Detail'
import FooterBar from '../components/FooterBar'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    // component: Home,
    components: {
      default: Home,
      'footer-bar': FooterBar
    },
    meta: {
      keepAlive: true
    }
  },
  {
    path: '/category',
    name: 'category',
    components: {
      default: Category,
      'footer-bar': FooterBar
    },
    meta: {
      keepAlive: true
    }
  },
  {
    path: '/cart',
    name: 'Cart',
    components: {
      default: Cart,
      'footer-bar': FooterBar
    },
    meta: {
      keepAlive: true
    }
  },
  {
    path: '/profile',
    name: 'profile',
    components: {
      default: Profile,
      'footer-bar': FooterBar
    }
  },
  {
    path: '/detail',
    name: 'detail',
    component: Detail
  },
]

const router = new VueRouter({
  routes
})

export default router
