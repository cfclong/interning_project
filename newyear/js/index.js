countTime();
var timer = null;
timer = setInterval(countTime,1000);
var time = new Date("12/09/2019");
console.log(time);
console.log("实例时间"+new Date("11/09/2019").getTime());
console.log("floor:"+Math.floor(new Date("11/09/2019").getTime()/1000));
//活动倒计时
//console.log("实例时间："+new Date(2019,11,31).to);
function countTime(){
	//得到倒计时li
	var timeList = document.querySelectorAll(".count-time");
	var startTime = new Date();
	var endTime = new Date(2019,0,7,23,59,59);
	var activeTime = endTime - startTime;
	if(activeTime <= 0){
		clearInterval(timer);
		timer = null;
		//alert("亲，活动已经结束啦2333");
		return;
	}
	//得到天数
	var dd = Math.floor(activeTime/1000/60/60/24);
	//得到小时
	var hh = Math.floor(activeTime/1000/60/60)%24;
	//得到分钟
	var mm = Math.floor(activeTime/1000/60)%60;
	//得到秒钟
	var ss = Math.floor(activeTime/1000)%60;
	
	timeList[0].innerHTML = Math.floor(dd/10);
	timeList[1].innerHTML = dd%10;
	timeList[2].innerHTML = Math.floor(hh/10);
	timeList[3].innerHTML = hh%10;
	timeList[4].innerHTML = Math.floor(mm/10);
	timeList[5].innerHTML = mm%10;
	timeList[6].innerHTML = Math.floor(ss/10);
	timeList[7].innerHTML = ss%10
}