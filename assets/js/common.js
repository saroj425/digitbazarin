"use strict";

	// Animation blocks
	$('.iphone-nalf').animated('fadeInUp');
	$('.section-class-image > img').animated('fadeInUp');
	$('.iphones > .right-mob-back, .left-mob-back').animated('fadeInUp');
	$('.heading-title > h2').animated('fadeInDown');
	$('.heading-title > p').animated('fadeInUp');

	// Top menu - Superfish 
	$('ul.sf-menu').superfish({
		delay: 200,
		speed: 'fast',
		cssArrows: true,
		disableHI: false,
		easing: 'fade',
		touchMove: false,
		swipe: false
	})

	// Sticky menu
	$('#top-nav').sticky({
		topSpacing:0,
		zIndex: 40
	});

	//Smooth Scroll
	$('a.smooth-scroll').on('click', function (event) {
		var $anchor = $(this);
		$('html, body').stop().animate({
			scrollTop: $($anchor.attr('href')).offset().top - 57
		}, {
			duration: 1000,
			specialEasing: {
				width: "linear",
				height: "easeInOutCubic"
			}
		});
		event.preventDefault();
	});

	$( '#accordion:nth-child(1n)' ).accordion({
			heightStyle: 'content',
			active: true,
			collapsible: true,
	});

	// Back to top link
	$(document).scroll(function () {
		var y = $(this).scrollTop();
		if (y > 500) {
			$('.top').fadeIn('slow');
		} else {
			$('.top').fadeOut('slow');
		}
	});
 
	// Full screen slider - Slick
	$('.full-slider').slick({
		dots: true,
		fade: true,
		appendDots: '#dots-control-full-slider',
		dotsClass: 'dots',
		autoplay: true,
		autoplaySpeed: 8000,
		autoHeight: false,
		adaptiveHeight: true,
		mobileFirst: true,
		touch: false,
		cssEase: 'linear',
		prevArrow: $('.prev'),
		nextArrow: $('.next')
	});

	// Screenshots slider
	$('.screenshot').slick({
		dots: true,
		dotsClass: 'dots',
		appendDots: '#dots-control-screenshots',
		slidesToScroll: 2,
		autoplay: true,
		autoplaySpeed: 8000,
		infinite: true,
		slidesToShow: 4,
		prevArrow: $('.prev-next-block > .prev'),
		nextArrow: $('.prev-next-block > .next'),
		responsive: [
		{
			breakpoint: 1170,
				settings: {
				slidesToShow: 4,
				slidesToScroll: 2,
				infinite: false,
			}
		},
		{
			breakpoint: 1170,
				settings: {
				slidesToShow: 4,
				slidesToScroll: 2,
				infinite: false,
			}
		},
		{
			breakpoint: 1024,
				settings: {
				slidesToShow: 3,
				slidesToScroll: 2,
				infinite: false,
			}
		},

		{
		breakpoint: 600,
			settings: {
			slidesToShow: 2,
			slidesToScroll: 2
			}
		},

		{
		breakpoint: 480,
			settings: {
			slidesToShow: 1,
			slidesToScroll: 1
			}
		}
	 // You can unslick at a given breakpoint now by adding:
	 // settings: "unslick"
	 // instead of a settings object
		]
	});
	
	// Partners items
	$('.parnters-item').slick({
		dots: false,
		slidesToScroll: 2,
		autoplay: true,
		autoplaySpeed: 8000,
		infinite: true,
		slidesToShow: 4,
		prevArrow: $('#control-partners > .prev'),
		nextArrow: $('#control-partners > .next'),
		responsive: [
		{
			breakpoint: 1170,
				settings: {
				slidesToShow: 4,
				slidesToScroll: 2,
				infinite: false,
			}
		},
		{
			breakpoint: 1170,
				settings: {
				slidesToShow: 4,
				slidesToScroll: 2,
				infinite: false,
			}
		},
		{
			breakpoint: 1024,
				settings: {
				slidesToShow: 3,
				slidesToScroll: 2,
				infinite: false,
			}
		},

		{
		breakpoint: 600,
			settings: {
			slidesToShow: 2,
			slidesToScroll: 2
			}
		},

		{
		breakpoint: 480,
			settings: {
			slidesToShow: 1,
			slidesToScroll: 1
			}
		}
	 // You can unslick at a given breakpoint now by adding:
	 // settings: "unslick"
	 // instead of a settings object
		]
	});

	

	$('.testimonials-items').slick({
		dots: true,
		dotsClass: 'dots',
		appendDots: '#dots-control-testimonials',
		slidesToScroll: 1,
		autoplay: true,
		autoplaySpeed: 8000,
		infinite: true,
		slidesToShow: 3,
		prevArrow: $('#control-testimonials > .prev'),
		nextArrow: $('#control-testimonials > .next'),
		responsive: [
		{
			breakpoint: 1170,
				settings: {
				slidesToShow: 4,
				slidesToScroll: 2,
				infinite: false,
				dots: true
			}
		},
		{
			breakpoint: 1170,
				settings: {
				slidesToShow: 4,
				slidesToScroll: 2,
				infinite: false,
				dots: true
			}
		},
		{
			breakpoint: 1024,
				settings: {
				slidesToShow: 2,
				slidesToScroll: 2,
				infinite: false,
				dots: true
			}
		},

		{
		breakpoint: 600,
			settings: {
			slidesToShow: 2,
			slidesToScroll: 2
			}
		},

		{
		breakpoint: 480,
			settings: {
			slidesToShow: 1,
			slidesToScroll: 1
			}
		}
	 // You can unslick at a given breakpoint now by adding:
	 // settings: "unslick"
	 // instead of a settings object
		]
	});

	// Screenshots
	$('.screenshot').each(function() {
		$(this).magnificPopup({
			delegate: 'a',
			mainClass: 'mfp-zoom-in',
			type: 'image',
			tLoading: '',
			gallery:{
				enabled: true,
			},
			removalDelay: 300,
			callbacks: {
				beforeChange: function() {
					this.items[0].src = this.items[0].src + '?=' + Math.random(); 
				},
				open: function() {
					$.magnificPopup.instance.next = function() {
						var self = this;
						self.wrap.removeClass('mfp-image-loaded');
						setTimeout(function() { $.magnificPopup.proto.next.call(self); }, 120);
					}
					$.magnificPopup.instance.prev = function() {
						var self = this;
						self.wrap.removeClass('mfp-image-loaded');
						setTimeout(function() { $.magnificPopup.proto.prev.call(self); }, 120);
					}
				},
				imageLoadComplete: function() { 
					var self = this;
					setTimeout(function() { self.wrap.addClass('mfp-image-loaded'); }, 16);
				}
			}
		});
	});
	
	
	// Background slider function
	$('.slide, .hero-background-slider, .fixed-image').each(function(){
		var url = $(this).attr('data-image');
		if(url){
			$(this).css('background-image', 'url(' + url + ')');
		}
	});

	// Slider animation full screen
	$('.full-slider').on('afterChange', function(event, slick, currentSlide){
		$('.slick-active .heading-title-big').removeClass('opacity-none');
		$('.slick-active .heading-title-big').addClass('animated fadeInDown');
		//
		$('.slick-active .description').removeClass('opacity-none');
		$('.slick-active .description').addClass('animated slideInUp');
		//
		$('.slick-active .buttons-download').removeClass('opacity-none');
		$('.slick-active .buttons-download').addClass('animated fadeInDown');

	});

	$('.full-slider').on('beforeChange', function(event, slick, currentSlide){
		$('.slick-active .heading-title-big').addClass('opacity-none');
		$('.slick-active .heading-title-big').removeClass('animated fadeInDown');
		//
		$('.slick-active .description').addClass('opacity-none');
		$('.slick-active .description').removeClass('animated slideInUp');
		//
		$('.slick-active .buttons-download').addClass('opacity-none');
		$('.slick-active .buttons-download').removeClass('animated fadeInDown');
	});

	// MagnificPopup
	$('.icon-play').magnificPopup({
		type: 'iframe',
		iframe: {
			markup: '<div class="mfp-iframe-scaler">'+
			'<div class="mfp-close"></div>'+
			'<iframe class="mfp-iframe" frameborder="0" allowfullscreen></iframe>'+
			'</div>', // HTML markup of popup, `mfp-close` will be replaced by the close button

			patterns: {
				youtube: {
					index: 'youtube.com/', // String that detects type of video (in this case YouTube). Simply via url.indexOf(index).
					id: 'v=', // String that splits URL in a two parts, second part should be %id%
						// Or null - full URL will be returned
						// Or a function that should return %id%, for example:
						// id: function(url) { return 'parsed id'; }
					src: '//www.youtube.com/embed/%id%?autoplay=1' // URL that will be set as a source for iframe.
				},

				vimeo: {
					index: 'vimeo.com/',
					id: '/',
					src: '//player.vimeo.com/video/%id%?autoplay=1'
				},

				gmaps: {
					index: '//maps.google.',
					src: '%id%&output=embed'
				}

			},

			srcAction: 'iframe_src', // Templating object key. First part defines CSS selector, second attribute. "iframe_src" means: find "iframe" and set attribute "src".
		}
	});

	// Mobile menu - full screen menu
	$(function() {

		var $menu = $('#mobile-menu'),
			$body = $('body'),
			$fn = $('#mobile-menu'),
			$fnToggle = $('.toggle-mnu'),
			$window = $(window);

			$menu.find('.menu-item-has-children > a').on('click', function(e) {
				e.preventDefault();
				if ($(this).next('ul').is(':visible')) {
					$(this).removeClass('sub-active').next('ul').slideUp(250);
				} else {
					$('.menu-item-has-children > a').removeClass('sub-active').next('ul').slideUp(250);
					$(this).addClass('sub-active').next('ul').slideToggle(250);
				}
			});

			var fnOpen = false;

			var fnToggleFunc = function() {
				fnOpen = !fnOpen;
				$body.toggleClass('fullscreen-nav-open');
				$fn.stop().fadeToggle(500);
				$('.toggle-mnu').toggleClass('on');
				$('.logo').toggleClass('on');

				return false;
			};

			$fnToggle.on('click', fnToggleFunc);

			$(document).on('keyup', function(e) {
				if (e.keyCode == 27 && fnOpen) {
					fnToggleFunc();
				}
			});

			$fn.find('li:not(.menu-item-has-children) > a').one('click', function() {
				fnToggleFunc();
				return true;
			});

			$menu.on('click', function(){
				fnToggleFunc();
				return true;
			});

			$('.inner-wrap, .fullscreen-menu-toggle').on('click', function(e){
				e.stopPropagation();
			});
	});

	//Chrome Smooth Scroll
	try {
		$.browserSelector();
		if($('html').hasClass('chrome')) {
			$.smoothScroll();
		}
			} catch(err) {
	};

	// Drag restagt
	$('img, a').on('dragstart', function(event) { event.preventDefault(); });

	// GOOGLE MAPS //
		if (typeof $.fn.gmap3 !== 'undefined') {
		
			$(".map").each(function() {
				
				var data_zoom = 15,
					data_height;
				
				if ($(this).attr("data-zoom") !== undefined) {
					data_zoom = parseInt($(this).attr("data-zoom"),10);
				}	
				
				if ($(this).attr("data-height") !== undefined) {
					data_height = parseInt($(this).attr("data-height"),10);
				}	
				
				$(this).gmap3({
					marker: {
						values: [{
							address: $(this).attr("data-address"),
							data: $(this).attr("data-address-details")
						}],
						options:{
							draggable: false
						},
						events:{
							mouseover: function(marker, event, context){
								var map = $(this).gmap3("get"),
								infowindow = $(this).gmap3({get:{name:"infowindow"}});
								if (infowindow){
									infowindow.open(map, marker);
									infowindow.setContent(context.data);
								} else {
									$(this).gmap3({
										infowindow:{
											anchor:marker, 
											options:{content: context.data}
										}
									});
								}
							},
							mouseout: function(){
								var infowindow = $(this).gmap3({get:{name:"infowindow"}});
								if (infowindow){
									infowindow.close();
								}
							}
						}
					},
					map: {
						options: {
							mapTypeId: google.maps.MapTypeId.ROADMAP,
							zoom: data_zoom,
							scrollwheel: false
						}
					}
				});
				
				$(this).css("height", data_height + "px");
				
			});
			
		}
		

	//form activation
	$('#contact-form').submit(function(){
		var form = $(this);
		var error = false;
	if (!error) {
		var data = form.serialize();
		$.ajax({
			type: 'POST',
			url: 'form.php',
			dataType: 'json',
			data: data,
			beforeSend: function(data) {
				form.find('input[type="submit"]').attr('disabled', 'disabled');
				form.trigger('reset');
			},
			success: function(data){
				if (data['error']) {
					alert(data['error']);
				} else {
					$('#success').slideToggle('slow');
				}
				},
			error: function (xhr, ajaxOptions, thrownError) {
				$('#error').slideToggle('slow');
			},
			complete: function(data) {
				form.find('input[type="submit"]').prop('disabled', false);
				}
			});
		}
		return false;
	});

	//mailchimp subscribe form processing
	$('#signup').on('submit', function( e ) {
		e.preventDefault();
		// update user interface
		$('#response').html('Adding email address...');
		
		// Prepare query string and send AJAX request
		jQuery.ajax({
			url: 'mailchimp/store-address.php',
			data: 'ajax=true&email=' + escape($('#mailchimp_email').val()),
			success: function(msg) {
				$('#response').html(msg);
				$('#response').slideToggle( 'slow' );
			}
		});
	});
	// YOUTUBE PLAYER //
	if (typeof $.fn.mb_YTPlayer !== 'undefined') {
		$("#bgndVideo").mb_YTPlayer();
	}
	

	// PARALLX //
	if (typeof $.fn.stellar !== 'undefined') {
		(function () {

			if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
			 
			} else {
				$(window).stellar({
					horizontalScrolling: false,
					responsive: true
				});
			}

		}());
	}

	// Particles
	$(document).ready(function() {
		$('#particles-js').particleground({
			dotColor: 'rgba(255, 255, 255, 0.40)',
			lineColor: 'rgba(255, 255, 255, 0.21)',
			parallaxMultiplier: 5,
			particleRadius: 5,
			proximity: 130,
			density: 12000
		});
	});

	// Remove 100vh heigth in slider on the mob devices
	$(document).ready(function () {
			if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
				$('.slide').removeClass('vertical-align');
			}
	}());
