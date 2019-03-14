$(function() {
   var stu = document.querySelectorAll(".chooseDegree"); 
   var age = document.querySelectorAll(".chooseAge");
   var goal = document.querySelectorAll(".chooseGoal");
   
   // 设置默认提交值
   var stuVal = stu[0].value;
   var ageVal = age[0].value;
   var goalVal = goal[0].value;
   // console.log(stuVal);
   
   // 获取选中的值
   $('.chooseDegree').click(function() {
       stuVal = $(this).val();
   })
   $('.chooseAge').click(function() {
       ageVal = $(this).val();
   })
   $('.chooseGoal').click(function() {
       goalVal = $(this).val();
   })
   $('.js_submit').click(function() {
       // console.log(ageVal);
       var notes = '学历：' + stuVal + ' 年龄：' + ageVal + ' 目的：' + goalVal + ';';
       // console.log(notes);
       //$('input[type="radio"]').attr("checked", false);
       /*for(var i = 0; i < stu.length; i++){
           stu[i].checked = false;
       }*/
       var name = document.getElementById('name').value;
       var phone = document.getElementById('phone').value;
       if(name == ""){
           alert("请输入您的姓名");
           return;
       }
       var telReg = /^1[3-9]\d{9}$/;
       name = name.replace(/^\s*|\s*$/g, "");
       if(phone == "" || !telReg.test(phone)){
           alert("请输入正确的手机号")
           return;
       }
       var url_v = "//v.gaodun.com";
       var urlAjax = "/Wty/getInfo?callback=?";
       $.ajax({
           url: url_v + urlAjax,
           data: {
             phone: phone,
             name: name,
             source: 199,
             beizhu: notes,
             city: location.href
           },
           success:function(result) {
               if(result.status == 2){
                   alert("提交成功");
                   $('#name').val("");
                   $('#phone').val("");
               }
           },
           dataType:'jsonp'
       })
   })
});

// 
