$(document).ready(function(){


	//top parallax
	//$(window).scroll(function(){

	$(window).bind('scroll', function(e) {
		$top = $(window).scrollTop()/1.3;

		$('#headerwrap').css('top',$top+'px');
		$('#aboutwrap').css('top',$top+'px');
		$('#workwrap').css('top',$top+'px');
/*
		$('#headerwrap').css('-webkit-transform', 'translateY(0)');
		$('#headerwrap').css('-moz-transform', 'translateY(0');
		$('#headerwrap').css('-ms-transform', 'translateY(0');


		$('#aboutwrap').css('-webkit-transform', 'translateY('+ ($top) +'px)');
		$('#aboutwrap').css('-moz-transform', 'translateY('+ ($top) +'px)');
		$('#aboutwrap').css('-ms-transform', 'translateY('+ ($top) +'px)');



    	$('#workwrap').css('-webkit-transform', 'translateY('+ ($top) +'px)');
		$('#workwrap').css('-moz-transform', 'translateY('+ ($top) +'px)');
		$('#workwrap').css('-ms-transform', 'translateY('+ ($top) +'px)');

		*/
	});



	//set random background image

	var bg_num = Math.ceil(Math.random()*6);
	var window_height = $(window).height();

	$('#headerwrap').css('background-image', 'url(assets/img/back'+bg_num+'.jpg)').css('min-height',window_height+20);


	//move heading to vertical center
	$('#site_title').css("top",window_height/3-$('#site_title').height()).animate({opacity:1},1300);
	//$('#headerwrap').css('top',window_height);

});
