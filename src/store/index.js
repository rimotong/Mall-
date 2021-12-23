import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        tableData: [],
        table: [],
        background: '',
        textcolor: '',
        user: JSON.parse(sessionStorage.getItem('user') || '[]'),
    },
    // 存储用户管理页面数据
    mutations: {
        addrecord(state, preload) {
            state.tableData = preload
            sessionStorage.setItem('rightsList', JSON.stringify(preload))
        },
        // 存储商品管理数据
        record(state, preload) {
            state.table = preload
            console.log(state.table);
            sessionStorage.setItem('liftList', JSON.stringify(preload))
        },
        setUser(state, preload) {
            state.user = preload;
            sessionStorage.setItem('user', JSON.stringify(state.user));
        },
    },
    actions: {},
    //getters 处理复杂逻辑（state中数据）
    // getters:{
    //     function(){
    //         return
    //     }
    // },
    modules: {}
})