
//先声明一个数组存储课程列表
//如果需要增加或删除课程，直接在数组courseArr里修改就行
var courseArr = [
    {
        imgSrc: "./images/forex1.png",
        text1: "美元持续强势",
        text2: "人民币、A股何去何从？",
        free: "免费",
        teacher: "主讲嘉宾：JACK",
        btn1: "课程详情",
        link1: "https://zhibo.gaodun.com/index/play/id/8933",
        btn2: "观看课程",
        link2: "http://view.csslcloud.net/api/view/callback?roomid=160639C6F1C18AEE9C33DC5901307461&amp;userid=CF5928368147E4E3&amp;recordid=7ED8A5F8F8E3D7BD&amp;liveid=62CECB8C6B47AB78"
    },
    {
        imgSrc: "./images/forex2.png",
        text1: "美元加息在即",
        text2: "全球资产配置如何让你盈利",
        free: "免费",
        teacher: "主讲嘉宾：JACK",
        btn1: "课程详情",
        link1: "https://zhibo.gaodun.com/%E6%8A%95%E8%B5%84%E7%90%86%E8%B4%A2/p9107.html",
        btn2: "观看课程",
        link2: "http://view.csslcloud.net/api/view/callback?roomid=160639C6F1C18AEE9C33DC5901307461&userid=CF5928368147E4E3&recordid=B4170A4A9F9159E3&liveid=CCDEA884DDB3659C"
    },
    {
        imgSrc: "./images/forex3.png",
        text1: "2018大复盘",
        text2: "未来交易机会在哪？",
        free: "免费",
        teacher: "主讲嘉宾：周老师",
        btn1: "课程详情",
        link1: "https://zhibo.gaodun.com/%E6%8A%95%E8%B5%84%E7%90%86%E8%B4%A2/p9311.html",
        btn2: "观看课程",
        link2: "http://view.csslcloud.net/api/view/callback?roomid=1753C41F010F23409C33DC5901307461&userid=CF5928368147E4E3&recordid=6052530A4BEC1F53&liveid=9EA87347B9C7C24E"
    }
];
$(function() {
    courseList();
});
/*课程列表数据展示*/
var courseList = function() {
    //获取存储列表数据的父级元素
    var list = document.querySelector(".course-list .container");
    //获取窗口对象
    var $window = $(window);
    
    //渲染到页面的函数
    var render = function() {
        //判断当前设备是移动端还是pc端
        let isMobile = $window.width() < 750 ? true : false;
        //课程列表数据数据
        var courseHtml = '';
        //遍历课程列表数据
        $.each(courseArr, function(key, value){
            if(isMobile){
                courseHtml += `<div class="list-m hidden-md hidden-lg hidden-sm">
                                    <div class="list-top">
                                        <img src="${value.imgSrc}" alt="">
                                    </div>
                                    <div class="list-bottom">
                                        <p class="pro">${value.text1}</p>
                                        <p class="pro">${value.text2}</p>
                                        <div class="free-m">
                                            <span>${value.free}</span>
                                            <span>${value.teacher}</span>
                                        </div>
                                        <div class="list-btn-m">
                                            <p><a href="${value.link1}">${value.btn1}</a></p>
                                            <p><a href="${value.link2}">${value.btn2}</a></p>
                                        </div>
                                    </div>
                                </div>`;
            }else{
                courseHtml += `<div class="list hidden-xs">
                                    <div class="list_left">
                                        <img src="${value.imgSrc}" alt="">
                                    </div>
                                    <div class="list_right">
                                        <p class="list_text">${value.text1}</p>
                                        <p class="list_text">${value.text2}</p>
                                        <div class="free">
                                            <span>${value.free}</span>
                                            <span>${value.teacher}</span>
                                        </div>
                                        <div class="list_btn">
                                            <p><a href="${value.link1}" target="_blank">${value.btn1}</a></p>
                                            <p><a href="${value.link2}" target="_blank">${value.btn2}</a></p>
                                        </div>
                                    </div>
                                </div>`;
            }
        });
        list.innerHTML = courseHtml;
        courseHtml = '';
    }
    
    //实时响应设备 监听页面尺寸改变resize事件
    $window.on('resize', function() {
        render();
    }).trigger('resize');
}
