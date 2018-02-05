$(function(){
	$(window).scroll(function() {
	/* Act on the event */
		if($(window).scrollTop() > 100){
			$('.navbar').addClass('navbar-scroll');
			$('.logo-wrap').addClass('logo-wrap-scroll');
			$('.nav-item').addClass('nav-item-scroll');
		}
		else{
			$('.navbar').removeClass('navbar-scroll');
			$('.logo-wrap').removeClass('logo-wrap-scroll');
			$('.nav-item').removeClass('nav-item-scroll');
		}
	});
	$('.to-top').click(function(){
		$('body').animate({'scrollTop':0});
		return false;
	});
})
