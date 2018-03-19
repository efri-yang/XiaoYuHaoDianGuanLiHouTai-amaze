<?php
header("Access-Control-Allow-Origin: http://a.com"); // 允许a.com发起的跨域请求  
//如果需要设置允许所有域名发起的跨域请求，可以使用通配符 *  
header("Access-Control-Allow-Origin: *"); // 允许任意域名发起的跨域请求  
header('Access-Control-Allow-Headers: X-Requested-With,X_Requested_With'); 
$data=$_REQUEST[];
echo json_encode($data);
	
?>