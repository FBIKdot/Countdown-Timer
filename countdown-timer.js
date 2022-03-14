function countTime() {

    //获取系统时间
    var date = new Date();
    var now = date.getTime();

    //设置截止时间
    //var str = "2222/2/2 00:00:00";
    var endDate = new Date(str);
    var end = endDate.getTime();
    
    //时间差  
    var leftTime = end - now;
    //定义变量 d,h,m,s保存倒计时的时间
    var d, h, m, s;
    if (leftTime >= 0) {
        d = Math.floor(leftTime / 1000 / 60 / 60 / 24);
        h = Math.floor(leftTime / 1000 / 60 / 60 % 24);
        m = Math.floor(leftTime / 1000 / 60 % 60);
        s = Math.floor(leftTime / 1000 % 60);
    }
    //修改dom
    document.getElementById("_d").innerHTML = d;
    document.getElementById("_h").innerHTML = h;
    document.getElementById("_m").innerHTML = m;
    document.getElementById("_s").innerHTML = s;
    //递归，每秒调用countTime，显示动态时间效果
    setTimeout("countTime()", 1000);
}
