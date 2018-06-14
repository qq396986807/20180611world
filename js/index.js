/**
 * Created by createc on 2017/8/10.
 */
var swiperV = new Swiper('.swiper-container-v', {
    pagination: '.swiper-pagination-v',
    noSwipingClass : 'stop-swiping',
    effect : 'fade',
    paginationClickable: true,
});

//获取URL参数
function getQueryString(name) {
    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
    var r = window.location.search.substr(1).match(reg);
    if ( r != null ){
        return decodeURI(r[2]);
    }else{
        return null;
    }
}

// 函数中的参数分别为 cookie 的名称、值以及过期天数
function setCookie(c_name,value,expiredays){
    var exdate=new Date();
    exdate.setDate(exdate.getDate()+expiredays);
    document.cookie=c_name+ "=" +escape(value)+
        ((expiredays==null) ? "" : ";expires="+exdate.toGMTString())
}


// 函数中的参数为 要获取的cookie键的名称。
function getCookie(c_name){
    if (document.cookie.length>0){
        c_start=document.cookie.indexOf(c_name + "=");
        if (c_start!=-1){
            c_start=c_start + c_name.length+1;
            c_end=document.cookie.indexOf(";",c_start);
            if (c_end==-1){
                c_end=document.cookie.length;
            }

            return unescape(document.cookie.substring(c_start,c_end));
        }
    }

    return "";
}


//数字整合
function shortenLargeNumber(num, digits) {
    var units = ['k', 'M', 'G', 'T', 'P', 'E', 'Z', 'Y'],
        decimal;
    for(var i=units.length-1; i>=0; i--) {
        decimal = Math.pow(1000, i+1);
        if(num <= -decimal || num >= decimal) {
            return +(num/decimal).toFixed(digits) + units[i];
        }
    }
    return num;
}

// 函数中的参数为，要判断的cookie名称
function checkCookie(c_name){
    username=getCookie(c_name);
    if (username!=null && username!=""){
        // 如果cookie值存在，执行下面的操作。
        alert('Welcome again '+username+'!');
    }else{
        username=prompt('Please enter your name:',"");
        if (username!=null && username!=""){
            //如果cookie不存在，执行下面的操作。
            setCookie('username',username,365)
        }
    }
}


//跳转页面
var next = function (num) {
    swiperV.slideTo(num, 2000, true);
}

function getVote() {
    $.getJSON("http://gb.wechat.wcampaign.cn/user/getttplist",{}, function(data){
        console.log(data)
        for(var i=0;i<data.length;i++){
            var total = shortenLargeNumber(data[i]['total']);
            var champion = data[i]['champion'];
            if(champion == '俄罗斯'){$(".vote1").html(total)}
            if(champion == '沙特阿拉伯'){$(".vote2").html(total)}
            if(champion == '埃及'){$(".vote3").html(total)}
            if(champion == '乌拉圭'){$(".vote4").html(total)}
            if(champion == '葡萄牙'){$(".vote5").html(total)}
            if(champion == '西班牙'){$(".vote6").html(total)}
            if(champion == '摩洛哥'){$(".vote7").html(total)}
            if(champion == '伊朗'){$(".vote8").html(total)}
            if(champion == '法国'){$(".vote9").html(total)}
            if(champion == '澳大利亚'){$(".vote10").html(total)}
            if(champion == '秘鲁'){$(".vote11").html(total)}
            if(champion == '丹麦'){$(".vote12").html(total)}
            if(champion == '阿根廷'){$(".vote13").html(total)}
            if(champion == '冰岛'){$(".vote14").html(total)}
            if(champion == '克罗地亚'){$(".vote15").html(total)}
            if(champion == '尼日利亚'){$(".vote16").html(total)}
            if(champion == '巴西'){$(".vote17").html(total)}
            if(champion == '瑞士'){$(".vote18").html(total)}
            if(champion == '哥斯达黎加'){$(".vote19").html(total)}
            if(champion == '尼日塞尔维亚利亚'){$(".vote20").html(total)}
            if(champion == '德国'){$(".vote21").html(total)}
            if(champion == '墨西哥'){$(".vote22").html(total)}
            if(champion == '瑞典'){$(".vote23").html(total)}
            if(champion == '韩国'){$(".vote24").html(total)}
            if(champion == '比利时'){$(".vote25").html(total)}
            if(champion == '巴拿马'){$(".vote26").html(total)}
            if(champion == '突尼斯'){$(".vote27").html(total)}
            if(champion == '英格兰'){$(".vote28").html(total)}
            if(champion == '波兰'){$(".vote29").html(total)}
            if(champion == '塞内加尔'){$(".vote30").html(total)}
            if(champion == '哥伦比亚'){$(".vote31").html(total)}
            if(champion == '日本'){$(".vote32").html(total)}
        }
    })
}

//用户信息
var userData;
var dataInfo={};
var flagAdd = true;//标记是否投过票了
function init() {
    //首先判断用户数据cookie是否存在
    var userInf = getCookie('data');
    if(userInf!=null && userInf!=""){
        userData = userInf;
    }else {
        //判断是否有带好友openid参数
        var Fopenid = getQueryString('Fopenid')
        if(Fopenid){
            var oAtuhUrl = "http://gb.wechat.wcampaign.cn/oauth?redirecturl=" + btoa("http://gb.wcampaign.cn/?Fopenid="+Fopenid);
            window.location.href = oAtuhUrl;
        }else {
            var oAtuhUrl = "http://gb.wechat.wcampaign.cn/oauth?redirecturl=" + btoa("http://gb.wcampaign.cn")
            window.location.href = oAtuhUrl;
        }
    }

    if(getQueryString('data')){
        var user = atob(getQueryString('data'));
        setCookie('data',user,30); // cookie过期时间为30天。
        userData = user;
    }

    userData = JSON.parse(userData);

    getVote();//国家投数的显示
    vote();//判断该用户是否投过票了
}
 init();
// $(".loader").hide(500)
// advertisement();
// $(".advertisement").fadeIn(2000);
// $(".mask").fadeIn(2000);


//判断该用户是否投过票了
function vote() {
    // userData.original.openid = "oEr0-w9JrQmsEXpC2VipAyjzE5p4";
    var wopenid = "oEr0-wzPANE4P-MExvyr0XD5kqtc";
    $.getJSON("http://gb.wechat.wcampaign.cn/user/getsingle/"+userData.original.openid,{}, function(data) {
        if (data != '') {
            var champion = data[0]['champion'];
            var total = 1;
            var oImg = $("<img class='voteTx' src='"+data[0]['headimgurl']+"' alt=''>")
            if(champion == '俄罗斯'){$(".champion1").prepend(oImg)}
            if(champion == '沙特阿拉伯'){$(".champion2").prepend(oImg)}
            if(champion == '埃及'){$(".champion3").prepend(oImg)}
            if(champion == '乌拉圭'){$(".champion4").prepend(oImg)}
            if(champion == '葡萄牙'){$(".champion5").prepend(oImg)}
            if(champion == '西班牙'){$(".champion6").prepend(oImg)}
            if(champion == '摩洛哥'){$(".champion7").prepend(oImg)}
            if(champion == '伊朗'){$(".champion8").prepend(oImg)}
            if(champion == '法国'){$(".champion9").prepend(oImg)}
            if(champion == '澳大利亚'){$(".champion10").prepend(oImg)}
            if(champion == '秘鲁'){$(".champion11").prepend(oImg)}
            if(champion == '丹麦'){$(".champion12").prepend(oImg)}
            if(champion == '阿根廷'){$(".champion13").prepend(oImg)}
            if(champion == '冰岛'){$(".champion14").prepend(oImg)}
            if(champion == '克罗地亚'){$(".champion15").prepend(oImg)}
            if(champion == '尼日利亚'){$(".champion16").prepend(oImg)}
            if(champion == '巴西'){$(".champion17").prepend(oImg)}
            if(champion == '瑞士'){$(".champion18").prepend(oImg)}
            if(champion == '哥斯达黎加'){$(".champion19").prepend(oImg)}
            if(champion == '尼日塞尔维亚利亚'){$(".champion20").prepend(oImg)}
            if(champion == '德国'){$(".champion21").prepend(oImg)}
            if(champion == '墨西哥'){$(".champion22").prepend(oImg)}
            if(champion == '瑞典'){$(".champion23").prepend(oImg)}
            if(champion == '韩国'){$(".champion24").prepend(oImg)}
            if(champion == '比利时'){$(".champion25").prepend(oImg)}
            if(champion == '巴拿马'){$(".champion26").prepend(oImg)}
            if(champion == '突尼斯'){$(".champion27").prepend(oImg)}
            if(champion == '英格兰'){$(".champion28").prepend(oImg)}
            if(champion == '波兰'){$(".champion29").prepend(oImg)}
            if(champion == '塞内加尔'){$(".champion30").prepend(oImg)}
            if(champion == '哥伦比亚'){$(".champion31").prepend(oImg)}
            if(champion == '日本'){$(".champion32").prepend(oImg)}
            swiperV.slideTo(1, 0, true);
            flagAdd = false;//已经投过票了
            advertisement();
            $(".advertisement").fadeIn(2000);
            $(".mask").fadeIn(2000,function () {
                $(".loader").hide(500)
            });
        }else {
            setTimeout(function () {
                $(".loader").hide(500)
            },2000)
        }
    })
}


//首页点击下一页
$("#next").click(function () {
    var flag = $("#argee").is(':checked');
    if(flag){
        next(1);
    }else {
        var M = {};
        if(M.dialog1){
            return M.dialog1.show();
        }
        M.dialog1 = jqueryAlert({
            'content' : '请同意规则才能竞猜!',
            'closeTime' : 2000
        })
    }
})





//点击国家进行投票
$(".groupBox>div").click(function () {
    var self = $(this)
    var M = {};
    if(M.dialog3){
        return M.dialog3.show();
    }
    if(flagAdd){
        var tsy = "您确定要投票"+self.children(".countryName").text()+"吗!"
        M.dialog3 = jqueryAlert({
            'title'   : '温馨提示',
            'content' : tsy,
            'modal'   : true,
            'buttons' :{
                '确定提交' : function(){
                    if(M.dialog31){
                        return M.dialog31.show();
                    }
                    M.dialog3.close();
                    dataInfo.from_openid=getQueryString('Fopenid');//分享人的openid;
                    dataInfo.openid=userData.original.openid;
                    dataInfo.nickname=userData.original.nickname;
                    dataInfo.sex=userData.original.sex;
                    dataInfo.city=userData.original.city;
                    dataInfo.country=userData.original.country;
                    dataInfo.province=userData.original.province;
                    dataInfo.headimgurl=userData.original.headimgurl;
                    dataInfo.unionid="";
                    dataInfo.subscribe="";
                    dataInfo.language="";
                    dataInfo.subscribe_time="";
                    dataInfo.remark="";
                    dataInfo.champion=self.children(".countryName").text();//国家
                    dataInfo.group_name="";//类别
                    $.post('http://gb.wechat.wcampaign.cn/user/add', dataInfo, function(data){
                        $(".tx").attr("src",userData.original.headimgurl);
                        $(".tx").show();
                        var top = self.offset().top;
                        var left = self.offset().left;
                        var h = self.height()/2.6 - 20;
                        var w = self.width()/2 - 20;
                        $(".tx").animate({width:"40px",top:top+h+"px",left:left+w+'px'},2000,function () {
                            $(".tx").hide();
                            next(2);
                        });
                    }, "JSON");
                },
                '取消' : function(){
                    M.dialog3.close();
                }
            }
        })
    }else{
        M.dialog1 = jqueryAlert({
            'content' : '您已经投过票了,请勿重复投票!',
            'closeTime' : 2000
        })
    }
})

//点击选择部门
$(".table>div").click(function () {
    dataInfo.group_name=$(this).text();
    var uesrData = {};
    uesrData.openid = userData.original.openid;
    uesrData.group_name = dataInfo.group_name;
    $.post('http://gb.wechat.wcampaign.cn/user/update',uesrData , function(data){
        advertisement();
        $(".advertisement").fadeIn(2000);
        $(".mask").fadeIn(2000);
    }, "JSON");

})

//广告点击下一页
$("#adNext").click(function () {
    $(".mask").fadeOut(1000);
    $(".advertisement").fadeOut(1000);
    if(flagAdd){
        next(3);
    }
})

//随机出现广告
function advertisement() {
    var dataAd = [
        {src:'img/know/1.jpg',text:'阿迪达斯自1970年就已开始为世界杯赛事提供官方足球，这项赞助将一直延续到2030年。截止至2014年阿迪达斯足球周边产品销售额达到21亿欧元，其中世界杯官方足球占1400万欧元，足球队服占800万欧元，单是德国队队服就卖出了300万欧元。',url1:'https://www.businessoffashion.com/articles/news-analysis/adidas-takes-lead-over-nike-in-world-cup-shirt-deals',url2:'https://inews.groz-beckert.com/zh/getPrm/letter/global_training_program_for_adidas_footwear/'},
        {src:'img/know/2.jpg',text:'随着时代的飞跃，我们在最新的耐克Mercurial刺客系列足球鞋的Superfly和Vapor型号上不难发现采用微纹理 Flyknit 设计工艺的鞋面以及经过防滑处理并相当贴合脚型的革命性外底。这些技术在球鞋上的应用为众多足球巨星诸如C罗、内马尔或姆巴佩在比赛时提供卓越的抓地力。',url1:'https://www.futbolemotion.com/comunidad-futbol/en/blogs/straight-oven/nike-s-boots-2018-russia-world-cup',url2:'https://www.groz-beckert.com/zh/%E4%BA%A7%E5%93%81/%E9%92%88%E7%BB%87/flachstrick/'},
        {src:'img/know/3.jpg',text:'2018年俄罗斯世界杯对诸如德国足协的赞助商阿迪达斯等一众运动品牌们以及零售商们作出高销售额的承诺。价值超百万美金的德国队队服生意利润尤为可观。',url1:'https://www.ispo.com/en/markets/2018-world-cup-multi-million-business-germany-jersey',url2:'https://inews.groz-beckert.com/zh/getPrm/letter/global_training_program_for_adidas_footwear/'},
        {src:'img/know/4.jpg',text:'假如要在平均面积为105x68米的12座俄罗斯世界杯球场铺设排水系统，我们在无纺布领域需要用短纤维针刺278,460,000,000针。',url1:'',url2:'https://inews.groz-beckert.com/zh/getPrm/letter/n43_svl_im_vliesstofftechnikum/'},
        {src:'img/know/5.jpg',text:'除了针织布料以外，足球鞋也会用到无纺布人造皮革。超细纤维具备良好的弹性、抗撕裂及耐磨性。它们的优点包括：抗拉强度更高，极低或完全不吸水、低伸长、耐磨、疏水、易清理及价格低廉。',url1:'',url2:'https://www.groz-beckert.com/zh/%E4%BA%A7%E5%93%81/%E9%92%88%E5%88%BA/'},
        {src:'img/know/6.jpg',text:'2018年世界杯官方足球使用无缝粘接技术制成，球身不再有缝线的身影了。每一颗皮球里都内嵌了一块智能芯片，粉丝们可以通过手机与其互动。由超细纤维PU皮制成的无纺布作为皮球外衣（1.4毫米），靠着轻便的表层结构为足球减少空气阻力的同时提供坚韧的外层及均衡的柔软性。',url1:'',url2:'https://www.groz-beckert.com/zh/%E4%BA%A7%E5%93%81/%E9%92%88%E5%88%BA/'},
        {src:'img/know/7.jpg',text:'2018年世界杯是世界杯历史上首次采用混合草皮的赛事。这种混合草皮名叫SISGRASS，含有95%的天然草，辅以人造草。使用簇绒机制造人造草时噪音非常大。格罗茨-贝克特为簇绒机研发出更安静、更轻松的解决方案——SAN-S簇绒针。',url1:'',url2:'https://www.groz-beckert.com/zh/%E4%BA%A7%E5%93%81/%E7%B0%87%E7%BB%92/'},
        {src:'img/know/8.jpg',text:'要为一座足球场地制造人造草皮，如果每平米需要使用簇绒针刺14,700下，那么将需要在簇绒机上刺1.05-1.3亿针才能生产出能铺满整个足球场地的草皮。',url1:'',url2:'https://www.groz-beckert.com/zh/%E4%BA%A7%E5%93%81/%E7%B0%87%E7%BB%92/'},
        {src:'img/know/9.jpg',text:'足球场上拉扯运动服是很常见的事情，因此在制造足球队服的时候经编是最受青睐的针织技术。',url1:'',url2:'https://www.groz-beckert.com/zh/%E4%BA%A7%E5%93%81/%E9%92%88%E7%BB%87/'},
        {src:'img/know/10.jpg',text:'足球场上拉扯运动服是很常见的事情，因此在制造足球队服的时候经编是最受青睐的针织技术。经编织物精细的缝纫过程需要使用极细的缝针，因此断针是一个常见的现象。格罗茨-贝克特专为解决这一难题研发出了特殊用途针SAN 10。',url1:'',url2:'https://www.groz-beckert.com/zh/%E4%BA%A7%E5%93%81/%E7%BC%9D%E7%BA%AB%E9%83%A8%E9%97%A8/bekleidungsindustrie/'},
        {src:'img/know/11.jpg',text:'在2018年世界杯比赛入围的32支球队中，阿迪达斯赞助了12支队伍，其中包括上一届世界杯冠军德国队。耐克和彪马分别赞助了10支及4支球队。',url1:'',url2:'https://www.groz-beckert.com/zh/'},
        {src:'img/know/12.jpg',text:'世界上最大的足球衫由坐落在尼日利亚拉各斯的Guinness Nigeria Plc 公司于2013年1月25日制作而成。这件球衣宽73.55米、长89.67米。',url1:'',url2:''},
        {src:'img/know/13.jpg',text:'乌拉圭国家足球队曾制出一副巨型机织横幅，尺寸达600米x50米，重约2吨！他们声称这块横幅是迄今为止在2013年南美自由杯挂出的最大的足球横幅。',url1:'http://www.dailymail.co.uk/sport/football/article-2304596/Nacional-unfurl-worlds-largest-flag-Copa-Libertadores-win-Toluca.html',url2:'https://www.groz-beckert.com/zh/%E4%BA%A7%E5%93%81/%E6%9C%BA%E7%BB%87/'},
        {src:'img/know/14.jpg',text:'通常1千克经编布料能产出4米布料，大约足够制成3件成人款式的球服。假设在一座能容纳45,000人的足球场馆里，所有人都穿着均码的球服。生产这些球服需要大约15,000千克的布料或60,000米经编布料。',url1:'',url2:'https://www.groz-beckert.com/zh/%E4%BA%A7%E5%93%81/%E9%92%88%E7%BB%87/'},
        {src:'img/know/15.jpg',text:'足球服最大的两家赞助商阿迪达斯和耐克分别提供Climalite和Vaporknit技术。这两种面料都是含有亲水内层、速干透气针织结构构成的针织面料。它们的快速散热能力会让你在剧烈运动时倍感舒适。',url1:'',url2:'https://www.groz-beckert.com/zh/%E4%BA%A7%E5%93%81/%E9%92%88%E7%BB%87/'},
        {src:'img/know/16.jpg',text:'球服上的品牌标识及国徽通常是直接刺绣上去或经由贴花工艺缝上去的。',url1:'',url2:'https://www.groz-beckert.com/zh/%E4%BA%A7%E5%93%81/%E7%BC%9D%E7%BA%AB%E9%83%A8%E9%97%A8/stickerei/'},
        {src:'img/know/17.jpg',text:'有些球队的球服选用的是未经切割和缝纫的无缝短裤。在奔跑、拉扯对抗时，这种短裤可以防止拉扯变形或被撕破。',url1:'',url2:'https://www.groz-beckert.com/zh/%E4%BA%A7%E5%93%81/%E9%92%88%E7%BB%87/rundstrick/'},
        {src:'img/know/18.jpg',text:'足球队员们穿的专业球袜都是以最高标准来生产的。这些球袜要能方便的插入护腿板同时还要与足球鞋完美契合。',url1:'',url2:'https://www.groz-beckert.com/zh/%E4%BA%A7%E5%93%81/%E9%92%88%E7%BB%87/legwear/'},
        {src:'img/know/19.jpg',text:'从2012年奥林匹克运动会上耐克正式发布第一双采用Flyknit技术的球鞋开始，针织鞋面在球鞋上的应用越来越受欢迎。耐克刺客系列Superfly 360球鞋、刺客系列Vapor球鞋以及阿迪达斯Energy Mode Pack Predator 18球鞋都是用平网转移机器（Flatbed Transfer Machines）制造出来的。',url1:'',url2:'https://www.groz-beckert.com/zh/%E4%BA%A7%E5%93%81/%E9%92%88%E7%BB%87/flachstrick/'},
        {src:'img/know/20.jpg',text:'俄罗斯新建的体育馆屋顶膜使用的是Low & Bonar的 Valmex®产品。屋顶膜覆盖了体育馆顶棚80,000平方米。得益于它所使用的轻便面料，搭建方才能更方便的运输和更快更省的完成搭建。',url1:'https://www.lowandbonar.com/news/low-bonar-supplies-2018-world-cup-stadium-roof/',url2:''},
        {src:'img/know/21.jpg',text:'孟加拉一名狂热的德国足球粉丝自己出资制作了一幅长达5.5公里的德国国旗，以此表示对德国队的支持。为了制作这幅史上最长的德国国旗，他甚至卖掉土地来筹备购买布料所需的资金。上周这名粉丝已将国旗赠送给德国领事馆。',url1:'https://www.bbc.com/news/world-asia-44385018',url2:'https://www.groz-beckert.com/zh/%E4%BA%A7%E5%93%81/%E6%9C%BA%E7%BB%87/'},
    ]
    var num = Math.floor(Math.random()*21);
    var chickKnow ;
    if(num == 0 ){_hmt.push(['_trackEvent', 'FunFact', 'FACT1', 'literature']); chickKnow = 'FACT1'}
    if(num == 1 ){_hmt.push(['_trackEvent', 'FunFact', 'FACT2', 'literature']); chickKnow = 'FACT2'}
    if(num == 2 ){_hmt.push(['_trackEvent', 'FunFact', 'FACT3', 'literature']); chickKnow = 'FACT3'}
    if(num == 3 ){_hmt.push(['_trackEvent', 'FunFact', 'FACT4', 'literature']); chickKnow = 'FACT4'}
    if(num == 4 ){_hmt.push(['_trackEvent', 'FunFact', 'FACT5', 'literature']); chickKnow = 'FACT5'}
    if(num == 5 ){_hmt.push(['_trackEvent', 'FunFact', 'FACT6', 'literature']); chickKnow = 'FACT6'}
    if(num == 6 ){_hmt.push(['_trackEvent', 'FunFact', 'FACT7', 'literature']); chickKnow = 'FACT7'}
    if(num == 7 ){_hmt.push(['_trackEvent', 'FunFact', 'FACT8', 'literature']); chickKnow = 'FACT8'}
    if(num == 8 ){_hmt.push(['_trackEvent', 'FunFact', 'FACT9', 'literature']); chickKnow = 'FACT9'}
    if(num == 9 ){_hmt.push(['_trackEvent', 'FunFact', 'FACT10', 'literature']); chickKnow = 'FACT10'}
    if(num == 10 ){_hmt.push(['_trackEvent', 'FunFact', 'FACT11', 'literature']); chickKnow = 'FACT11'}
    if(num == 11 ){_hmt.push(['_trackEvent', 'FunFact', 'FACT12', 'literature']); chickKnow = 'FACT12'}
    if(num == 12 ){_hmt.push(['_trackEvent', 'FunFact', 'FACT13', 'literature']); chickKnow = 'FACT13'}
    if(num == 13 ){_hmt.push(['_trackEvent', 'FunFact', 'FACT14', 'literature']); chickKnow = 'FACT14'}
    if(num == 14 ){_hmt.push(['_trackEvent', 'FunFact', 'FACT15', 'literature']); chickKnow = 'FACT15'}
    if(num == 15 ){_hmt.push(['_trackEvent', 'FunFact', 'FACT16', 'literature']); chickKnow = 'FACT16'}
    if(num == 16 ){_hmt.push(['_trackEvent', 'FunFact', 'FACT17', 'literature']); chickKnow = 'FACT17'}
    if(num == 17 ){_hmt.push(['_trackEvent', 'FunFact', 'FACT18', 'literature']); chickKnow = 'FACT18'}
    if(num == 18 ){_hmt.push(['_trackEvent', 'FunFact', 'FACT19', 'literature']); chickKnow = 'FACT19'}
    if(num == 19 ){_hmt.push(['_trackEvent', 'FunFact', 'FACT20', 'literature']); chickKnow = 'FACT20'}
    if(num == 20 ){_hmt.push(['_trackEvent', 'FunFact', 'FACT21', 'literature']); chickKnow = 'FACT21'}
    var advertis = dataAd[num];
    if(advertis.url1==""){
        $(".adMore1").hide()
    }else{
        $(".adMore1").parent().attr('href',"javascript:locationUrl('"+chickKnow+"','"+advertis.url1+"')")
    }
    // if(advertis.url2==""){$(".adMore2").hide()}else{$(".adMore2").parent().attr('href',advertis.url2)}
    $("#know").attr("src",advertis.src);
    $(".adCon").text(advertis.text);

}

//跳转知识来源
function locationUrl(name,url) {
    // _hmt.push(['_trackEvent', '知识来源',name, 'literature']);
    window.location.href = url;
}

//点击分享浮层
$(".shareBtn").click(function () {
    var oImg = $("<img class='sharec' onclick='dell(this)' src='img/sharec.png' alt=''>")
    $("body").append(oImg);
})

//点击浮层消失
function dell(e) {
    $(e).remove();
}

//长按二维码
$(".ewm").mousedown(function() {
    timeout = setTimeout(function() {
        _hmt.push(['_trackEvent', 'qrcode', '长按识别', 'literature'])
    }, 500);
});
//微信share
var data = {};
data.pageurl = window.location.href;
$.ajaxSettings.async = true;
$.getJSON("http://gb.wechat.wcampaign.cn/jssdk/", data, function(data){
    wx.config(data);
});

//微信分享,接受参数传值
wx.ready(function () {
    wx.onMenuShareTimeline({
        title: '一起猜冠军,一起赢大奖!', // 分享标题
        link: "http://gb.wcampaign.cn/?Fopenid=" + userData.original.openid, // 分享链接，该链接域名或路径必须与当前页面对应的公众号JS安全域名一致
        imgUrl: 'http://gb.wcampaign.cn/img/logo.jpg', // 分享图标
        success: function () {
            next(4)
            $(".sharec").remove();
            _hmt.push(['_trackEvent', '分享', '朋友圈', 'literature']);
        }
    });
    wx.onMenuShareAppMessage({
        title: '一起猜冠军,一起赢大奖!', // 分享标题
        desc: '你会是俄罗斯世界杯预测帝吗?', // 分享描述
        link: "http://gb.wcampaign.cn/?Fopenid=" + userData.original.openid, // 分享链接，该链接域名或路径必须与当前页面对应的公众号JS安全域名一致
        imgUrl: 'http://gb.wcampaign.cn/img/logo.jpg', // 分享图标
        type: '', // 分享类型,music、video或link，不填默认为link
        dataUrl: '', // 如果type是music或video，则要提供数据链接，默认为空
        success: function () {
            next(4)
            $(".sharec").remove();
            _hmt.push(['_trackEvent', '分享', '朋友', 'literature']);
        }
    });
})