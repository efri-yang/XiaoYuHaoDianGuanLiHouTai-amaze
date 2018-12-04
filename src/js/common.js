$(function(){
	$(".coms-layout-header .bars-nav").on("click",function(event){
		event.stopPropagation()
		var $headNav=$(".header-nav");
		if($headNav.hasClass("active")){
			$headNav.removeClass("active")
		}else{
			$headNav.addClass("active")
		}
	});
	$("body").on("touchstart",function(event){
		if($(event.target).closest(".header-nav").length){
			return;
		}else{
			$(".header-nav").removeClass("active");
		}
	})
})
