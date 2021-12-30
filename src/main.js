import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Carsousel from "@/components/swiper";
// import '@/mock/mockServe' //引入mock数据
//全局组件
import TypeNav from '@/components/TypeNav'
import "swiper/css/swiper.css";
import { Backtop, Icon } from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(Backtop);
Vue.use(Icon);
Vue.component(TypeNav.name, TypeNav)
Vue.component(Carsousel.name, Carsousel)

Vue.config.productionTip = false

new Vue({
    //全局事件总线
    beforeCreate() {
        Vue.prototype.$bus = this;
    },
    router,
    store,
    render: h => h(App),
}).$mount('#app')