//设置截止时间
//var str = "2222/2/2 00:00:00"

function cTimer(){var date=new Date();var now=date.getTime();var endDate=new Date(str);var end=endDate.getTime();var leftTime=end-now;var d,h,m,s;if(leftTime>=0){d=Math.floor(leftTime/1000/60/60/24);h=Math.floor(leftTime/1000/60/60%24);m=Math.floor(leftTime/1000/60%60);s=Math.floor(leftTime/1000%60)}document.getElementById("cTimer").innerHTML=d+"day&nbsp;"+h+"h&nbsp;"+m+"min&nbsp"+s+"s";setTimeout("cTimer()",1000)}
