import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Vendor from './views/Vendor.vue'
import NewVendor from './views/NewVendor.vue'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/vendor',
      name: 'vendor',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: Vendor
    },{
      path: '/customer',
      name: 'customer',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/Customer.vue')
    },{
      path: '/newvendor',
      name: 'newvendor',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: NewVendor
    },{
      path: '/newcustomer',
      name: 'newcustomer',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/NewCustomer.vue')
    },{
      path: '/customercontent',
      name: 'customercontent',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/CustomerContent.vue')
    },{
      path: '/vendorcontent',
      name: 'vendorcontent',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/VendorContent.vue')
    }
  ]
})
