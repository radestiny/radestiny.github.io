import { navbar } from "vuepress-theme-hope";

export default navbar([
  "/",
  "/demo/",
  {
    text: "笔记",
    icon: "pen-to-square",
    prefix: "/docs/posts/",
    children: [
      { text: "数学", icon: "pen-to-square", link: "cherry" },
      { text: "程序是怎么跑起来的", icon:"pen-to-square", link: "tomato" },
    ],
  },
  {
    text: "C 语言",
    icon: "pen-to-square",
    prefix: "/docs/c_language/",
    children: [
      { text: "C 语言", icon: "pen-to-square", link: "c_language" },
    ],
  },
  {
    text: "随笔",
    icon: "pen-to-square",
    prefix: "/docs/note/",
    children: [
      { text: "随笔", icon: "pen-to-square", link: "essay" },
    ],
  },
  {
    text: "V2 文档",
    icon: "pen-to-square",
    link: "",
  },
]);
