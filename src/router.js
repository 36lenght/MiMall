import Vue from 'vue'
import Router from 'vue-router'
import Home from './pages/home.vue'
import Index from './pages/index'
import Product from './pages/product'
import Detaile from './pages/detaile'
import Cart from './pages/cart'
import Order from './pages/order'
import OrderConfirm from './pages/orderConfirm.vue'
import OrderList from './pages/orderList.vue'
import OrderPay from './pages/orderPay.vue'
import OrderAlipay from './pages/alipay.vue'

Vue.use(Router);

export default new Router({
    routes: [
        {
            path:'/',
            name:'home',
            component:Home,
            redirect:'/index',
            children:[
                {
                    path:'/index',
                    name:'index',
                    component:Index,
                },
                {
                    path:'/product/:id',
                    name:'product',
                    component:Product,
                },
                {
                    path:'/detaile/:id',
                    name:'detaile',
                    component:Detaile,
                }
            ]
        },
        {
            path:'/cart',
            name:'cart',
            component:Cart,
        },
        {
            path:'/order',
            name:'order',
            component:Order,
            children:[
                {
                    path:'list',
                    name:'order-list',
                    component:OrderList,
                },
                {
                    path:'pay',
                    name:'order-pay',
                    component:OrderPay,
                },
                {
                    path:'confirm',
                    name:'order-confirm',
                    component:OrderConfirm,
                },
                {
                    path:'alipay',
                    name:'order-alipay',
                    component:OrderAlipay,
                }
            ]
        }
    ]
});