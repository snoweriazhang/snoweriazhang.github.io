$(document).ready(function(){
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
});
