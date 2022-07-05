# Countdown-Timer | 倒计时器

![JavaScript](https://img.shields.io/static/v1?label=Language&message=JavaScript&color=red) [![MIT license](https://img.shields.io/badge/License-MIT-blue.svg)](https://lbesson.mit-license.org/)

这是一个使用JavaScript编写的倒计时器, 适用于HTML等网页.

Github Pages:<https://repo.fbik.top/Countdown-Timer/>

我使用`Countdown-Timer`制作的倒计时网站: <https://countdown-timer.fbik.top/>

example分支下的页面是我制作的一个示范, 及我的倒计时网站的源代码. [这是该页面的链接](https://repo.fbik.top/Countdown-Timer/example/).


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
