import { reqgetCategoryList } from "@/api";

const state = {
    categoryList: [],
};
const mutations = {
    CATEGORYLIST(state, result) {
        state.categoryList = result.data;
    },
};
const actions = {
    //获取接口数据
    async getCategoryList({ commit }) {
        //reqgetCategoryList返回的是一个Promise对象
        //需要用await接受成功返回的结果，await必须要结合async一起使用（CP）
        let result = await reqgetCategoryList();
        if (result.code == 200) {
            commit("CATEGORYLIST", result);
            console.log(result.data)
        }
    },
};

export default {
    state,
    mutations,
    actions,
}