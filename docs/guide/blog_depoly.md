---
icon: config
title: 个人博客搭建
date: 2022-05-18 21:52:11
category:
  - 每日一学
  - 非技术类
tag:
  - vuepress
  - nodejs
---
# 个人博客搭建

>前一段时间杂活太多，熬了N天夜之后，开始报复性玩耍。玩过之后太空虚了，现在每天学一点点，过几天全忘记，实在太菜。只好弄个小破站，记录下自己每天学习的东西。冲冲冲~

## 环境安装

### Node.js踩坑

去年年初，安装了`Node.js`，v14版的。学前端`vue`，创了很多demo项目，`npm`命令乱用，在C盘装了好多全局包，本地项目装了很多没有的包。总之，就是一塌糊涂。结果，今天下午用之前版本装`vuepress-theme-hope@next`始终报错，显示`get vue version failed`。百度、google一圈没找到错，直接重装了Node.js。

### 重装Node.js

先卸载Node.js, 因为之前版本没有配置全局模块和缓存cache的路径, 执行`npm install xx -g`语句，会将模块安装到`C:\Users\用户名\AppData\Roaming\npm`路径中，占C盘空间。

1. 卸载全局包、卸载node.js

![image-20220518135432369](https://www.giaott.com/images/2022/08/07/Atb1c.png)

​	先采用方法一删除全局包，可能有的删不干净，最后直接把安装的全局包和cache全删了

![image-20220518135159294](https://www.giaott.com/images/2022/08/07/AtmrR.png)

​	然后，在开发面板找到`node.js`点击卸载，可以看到之前安装下图的`nodejs`文件全删除了

![image-20220518135932833](https://www.giaott.com/images/2022/08/07/AtnG1.png)

2、 安装Node.js

参考 [这个网址](https://blog.csdn.net/m0_47759019/article/details/121874564)

首先，官网下载对应版本，然后全默认安装

![image-20220518140619462](https://www.giaott.com/images/2022/08/07/AtcuQ.png)

然后，配置环境变量

把全局包和缓存路径设置在安装路径，则在nodejs下创建两个文件夹【node_global】及【node_cache】，如图

![image-20220518212829688](https://www.giaott.com/images/2022/08/07/AtiHp.png)

创建完两个空文件夹之后，打开cmd命令窗口，输入

```shell
npm config set prefix "D:\APP2022\nodejs\\node_global"
npm config set cache "D:\APP2022\nodejs\\node_cache"
```

修改环境变量（其实没懂为啥）

![image-20220518213029237](https://www.giaott.com/images/2022/08/07/At3qY.png)

![image-20220518213015609](https://www.giaott.com/images/2022/08/07/At6Ns.png)

验证安装结果

![image-20220518140933250](https://www.giaott.com/images/2022/08/07/AtNLP.png)



## 创建博客项目

1. 首先，创建`cxblog`文件夹，该文件夹下继续创建`docs`文件夹

2. git管理项目：`git init`

![image-20220518143108173](https://www.giaott.com/images/2022/08/07/AtkoS.png)

3. 安装`vuepress-theme-hope@next`

```npm
npm init vuepress-theme-hope@next docs 
```

结果报错

![image-20220518143351084](https://www.giaott.com/images/2022/08/07/At9c0.png)

原因是`node_globa`l和`node_cache`路径改变为D盘安装路径，但没设置权限，解决方案如下

![image-20220518143456604](https://www.giaott.com/images/2022/08/07/AtS2f.png)

安装完`vuepress-theme-hope`。（其实啥技术含量没有，但遇到的bug无语死了)

![image-20220518144356808](https://www.giaott.com/images/2022/08/07/AtlrN.png)

4. 运行基础demo

   ```npm
   npm run docs:dev
   ```

   访问 http://localhost:8080/

![](https://www.giaott.com/images/2022/08/07/AtuGw.png)

## 项目介绍

### 目录结构

首先，先了解一下项目的整体目录结构

![img](https://img-blog.csdnimg.cn/img_convert/dce90d6262c9ab81cde327bb5ef39c6d.png)

如果运行过程中出现错误，可以尝试删除`.cache`和`.temp`两个临时文件夹。

### 个人主页

README.md

留坑...

### 项目首页

home.md

留坑...

### 导航栏

留坑...

### 侧边栏

留坑...

### 分类及标签

`vuepress-theme-hope`内置了分类和标签功能，可以让我们的项目文档更加结构化，查看内容也更方便，直接在文章顶部添加`category`和`tag`即可实现；

```markdown
---
title: 个人博客搭建
date: 2022-05-18 21:52:11
category:
  - 每日一学
  - 非技术类
tag:
  - vuepress
  - nodejs
---
```


## 参考资料

1. [Java 程序员进阶之路](https://jishuin.proginn.com/p/763bfbd75f48)

2. [mall](https://blog.csdn.net/zhenghongcs/article/details/124006402)

