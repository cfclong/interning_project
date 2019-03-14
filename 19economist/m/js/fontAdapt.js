 
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
        //计算原字体和调整后字体的比例，原字体为10rem，取数字10，
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