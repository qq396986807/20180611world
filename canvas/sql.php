<?php
/**
 * Created by PhpStorm.
 * User: heiniu
 * Date: 2018/6/12
 * Time: 下午10:12
 */
$a1 = $_POST['a1'];
$a2 = $_POST['a2'];
$a3 = $_POST['a3'];
$a4 = $_POST['a4'];
$b1 = $_POST['b1'];
$b2 = $_POST['b2'];
$b3 = $_POST['b3'];
$b4 = $_POST['b4'];
$c1 = $_POST['c1'];
$c2 = $_POST['c2'];
$c3 = $_POST['c3'];
$c4 = $_POST['c4'];
$d1 = $_POST['d1'];
$d2 = $_POST['d2'];
$d3 = $_POST['d3'];
$d4 = $_POST['d4'];
$e1 = $_POST['e1'];
$e2 = $_POST['e2'];
$e3 = $_POST['e3'];
$e4 = $_POST['e4'];
$f1 = $_POST['f1'];
$f2 = $_POST['f2'];
$f3 = $_POST['f3'];
$f4 = $_POST['f4'];
$g1 = $_POST['g1'];
$g2 = $_POST['g2'];
$g3 = $_POST['g3'];
$g4 = $_POST['g4'];
$h1 = $_POST['h1'];
$h2 = $_POST['h2'];
$h3 = $_POST['h3'];
$h4 = $_POST['h4'];
$arr = array(
    'a1'=>$a1,
    'a2'=>$a2,
    'a3'=>$a3,
    'a4'=>$a4,
    'b1'=>$b1,
    'b2'=>$b2,
    'b3'=>$b3,
    'b4'=>$b4,
    'c1'=>$c1,
    'c2'=>$c2,
    'c3'=>$c3,
    'c4'=>$c4,
    'd1'=>$d1,
    'd2'=>$d2,
    'd3'=>$d3,
    'd4'=>$d4,
    'e1'=>$e1,
    'e2'=>$e2,
    'e3'=>$e3,
    'e4'=>$e4,
    'f1'=>$f1,
    'f2'=>$f2,
    'f3'=>$f3,
    'f4'=>$f4,
    'g1'=>$g1,
    'g2'=>$g2,
    'g3'=>$g3,
    'g4'=>$g4,
    'h1'=>$h1,
    'h2'=>$h2,
    'h3'=>$h3,
    'h4'=>$h4,
    );

foreach ($arr as $key => $value) {
    $base64_image_content = $value;
    //匹配出图片的格式
    if (preg_match('/^(data:\s*image\/(\w+);base64,)/', $base64_image_content, $result)){
        $type = $result[2];
        $new_file = "generate/".$key;
        $new_file = $new_file.".{$type}";
        if (file_put_contents($new_file, base64_decode(str_replace($result[1], '', $base64_image_content)))){

        }
    }
}


