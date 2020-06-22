# mysql-tutorial
使用 vuepress + markdown 记录 mysql 教程的笔记仓库

在线阅读：https://zq99299.github.io/mysql-tutorial/

## 运行方式

- 写作预览：

  yarn docs:dev
- 打包发布：

  yarn docs:build
  
## 说明
本分支是一个快速构建 [vuepress](https://vuepress.vuejs.org/zh/guide/) 常用仓库；里面包含了笔者经常使用的插件配置，和目录结构。
使用的是默认的主题。

```
|- docs     
    |- .vuepress        # vuepress 的配置目录；该目录下的详细配置，请阅读官网
        |- config.js    # 主要配置入口
        |- styles       # 覆盖默认主题的一些样式
        |- components   # vue 组件存放目录
    |- demo             # 一个文档写错示例
        |- index.js     # 侧边栏内容定制，在 config.js 中引用 
    |- deploy.sh        # 打包推送到 gh-pages 的脚本
    |- README.md        # 首页内容
```

如何推送到 gh-pages 的详细说明 [请参考这个简要的教程](https://zq99299.github.io/note-book/introduce/vue-press.html#%E5%88%9D%E4%BD%93%E9%AA%8C),
该教程有关 vuepress 使用的说明是 0.x 的，可以忽略，其他的则可以参考下

## 对于侧边栏的说明
  
在 docs 下，除了 `.vuepress` 目录外，都可以是你的文章。

一个项目下不能存放过多的内容，这会让以后的 build 过程变得很长。 
[note-book](https://github.com/zq99299/note-book) 就是一个大而全的笔记仓库。但是 build 过程很耗时。

所以笔者推荐的分类思路为：

1. 用一个大而全的仓库来存放一些零散的文章
2. 一个专题一个仓库；

    比如笔者的 [mysql-tutorial](https://github.com/zq99299/mysql-tutorial) 
    mysql 教程，该仓库里面全是一套一套的 mysql 笔记，目前有 3 套。
3. 在一个仓库下的 docs 目录下，一个小章节一个目录，如果是多套不同的课程，则一个目录一个  

关于侧边栏的更多配置，也可以参考笔者的其他仓库：如 https://github.com/zq99299/note-book
## 关于排版
    
中文文案排版指北 https://github.com/zq99299/chinese-copywriting-guidelines

中文文案排版指北，中的示例的确可以让文章整体看起来很舒服。所以尽量遵循该排版规则；

## 关于图片存储和跳转
图片保存就近原则而不是分离。这能节省很多时间，如下的示例：

```
|- chapter
  |- git
    |- assets    # 图片和当前编辑文件在同一目录的 assets 中
      |- imageA  
      |- imageB
    |- github.md   
    |- a.md   
```

项目内的文章跳转：

- 相对跳转: 强烈推荐
   
  如上面 git 目录下的文章 a.md 中要跳转到 github.md 中
  
  ```
  [github](./github.md)
  ```
- 绝对跳转：
   
  ```
   |- A
        |- c
            |- d
   |- B
        |- b.md
  ```
  
  如果有多个目录，且你的层级很深，如在 d 里面，要跳转到 B，则可以
  
  ```
  [B](/B/b.md)
  ```
  
**使用相对路径的好处：** 移植很好，你可以很方便的把一个目录移动到另外一个仓库下，只做很少的改动就可以正常工作。 
  
   



