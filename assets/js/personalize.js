$(document).ready(function(){
	$(window).scroll(function(){
		$top = $(window).scrollTop();

    $('#headerwrap').css('-webkit-transform', 'translateY('+ ($top/2.5) +'px)');
		$('#headerwrap').css('-moz-transform', 'translateY('+ ($top/2.5) +'px)');
		$('#headerwrap').css('-ms-transform', 'translateY('+ ($top/2.5) +'px)');

		$('#aboutwrap').css('-webkit-transform', 'translateY('+ ($top/2.5) +'px)');
		$('#aboutwrap').css('-moz-transform', 'translateY('+ ($top/2.5) +'px)');
		$('#aboutwrap').css('-ms-transform', 'translateY('+ ($top/2.5) +'px)');
	});
});
