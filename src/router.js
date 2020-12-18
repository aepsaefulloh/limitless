import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

export default new Router({
    routes: [{
            path: "/",
            redirect: "/dashboard",
            component: () =>
                import ("@/view/layout/Layout"),
            children: [{
                    path: "/dashboard",
                    name: "dashboard",
                    component: () =>
                        import ("@/view/pages/Dashboard.vue")
                },
                {
                    path: "/Social-Media",
                    name: "SocialMedia",
                    component: () =>
                        import ("@/view/pages/social_media/Social-Media.vue"),
                    children: [{
                            path: "/social-media/stream",
                            name: "Stream",
                            component: () =>
                                import ("@/view/pages/social_media/Stream.vue")
                        },
                        {
                            path: "/social-media/overview",
                            name: "Overview",
                            component: () =>
                                import ("@/view/pages/social_media/Overview.vue")
                        },
                        {
                            path: "/social-media/content",
                            name: "Content",
                            component: () =>
                                import ("@/view/pages/social_media/Content.vue")
                        }, {
                            path: "/social-media/campaign",
                            name: "Campaign",
                            component: () =>
                                import ("@/view/pages/social_media/Campaign.vue")
                        },
                        {
                            path: "/social-media/conversation",
                            name: "Conversation",
                            component: () =>
                                import ("@/view/pages/social_media/Conversation.vue")
                        },
                        {
                            path: "/social-media/comparison",
                            name: "Comparison",
                            component: () =>
                                import ("@/view/pages/social_media/Comparison.vue")
                        },
                        {
                            path: "/social-media/community",
                            name: "Community",
                            component: () =>
                                import ("@/view/pages/social_media/Community.vue")
                        }
                    ]
                },
            ]
        },
        {
            path: "/custom-error",
            name: "error",
            component: () =>
                import ("@/view/pages/error/Error.vue"),
            children: [{
                    path: "error-1",
                    name: "error-1",
                    component: () =>
                        import ("@/view/pages/error/Error-1.vue")
                },
                {
                    path: "error-2",
                    name: "error-2",
                    component: () =>
                        import ("@/view/pages/error/Error-2.vue")
                },
                {
                    path: "error-3",
                    name: "error-3",
                    component: () =>
                        import ("@/view/pages/error/Error-3.vue")
                },
                {
                    path: "error-4",
                    name: "error-4",
                    component: () =>
                        import ("@/view/pages/error/Error-4.vue")
                },
                {
                    path: "error-5",
                    name: "error-5",
                    component: () =>
                        import ("@/view/pages/error/Error-5.vue")
                },
                {
                    path: "error-6",
                    name: "error-6",
                    component: () =>
                        import ("@/view/pages/error/Error-6.vue")
                }
            ]
        },
        {
            path: "/",
            component: () =>
                import ("@/view/pages/auth/login_pages/Login-1"),
            children: [{
                    name: "login",
                    path: "/login",
                    component: () =>
                        import ("@/view/pages/auth/login_pages/Login-1")
                },
                {
                    name: "register",
                    path: "/register",
                    component: () =>
                        import ("@/view/pages/auth/login_pages/Login-1")
                }
            ]
        },


        {
            path: "*",
            redirect: "/404"
        },
        {
            // the 404 route, when none of the above matches
            path: "/404",
            name: "404",
            component: () =>
                import ("@/view/pages/error/Error-3.vue")
        }
    ]
});