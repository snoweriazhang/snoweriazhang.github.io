$(document).ready(function(){

	//top parallax
	$(window).scroll(function(){
		$top = $(window).scrollTop()/1.8;

   		$('#headerwrap').css('-webkit-transform', 'translateY('+ ($top) +'px)');
		$('#headerwrap').css('-moz-transform', 'translateY('+ ($top) +'px)');
		$('#headerwrap').css('-ms-transform', 'translateY('+ ($top) +'px)');


		$('#aboutwrap').css('-webkit-transform', 'translateY('+ ($top) +'px)');
		$('#aboutwrap').css('-moz-transform', 'translateY('+ ($top) +'px)');
		$('#aboutwrap').css('-ms-transform', 'translateY('+ ($top) +'px)');



    	$('#workwrap').css('-webkit-transform', 'translateY('+ ($top) +'px)');
		$('#workwrap').css('-moz-transform', 'translateY('+ ($top) +'px)');
		$('#workwrap').css('-ms-transform', 'translateY('+ ($top) +'px)');
	});

	//set random background image

	var bg_num = Math.ceil(Math.random()*6);
	var window_height = $(window).height();

	$('#headerwrap').css('background-image', 'url(assets/img/back'+bg_num+'.jpg)').css('min-height',window_height+20);


	//move heading to vertical center
	$('#site_title').css("top",window_height/3-$('#site_title').height()).animate({opacity:1},1300);
	//$('#headerwrap').css('top',window_height);

});
