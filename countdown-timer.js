function countTime() {
    //获取系统时间
    //get system's time  
    var date = new Date();
    var now = date.getTime();
    //设置截止时间  
    //set time of death
    var str = "2022/6/20 00:00:00";
    var endDate = new Date(str);
    var end = endDate.getTime();

    //时间差  
    //time difference
    var leftTime = end - now;
    //定义变量 d,h,m,s保存倒计时的时间  
    //define variables d,h,m,s to save the countdown time
    var d, h, m, s;
    if (leftTime >= 0) {
        d = Math.floor(leftTime / 1000 / 60 / 60 / 24);
        h = Math.floor(leftTime / 1000 / 60 / 60 % 24);
        m = Math.floor(leftTime / 1000 / 60 % 60);
        s = Math.floor(leftTime / 1000 % 60);
    }
    //将倒计时赋值到span中
    //set countdown to the "<span>"
    document.getElementById("_d").innerHTML = d;
    document.getElementById("_h").innerHTML = h;
    document.getElementById("_m").innerHTML = m;
    document.getElementById("_s").innerHTML = s;
    //递归每秒调用countTime方法，显示动态时间效果
    //Call the countTime method recursively every second to display the dynamic time effect  
    setTimeout(countTime, 1000);

}
