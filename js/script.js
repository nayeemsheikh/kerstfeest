(function () {
	var nav = $(".navbar");
	var height = $(nav).height();

	$(document).scroll(function () {

		var scroll = $(document).scrollTop();
		console.log(scroll);

		if (scroll > height) {
			nav.addClass("fixed_menu");
		} else {
			nav.removeClass("fixed_menu");
		}

	})

})();


//counter part
(function () {
	jQuery(document).ready(function ($) {
		$('.counter').counterUp({
			delay: 10,
			time: 1000

		});
		$('.counter').counterDown({
			delay: 10,
			time: 1000

		});
	});
})();

//slick slider
(function () {
	$('.slider_customer').slick({
		dots: true,
		infinite: false,
		autoplay: true,
		speed: 300,
		arrows: false,
		dots: false,
		slidesToShow: 2,
		slidesToScroll: 1,
		responsive: [
			{
				breakpoint: 1024,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 3,
					infinite: true,
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
	})

})();


//venobox------------------------

(function(){
	
	$('.venobox').venobox({
		closeBackground: 'transparent',

	});
	
})();

//parallax -- banner santa and tree movement


(function () {
	var scene = document.getElementById('scene');
	var parallaxInstance = new Parallax(scene);

})();