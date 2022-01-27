# Countdown-Timer | 倒计时器

![JavaScript](https://img.shields.io/static/v1?label=Language&message=JavaScript&color=red) [![MIT license](https://img.shields.io/badge/License-MIT-blue.svg)](https://lbesson.mit-license.org/)

这是一个使用JavaScript编写的倒计时器, 适用于HTML等网页.

## 目录
1. [仓库内容](#仓库内容)
2. [获取](#获取)
3. [使用方法](#使用方法)

## 仓库内容

main分支:

| 文件名 | 类型 | 内容 |
| :---- | :---- | :---- |
| `index.html` | HTML网页文件 | 这是一个网页引入示范 |
| `countdown-timer.js` | JavaScript语言文件 | Countdown-Timer本体 |
| `countdown-timer.easy.js` | JavaScript语言文件 | 为了方便使用的`countdown-timer.js`简化版 |
| LICENSE | 文件 | 开源许可证 |
| README.md | markdown文本 | 自述文件 |

example分支:

example文件夹下的页面是我制作的一个示范, [这是该页面的链接](https://fbik.top/Countdown-Timer/example/).

## 获取

你可以通过`git`获取整个仓库.

~~~terminal
$ git clone https://github.com/bovinebeta/Countdown-Timer
~~~

你可以直接通过浏览器从该仓库的[Github Page](http://fbik.top/Countdown-Timer/countdown-timer.js)将`countdown-timer.js`保存至设备, 或使用`wget`获取.

~~~terminal
$ wget http://fbik.top/Countdown-Timer/countdown-timer.js
~~~

## 使用方法

修改倒计时日期与时间.

在`countdown-timer.js`里修改`str`变量为倒计时日期与时间, 以下为设置成2022年6月26日0时0分的示范:

~~~JavaScript
var str = "2022/6/26 00:00:00";
~~~

在网页中引入`countdown-timer.js`. 以下为`countdown-timer.js`在根目录时的引入示范:

~~~HTML
<script src="./countdown-timer.js"></script>
~~~

在网页中, 在欲显示天数的位置添加:
~~~HTML
<span id="_d"></span>
~~~

在网页中, 在欲显示小时的位置添加:
~~~HTML
<span id="_h"></span>
~~~

在网页中, 在欲显示分钟的位置添加:
~~~HTML
<span id="_m"></span>
~~~

在网页中, 在欲显示秒的位置添加:
~~~HTML
<span id="_s"></span>
~~~

