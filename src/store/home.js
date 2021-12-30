import { reqgetCategoryList, reqgetBannerList, reqgetFloorlist } from "@/api";

const state = {
    categoryList: [],
    Bannerlist: [],
    floorlist: [],
};
const mutations = {
    CATEGORYLIST(state, result) {
        state.categoryList = result.data;
    },
    GETBANNERLIST(state, result) {
        state.Bannerlist = result.data.list
    },
    GETFLOORLIST(state, result) {
        state.floorlist = result.data
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
            // console.log(result.data)
        }
    },
    async getBannerlist({ commit }) {
        //reqgetCategoryList返回的是一个Promise对象
        //需要用await接受成功返回的结果，await必须要结合async一起使用（CP）
        let result = await reqgetBannerList();
        if (result.code == 200) {
            commit("GETBANNERLIST", result);
        }
    },
    async getFloorlist({ commit }) {
        //reqgetCategoryList返回的是一个Promise对象
        //需要用await接受成功返回的结果，await必须要结合async一起使用（CP）
        let result = await reqgetFloorlist();
        if (result.code == 200) {
            commit("GETFLOORLIST", result);
            // console.log(result.data)
        }
    },
};

export default {
    state,
    mutations,
    actions,
}