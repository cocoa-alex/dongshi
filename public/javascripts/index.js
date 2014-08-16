$(document).ready(function($){
    
    // Cache some variables
    var $htmlbody = $('html, body'),
    	$button   = $('.button');


    // Create a function that will be passed a slide number and then will scroll to that slide using jquerys animate.
    // The Jquery easing plygin is also used, so we passed in the easing method of 'easeInOutQuint' which is 
    // avallabel throught the plugin
    function goToByScroll(dataslide) {
    	$htmlbody.animate({scrollTop: $('.slide[data-slide="' + dataslide + '"]').offset().top},
    		2000, 'easeInOutQuint');
    }

    $button.click(function(e){
    	var dataslide = $(this).attr('data-slide');
    	goToByScroll(dataslide);
    });
});