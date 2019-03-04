# interning_project
本人在实习期间完成的项目，主要是一些专题页，活动页之类的，比较基础，用的是html+css+js，

有用一些jQuery，bootstrap，zepto，less，还有ajax和后台请求数据和移动端rem适配之类的，期间遇到的一些问题，会在下面讲到。

## 第一个问题：

第一个实习项目就遇到一些问题，里面的样式排版还有些问题[捂脸][捂脸][捂脸]，主要是单选框那里，布局比较差，字体没有

很好的居中，不过我知道了可以通过以下属性去除单选框原有的默认样式，自己设定样式，css代码如下：
```
.mbs-exam-footer .chooseTest input[type="radio"]{

    appearance:none;
    
    /*兼容火狐 Firefox*/
    
    -moz-appearance:none;
    
    /*兼容谷歌 Chrome*/
    
    -webkit-appearance:none;
    
}
```

## 第二个问题：

专题的移动端页面时在rem适配上遇到了一些问题，当时移动端已经完成提交给测试了，但是在手机app端

测试的时候发现该移动端页面在华为的一款机型"P20"上出现了问题，页面上本来居中的盒子宽度向两边延伸了，

可是在其他手机上却可以正常居中显示，之后找到的解决办法是居中的盒子改为采用百分比的设置宽度，

同时要加上盒子本身的最大宽度max-width，就可以解决问题了。

## 第三个问题：

在做这个页面时也遇到了一个问题，同样是在手机app端测试的时候出现的，是在iphone5上遇到的，主要和输入框有关

但这个问题不是很好描述，先附上代码片段：
```
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
```
解决办法是采用了事件委托的方式，给body和输入框绑定一个失去焦点的事件，委托body的子级元素解决的，

同时调用了"scrollIntoView(true)"函数，这个函数传入true的意思是，当失去焦点时保持页面的顶部和

浏览器的最上面平行，具体可以进入项目查看js代码。项目名称为:securities

## 第四个问题：

这是关于移动端页面在手机调整字体大小后内容适配的问题，作为新手我也刚好是第一次遇到，

已经完成的移动端页面，正常情况下在手机上的浏览器端和App端都可以正常显示，可当测

试把手机字体调大后，布局就忽然变乱了....盒子里面的内容向内挤了。说实话，刚开始感觉

这种问题应该可以忽略，毕竟字体调大后，又可以调回原来的啊，而且大部分手机都是默认

显示标准字体吧。而且我在移动端的meta标签里已经给viewport容器添加了相应属性值，

也是用rem布局的，还会出现那种错乱的情况，我能怎么办....不过后来想了想，既然你是

前端工程师，搞技术的，就应该要学会解决技术问题啊，所以我还是打开了浏览器，开始动手

我最熟悉的骚操作Ctrl+C、Ctrl+V...

刚开始我在找是不是viewport容器里还有些属性值少添加了。

我自己原来的值是这样的：
```
<meta name="viewport" content="width=device-width,initial-scale=1.0,user-scalable=0">
```
感觉是正常的，因为已经调整好了设备宽度、默认缩放比、还有禁止用户手动缩放，所以应该没问题，不过我之后

还是多添加了两个属性值：
```
<meta name="viewport" content="width=device-width,initial-scale=1.0,user-scalable=0,minimum-scale=1.0,maximum-scale=1.0">
```
添加的属性值是最小和最大缩放比，其实感觉没必要了，因为已经设置了初始化缩放比，不过还是提交测试了，

意料之中，还是没用....

之后上网终于找了一篇大佬文章，关于如何处理移动端调整字体大小问题的解决方案

文章链接：https://www.cnblogs.com/axl234/p/7753187.html

我下面的代码也是参考他的，不过自己有一些小改动，反正我的移动端页面已经适应了。[耶][耶][耶]

项目名称为：happy

### （注：需要注意的是每次调整手机字体大小后，需要重新刷新下页面才有效）

```
fontAdapt();

function fontAdapt(){
    /*适应移动端APP调整字体大小*/
    (function() {
        //新创建一个div元素，并设置该元素的字体大小
        var $dom = document.createElement('div');
        //移动端采用rem布局，所以设置新创建的元素字体单位为rem
        //这里设置字体大小为10，方便后面计算
        $dom.style = 'font-size:10rem;';
        document.body.appendChild($dom);
        //计算出新创建元素调整后的字体大小
        var scaledFontSize = parseInt(window.getComputedStyle($dom, null).getPropertyValue('font-size'));
        //移除新创建元素，以免影响页面布局
        document.body.removeChild($dom);
        //计算原字体和放大后字体的比例，原字体为10rem，取数字10，
        var scaleFactor = 10 / scaledFontSize;
        
        //取出html元素字体的大小
        //注意，这个大小也经过缩放了
        var originRootFontSize = parseInt(window.getComputedStyle(document.documentElement, null).getPropertyValue('font-size'));
        //通过上面的比例调整页面当前的字体大小，以适应移动端，单位为rem
        document.documentElement.style.fontSize = originRootFontSize * scaleFactor + 'rem';
    })();

    /*适应手机端浏览器调整字体大小*/
    (function(doc, win) {
        //用原生方法获取用户设置的浏览器的字体大小(兼容ie)
        if(doc.documentElement.currentStyle) {
           var user_webset_font=doc.documentElement.currentStyle['fontSize'];
        }
        else {
           var user_webset_font=getComputedStyle(doc.documentElement,false)['fontSize'];
        }
        //取整后与默认16px的比例系数
        var xs=parseFloat(user_webset_font)/16;
        //设置rem的js设置的字体大小
        var view_jsset_font,result_font;
        var docEl = doc.documentElement,
        resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize',
        clientWidth,
        recalc = function() {
           clientWidth = docEl.clientWidth;
           if(!clientWidth) return;
           if(!doc.addEventListener) return;
           if(clientWidth<750){
                //设置rem的js设置的字体大小
                view_jsset_font=100 * (clientWidth / 750);
                //最终的字体大小为rem字体/系数
                result_font=view_jsset_font/xs;
                //设置根字体大小
                docEl.style.fontSize = result_font + 'px';
           }
           else{
                docEl.style.fontSize = 100 + 'px';
           }
      };
      win.addEventListener(resizeEvt, recalc, false);
      doc.addEventListener('DOMContentLoaded', recalc, false);
   })(document, window);
}
```

### 上面是实习期间做的一些项目，还有一些遇到的问题和解决方法，期间做的最多的还是帮公司改链接了...

### 当然，经过一段时间的实习，熟悉了公司对一个项目整体的开发流程，我公司是在gitlab上完成的，和github的操作基本一样，都是在git上完成。

### 因为每个项目的切图都是自己完成的，所以也了解了photoshop的基本操作，同时获得了新的称号"切图仔"[捂脸][捂脸][捂脸]

### 平时自己的学习时间也还是比较多的，所以平常有去学vue，node等框架，这次刚好前端团队组织

### 了一个比赛，需要用到vue、node中的koa，还有用到mongdb数据库。是组队完成的，我小组包括

### 我三个人负责前端，还有三个人负责后端，用vue完成，前端代码也在本人的github里

### 项目链接：https://github.com/cao-lianhui/Golden_financial_answers_questions
