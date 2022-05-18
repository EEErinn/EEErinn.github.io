import { navbar } from "vuepress-theme-hope";

export default navbar([
  "/",
  // "/home",
  { 
    text: "每日一学", 
    icon: "creative", 
    link: "/guide/" 
  },
  {
    text: "模块学习",
    icon: "edit",
    link: "/posts/",
  },
  {
    text: "c++开发",
    icon: "note",
    link: "/c++/",
  },
  {
    text: "java开发",
    icon: "edit",
    link: "/java/",
  },
  // {
  //   text: "主题文档",
  //   icon: "note",
  //   link: "https://vuepress-theme-hope.github.io/v2/zh/",
  // },
]);
