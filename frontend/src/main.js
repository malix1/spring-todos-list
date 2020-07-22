import Vue from 'vue'
import App from './App.vue'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import Foo from "./components/Foo"
import HelloWorld from "./components/HelloWorld"
import VueRouter from 'vue-router'

Vue.use(VueRouter)
Vue.config.productionTip = false
Vue.use(BootstrapVue)
Vue.use(IconsPlugin)

const routes = [
  { path: '/foo', component: Foo },
  { path: '/', component: HelloWorld },
]

const router = new VueRouter({
  routes,
  mode:"history" // short for `routes: routes`
})

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
