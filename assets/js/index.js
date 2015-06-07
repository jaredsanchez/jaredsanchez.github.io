$(document).ready(function() {

//handle animation problem when reloading page from non-intro section
var url = window.location.href;
if( url.indexOf('#about') > -1 ){
	aboutAnimation();
} else if( url.indexOf('#project') > -1 ) {
	projectAnimation();
} else if( url.indexOf('#contact') > -1 ) {
	contactAnimation();
}


//full page scrolling
$('#fullpage').fullpage({
	anchors:['', 'about', 'project', 'contact'],
	navigation: true,
    scrollOverflow: true,
    navigationPosition: 'right',
    navigationTooltips: ['hello', 'about', 'projects', 'contact'],
    // autoScrolling: false,
});
//change color of tooltips
$('.fp-tooltip').css({color:'#5E5E5E'});





// INTRO SECTION
//prof pic animations
$('#me').css({
	opacity: 1,
	transform: 'translateY(-100px)',
	'-webkit-transform': 'translateY(-100px)',
	'-moz-transform': 'translateY(-100px)',
	'-ms-transform': 'translateY(-100px)',
	'-o-transform': 'translateY(-100px)',
});

//intro text animation
setTimeout(function() {
	$('#intro-text').css({
		opacity: 1,
		transform: 'translateY(-100px)',
		'-webkit-transform': 'translateY(-100px)',
		'-moz-transform': 'translateY(-100px)',
		'-ms-transform': 'translateY(-100px)',
		'-o-transform': 'translateY(-100px)',
	});
}, 500);

//nav animation
setTimeout(function() {
	$('#nav').css({opacity:1})
}, 1500);







// SECTION ANIMATION HANDLER
$(window).bind( 'hashchange', function(e) { 
    var anchor = document.location.hash;
    //fist section
    if( anchor === '#about' ) {
        aboutAnimation();
    //second section
    }else if ( anchor === '#project' ) {
        projectAnimation();
    //third section
    }else if ( anchor === '#contact' ) {
        contactAnimation();
    }
});







// ABOUT SECTION
//company links
$('#ampush').click(function() {
	window.open('http://www.ampush.com/')
});
$('#shutterfly').click(function() {
	window.open('http://www.shutterfly.com/')
});

//about section animation function
function aboutAnimation() {
	//about title top
	$('#about-title-top').fadeIn(1500);
	//education info
	$('#mid-container-top').delay(500).fadeIn(1500);
	//about title bottom animation
	$('#about-title-bottom').delay(1250).fadeIn(1500);
	//work info animation
	$('#mid-container-bottom').delay(2000).fadeIn(1500);
	//side container animations
	$('#left-container').delay(2750).fadeIn(1500);
	$('#right-container').delay(2750).fadeIn(1500);
};








// PROJECTS SECTION
//project links
$('#git-logo').click(function() {
	window.open('https://github.com/jaredsanchez')
});

//project section animation function
function projectAnimation() {
	//about title top
	$('#projects-title').fadeIn(1500);

	//animate each project in turn
	setTimeout(function() {
		$('#proj1').css({
			opacity: 1,
			transform: 'translateY(-100px)',
			'-webkit-transform': 'translateY(-100px)',
			'-moz-transform': 'translateY(-100px)',
			'-ms-transform': 'translateY(-100px)',
			'-o-transform': 'translateY(-100px)',
		});
	}, 500);
	setTimeout(function() {
		$('#proj2').css({
			opacity: 1,
			transform: 'translateY(-100px)',
			'-webkit-transform': 'translateY(-100px)',
			'-moz-transform': 'translateY(-100px)',
			'-ms-transform': 'translateY(-100px)',
			'-o-transform': 'translateY(-100px)',
		});
	}, 1000);
	setTimeout(function() {
		$('#proj3').css({
			opacity: 1,
			transform: 'translateY(-100px)',
			'-webkit-transform': 'translateY(-100px)',
			'-moz-transform': 'translateY(-100px)',
			'-ms-transform': 'translateY(-100px)',
			'-o-transform': 'translateY(-100px)',
		});
	}, 1500);
	setTimeout(function() {
		$('#proj4').css({
			opacity: 1,
			transform: 'translateY(-100px)',
			'-webkit-transform': 'translateY(-100px)',
			'-moz-transform': 'translateY(-100px)',
			'-ms-transform': 'translateY(-100px)',
			'-o-transform': 'translateY(-100px)',
		});
	}, 2000);

	//fade in github stuff
	$('#git-logo').delay(3500).fadeIn(1000);
	$('#git-text').delay(3500).fadeIn(1000);
};

//reveal project details
$('#proj1').click(function() {
	$('#details-proj1').addClass('active-proj');
	$.fn.fullpage.setAllowScrolling(false);
	$('body').addClass('no-scroll');
	$('#fp-nav').addClass('display-none');
});
$('#proj2').click(function() {
	$('#details-proj2').addClass('active-proj');
	$.fn.fullpage.setAllowScrolling(false);
	$('body').addClass('no-scroll');
	$('#fp-nav').addClass('display-none');
});
$('#proj3').click(function() {
	$('#details-proj3').addClass('active-proj');
	$.fn.fullpage.setAllowScrolling(false);
	$('body').addClass('no-scroll');
	$('#fp-nav').addClass('display-none');
});
$('#proj4').click(function() {
	$('#details-proj4').addClass('active-proj');
	$.fn.fullpage.setAllowScrolling(false);
	$('body').addClass('no-scroll');
	$('#fp-nav').addClass('display-none');
});

//hide project details
$('.close').click(function() {
	var currActive = $('.active-proj');
	currActive.removeClass('active-proj');
	$.fn.fullpage.setAllowScrolling(true);
	$('body').removeClass('no-scroll');
	$('#fp-nav').removeClass('display-none');
});

//more info links
$('#cList').click(function() {
	window.open('cListHomepage.html');
	window.open('listView.html');
	window.open('itemView.html');
});
$('#scrapi').click(function() {
	window.open('scrapiHomepage.html');
	window.open('browseScrapbooks.html');
	window.open('viewScrapbook.html');
});
$('#ass').click(function() {
	window.open('assets/Assassins_Final_Report.pdf');
});
$('#watson').click(function() {
	window.open('https://www.youtube.com/watch?v=NjHF57GV4CA');
});


// CAROUSEL STUFF STARTS HERE
var currMargin;
var clicked;
var carousel;
//Implement the "slide to left" when the user clicks on #carousel-next here
$('.r-3').click(function() {
	clicked = $(this);
	carousel = clicked.next().children();
	currMargin = parseInt(carousel.css('margin-left').replace("%", ""));
	if (currMargin/4 === -200) {
		carousel.css({'margin-left': '0%'});
	} else if (currMargin/4 === -100) {
		carousel.css({'margin-left': '-200%'});
	} else {
		carousel.css({'margin-left': '-100%'});
	}
});
//Implement the "slide to right" when the user clicks on #carousel-prev here
$('.l-3').click(function() {
	clicked = $(this);
	carousel = clicked.next().next().children();
	currMargin = parseInt(carousel.css('margin-left').replace("px", ""));
	if (currMargin/4 === -200) {
		carousel.css({'margin-left': '-100%'});
	} else if (currMargin/4 === -100) {
		carousel.css({'margin-left': '0%'});
	} else {
		carousel.css({'margin-left': '-200%'});
	}
});
//Implement the "slide to left" when the user clicks on #carousel-next here
$('.r-5').click(function() {
	clicked = $(this);
	carousel = clicked.next().children();
	currMargin = parseInt(carousel.css('margin-left').replace("%", ""));
	if (currMargin/4 === -400) {
		carousel.css({'margin-left': '0%'});
	} else if (currMargin/4 === -300) {
		carousel.css({'margin-left': '-400%'});
	} else if (currMargin/4 === -200) {
		carousel.css({'margin-left': '-300%'});
	} else if (currMargin/4 === -100) {
		carousel.css({'margin-left': '-200%'});
	} else {
		carousel.css({'margin-left': '-100%'});
	}
});
//Implement the "slide to right" when the user clicks on #carousel-prev here
$('.l-5').click(function() {
	clicked = $(this);
	carousel = clicked.next().next().children();
	currMargin = parseInt(carousel.css('margin-left').replace("px", ""));
	if (currMargin/4 === -400) {
		carousel.css({'margin-left': '-300%'});
	} else if (currMargin/4 === -300) {
		carousel.css({'margin-left': '-200%'});
	} else if (currMargin/4 === -200) {
		carousel.css({'margin-left': '-100%'});
	} else if (currMargin/4 === -100) {
		carousel.css({'margin-left': '0%'});
	} else {
		carousel.css({'margin-left': '-400%'});
	}
});








// CONTACT SECTION
//contact links
$('#linkedin').click(function() {
	window.open('https://www.linkedin.com/in/jaredsanchez')
});
$('#git').click(function() {
	window.open('https://github.com/jaredsanchez')
});
$('#email').click(function() {
	window.location = 'mailto:jared.d.sanchez@gmail.com'
});
$('#resume').click(function() {
	//fix resume link
	window.open('assets/JaredSanchezResume.pdf')
});

//back to top button
$('#back-to-top').click(function() {
	$.fn.fullpage.moveTo('');
});

//contact section animation function
function contactAnimation() {
	//contact title
	$('#contact-title').fadeIn(1500);
	//animate logos, then text
	setTimeout(function() {
		$('.contact-item').css({
			opacity: 1,
			transform: 'translateY(-100px)',
			'-webkit-transform': 'translateY(-100px)',
			'-moz-transform': 'translateY(-100px)',
			'-ms-transform': 'translateY(-100px)',
			'-o-transform': 'translateY(-100px)',
		});
	}, 1000);
	//animate back to top
	setTimeout(function() {
		$('#back-to-top').css({
			opacity: 1,
			transform: 'translateY(-100px)',
			'-webkit-transform': 'translateY(-100px)',
			'-moz-transform': 'translateY(-100px)',
			'-ms-transform': 'translateY(-100px)',
			'-o-transform': 'translateY(-100px)',
		});
	}, 2000);
};




});


    




