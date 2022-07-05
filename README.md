# Countdown-Timer | 倒计时器

![version](https://img.shields.io/badge/version-1.0.9-blue) ![JavaScript](https://img.shields.io/static/v1?label=Language&message=JavaScript&color=red) [![MIT license](https://img.shields.io/badge/License-MIT-blue.svg)](https://lbesson.mit-license.org/)

这是一个使用JavaScript编写的倒计时器, 适用于HTML等网页.

仓库中演示页面的Github Pages: <https://repo.fbik.top/Countdown-Timer/>

`Countdown-Timer`示范:我使用制作的倒计时网站: <https://countdown-timer.fbik.top/>

## 使用方法

在网页中引入`countdown-timer.js`. 以下为当`countdown-timer.js`在网页同级目录下的引入示范:

~~~HTML
<script src="./countdown-timer.js"></script>
~~~

在网页中, 给欲显示天数的标签添加`id`属性`cTimer`:
~~~HTML
<span id="cTimer"></span>
~~~

设置目标时间的方法有以下这些:

~~~js
// 将目标时间设置为2022年6月26日
cTimer(2022,6,26);

// 将目标时间设置为2022年6月, 及2022年6月1日
cTimer(2022,6);

// 将目标时间设置为2022年, 及2022年1月1日
cTimer(2022);

// 不设置时间, 目标时间会被自动设置成默认时间: 2222年2月2日
cTimer();
~~~
或者通过给目标时间变量赋值的方法, 以下为将目标时间设置为2022年6月26日的示范:
~~~js
var str = "2022/6/26";
cTimer();
~~~

在网页中执行函数的方法, 以下示范均将目标时间设置为2022年6月26日:

通过`<script>`标签执行函数. 注意该`<script>`标签的位置应该在`id`属性为`cTimer`的标签后面. 
~~~html
<script>cTimer(2022,6,26);</script>
~~~
或者
~~~html
<script>
    var str = "2022/6/26";
    cTimer();
</script>
~~~
或者使用给id为`cTimer`的标签或这个标签的父级标签添加`onload`属性.
~~~HTML
<body onload="cTimer(2022,6,26);">
    ......
</body>
~~~
