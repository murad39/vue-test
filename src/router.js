import Vue from 'vue'
import Router from 'vue-router'
import AuthGuard from './auth-guard'
import Home from './components/Home'
import Product from './components/Products/Product'
import NewProduct from './components/Products/NewProduct'
import ProductList from './components/Products/ProductList'
import Checkout from './components/User/Checkout'
import Login from './components/Auth/Login'
import Register from './components/Auth/Register'

Vue.use(Router);

export default new Router ({
    routes: [
        {path: '', component: Home},
        {path: '/login', component: Login},
        {path: '/register', component: Register},
        {path: '/product/:id', props: true, component: Product},
        {path: '/list', component: ProductList, beforeEnter : AuthGuard},
        {path: '/new', component: NewProduct, beforeEnter : AuthGuard},
        {path: '/checkout', component: Checkout, beforeEnter: AuthGuard},
    ],
    mode: 'history'
})