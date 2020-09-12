import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import BuyDialogComponent from './components/Common/BuyDialog'
import vuetify from './plugins/vuetify'
import * as fb from 'firebase/app'

Vue.component ('app-buy-dialog', BuyDialogComponent)
Vue.config.productionTip = false;


new Vue({
  vuetify,
  router,
  store,
  render: h => h(App),
  created () {
      let firebaseConfig = {
          apiKey: 'AIzaSyD_NhYbakaR-zY7yiwvqPp74sDdorbLBo4',
          authDomain: 'online-project-c6893.firebaseapp.com',
          databaseURL: 'https://online-project-c6893.firebaseio.com',
          projectId: 'online-project-c6893',
          storageBucket: 'online-project-c6893.appspot.com',
          messagingSenderId: '443931069875',
          appId: '1:443931069875:web:1e4b0d83ae308695f40fc6',
          measurementId: 'G-WNJ5RLMVC8'
      };
// Initialize Firebase
fb.initializeApp(firebaseConfig)
fb.analytics()
fb.auth().onAuthStateChanged(user => {
    if(user){
        this.$store.dispatch('autoLoginUser', user)
    }
}),
    this.$store.dispatch('fetchProducts')
  }
}).$mount('#app')
