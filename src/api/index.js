//api统一管理
import requests from "./request";
import mockrequests from "./mockAjax"
//
export const reqgetCategoryList = () => requests.get(`/product/getBaseCategoryList`);
export const reqgetBannerList = () => mockrequests.get('/banner');
export const reqgetFloorlist = () => mockrequests.get('/foot');
//post接口传递参数，至少是一个空对象，否则会出错
export const reqGetSearchInfo = (params) => requests({ url: "/list", method: "post", data: params });