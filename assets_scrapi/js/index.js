$(document).ready(function() {	
	// HOMEPAGE ARROW ANIMATIONS
	var animated = false;
	$(window).bind('scroll', function() {
		var pos = $('#main-text-container').offset();
		if ($(window).scrollTop() > pos.top && !animated) {
			animated = true;
			// outer arrows
			$('.outer').animate({
		        'top': '450%'
		    }, 1000, function () {
		    	//remove arrow class, add outer left/right arrow class
		    	$('#outer-left').addClass('rotate1');
		    	$('#outer-right').addClass('rotate4');
		        $('#outer-left').animate({
		            'left': '170%',
		            'top': '650%'
		        }, 1000);
		        $('#outer-right').animate({
		            'left': '-150%',
		            'top': '660%'
		        }, 1000);
		    });
		    $('.outer-bar').animate({
		    	'height':'350%'},1000,function(){
		    	$('#bar1').animate({'height':'490%', 'left':'105%', 'top':'300%'},1000);
		    	$('#bar4').animate({'height':'540%', 'left':'-50%', 'top':'280%'},1000);
		    });

		    // inner arrows
		    $('.inner').animate({
		        'top': '300%'
		    }, 1000, function () {
		    	$('#inner-left').addClass('rotate2');
		    	$('#inner-right').addClass('rotate3');
		        $('#inner-left').animate({
		            'left': '97%',
		            'top': '600%'
		        }, 1000);
		        $('#inner-right').animate({
		            'left': '3%',
		            'top': '600%'
		        }, 1000);
		    });
		    $('.inner-bar').animate({
		    	'height':'200%'},1000,function(){
		    	$('#bar2').animate({'height':'380%', 'left':'68%', 'top':'250%'},1000);
		    	$('#bar3').animate({'height':'360%', 'left':'25%', 'top':'260%'},1000);
		    });
		}
	});

	
	// HOMEPAGE PICTURE TRANSITIONS
	var animated2 = false;
	$(window).bind('scroll', function() {
		var pos2 = $('#store-text').offset();
		if ($(window).scrollTop() > pos2.top && !animated2) {
			setTimeout(function() {
				$('#one').css({
					'top': '18.5%', 
					'left': '51.25%',
					'-webkit-transition': 'all 0.7s',
					'-webkit-transform': 'rotate(0deg)',
					'-moz-transform': 'rotate(0deg)',
					'-ms-transform': 'rotate(0deg)',
					'transform': 'rotate(0deg)',
				});
			}, 0);
			setTimeout(function() {
				$('#two').css({
					'top': '43.5%', 
					'left': '51.25%',
					'-webkit-transition': 'all 0.7s',
					'-webkit-transform': 'rotate(0deg)',
					'-moz-transform': 'rotate(0deg)',
					'-ms-transform': 'rotate(0deg)',
					'transform': 'rotate(0deg)',
				});
			}, 200);
			setTimeout(function() {
				$('#three').css({
					'top': '63%', 
					'left': '51.25%',
					'-webkit-transition': 'all 0.7s',
					'-webkit-transform': 'rotate(0deg)',
					'-moz-transform': 'rotate(0deg)',
					'-ms-transform': 'rotate(0deg)',
					'transform': 'rotate(0deg)',
				});
			}, 400);
			setTimeout(function() {
				$('#four').css({
					'top': '18.5%', 
					'left': '66.5%',
					'-webkit-transition': 'all 0.7s',
					'-webkit-transform': 'rotate(0deg)',
					'-moz-transform': 'rotate(0deg)',
					'-ms-transform': 'rotate(0deg)',
					'transform': 'rotate(0deg)',
				});
			}, 600);
			setTimeout(function() {
				$('#five').css({
					'top': '43.5%', 
					'left': '61.25%',
					'-webkit-transition': 'all 0.7s',
					'-webkit-transform': 'rotate(0deg)',
					'-moz-transform': 'rotate(0deg)',
					'-ms-transform': 'rotate(0deg)',
					'transform': 'rotate(0deg)',
				});
			}, 800);
		};
	});
	

	// HOMEPAGE QUOTE FADE IN
	$('#main-text-container').delay(100).fadeTo(1500, 1);
	$('.sign-container').delay(1000).fadeTo(2000, 1);

	var state = 0;
	function toggle (s) {
		if (s == 0) {
			// $('#main-text').delay(5000).fadeTo(1500, 0);
			// $('#sub-text').delay(5000).fadeTo(1500, 0);
			$('#main-text-container').fadeTo(1500, 0);
			window.setTimeout(function () {
			    $('#main-text').text('"Why would you choose anything else?"');
			    // $('#sub-text').text('-Scrapi User');
			}, 1500);
			$('#main-text-container').delay(1000).fadeTo(1500, 1);
			// $('#sub-text').delay(1000).fadeTo(1500, 1);
			// $('#main-text1').delay(6150).fadeTo(1500, 1);
			// $('#sub-text1').delay(6150).fadeTo(1500, 1);
			state = 1;
			// toggle(state);
			return false;
		} else if (s == 1) {
			// $('#main-text1').delay(5000).fadeTo(1500, 0);
			// $('#sub-text1').delay(5000).fadeTo(1500, 0);
			// $('#main-text2').delay(6150).fadeTo(1500, 1);
			// $('#sub-text2').delay(6150).fadeTo(1500, 1);
			$('#main-text-container').fadeTo(1500, 0);
			window.setTimeout(function () {
			    $('#main-text').text('"I cant stop using Scrapi. Its so fun"');
			    // $('#sub-text').text('-Scrapi User');
			}, 1500);
			$('#main-text-container').delay(1000).fadeTo(1500, 1);
			// $('#sub-text').delay(1000).fadeTo(1500, 1);
			state = 2;
			// toggle(state);
			return false;
		} else if (s == 2) {
			// $('#main-text2').delay(5000).fadeTo(1500, 0);
			// $('#sub-text2').delay(5000).fadeTo(1500, 0);
			// $('#main-text').delay(6150).fadeTo(1500, 1);
			// $('#sub-text').delay(6150).fadeTo(1500, 1);
			$('#main-text-container').fadeTo(1500, 0);
			window.setTimeout(function () {
			    $('#main-text').text('"The easiest way to make a scrapbook"');
			    // $('#sub-text').text('-Scrapi User');
			}, 1500);
			$('#main-text-container').delay(1000).fadeTo(1500, 1);
			// $('#sub-text').delay(1000).fadeTo(1500, 1);
			state = 0;
			return false;
		}
	};
	window.setInterval(function(){
	  toggle(state);
	}, 7000);


	// BUTTTON MAGIC
	// HOMEPAGE SIGN UP
	$('#sign-left, #sign-mid').click(function() {
		$('#modal-container').css('display', 'block')
		$('#modal-container').fadeTo(100, 1);
		$('#modal-box').fadeTo(300, 1);
		$('html, body').css({
		    'overflow': 'hidden',
		    'height': '100%'
		});
	});
	$('#create, #cancel, #modal-overlay').click(function() {
		$('#modal-container').fadeTo(100, 0);
		$('#modal-container').css('display', 'none');
		$('#modal-box').fadeTo(300, 0);
		$('html, body').css({
		    'overflow': 'auto',
		    'height': 'auto%'
		});
	});
	// Hompage buttons
	$('#sign-right').click(function() {
		window.location = 'browseScrapbooks.html';
	});
	$('#signIn').click(function() {
		window.location = 'browseScrapbooks.html';
	});
	$('#logo').click(function() {
		window.location = 'scrapiHomepage.html'
	});
	$('#collections').click(function() {
		window.location = 'browseScrapbooks.html';
	});
	$('.carousel-item').click(function() {
		window.location = 'viewScrapbook.html';
	});
});




