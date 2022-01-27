function countTime(){var date=new Date();var now=date.getTime();

//在这里设置倒计时日期与时间
//set countdown date and time here
var str="2222/2/2 00:00:00";

var endDate=new Date(str);var end=endDate.getTime();var leftTime=end-now;var d,h,m,s;if(leftTime>=0){d=Math.floor(leftTime/1000/60/60/24);h=Math.floor(leftTime/1000/60/60%24);m=Math.floor(leftTime/1000/60%60);s=Math.floor(leftTime/1000%60)}document.getElementById("_d").innerHTML=d;document.getElementById("_h").innerHTML=h;document.getElementById("_m").innerHTML=m;document.getElementById("_s").innerHTML=s;setTimeout(countTime,1000)}
