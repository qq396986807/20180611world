<?php
header("Access-Control-Allow-Origin：http://115.29.211.120");
echo 222;
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>canvas</title>
    <meta name="viewport" content="width=device-width, initial-scale=1, minimum-scale=1, maximum-scale=1">
    <meta http-equiv="content-type" content="txt/html; charset=utf-8" />
    <script type="text/javascript" src="jquery-3.2.1.min.js"></script>
</head>
<body>
<canvas style="display: none;" width="353" height="270" id="canvas1"></canvas>
<canvas style="display: none;" width="353" height="270" id="canvas2"></canvas>
<canvas style="display: none;" width="353" height="270" id="canvas3"></canvas>
<canvas style="display: none;" width="353" height="270" id="canvas4"></canvas>
<canvas style="display: none;" width="353" height="270" id="canvas5"></canvas>
<canvas style="display: none;" width="353" height="270" id="canvas6"></canvas>
<canvas style="display: none;" width="353" height="270" id="canvas7"></canvas>
<canvas style="display: none;" width="353" height="270" id="canvas8"></canvas>
<canvas style="display: none;" width="353" height="270" id="canvas9"></canvas>
<canvas style="display: none;" width="353" height="270" id="canvas10"></canvas>
<canvas style="display: none;" width="353" height="270" id="canvas11"></canvas>
<canvas style="display: none;" width="353" height="270" id="canvas12"></canvas>
<canvas style="display: none;" width="353" height="270" id="canvas13"></canvas>
<canvas style="display: none;" width="353" height="270" id="canvas14"></canvas>
<canvas style="display: none;" width="353" height="270" id="canvas15"></canvas>
<canvas style="display: none;" width="353" height="270" id="canvas16"></canvas>
<canvas style="display: none;" width="353" height="270" id="canvas17"></canvas>
<canvas style="display: none;" width="353" height="270" id="canvas18"></canvas>
<canvas style="display: none;" width="353" height="270" id="canvas19"></canvas>
<canvas style="display: none;" width="353" height="270" id="canvas20"></canvas>
<canvas style="display: none;" width="353" height="270" id="canvas21"></canvas>
<canvas style="display: none;" width="353" height="270" id="canvas22"></canvas>
<canvas style="display: none;" width="353" height="270" id="canvas23"></canvas>
<canvas style="display: none;" width="353" height="270" id="canvas24"></canvas>
<canvas style="display: none;" width="353" height="270" id="canvas25"></canvas>
<canvas style="display: none;" width="353" height="270" id="canvas26"></canvas>
<canvas style="display: none;" width="353" height="270" id="canvas27"></canvas>
<canvas style="display: none;" width="353" height="270" id="canvas28"></canvas>
<canvas style="display: none;" width="353" height="270" id="canvas29"></canvas>
<canvas style="display: none;" width="353" height="270" id="canvas30"></canvas>
<canvas style="display: none;" width="353" height="270" id="canvas31"></canvas>
<canvas style="display: none;" width="353" height="270" id="canvas32"></canvas>
<img style="width: 40%;height: auto" id="img1" src="#" alt="">
<img style="width: 40%;height: auto" id="img2" src="#" alt="">
<img style="width: 40%;height: auto" id="img3" src="#" alt="">
<img style="width: 40%;height: auto" id="img4" src="#" alt="">
<img style="width: 40%;height: auto" id="img5" src="#" alt="">
<img style="width: 40%;height: auto" id="img6" src="#" alt="">
<img style="width: 40%;height: auto" id="img7" src="#" alt="">
<img style="width: 40%;height: auto" id="img8" src="#" alt="">
<img style="width: 40%;height: auto" id="img9" src="#" alt="">
<img style="width: 40%;height: auto" id="img10" src="#" alt="">
<img style="width: 40%;height: auto" id="img11" src="#" alt="">
<img style="width: 40%;height: auto" id="img12" src="#" alt="">
<img style="width: 40%;height: auto" id="img13" src="#" alt="">
<img style="width: 40%;height: auto" id="img14" src="#" alt="">
<img style="width: 40%;height: auto" id="img15" src="#" alt="">
<img style="width: 40%;height: auto" id="img16" src="#" alt="">
<img style="width: 40%;height: auto" id="img17" src="#" alt="">
<img style="width: 40%;height: auto" id="img18" src="#" alt="">
<img style="width: 40%;height: auto" id="img19" src="#" alt="">
<img style="width: 40%;height: auto" id="img20" src="#" alt="">
<img style="width: 40%;height: auto" id="img21" src="#" alt="">
<img style="width: 40%;height: auto" id="img22" src="#" alt="">
<img style="width: 40%;height: auto" id="img23" src="#" alt="">
<img style="width: 40%;height: auto" id="img24" src="#" alt="">
<img style="width: 40%;height: auto" id="img25" src="#" alt="">
<img style="width: 40%;height: auto" id="img26" src="#" alt="">
<img style="width: 40%;height: auto" id="img27" src="#" alt="">
<img style="width: 40%;height: auto" id="img28" src="#" alt="">
<img style="width: 40%;height: auto" id="img29" src="#" alt="">
<img style="width: 40%;height: auto" id="img30" src="#" alt="">
<img style="width: 40%;height: auto" id="img31" src="#" alt="">
<img style="width: 40%;height: auto" id="img32" src="#" alt="">

<script>
    var numm = 0;//判断生成几个国旗了;


    function draw(canvasid,bgImg,imgArr,imgid,na) {
        var h = 706/100;//百分1的高
        var w = 540/100;//百分1的宽
        var canvas = document.getElementById(canvasid);
        var ctx = canvas.getContext("2d");
        var imgdata = imgArr;
        if(imgdata.length<25){
            var i = imgdata.length;
            for(var k=0;k<24-i;k++){
                imgdata.push('original/yctx.png');
            }
        }else{
            imgdata.splice(24)
        }
        imgdata.unshift('');
//        console.log(imgdata);
        var name = na;
        var n = 0;
        var x = 11;
        var y = 12;
      function imgLoad(num,ln,na) {
          if(num<ln.length){
              if(n==0){
                  var img=new Image();
//                  img.crossOrigin="Anonymous";
                  img.setAttribute('crossOrigin', 'anonymous');
                  img.src=bgImg;
                  img.onload = function(){
                      ctx.drawImage(img,0,0,353,270,0,0,353,270);
                      n++;
                      imgLoad(n,imgdata,name);
                      //生成的data的路径,可以通过php生成图片存到数据库,单存data路径不合适,高清图片情况下会出现图片的残缺
                  }
              }else {
                  var img=new Image();
//                  img.crossOrigin="Anonymous";
                  img.setAttribute('crossOrigin', 'anonymous');
                  ctx.globalAlpha=0.5;
                  img.src=imgdata[n];
                  img.onload = function(){
                      ctx.drawImage(img,0,0,132,132,x,y,55,55);
                      if(num == 6){
                          x = -44;
                          y = y + 55;
                      }
                      if(num == 12){
                          x = -44;
                          y = y + 55;
                      }
                      if(num == 18){
                          x = -44;
                          y = y + 55;
                      }
                      n++;
                      x = x + 55;
                      imgLoad(n,imgdata,name);
                      //生成的data的路径,可以通过php生成图片存到数据库,单存data路径不合适,高清图片情况下会出现图片的残缺
                  }
              }
          }else {
              var srccc = canvas.toDataURL("image/png");
              obj[na] = srccc;
              $(imgid).attr("src",srccc);
              numm++
              if(numm == 32){
//                  console.log(obj)
                  $.ajax({
                      url:"sql.php",
                      type:"POST",
                      data:obj,
                      success:function (data) {

                      }
                  })

              }

          }
      }
        imgLoad(n,imgdata,name);
    }
    var obj = {};
    $.getJSON("http://gb.wechat.wcampaign.cn/user/getlistforapi",{},function(data){
        var a1 = [];
        var a2 = [];
        var a3 = [];
        var a4 = [];
        var b1 = [];
        var b2 = [];
        var b3 = [];
        var b4 = [];
        var c1 = [];
        var c2 = [];
        var c3 = [];
        var c4 = [];
        var d1 = [];
        var d2 = [];
        var d3 = [];
        var d4 = [];
        var e1 = [];
        var e2 = [];
        var e3 = [];
        var e4 = [];
        var f1 = [];
        var f2 = [];
        var f3 = [];
        var f4 = [];
        var g1 = [];
        var g2 = [];
        var g3 = [];
        var g4 = [];
        var h1 = [];
        var h2 = [];
        var h3 = [];
        var h4 = [];
        for(var i=0;i<data.length;i++){
            if(data[i]['champion'] == '俄罗斯') {a1.push(data[i]['headimgurl'])}
            if(data[i]['champion'] == '沙特阿拉伯') {a2.push(data[i]['headimgurl'])}
            if(data[i]['champion'] == '埃及') {a3.push(data[i]['headimgurl'])}
            if(data[i]['champion'] == '乌拉圭') {a4.push(data[i]['headimgurl'])}
            if(data[i]['champion'] == '葡萄牙') {b1.push(data[i]['headimgurl'])}
            if(data[i]['champion'] == '西班牙') {b2.push(data[i]['headimgurl'])}
            if(data[i]['champion'] == '摩洛哥') {b3.push(data[i]['headimgurl'])}
            if(data[i]['champion'] == '伊朗') {b4.push(data[i]['headimgurl'])}
            if(data[i]['champion'] == '法国') {c1.push(data[i]['headimgurl'])}
            if(data[i]['champion'] == '澳大利亚') {c2.push(data[i]['headimgurl'])}
            if(data[i]['champion'] == '秘鲁') {c3.push(data[i]['headimgurl'])}
            if(data[i]['champion'] == '丹麦') {c4.push(data[i]['headimgurl'])}
            if(data[i]['champion'] == '阿根廷') {d1.push(data[i]['headimgurl'])}
            if(data[i]['champion'] == '冰岛') {d2.push(data[i]['headimgurl'])}
            if(data[i]['champion'] == '克罗地亚') {d3.push(data[i]['headimgurl'])}
            if(data[i]['champion'] == '尼日利亚') {d4.push(data[i]['headimgurl'])}
            if(data[i]['champion'] == '巴西') {e1.push(data[i]['headimgurl'])}
            if(data[i]['champion'] == '瑞士') {e2.push(data[i]['headimgurl'])}
            if(data[i]['champion'] == '哥斯达黎加') {e3.push(data[i]['headimgurl'])}
            if(data[i]['champion'] == '塞尔维亚') {e4.push(data[i]['headimgurl'])}
            if(data[i]['champion'] == '德国') {f1.push(data[i]['headimgurl'])}
            if(data[i]['champion'] == '墨西哥') {f2.push(data[i]['headimgurl'])}
            if(data[i]['champion'] == '瑞典') {f3.push(data[i]['headimgurl'])}
            if(data[i]['champion'] == '韩国') {f4.push(data[i]['headimgurl'])}
            if(data[i]['champion'] == '比利时') {g1.push(data[i]['headimgurl'])}
            if(data[i]['champion'] == '巴拿马') {g2.push(data[i]['headimgurl'])}
            if(data[i]['champion'] == '突尼斯') {g3.push(data[i]['headimgurl'])}
            if(data[i]['champion'] == '英格兰') {g4.push(data[i]['headimgurl'])}
            if(data[i]['champion'] == '波兰') {h1.push(data[i]['headimgurl'])}
            if(data[i]['champion'] == '塞内加尔') {h2.push(data[i]['headimgurl'])}
            if(data[i]['champion'] == '哥伦比亚') {h3.push(data[i]['headimgurl'])}
            if(data[i]['champion'] == '日本') {h4.push(data[i]['headimgurl'])}
        }
        draw('canvas1','original/a1.png',a1,'#img1','a1');
        draw('canvas2','original/a2.png',a2,'#img2','a2');
        draw('canvas3','original/a3.png',a3,'#img3','a3');
        draw('canvas4','original/a4.png',a4,'#img4','a4');
        draw('canvas5','original/b1.png',b1,'#img5','b1');
        draw('canvas6','original/b2.png',b2,'#img6','b2');
        draw('canvas7','original/b3.png',b3,'#img7','b3');
        draw('canvas8','original/b4.png',b4,'#img8','b4');
        draw('canvas9','original/c1.png',c1,'#img9','c1');
        draw('canvas10','original/c2.png',c2,'#img10','c2');
        draw('canvas11','original/c3.png',c3,'#img11','c3');
        draw('canvas12','original/c4.png',c4,'#img12','c4');
        draw('canvas13','original/d1.png',d1,'#img13','d1');
        draw('canvas14','original/d2.png',d2,'#img14','d2');
        draw('canvas15','original/d3.png',d3,'#img15','d3');
        draw('canvas16','original/d4.png',d4,'#img16','d4');
        draw('canvas17','original/e1.png',e1,'#img17','e1');
        draw('canvas18','original/e2.png',e2,'#img18','e2');
        draw('canvas19','original/e3.png',e3,'#img19','e3');
        draw('canvas20','original/e4.png',e4,'#img20','e4');
        draw('canvas21','original/f1.png',f1,'#img21','f1');
        draw('canvas22','original/f2.png',f2,'#img22','f2');
        draw('canvas23','original/f3.png',f3,'#img23','f3');
        draw('canvas24','original/f4.png',f4,'#img24','f4');
        draw('canvas25','original/g1.png',g1,'#img25','g1');
        draw('canvas26','original/g2.png',g2,'#img26','g2');
        draw('canvas27','original/g3.png',g3,'#img27','g3');
        draw('canvas28','original/g4.png',g4,'#img28','g4');
        draw('canvas29','original/h1.png',h1,'#img29','h1');
        draw('canvas30','original/h2.png',h2,'#img30','h2');
        draw('canvas31','original/h3.png',h3,'#img31','h3');
        draw('canvas32','original/h4.png',h4,'#img32','h4');
    });
</script>
</body>
</html>