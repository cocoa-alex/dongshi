/*!
 * Start Bootstrap - Agency Bootstrap Theme (http://startbootstrap.com)
 * Code licensed under the Apache License v2.0.
 * For details, see http://www.apache.org/licenses/LICENSE-2.0.
 */

// jQuery for page scrolling feature - requires jQuery Easing plugin
$(function() {
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });
});


$(window).scroll(function() {
    if ($(".navbar").offset().top > 150) {
        $(".navbar-fixed-top").addClass("top-nav-collapse");
    } else {
        $(".navbar-fixed-top").removeClass("top-nav-collapse");
    }
});

//==================== Smooth Page Scroll ========================//
//jQuery for page scrolling feature - requires jQuery Easing plugin
$(function() {
    $('.page-scroll a').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });
});

jQuery(function($){
	$.supersized({
	// Functionality
	slide_interval          :   5000,		// Length between transitions
	transition              :   1, 			// 0-None, 1-Fade, 2-Slide Top, 3-Slide Right, 4-Slide Bottom, 5-Slide Left, 6-Carousel Right, 7-Carousel Left
	transition_speed		:	1000,		// Speed of transition
											   
	// Components							
	slide_links				:	'blank',	// Individual links for each slide (Options: false, 'num', 'name', 'blank')
	slides 					:  	[			// Slideshow Images
										{image : '/img/bg/1.jpg'},
										{image : '/img/bg/2.jpg'},
										{image : '/img/bg/3.jpg'}
	]
	});
});
$(document).ready(function(){
	  $('#intro-slider').flexslider({
	    animation: "fade",
	    controlNav: false,
	    DirectionNav: false,
	   slideshowSpeed: 4000,        
	    animationSpeed: 600  
	  });
});
//==================== Animated Facts ========================//
jQuery(document).ready(function($) {
  "use strict";
	$('.facts-content').appear(function() {
    	$('#lines').animateNumber({ number: 75 }, 2000 );
    	$('#lines1').animateNumber({ number: 25 }, 2000 );
    	$('#lines2').animateNumber({ number: 100 }, 2000 );
    	$('#lines3').animateNumber({ number: 150 }, 2000 );
	},{accX: 0, accY: -50});
});

window.sr = new scrollReveal();
