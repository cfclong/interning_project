$(function() {
    // 获取轮播图div容器
    var banBox = document.querySelector(".banner");
    // 获取轮播图ul盒子
    var banner = document.querySelector(".bannerbox");
    // 获取轮播图
    var banLi = banner.querySelectorAll("li");
    // 获取点盒子
    var pointerBox = document.querySelector(".pointer");
    var color1 = "#ecd176";
    autoBanner(banner, banBox, banLi, pointerBox, color1);
});
$(function() {
    // 获取轮播图div容器
    var banBox1 = document.querySelector(".banner1");
    // 获取轮播图ul盒子
    var banner1 = document.querySelector(".bannerbox1");
    // 获取轮播图
    var banLi1 = banner1.querySelectorAll("li");
    // 获取点盒子
    var pointerBox1 = document.querySelector(".pointer1");
    var color2 = "blue";
    autoBanner(banner1, banBox1, banLi1, pointerBox1, color2);
});
$(function() {
    // 获取轮播图div容器
    var banBox2 = document.querySelector(".banner2");
    // 获取轮播图ul盒子
    var banner2 = document.querySelector(".bannerbox2");
    // 获取轮播图
    var banLi2 = banner2.querySelectorAll("li");
    // 获取点盒子
    var pointerBox2 = document.querySelector(".pointer2");
    var color3 = "blue";
    autoBanner(banner2, banBox2, banLi2, pointerBox2, color3);
});
function autoBanner(banner, banBox, banLi, pointerBox, color){
    // 得到轮播图容器div的宽度
    var width = banBox.offsetWidth;
    // 设置轮播图盒子的宽度
    banner.style.width = width * banLi.length + 'px';
    // 设置轮播图的宽度
    for(let i = 0; i < banLi.length; i++){
        banLi[i].style.width = width + 'px';
    }
    var timer;
    // 创建点
    for(let i = 0; i < banLi.length-1; i++){
        var pointer = document.createElement("li");
        pointerBox.appendChild(pointer);
    }
    // 动态设置点盒子居中
    pointerBox.style.left = (width - pointerBox.offsetWidth) / 2 + 'px';
    var point = pointerBox.querySelectorAll("li");
    var index = 0, len = point.length;
    point[index].style.backgroundColor = color;
    
    // 实现点击小点轮播图片
    for(let i = 0; i < len; i++){
        point[i].onclick = function() {
            // 清除定时器
            clearInterval(timer);
            index = i;
            //设置点颜色切换
            setPoint();
            move(banner, "left", -index * width, 40, function() {
                autoMove();
            });
        }
    }
    autoMove();
    var setPoint = function() {
        var left = banner.offsetLeft;
        if(index >= banLi.length-1 || left > (banLi.length-1) * width){
            index = 0;
            banner.style.left = 0;
        }
        for(var i = 0; i < len; i++){
            point[i].style.backgroundColor = "";
        }
        point[index].style.backgroundColor = color;
    }
    
    // 自动轮播
    function autoMove() {
        timer = setInterval(function() {
            index++;
            var left = banner.offsetLeft;
            if(index >= banLi.length || left > (banLi.length-1) * width) {
                index = 0;
                banner.style.left = 0;
            }
            move(banner, "left", -index * width, 40, function(){
                setPoint();
            });
        },5000)
    }
};
function move(obj, attr, target, speed, callback){
    // 关闭上一个定时器
    clearInterval(obj.timer);
    // 获取obj当前的位置
    var current = parseInt(getStyle(obj, attr));
    if(current >= target){
        speed = -speed;
    }
    // 开启一个定时器
    obj.timer = setInterval(function (){
        // 获取obj的left值
        var oldValue = parseInt(getStyle(obj, attr));
        //var oldValue = obj.offsetLeft;
        // 计算移动速度
        var newValue = oldValue + speed;
        if((speed < 0 && newValue < target) || (speed > 0 && newValue > target)){
            newValue = target;
        }
        // 设置新的值给obj
        obj.style[attr] = newValue + 'px';
        if(newValue == target){
            clearInterval(obj.timer);
            callback && callback();
        }
    },30)
};
// 得到当前的属性值
function getStyle(obj, attr)
{
    if(obj.currentStyle){
        return obj.currentStyle[attr];
    }
    else{
        return getComputedStyle(obj, false)[attr];
    }
}