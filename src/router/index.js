import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/HomeView.vue' // 

const routes = [
  {
    // Document title tag
    // We combine it with defaultDocumentTitle set in `src/main.js` on router.afterEach hook
    meta: {
      title: "Araştırman",
    },
    path: "/",
    name: "dashboard",
    component: Home,
  },
  {
    meta: {
      title: "Literatür Taraması",
    },
    path: "/literature",
    name: "literature",
    component: () => import("@/views/LiteratureView.vue"),
  },

  {
    meta: {
      title: "Faydalı Araçlar",
    },
    path: "/tools",
    name: "tools",
    component: () => import("@/views/ToolsView.vue"),
  },
  {
    meta: {
      title: "İletişim",
    },
    path: "/contact",
    name: "contact",
    component: () => import("@/views/Contact.vue"),
  },

  // {
  //   meta: {
  //     title: "Ui",
  //   },
  //   path: "/ui",
  //   name: "ui",
  //   component: () => import("@/views/UiView.vue"),
  // },
  // {
  //   meta: {
  //     title: "Responsive layout",
  //   },
  //   path: "/responsive",
  //   name: "responsive",
  //   component: () => import("@/views/ResponsiveView.vue"),
  // },
];

const router = createRouter({
  // history: createWebHashHistory(),
    history: createWebHistory(),

  routes,
  scrollBehavior (to, from, savedPosition) {
    return savedPosition || { top: 0 }
  }
})

export default router
