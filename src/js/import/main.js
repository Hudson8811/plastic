jQuery(function () { 

	$('.js-mask-phone').mask('+7(000)000-00-00');


	

	var mainSlider;
	$('.js-preview__slider').each(function(){
		var slider=$(this)
		var mainSlider = new Swiper(slider[0], {
			// watchOverflow: true,
			// watchSlidesVisibility: true,
			// watchSlidesProgress: true,
			// preventInteractionOnTransition: true,
			slidesPerView: 1,
			navigation: {
					nextEl: slider.find('.swiper-button-next')[0],
					prevEl: slider.find('.swiper-button-prev')[0]
			},
			// thumbs: {
			// 		swiper: galleryThumbs
			// },
			pagination: {
					el: slider.find('.preview__slider__pagination')[0],
					type: 'bullets',
					clickable: true
			}
			// breakpoints: {
			//     // when window width is >= 480px
			//     992: {
			//         slidesPerView: 2.2,
			//         spaceBetween: 30
			//     },
			// }
		});
	})
	var previewSale;
	$('.js-preview__sale__slider').each(function(){
		var slider=$(this)
		var previewSale = new Swiper(slider[0], {
			// watchOverflow: true,
			// watchSlidesVisibility: true,
			// watchSlidesProgress: true,
			// preventInteractionOnTransition: true,
			slidesPerView: 1,
			navigation: {
					nextEl: ".preview__sale-next",
					prevEl: ".preview__sale-prev"
			},
			// thumbs: {
			// 		swiper: galleryThumbs
			// },
			pagination: {
					el: slider.find('.preview__slider__pagination')[0],
					type: 'bullets',
					clickable: true
			}
			// breakpoints: {
			//     // when window width is >= 480px
			//     992: {
			//         slidesPerView: 2.2,
			//         spaceBetween: 30
			//     },
			// }
		});
	})
	var reviewsServices;
	$('.js-reviews-services__slider').each(function(){
		var slider=$(this)
		var reviewsServices = new Swiper(slider[0], {
			// watchOverflow: true,
			// watchSlidesVisibility: true,
			// watchSlidesProgress: true,
			// preventInteractionOnTransition: true,
			slidesPerView: 1,
			navigation: {
					nextEl: ".reviews-services-next",
					prevEl: ".reviews-services-prev"
			},
			// thumbs: {
			// 		swiper: galleryThumbs
			// },
			pagination: {
					el: slider.find('.preview__slider__pagination')[0],
					type: 'bullets',
					clickable: true
			}
			// breakpoints: {
			//     // when window width is >= 480px
			//     992: {
			//         slidesPerView: 2.2,
			//         spaceBetween: 30
			//     },
			// }
		});
	})
	var reviewsAll;
	$('.js-reviews-all__slider').each(function(){
		var slider=$(this)
		var reviewsAll = new Swiper(slider[0], {
			// watchOverflow: true,
			// watchSlidesVisibility: true,
			// watchSlidesProgress: true,
			// preventInteractionOnTransition: true,
			slidesPerView: 1,
			navigation: {
					nextEl: ".reviews-all-next",
					prevEl: ".reviews-all-prev"
			},
			// thumbs: {
			// 		swiper: galleryThumbs
			// },
			pagination: {
					el: slider.find('.preview__slider__pagination')[0],
					type: 'bullets',
					clickable: true
			}
			// breakpoints: {
			//     // when window width is >= 480px
			//     992: {
			//         slidesPerView: 2.2,
			//         spaceBetween: 30
			//     },
			// }
		});
	})
	var diplomasSlide;
	$('.js-diplomas__slider').each(function(){
		var slider=$(this)
		var diplomasSlide = new Swiper(slider[0], {
			slidesPerView: 3,
			grabCursor: true,
			loop: true,
			centeredSlides: true,
			navigation: {
					nextEl: slider.find('.swiper-button-next')[0],
					prevEl: slider.find('.swiper-button-prev')[0]
			},
			// thumbs: {
			// 		swiper: galleryThumbs
			// },
			// pagination: {
			// 		el: slider.find('.preview__slider__pagination')[0],
			// 		type: 'bullets',
			// 		clickable: true
			// }
			// breakpoints: {
			//     // when window width is >= 480px
			//     992: {
			//         slidesPerView: 2.2,
			//         spaceBetween: 30
			//     },
			// }
		});
	})
	$('.jarallax').jarallax({
		speed: 0.2,
	});

	$('.js-example-responsive--no-border').select2({
		theme: "custom-theme--no-border",
		language: 'ru',
		// width: '100%',
		minimumResultsForSearch: Infinity,
		dropdownAutoWidth: true,
	});
	$('.js-example-date').select2({
		theme: "date",
		language: 'ru',
		// width: '100%',
		minimumResultsForSearch: Infinity,
		dropdownAutoWidth: true,
	});

	$('.product-card__slider').each(function () {
		var galleryThumbs;
		var galleryMain;
		var group = $(this);
		group.find('.gallery-thumbs').each(function () {
				var slider = $(this)
				galleryThumbs = new Swiper(slider[0], {
						centeredSlides: true,
						centeredSlidesBounds: true,
						slidesPerView: 2,
						watchOverflow: true,
						watchSlidesVisibility: true,
						watchSlidesProgress: true,
						direction: 'horizontal',
						centeredSlides: false,
							centeredSlidesBounds: false,
						spaceBetween: 10,
						navigation: {
								nextEl: ".gallery-thumbs-next",
								prevEl: ".gallery-thumbs-prev"
						},
						breakpoints: {
								// when window width is >= 480px
								992: {
										direction: 'vertical',
										spaceBetween: 24,
								},
						}
				})
		});
	
		group.find('.gallery-main').each(function () {
				var slider = $(this)
				galleryMain = new Swiper(slider[0], {
						watchOverflow: true,
						watchSlidesVisibility: true,
						watchSlidesProgress: true,
						preventInteractionOnTransition: true,
						slidesPerView: 1,
						thumbs: {
								swiper: galleryThumbs
						},
						navigation: {
								nextEl: ".gallery-main-next",
								prevEl: ".gallery-main-prev"
						},
						// breakpoints: {
						//     // when window width is >= 480px
						//     992: {
						//         slidesPerView: 2.2,
						//         spaceBetween: 30
						//     },
						// }
				})
			//   galleryMain.controller.control = galleryThumbs;
		});
	
	//   galleryThumbs.controller.control = galleryMain;
		galleryMain.controller.control = galleryThumbs;
	});




	$('.double-slider').each(function () {
		var galleryThumbs;
		var galleryMain;
		var group = $(this);
		group.find('.js-double-slider-thumbs').each(function () {
				var slider = $(this)
				galleryThumbs = new Swiper(slider[0], {
						centeredSlides: true,
						centeredSlidesBounds: true,
						slidesPerView: 4,
						watchOverflow: true,
						watchSlidesVisibility: true,
						watchSlidesProgress: true,
						direction: 'horizontal',
						centeredSlides: false,
							centeredSlidesBounds: false,
						spaceBetween: 10,
						navigation: {
								nextEl: ".double-slider-thumbs-next",
								prevEl: ".double-slider-thumbs-prev"
						},
						breakpoints: {
								// when window width is >= 480px
								992: {
										direction: 'vertical',
										spaceBetween: 24,
								},
						}
				})
		});
	
		group.find('.js-double-slider-main').each(function () {
				var slider = $(this)
				galleryMain = new Swiper(slider[0], {
						watchOverflow: true,
						watchSlidesVisibility: true,
						watchSlidesProgress: true,
						preventInteractionOnTransition: true,
						slidesPerView: 1,
						thumbs: {
								swiper: galleryThumbs
						},
						navigation: {
								nextEl: ".double-slider-main-next",
								prevEl: ".double-slider-main-prev"
						},
						// breakpoints: {
						//     // when window width is >= 480px
						//     992: {
						//         slidesPerView: 2.2,
						//         spaceBetween: 30
						//     },
						// }
				})
			//   galleryMain.controller.control = galleryThumbs;
		});
	
	//   galleryThumbs.controller.control = galleryMain;
		galleryMain.controller.control = galleryThumbs;
	});

	let overlayBg = document.querySelector(".mob-menu--overlay");
	let mobMenu = document.querySelector(".mob-menu__section");
	let humb = document.querySelector(".hamburger");
	let mobMenuClose = document.querySelector(".mob-menu__close");
	
	var hamburger = $(".hamburger");
	hamburger.on("click", function(e) {
		hamburger.toggleClass("is-active");
	});
	var search = $(".header__other__search");
	search.click( function(e) {
		$(this).children(".header__other__search__input").addClass("active"); 
	
	});
	$(document).mouseup(function (e){ 
		var search = $(".header__other__search");
		if (!search.is(e.target) 
				&& search.has(e.target).length === 0) { 
					search.children(".header__other__search__input").removeClass("active"); 
		}
	});
	
	mobMenuClose.addEventListener("click", function () {
		mobMenu.classList.remove("active");
		humb.classList.remove("is-active");
		bodyYesScroll()
	});
	overlayBg.addEventListener("click", function () {
		mobMenu.classList.remove("active");
		humb.classList.remove("is-active");
		bodyYesScroll()
	});
	humb.addEventListener("click", function () {
		let kye = mobMenu.classList.contains("active");
		if (kye == false) {
			mobMenu.classList.add("active");
			bodyNoScroll()
		}else {
			mobMenu.classList.remove("active");
			bodyYesScroll()
		}
	});
	
	
	
});

function bodyNoScroll() {
	let bodyBodymotionless = document.querySelector('body')
	bodyBodymotionless.classList.add("Bodymotionless")

}
function bodyYesScroll() {
	let bodyBodymotionless = document.querySelector('body')
	bodyBodymotionless.classList.remove("Bodymotionless")
}

const accordions = document.querySelectorAll(".accordion");

const openAccordion = (accordion) => {
	const content = accordion.querySelector(".accordion__content");
	accordion.classList.add("accordion__active");
	content.style.maxHeight = content.scrollHeight + "px";
};

const closeAccordion = (accordion) => {
	const content = accordion.querySelector(".accordion__content");
	accordion.classList.remove("accordion__active");
	content.style.maxHeight = null;
};

accordions.forEach((accordion) => {
	const intro = accordion.querySelector(".accordion__intro");
	const content = accordion.querySelector(".accordion__content");

	intro.onclick = () => {
		if (content.style.maxHeight) {
			closeAccordion(accordion);
		} else {
			accordions.forEach((accordion) => closeAccordion(accordion));
			openAccordion(accordion);
		}
	};
});

	///tabs
	var tabNavs = document.querySelectorAll(".nav-tab");
	var tabPanes = document.querySelectorAll(".tab-pane");
  if(tabNavs !==null & tabPanes !==null) {
		tabClick() 
	}
	console.log([0, 1, 2,] + [3, 4, 5])
	function tabClick() {
	
		for (var i = 0; i < tabNavs.length; i++) {

			tabNavs[i].addEventListener("click", function(e){
				e.preventDefault();
				var activeTabAttr = e.target.getAttribute("data-tab");
	
				for (var j = 0; j < tabNavs.length; j++) {
					var contentAttr = tabPanes[j].getAttribute("data-tab-content");
	
					if (activeTabAttr === contentAttr) {
						tabNavs[j].classList.add("active");
						tabPanes[j].classList.add("active"); 
					} else {
						tabNavs[j].classList.remove("active");
						tabPanes[j].classList.remove("active");
					}
				};
			});
		}
	}

	///tabs