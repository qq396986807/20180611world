<?php
ignore_user_abort(); // 后台运行
$a = 0;
set_time_limit(0); // 取消脚本运行时间的超时上限
$interval=10;// 每隔半小时运行，这个间隔时间是可以随着 需要进行修改

//    $a++;
//    $myfile = fopen("11.txt", "w") or die("Unable to open file!");
//    fwrite($myfile,$a);
//    fclose($myfile);          //这里是你要执行的代码
    while (1) {
        if(connection_aborted()) {
            break;
        }
    }
sleep($interval); // 休眠半小时

?>