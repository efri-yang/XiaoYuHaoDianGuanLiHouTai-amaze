<?php
header("Access-Control-Allow-origin:*");
$query=$_POST["query"];
if($query=="a"){
	$arr=array(
		"query"=>"",
		"suggestions"=>array(
			array("value"=>"Andorra","data"=>"AD"),
			array("value"=>"Andorra Test","data"=>"A2",),
			array("value"=>"United Arab Emirates","data"=>"AE"),
			array("value"=>"Afghanistan","data"=>"AF"),
			array("value"=>"Antigua and Barbuda","data"=>"AG")
			
		)
	);

}else{
	$arr=array(
		"query"=>"",
		"suggestions"=>array(
			
			
		)
	);
}
	
	echo json_encode($arr);

?>