import './assets/scss/all.scss';
import './node_modules/bootstrap/dist/js/bootstrap';

$(document).ready(function(){
	$('.hamburger').click(function(){
		$(this).toggleClass('open');
	});
});

const swiperIntro = new Swiper('.swiperAbout', {
	slidesPerView: 1,
	spaceBetween: 30,
	autoplay: {
	delay: 5000,
},
	breakpoints: {
	768: {
		autoplay: {
		enabled: true,
		}
	}
	},
	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev',
	},
});

var swiper = new Swiper(".swiperUse", {
    slidesPerView: 1,
    spaceBetween: 30,
    breakpoints:{
		540:{
			slidesPerView: 1,
			},
		768:{
		slidesPerView: 2,
		},
		992:{
		slidesPerView: 3.7,
		},
	},
	scrollbar: {
		el: '.swiper-scrollbar',
		dragSize:554,
	},   
});
