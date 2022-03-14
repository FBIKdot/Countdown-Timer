# Countdown-Timer | 倒计时器

![JavaScript](https://img.shields.io/static/v1?label=Language&message=JavaScript&color=red) [![MIT license](https://img.shields.io/badge/License-MIT-blue.svg)](https://lbesson.mit-license.org/)

这是一个使用JavaScript编写的倒计时器, 适用于HTML等网页.

Github Pages:<https://repo.fbik.top/Countdown-Timer/>

使用示范站点: <https://countdown-timer.fbik.top/>

## 目录
1. [仓库内容](#仓库内容)
2. [使用方法](#使用方法)

## 仓库内容

main分支:

| 文件名 | 类型 | 内容 |
| :---- | :---- | :---- |
| `index.html` | HTML网页文件 | 这是一个网页引入示范 |
| `countdown-timer.js` | JavaScript语言文件 | Countdown-Timer本体 |
| `countdown-timer.easy.js` | JavaScript语言文件 | 为了方便使用的`countdown-timer.js`简化版 |
| LICENSE | 文件 | ~~有等于没有的~~开源许可证 |
| README.md | markdown文本 | 自述文件 |

example分支:

example文件夹下的页面是我制作的一个示范, 及我的倒计时站点的源代码. [这是该页面的链接](https://repo.fbik.top/Countdown-Timer/example/).


## 使用方法

在网页中引入`countdown-timer.js`. 以下为`countdown-timer.js`在根目录时的引入示范:

~~~HTML
<script src="./countdown-timer.js"></script>
~~~

修改倒计时日期与时间.

第一种方法是直接在网页中给`str`赋值, 以下为设置成2022年6月26日0时0分的示范:
~~~html
<script>var str = "2022/6/26 00:00:00";</script>
~~~

第二种方法是在`countdown-timer.js`里修改`str`所赋的值为倒计时日期与时间, 以下为设置成2022年6月26日0时0分的示范:

~~~JavaScript
var str = "2022/6/26 00:00:00";
~~~

在网页中, 在欲显示天数的标签添加id属性`cTimer`:
~~~HTML
<span id="cTimer"></span>
~~~

在网页的末尾中用`<script>`启动函数, 具体是在id属性为`cTimer`的标签段之后.

~~~HTML
<script>cTimer();</script>
~~~
或者使用给id为`cTimer`的标签或这个标签的父级标签添加`onload`属性.
~~~HTML
<body onload="cTimer()">......</body>
~~~
> 原因是因为函数执行时id属性为`cTimer`的标签没有加载会导致没法修改dom. 
