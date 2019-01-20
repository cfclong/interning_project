var timer = null ;
countTime()
timer = setInterval(countTime, 1000);
//活动倒计时函数
function countTime(){
	 //得到li标签
	 var timeList = document.querySelectorAll(".count-time");
	 var startTime = new Date();
	 //var endTime = new Date(2019,11,19);
	 var endTime = new Date(2019,0,2,9,0,0)
	 console.log("endTime: "+endTime.getTime()/1000);
	 console.log("startTime:  "+startTime.getTime());
	 var activeTime = endTime - startTime;
	 //console.log(activeTime);
	 if(activeTime <= 0){
		//alert("亲，活动已经结束啦!");
		clearInterval(timer);
		timer = null;
		timeList[0].innerHTML = 0;
	    timeList[1].innerHTML = 0;
		alert("亲，活动已经结束啦!");
		return;
	 }
	 //console.log(timeList);
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
	 timeList[7].innerHTML = ss%10;
	
 }
 
 teaTel();
 //点击获取二维码事件
function teaTel(){
	var body = document.querySelector('body');
	 var telPhone = document.querySelectorAll(".tel");
	 var groupTel = document.querySelector(".group");
	 var img = document.querySelector(".tel-img");
	 //获取遮罩层
	 //img.src = "./images/code-teacher1.jpg";
	 var mask = document.querySelector(".mask");
	 var oSpan = document.querySelector(".delete");
	 console.log(mask);
	 mask.style.display = "none";
	 for(let i=0;i<telPhone.length;i++){
		 telPhone[i].onclick = function(){
			 img.src = "./images/1.png";
			 console.log(img.src);
			 //alert("我被点击了")
			 if(mask.style.display == "none"){
				 mask.style.display = "block";
				 body.style.overflow = "hidden";
			 }
		 }
	 }
	 oSpan.onclick = function(){
		 if(mask.style.display == "block"){
			 mask.style.display = "none";
			 body.style.overflow = "auto";
		 }
	 }
	 groupTel.onclick = function(){
		 img.src = "./images/2.png";
		 console.log(img.src);
		 if(mask.style.display == "none"){
			mask.style.display = "block";
			body.style.overflow = "hidden";
		}
	 }
 }
 
 $(function(){
	 $('.js_bannerA').each(function(index){
       var that = $(this);
       that.on("click",function(){
           console.log(that.data('btnname'));

           sendCommonEvent('active_button',{
               'active_button':'投资理财双12专题页-顶部TAB',
               'button_value':that.data('btnname'),
               'PageUrl':'https://www.gaodun.com/touzilicai/doubletwelve/zhuanti/'
           });
       });
   });
   
   
   $('.js_course').each(function(index){
       var that = $(this);
       that.on("click",function(){
           console.log(that.data('name'));

           sendCommonEvent('active_button',{
               'active_button':'投资理财双12专题页-查看课程',
               'course_name':that.data('name'),
               'PageUrl':'https://www.gaodun.com/touzilicai/doubletwelve/zhuanti/m/'
           });
       });
   });


   $('.js_teacher').each(function(index){
       var that = $(this);
       that.on("click",function(){
           console.log(that.data('name'));

           sendCommonEvent('active_button',{
               'active_button':'投资理财双12专题页-咨询老师',
               'course_name':that.data('name'),
               'PageUrl':'https://www.gaodun.com/touzilicai/doubletwelve/zhuanti/m/'
           });
       });
   });


   $('.js_img').each(function(index){
       var that = $(this);
       that.on("click",function(){
           console.log(that.data('name'));
           console.log(that.data('btnname'))

           sendCommonEvent('active_button',{
               'active_button':'投资理财双12专题页-课程图片点击',
               'button_value':that.data('btnname'),
               'course_name':that.data('name'),
               'PageUrl':'https://www.gaodun.com/touzilicai/doubletwelve/zhuanti/m/'
           });
       });
   });
 })
 
 