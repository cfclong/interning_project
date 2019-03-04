
//先声明一个数组存储课程列表
//需要增加或删除课程，直接在数组里增加或删除就行
var courseArr = [
    {
        imgSrc: "./images/stock1.png",
        text1: "漫漫熊市的寻路之旅系列直播",
        text2: "减税预期+机构吃饭行情怎么做？",
        free: "免费",
        teacher: "主讲嘉宾：青木",
        btn1: "课程详情",
        link1: "https://zhibo.gaodun.com/index/play/id/8890",
        btn2: "观看课程",
        link2: "http://view.csslcloud.net/api/view/callback?roomid=1753C41F010F23409C33DC5901307461&userid=CF5928368147E4E3&recordid=B9701C9DF1F4FE97&liveid=1A41CB0614BDCD64"
    },
    {
        imgSrc: "./images/stock2.png",
        text1: "中美贸易战下最新经济形势展望",
        text2: "与价值投资策略",
        free: "免费",
        teacher: "主讲嘉宾：青木",
        btn1: "课程详情",
        link1: "https://zhibo.gaodun.com/index/play/id/9121",
        btn2: "观看课程",
        link2: "http://view.csslcloud.net/api/view/callback?roomid=D26720FACF43416C9C33DC5901307461&userid=CF5928368147E4E3&recordid=CD580025D7FF7847&liveid=740A3B0FC7612D37"
    },
    {
        imgSrc: "./images/stock3.png",
        text1: "熊市大反击————",
        text2: "什么是正确的战术选择？",
        free: "免费",
        teacher: "主讲嘉宾：青木",
        btn1: "课程详情",
        link1: "https://zhibo.gaodun.com/index/play/id/9179",
        btn2: "观看课程",
        link2: "http://view.csslcloud.net/api/view/callback?roomid=1753C41F010F23409C33DC5901307461&userid=CF5928368147E4E3&recordid=289AB4756592830C&liveid=DC567E9E6A9590F3"
    },
    {
        imgSrc: "./images/stock4.png",
        text1: "2019投资方向大揭秘",
        text2: "",
        free: "免费",
        teacher: "主讲嘉宾：青木",
        btn1: "课程详情",
        link1: "https://zhibo.gaodun.com/index/play/id/9247",
        btn2: "观看课程",
        link2: "http://view.csslcloud.net/api/view/callback?roomid=1753C41F010F23409C33DC5901307461&userid=CF5928368147E4E3&recordid=ED826D93227CA658&liveid=2A54E0EB484C3402"
    },
    {
        imgSrc: "./images/stock5.png",
        text1: "年后A股王者归来",
        text2: "大牛市前的预演？",
        free: "免费",
        teacher: "主讲嘉宾：青木",
        btn1: "课程详情",
        link1: "https://zhibo.gaodun.com/index/play/id/9354",
        btn2: "观看课程",
        link2: "http://view.csslcloud.net/api/view/callback?roomid=1753C41F010F23409C33DC5901307461&userid=CF5928368147E4E3&recordid=7E59F6B023897A31&liveid=0C54FA9E66A42CBE"
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
                                        <p><a href="${value.link1}">${value.btn1}</a></p>
                                        <p><a href="${value.link2}">${value.btn2}</a></p>
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