import Layout from "@/layout/Index.vue";

export default [
  {
    path: "/",
    redirect: "/home",
    component: Layout,
    children: [
      {
        path: "home",
        name: "Home",
        component: () => import("@/pages/Home"),
        mate: { title: "首页", icon: "icon-shouye" },
      },
    ],
  },
  {
    path: "/about",
    component: Layout,
    children: [
      {
        path: "index",
        name: "About",
        component: () => import("@/pages/About"),
        mate: { title: "关于", icon: "icon-guanyu" },
      },
    ],
  },
  {
    path: "/nested",
    component: Layout,
    children: [
      {
        path: "nested-1",
        name: "Nested-1",
        component: () => import("@/pages/nested/nested-1/index"),
        mate: { title: "option1", icon: "icon-guanyu" },
        children: [
          {
            path: "nested-1-1",
            name: "Nested-1-1",
            component: () => import("@/pages/nested/nested-1/nested-1-1"),
            mate: { title: "option1-1", icon: "icon-guanyu" },
          },
          {
            path: "nested-1-2",
            name: "Nested-1-2",
            component: () => import("@/pages/nested/nested-1/nested-1-2"),
            mate: { title: "option1-2", icon: "icon-guanyu" },
          },
        ],
      },
      {
        path: "nested-2",
        name: "Nested-2",
        component: () => import("@/pages/nested/nested-2"),
        mate: { title: "option2", icon: "icon-guanyu" },
      },
    ],
  },
];
