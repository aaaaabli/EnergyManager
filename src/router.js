import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

export default new Router({
    mode: "history",
    base: process.env.BASE_URL,
    routes: [{
            path: "/main",
            name: "main",
            component: () =>
                import ("./views/Main.vue"),
            children: [{
                    path: "energymanager",
                    name: "energymanager",
                    component: () =>
                        import ("./views/MainSon/EnergyManager.vue")
                },
                {
                    path: "energycheck",
                    name: "energycheck",
                    component: () =>
                        import ("./views/MainSon/EnergyCheck.vue")
                },
                {
                    path: "energyproduct",
                    name: "energyproduct",
                    component: () =>
                        import ("./views/MainSon/EnergyProduct.vue")
                },
                {
                    path: "usermanager",
                    name: "usermanager",
                    component: () =>
                        import ("./views/MainSon/UserManager.vue")
                }
            ]
        },
        {
            path: "/",
            name: "login",
            component: () =>
                import ("./views/Login.vue")
        },
        {
            path: "/register",
            name: "register",
            component: () =>
                import ("./views/Register.vue")
        },
        {
            path: "/main/energymanager",
            name: "energymanager",
            component: () =>
                import ("./views/MainSon/EnergyManager.vue")
        }
    ]
});