# interning_project
本人在实习期间完成的项目，主要是一些专题页，活动页之类的，比较基础，用的是html+css+js，

有用一些jQuery，zepto，less，还有ajax和后台请求数据和移动端rem适配之类的，期间遇到的一些问题，会在下面讲到。

## 第一个问题：

第一个实习项目就遇到一些问题，里面的样式排版还有些问题[捂脸][捂脸][捂脸]，主要是单选框那里，布局比较差，字体没有

很好的居中，不过我知道了可以通过以下属性去除单选框原有的默认样式，自己设定样式，css代码如下：

.mbs-exam-footer .chooseTest input[type="radio"]{

    appearance:none;
    
    /*兼容火狐 Firefox*/
    
    -moz-appearance:none;
    
    /*兼容谷歌 Chrome*/
    
    -webkit-appearance:none;
    
}

## 第二个问题：

专题的移动端页面时在rem适配上遇到了一些问题，当时移动端已经完成提交给测试了，但是在手机app端

测试的时候发现该移动端页面在华为的一款机型"P20"上出现了问题，页面上本来居中的盒子宽度向两边延伸了，

可是在其他手机上却可以正常居中显示，之后找到的解决办法是居中的盒子改为采用百分比的设置宽度，就解决问题了。

## 第三个问题：

在做这个页面时也遇到了一个问题，同样是在手机app端测试的时候出现的，是在iphone5上遇到的，主要和输入框有关

但这个问题不是很好描述，先附上代码片段：

var nameBlur = document.getElementById("name");

var phoneBlur = document.getElementById("phone");

var ele = document.querySelector("body");

nameBlur.onblur = function(){
	
  ele.scrollIntoView(true);

}

phoneBlur.onblur = function(){
		
  ele.scrollIntoView(true);
	
}
	
//下面是用事件委托的方式给body绑定失去焦点事件.
	
$("body").delegate(".lxb-cb-input","blur",function(){
	  
  ele.scrollIntoView(true);
	
});

解决办法是采用了事件委托的方式，给body和输入框绑定一个失去焦点的事件，委托body的子级元素解决的，

同时调用了"scrollIntoView(true)"函数，这个函数传入true的意思是，当失去焦点时保持页面的顶部和

浏览器的最上面平行，具体可以进入项目查看js代码，项目名称为:securities

### 上面是实习两个月期间做的一些项目，还有一些遇到的问题和解决方法，期间做的最多的还是帮公司改链接了...

### 当然，经过一段时间的实习，熟悉了公司对一个项目整体的开发流程，我公司是在gitlab上完成的，和github的操作基本一样，都是在git上完成。

### 因为每个项目的切图都是自己完成的，所以也了解了photoshop的基本操作，同时获得了新的称号"切图仔"[捂脸][捂脸][捂脸]

### 平时自己的学习时间也还是比较多的，所以平常有去学vue，node等框架，这次刚好前端团队组织

### 了一个比赛，需要用到vue、node中的koa，还有用到mongdb数据库。是组队完成的，我小组包括

### 我三个人负责前端，还有三个人负责后端，用vue完成，前端代码也在本人的github里

### 项目链接：https://github.com/cao-lianhui/Golden_financial_answers_questions
