import Vue from 'vue'
import Vuex from 'vuex'
import home from './home'
import search from './search'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        tableData: [],
        table: [],
        background: '',
        textcolor: '',
        user: '',
    },
    // 存储用户管理页面数据
    mutations: {
        addrecord(state, preload) {
            state.tableData = preload
            sessionStorage.setItem('rightsList', JSON.stringify(preload))
        },
    },
    actions: {},
    //getters 处理复杂逻辑（state中数据）
    // getters:{
    //     function(){
    //         return
    //     }
    // },
    modules: { home, search }
})