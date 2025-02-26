/* =================================
------------------------------------
	HALO - Photography Portfolio
	Version: 1.0
 ------------------------------------ 
 ====================================*/



'use strict';

$(window).on('load', function() {
	/*------------------
		Preloder
	--------------------*/
	$(".loader").fadeOut(); 
	$("#preloder").delay(400).fadeOut("slow");

});

(function($) {

	/*------------------
		Navigation
	--------------------*/
	$('.nav-switch').on('click', function(event) {
		$('.main-menu').slideToggle(400);
		event.preventDefault();
	});


	/*------------------
		PORTFOLIO
	--------------------*/
	if($('.portfolio-warp').length > 0 ) {
		var containerEl = document.querySelector('.portfolio-warp');
		var mixer = mixitup(containerEl);
	}


	/*------------------
		Background set
	--------------------*/
	$('.set-bg').each(function() {
		var bg = $(this).data('setbg');
		$(this).css('background-image', 'url(' + bg + ')');
	});



	/*------------------
		Hero Slider
	--------------------*/
	var w_height = $(window).innerHeight();
	$('.hs-item').height(w_height);
	
	$('.hero-slider').owlCarousel({
		loop: true,
		nav: true,
		dots: true,
		mouseDrag: false,
		animateOut: 'fadeOut',
    	animateIn: 'fadeIn',
		navText: [' ', '<i class="fa fa-angle-right"></i><i class="fa fa-angle-right"></i><i class="fa fa-angle-right"></i>'],
		items: 1,
		autoplay: true
	});
	var dot = $('.hero-slider .owl-dot');
	dot.each(function() {
		var index = $(this).index() + 1;
		if(index < 10){
			$(this).html('0').append(index);
			$(this).append('<span>.</span>');
		}else{
			$(this).html(index);
			$(this).append('<span>.</span>');
		}
	});


	/*------------------
		Review Slider
	--------------------*/
	$('.review-slider').owlCarousel({
		margin: 10,
		loop: true,
		nav: false,
		dots: false,
		items: 1,
		autoplay: true,
	});


	/*------------------
		Work Slider
	--------------------*/
	$('.work-slider').owlCarousel({
		margin: 0,
		loop: true,
		nav: true,
		dots: false,
		items: 1,
		autoplay: true,
		animateOut: 'fadeOut',
    	animateIn: 'fadeIn',
	});


	/*------------------
		Circle progress
	--------------------*/
	$('.circle-progress').each(function() {
		var cpvalue = $(this).data("cpvalue");
		var cpcolor = $(this).data("cpcolor");
		var cptitle = $(this).data("cptitle");
		var cpid 	= $(this).data("cpid");

		$(this).append('<div class="'+ cpid +'"></div><div class="progress-info"><h2>'+ cpvalue +'%</h2><p>'+ cptitle +'</p></div>');

		if (cpvalue < 100) {

			$('.' + cpid).circleProgress({
				value: '0.' + cpvalue,
				size: 240,
				thickness: 3,
				fill: cpcolor,
				emptyFill: "rgba(0, 0, 0, 0)"
			});
		} else {
			$('.' + cpid).circleProgress({
				value: 1,
				size: 240,
				thickness: 3,
				fill: cpcolor,
				emptyFill: "rgba(0, 0, 0, 0)"
			});
		}

	});


	/*------------------
		Accordions
	--------------------*/
	$('.panel-link').on('click', function (e) {
		$('.panel-link').parent('.panel-header').removeClass('active');
		var $this = $(this).parent('.panel-header');
		if (!$this.hasClass('active')) {
			$this.addClass('active');
		}
		e.preventDefault();
	});



})(jQuery);

document.addEventListener("DOMContentLoaded", function () {
    // Detectar dispositivos táctiles
    function isTouchDevice() {
        return 'ontouchstart' in window || navigator.maxTouchPoints;
    }

    if (isTouchDevice()) {
        let portfolioItems = document.querySelectorAll(".single-portfolio");

        portfolioItems.forEach(item => {
            let info = item.querySelector(".portfolio-info");
            let link = item.querySelector("a"); // Capturamos el enlace

            let touched = false; // Estado de toque

            item.addEventListener("click", function (event) {
                if (!touched) {
                    // Primer toque: solo muestra la información
                    event.preventDefault(); // Evita que el enlace se abra de inmediato
                    info.style.opacity = "1";
                    touched = true;

                    // Ocultar nuevamente si tocan otra tarjeta
                    portfolioItems.forEach(otherItem => {
                        if (otherItem !== item) {
                            otherItem.querySelector(".portfolio-info").style.opacity = "0";
                            otherItem.setAttribute("data-touched", "false");
                        }
                    });

                    // Restablecer el estado después de unos segundos si no tocan de nuevo
                    setTimeout(() => { touched = false; }, 3000);
                } else {
                    // Segundo toque: permite seguir el enlace
                    window.location.href = link.href;
                }
            });
        });
    }
});

$(document).ready(function () {
    $('.single-portfolio').each(function () {
        var $item = $(this);
        var $link = $item.find('a');
        var agotado = $item.hasClass('agotado'); // Verifica si está agotado

        if (agotado) {
            $link.on('click', function (event) {
                event.preventDefault(); // Evita que se abra el enlace original
                window.location.href = 'portfolio.html'; // Redirige a la página de stock
            });
        }
    });
});
