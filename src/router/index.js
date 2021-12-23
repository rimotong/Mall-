import Vue from "vue";
import VueRouter from "vue-router";
import Login from "../pages/Login";
import home from "../pages/home";
import Register from "../pages/Register";
import search from "../pages/Search";

const originalPush = VueRouter.prototype.push
    //第一个参数:往哪里跳转（传递哪些参数）
VueRouter.prototype.push = function push(location) {
    //call||apply 都可以篡改函数的上下文一次  不同点：call传递参数用逗号隔开，apply方法执行，传递数组
    return originalPush.call(this, location).catch(err => err)
}

Vue.use(VueRouter);

const routes = [{
        path: "/",
        redirect: "/home",
    },
    {
        path: "/home",
        component: home,
        name: "home",
        meta: { title: "主页" }
    },
    {
        path: "/Login",
        component: Login,
        name: "Login",
        meta: { title: "登录", msg: false }
    },
    {
        path: "/Register",
        component: Register,
        name: "Register",
        meta: { title: "注册", msg: false }
    },
    {
        path: "/search/:keyword",
        component: search,
        name: "search",
        meta: { title: "搜索" },
        props: true
    },
    // {
    //     path: "/404",
    //     name: "notFound",
    //     component: notFound
    // }, 
    // {
    //     path: "*", // 此处需特别注意置于最底部
    //     redirect: "/404"
    // }
];

const router = new VueRouter({
    routes,
    mode: "history", //兼容性略差
});
// if (to.path == "/login") {
//     next();
// } else {
//     let token = window.sessionStorage.getItem("user"); //username

//     if (!token) {
//         next("/login");
//     } else {
//         next();
//     }
// }
//路由添加权限配置
// if(to.meta.isAuth)
router.beforeEach((to, from, next) => {
    if (to.meta.isAuth) {
        let token = window.sessionStorage.getItem("user"); //username
        if (!token) {
            next("/login");
        } else {
            next();
        }
    } else {
        next();
    }
});
//后置路由守卫
router.afterEach((to, from) => {
    document.title = to.meta.title || "后台管理系统"
})

export default router;