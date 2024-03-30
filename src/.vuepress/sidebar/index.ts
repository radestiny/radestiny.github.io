import { sidebar } from "vuepress-theme-hope";

export default sidebar({
  "/zh/": [
    "",
    {
      text: "个人介绍",
      icon: "laptop-code",
      prefix: "demo/",
      link: "demo/",
      children: "structure",
    },
    {
      text: "文章",
      icon: "book",
      prefix: "posts/",
      children: "structure",
    },
    "intro",
    {
      text: "幻灯片",
      icon: "person-chalkboard",
      link: "https://plugin-md-enhance.vuejs.press/docs/guide/content/revealjs/demo.html",
    },
  ],
});
 