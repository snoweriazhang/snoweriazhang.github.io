$(document).ready(function(){
	$(window).scroll(function(){
		$top = $(window).scrollTop()/1.8;

		//alert("hi");

    $('#headerwrap').css('-webkit-transform', 'translateY('+ ($top) +'px)');
		$('#headerwrap').css('-moz-transform', 'translateY('+ ($top) +'px)');
		$('#headerwrap').css('-ms-transform', 'translateY('+ ($top) +'px)');


	//$('#headerwrap').css('background-image', '');
	//alert($('#headerwrap').css('background-image'));

		$('#aboutwrap').css('-webkit-transform', 'translateY('+ ($top) +'px)');
		$('#aboutwrap').css('-moz-transform', 'translateY('+ ($top) +'px)');
		$('#aboutwrap').css('-ms-transform', 'translateY('+ ($top) +'px)');



    $('#workwrap').css('-webkit-transform', 'translateY('+ ($top) +'px)');
		$('#workwrap').css('-moz-transform', 'translateY('+ ($top) +'px)');
		$('#workwrap').css('-ms-transform', 'translateY('+ ($top) +'px)');
	});

	var bg_num = Math.ceil(Math.random()*6);

	$('#headerwrap').css('background-image', 'url(assets/img/back'+bg_num+'.jpg)');
	//$("#headerwrap").css("width", '20%');


/*
      (function() {
        var urls = ['1', '2', '3', '4'];
        function swap() {
          document.getElementById('theImage').setAttribute('src', urls[Math.round(Math.random() * urls.length)] + '.jpg');
        }

        // Mozilla, Opera and webkit nightlies currently support this event
        if ( document.addEventListener ) {
          window.addEventListener( 'load', swap, false );
        // If IE event model is used
        } else if ( document.attachEvent ) {
          window.attachEvent( 'onload', swap );
        }
      })();*/
});
