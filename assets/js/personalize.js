$(document).ready(function(){
	$(window).scroll(function(){
		$top = $(window).scrollTop();
		$('#aboutwrap').css('-webkit-transform', 'translateY('+ ($top/2) +'px)');
		$('#aboutwrap').css('-moz-transform', 'translateY('+ ($top/2) +'px)');
		$('#aboutwrap').css('-ms-transform', 'translateY('+ ($top/2) +'px)');
		// $closeToBottom = ($top + $(window).height() > $(document).height() - 100);
	 //    	if($closeToBottom) {
	 //      		$('#parallax_slow').after($('canvas').clone());
	 //    	}
	});
});
