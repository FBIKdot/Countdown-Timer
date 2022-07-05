var str;
function cTimer(sy, sm, sd) {

	// 获取系统时间
	var date = new Date();
	var now = date.getTime();

	// 判断str是否被自定义
	if (str == undefined) {
		str = sy + "/" + sm + "/" + sd;
		console.log(str);
		if (sd == undefined) {
			str = sy + "/" + sm + "/1";
		}
		;if (sm == undefined) {
			str = sy + "/1/1";
		}
		;if (sy == undefined) {
			str = "2222/2/2";
		}
		;console.log(str);
	}
	;// 获得截止时间
	var endDate = new Date(str);
	var end = endDate.getTime();

	// 时间差
	var leftTime = end - now;

	// 定义变量 d,h,m,s
	var d, h, m, s;

	// 赋值
	if (leftTime >= 0) {
		d = Math.floor(leftTime / 1000 / 60 / 60 / 24);
		h = Math.floor(leftTime / 1000 / 60 / 60 % 24);
		m = Math.floor(leftTime / 1000 / 60 % 60);
		s = Math.floor(leftTime / 1000 % 60);
	}
	;// 修改dom
	document.getElementById("cTimer").innerHTML = d + "day&nbsp;" + h + "h&nbsp;" + m + "min&nbsp" + s + "s";

	// 递归. 每秒调用countTime来显示动态时间效果
	setTimeout("cTimer()", 1000);
}
;