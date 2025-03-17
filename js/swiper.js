var swiper = new Swiper( '.swiper-container.two', {
		//pagination: '.swiper-pagination',
		paginationClickable: false,
		effect: 'coverflow',
		loop: true,
		centeredSlides: true,
		slidesPerView: 'auto',
		coverflow: {
			rotate: 0,
			stretch: 100,
			depth: 150,
			modifier: 1.5,
			slideShadows : false,
	},
	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev',
	},
});


document.querySelector('.custom-next').addEventListener('click', function () {
	swiper.slideNext(); // Go to the next slide
});

document.querySelector('.custom-prev').addEventListener('click', function () {
	swiper.slidePrev(); // Go to the previous slide
});