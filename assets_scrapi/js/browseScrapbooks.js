$(document).ready(function() {
	// CAROUSEL STUFF STARTS HERE
	//Implement the "slide to left" when the user clicks on #carousel-next here
	var currMargin;
	var clicked;
	var carousel;
	// $('#carousel-next').click(function() {
	$('.right').click(function() {
		clicked = $(this);
		carousel = clicked.next();
		currMargin = parseInt(carousel.css('margin-left').replace("px", ""));
		if (currMargin === -1710) {
			carousel.css({'margin-left': 0, 'transition-duration': '0.3s'});
			return false;
		} else {
			carousel.css('margin-left', currMargin - 570);
		}
	});
	//Implement the "slide to right" when the user clicks on #carousel-prev here
	$('.left').click(function() {
		clicked = $(this);
		carousel = clicked.next().next();
		currMargin = parseInt(carousel.css('margin-left').replace("px", ""));
		if (currMargin >= 0) {
			carousel.css({'margin-left': -1710, 'transition-duration': '0.3s'});
			return false;
		} else {
			carousel.css('margin-left', currMargin + 570);
		}
	});

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
		$('#modal-container').css('display', 'none')
		$('#modal-container').fadeTo(100, 0);
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