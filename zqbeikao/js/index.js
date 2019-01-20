$(function(){
	var $stu = $('.js_chooseDegree').eq(0).val();
	var $age = $('.js_chooseAge').eq(0).val();
	var $work = $('.js_chooseWork').eq(0).val();
	$('.js_chooseDegree').click(function(){
		var $this = $(this);
		$this.next().addClass("active");
		var other = $this.siblings().next();
		console.log(other);
		other.removeClass("active");
		$stu = $this.val();
	});
	$('.js_chooseAge').click(function(){
		var $this = $(this);
		//$age = $this.prev().val();
		$this.next().addClass("active");
		var other = $this.siblings().next();
		other.removeClass("active");
		$age = $this.val();
	});
	$('.js_chooseWork').click(function(){
		var $this = $(this);
		//$age = $this.prev().val();
		$this.next().addClass("active");
		var other = $this.siblings().next();
		other.removeClass("active");
		$work = $this.val();
	});
	//console.log($stu);
	$('.js_submit').click(function(){
		/*console.log("stu="+$stu);
		console.log("age="+$age);
		console.log("work="+$work);*/
		var notes = '学历：'+$stu+'年龄：'+$age+'工作：'+$work+';';
		var name = $('#name').val();
		//name = name.replace(/^\s*|\s*&/g,"");
		var phone = $('#phone').val();
		var telReg = /^1[3-9][0-9]{9}$/;
		if(name == ''){
			alert("请输入您的姓名");
			return;
		}
		name = name.replace(/^\s*|\s*&/g,"");
		console.log(name);
		if(phone == ''){
			alert("请输入您的手机号");
			return;
		}else if(!telReg.test(phone)){
			alert("请输入正确的手机号");
			return;
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
					$('#name').val("");
					$('#phone').val("");
				}
			},
			dataType:'jsonp'
		})
		//$stu = "";
		//$age = "";
	});
})