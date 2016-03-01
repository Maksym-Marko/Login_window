$(document).ready(function(){
		
	$(".SpCklick").click(function() {
		if($(".DialogWind").is(":visible")){
			 $(".DialogWind").hide(0);
			 $(".DialTriangle").hide(0);
		}
	     	else{
		 	 $(".DialogWind").show(0);
			 $(".DialTriangle").show(0);
		 } 	     
	});
	   
	$("header").click(function(){
	   		$(".DialogWind").hide(0);
			$(".DialTriangle").hide(0);
	});
})
