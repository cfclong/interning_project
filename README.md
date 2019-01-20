# company_project
本人在公司实习期间完成的项目，主要是公司的一些专题页，活动页之类的，比较基础，用的是html+css+js，

有用一些jQuery，zepto，less，还有ajax和后台请求数据和移动端rem适配之类的，期间遇到的一些问题，会在下面讲到。

## 下面是页面的线上链接:

## 第一个移动端页面，视口为viewport，主要用rem适配：

www.gaodun.com/jinrong/zqbeikao/zhuanti/

## 第二个包含了pc端和移动端，是分开写的，没有用响应式布局：

做这个专题的移动端页面时在rem适配上遇到了一些问题，当时移动端已经完成提交给测试了，但是在手机app端

测试的时候发现该移动端页面在华为的一款机型"P20"上出现了问题，页面上本来居中的盒子宽度向两边延伸了，

可是在其他手机上却可以正常居中显示，之后找到的解决办法是居中的盒子改为采用百分比的设置宽度，就解决问题了。

pc：www.gaodun.com/jinrong/economist/zhuanti/

移动端：www.gaodun.com/jinrong/economist/zhuanti/m/

## 第三个页面为移动端页面：

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

www.gaodun.com/jinrong/securities/zhuanti/

## 第四个页面为公司的双十二活动页面，我负责pc端：

www.gaodun.com/touzilicai/doubletwelve/zhuanti/

## 第五个页面为元旦活动页面，也是负责pc端：

www.gaodun.com/wangxiao/newyear/zhuanti/

## 第六个页面，pc端和移动端都是我负责：

pc：www.gaodun.com/touzilicai/cpds/zhuanti/

移动端：www.gaodun.com/touzilicai/cpds/zhuanti/m/

## 第七个页面因为时间问题，UI是需求方让我自己想的，为移动端页面：

www.gaodun.com/default/meaning/zhuanti/

### 上面是实习两个月期间在公司做的一些项目，还有一些遇到的问题和解决方法，期间做的最多的还是帮公司改链接了....

### 当然，经过一段时间的实习，熟悉了公司对一个项目整体的开发流程，我公司是在gitlab上完成的，和github的操作基本一样，都是在git上完成。

### 因为每个项目的切图都是自己完成的，所以也了解了photoshop的基本操作，同时获得了新的称号"切图仔"[捂脸][捂脸][捂脸]

### 在公司自己的学习时间也还是比较多的，所以平常有去学vue，node等框架，这次刚好前端团队组织

### 了一个比赛，需要用到vue、node中的koa，还有用到mongdb数据库。是组队完成的，我小组包括

### 我三个人负责前端，还有三个人负责后端，用vue完成，前端代码也在本人的github里

### 项目链接：https://github.com/cao-lianhui/Golden_financial_answers_questions
