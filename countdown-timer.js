var str;
function cTimer(sy, sm, sd) {

    // 获取系统时间
    var nowDate = new Date();
    var now = nowDate.getTime();

    // 如果目标时间未定义
    if (str == undefined) {
        // 设置目标时间
        str = sy + "/" + sm + "/" + sd;
        // 如果参数是字符串
        if (typeof sy == "string") {
            str = sy;
        } else if (sy == undefined) {
            // 如果啥也没设置
            str = "2222/2/2";

        };
        console.log(str);
    };

    // 获取截至时间
    var endDate = new Date(str);
    var end = endDate.getTime();

    // 得到剩余时间
    var leftTime = end - now;

    // 定义变量 d,h,m,s
    var d, h, m, s;

    // 将总时间拆开
    if (leftTime >= 0) {
        d = Math.floor(leftTime / 1000 / 60 / 60 / 24);
        h = Math.floor(leftTime / 1000 / 60 / 60 % 24);
        m = Math.floor(leftTime / 1000 / 60 % 60);
        s = Math.floor(leftTime / 1000 % 60);
        // 修改dom
        document.getElementById("cTimer").innerHTML = d + "day&nbsp;" + h + "h&nbsp;" + m + "min&nbsp" + s + "s";
    } else {
        document.getElementById("cTimer").innerHTML = "The Countdown timer has stopped";
    };

    // 每秒重复执行cTimer, 使倒计时动态
    setTimeout(cTimer, 1000);
};