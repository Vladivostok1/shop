import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false
import '@/assets/css/reset.css'
import '@/assets/js/rem.js'

import '@/mock/mock.js'

import { Button ,NavBar,Icon,Tabbar,
   TabbarItem,Swipe, SwipeItem ,CellGroup,
   Lazyload,Tab, Tabs,Field,Toast,Row,Col,List
  ,PullRefresh ,GoodsAction,GoodsActionIcon,GoodsActionButton
   ,Card,SubmitBar  } from 'vant'
import 'vant/lib/index.css';
Vue.use(Toast).use(Button).use(NavBar).use(Icon).use(Tabbar).use(TabbarItem)
.use(Swipe).use(SwipeItem).use(Lazyload).use(Tab).use(Tabs).use(Field)
.use(CellGroup).use(Row).use(Col).use(List).use(PullRefresh)
.use(GoodsAction).use(GoodsActionIcon).use(GoodsActionButton)
.use(Card).use(SubmitBar)
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
