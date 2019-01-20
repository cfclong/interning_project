$(function(){
	var stu  = document.querySelectorAll(".chooseDegree");
	var age = document.querySelectorAll(".chooseAge");
	var work = document.querySelectorAll(".chooseWork");
	var sub = document.querySelector(".js-submit");
	var stuVal = stu[0].value;
	var ageVal = age[0].value;
	var workVal = work[0].value;
    var nameBlur = document.getElementById("name");
	var phoneBlur = document.getElementById("phone");
	var ele = document.querySelector("body");
	nameBlur.onblur = function(){
		ele.scrollIntoView(true);
	}
	phoneBlur.onblur = function(){
		ele.scrollIntoView(true);
	}
	$("body").delegate(".lxb-cb-input","blur",function(){
	  ele.scrollIntoView(true);
	});
	for(let i=0;i<stu.length;i++){
		stu[i].onclick = function(){
			stuVal = stu[i].value;
			setChoose(stu,stu.length,i);
		}
	}
	for(let i=0;i<age.length;i++){
		age[i].onclick = function(){
			ageVal = age[i].value;
			setChoose(age,age.length,i);
		}
	}
	for(let i=0;i<work.length;i++){
		work[i].onclick = function(){
			workVal = work[i].value;
			setChoose(work,work.length,i);
		}
	}
	function setChoose(obj,num,i){
		for(var j=0;j<num;j++){
			obj[j].nextElementSibling.style.color = "black";
		}
		obj[i].nextElementSibling.style.color = "white";
	}
	sub.onclick = function(){
		var notes = '学历：'+stuVal+' 年龄：'+ageVal+' 工作：'+workVal+'.';
		console.log(notes);
		var name = document.getElementById("name").value;
		console.log(name);
		var phone = document.getElementById("phone").value;
		if(name == ''){
			alert("我们知道你没输姓名哦2333");
			return;
		}
		var telReg = /^1[3-9]\d{9}$/;
		name = name.replace(/^\s*|\s*$/g,"");
		if(phone == ""){
			alert("请输入您的手机号");
			return;
		}else if(!telReg.test(phone)){
			alert("请不要随便输手机号哦2333");
			return;
		}else{
			var phoneArr = phone.split("").reverse();
			var phoneStr = "";
			for(var i=0;i<phoneArr.length;i++){
				phoneStr += phoneArr[i];
				if((i+1)%4==0){
					phoneStr += " "
				}
			}
			phone = phoneStr.split("").reverse().join("");
			//console.log(phone);
			//console.log(phoneArr);
		}
		var urlAjax = "/Wty/getInfo?callback=?";
		var url_v = "//v.gaodun.com";
		$.ajax({
			url:url_v + urlAjax,
			data:{
				phone:phone,
				name:name,
				source:199,
				beizhu:notes,
				city:location.href
			},
			success:function(result){
				if(result.status == 2){
					alert("提交成功");
					document.getElementById("name").value = "";
					document.getElementById("phone").value = "";
				}
			},
			dataType:'jsonp'
		})
	}
})
