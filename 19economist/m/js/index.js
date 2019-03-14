$(function() {
    var stu = document.querySelectorAll(".chooseDegree");
    var age = document.querySelectorAll(".chooseAge");
    var goal = document.querySelectorAll(".chooseGoal");
    
    
    var stuVal = stu[0].value;
    var ageVal = age[0].value;
    var goalVal = goal[0].value;
    /*for(let i = 0; i < stu.length; i++){
        $('.chooseDegree').click(function() {
            var $this = $(this);
            for(let j = 0;j < stu.length; j++){
                stu[j].nextElementSibling.style.color = "#464646";
            }
            $this.next().css({
                color: 'white'
            });
            stuVal = $this.val();
        })
    }*/
    // 选择学历
    radioStyle('.chooseDegree', stu, stuVal);
    // 选择工作经验
    radioStyle('.chooseAge', age, ageVal);
    // 选择考证目的
    radioStyle('.chooseGoal', goal, goalVal);
    
    $('.js-submit').click(function() {
        var notes = '学历：' + stuVal + '年龄：' + ageVal + '目的：' + goalVal + ';';
        console.log(notes);
        var name = document.getElementById('name').value;
        var phone = document.getElementById('phone').value;
        if(name == ''){
            alert('我们知道你没输名字哦2333');
            return;
        }
        var telReg = /^1[3-9]\d{9}/;
        name = name.replace(/^\s*|\s*$/g, "");
        if(phone == "" || !telReg.test(phone)){
            alert('请输入正确的手机号');
            return;
        }
        var urlAjax = "/Wty/getInfo?callback=?";
        var url_v = "//v.gaodun.com";
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
            dataType: 'jsonp'
        })
    })
    
});

// 封装一个函数改变单选框选中时的样式
function radioStyle(jq_obj, obj, objVal){
    for(let i = 0; i < obj.length; i++){
        $(jq_obj).click(function() {
            var $this = $(this);
            for(let j = 0;j < obj.length; j++){
                obj[j].nextElementSibling.style.color = "#464646";
            }
            $this.next().css({
                color: 'white'
            });
            objVal = $this.val();
        })
    }
}