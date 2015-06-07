$(document).ready(function() {
	//VIEW SCRABPBOOK STARTS HERE
	function centerImg() {
		var selected = $("#selected-img");
	 	var selectedWidth = selected.width();
	 	var parentWidth = selected.parent().width();
	 	var widthPercentage = 100*(selectedWidth/parentWidth);
	 	var left = (100-widthPercentage)/2;
	 	// debugger;
	 	selected.css('left', '' + left + '%');
	};
	
	centerImg();

	$('.small-img').click(function() {
		//fix gallery selection
		var oldSelected = $('.small-selected');
		oldSelected.removeClass('small-selected');
		var newSelected = $(this).parent();
		newSelected.addClass('small-selected');
		//change displayed img
		var url = $(this).attr('id');
		$('#selected-img').attr('src', url);
		centerImg();
	});

	$('#next').click(function () {
		var oldSelected = $('.small-selected');
		var newSelected = oldSelected.next();
		oldSelected.removeClass('small-selected');
		newSelected.addClass('small-selected');
		//change displayed img
		var img = newSelected.children();
		var url = img.attr('id');
		$('#selected-img').attr('src', url);
		centerImg();
	});
	$('#prev').click(function () {
		var oldSelected = $('.small-selected');
		var newSelected = oldSelected.prev();
		oldSelected.removeClass('small-selected');
		newSelected.addClass('small-selected');
		//change displayed img
		var img = newSelected.children();
		var url = img.attr('id');
		$('#selected-img').attr('src', url);
		centerImg();
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