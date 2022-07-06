# Countdown-Timer | 倒计时器

![version](https://img.shields.io/badge/version-1.1.0-blue) ![JavaScript](https://img.shields.io/static/v1?label=Language&message=JavaScript&color=red) [![MIT license](https://img.shields.io/badge/License-MIT-blue.svg)](https://lbesson.mit-license.org/)

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

通过数值参数:
~~~js
// 将目标时间设置为2022年6月26日
cTimer(2022,6,26);

// 将目标时间设置为2022年6月, 及2022年6月1日
cTimer(2022,6);

// 将目标时间设置为2022年, 及2022年1月1日
cTimer(2022);
~~~
通过字符串参数, 以下为将目标时间设置为2022年6月26日的示范:
~~~js
cTimer("2022/6/26");
~~~
或者通过给目标时间变量赋值的方法, 以下为将目标时间设置为2022年6月26日的示范:
~~~js
var str = "2022/6/26";
cTimer();
~~~
错误示范:
~~~js
// 注意, 以下目标时间设置方法是错误的!
cTimer(2022/6/26); // 将会把目标时间年份设置为12.961538461538462
~~~
通过`Countdown-Timer`代码的默认时间:
~~~js
// 将目标时间设置为默认时间, 默认为2222/2/2. 可以通过修改 countdown-timer.js 代码来修改默认时间
cTimer();
~~~
在网页中执行函数的方法, 以下示范均将目标时间设置为2022年6月26日:

通过`<script>`标签执行函数. 注意该`<script>`标签的位置应该在`id`属性为`cTimer`的标签后面. 
~~~html
<!--通过数值-->
<script>cTimer(2022,6,26);</script>

<!--通过数组-->
<script>cTimer("2022/6/26");</script>
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
<!--通过数值-->
<body onload="cTimer(2022,6,26);">
    ......
</body>

<!--通过数组-->
<body onload="cTimer('2022/6/26');">
    ......
</body>
~~~
## 感言
最早我是需要制作一个网页倒计时, 之后在我寻找示范时找到了一个我认为简单且有效的代码. 但是它需要在`js`代码中设置目标时间, 我觉得这很麻烦. 我希望通过参数来设置目标时间, 所以我开始试着实现以下功能:
~~~js
// 当初我的愿望
cTimer(2222,2,2);
cTimer("2222/2/2");
~~~
可能实现这个愿望对于你来说非常简单, 不过对于刚开始接触`JavaScript`的我来说这是个大难题.
感谢 [HIMlaoS_Misa](https://github.com/MisaLiu) 对于我测试代码时的建议. 这个方法非常有效, 这让我通过不断的测试学会了很多知识点.
