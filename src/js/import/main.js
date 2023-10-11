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


	///tabs
	
	var rewiewsTabNavs = document.querySelectorAll(".js-rewiews__tab");
	var rewiewsTabPanes = document.querySelectorAll(".js-reviews__content");
  if(rewiewsTabNavs !==null & rewiewsTabPanes !==null) {
		rewiewsTabClick() 
	}
	function rewiewsTabClick() {
	
		for (var i = 0; i < rewiewsTabNavs.length; i++) {

			rewiewsTabNavs[i].addEventListener("click", function(e){
				e.preventDefault();
				var activeTabAttr = e.target.getAttribute("data-tab");
	
				for (var j = 0; j < rewiewsTabNavs.length; j++) {
					var contentAttr = rewiewsTabPanes[j].getAttribute("data-tab-content");
	
					if (activeTabAttr === contentAttr) {
						rewiewsTabNavs[j].classList.add("active");
						rewiewsTabPanes[j].classList.add("active"); 
					} else {
						rewiewsTabNavs[j].classList.remove("active");
						rewiewsTabPanes[j].classList.remove("active");
					}
				};
			});
		}
	}

	///tabs
	///tabs
	
	var menuLaptopTabNavs = document.querySelectorAll(".js-menu-laptop__tab");
	var menuLaptopTabPanes = document.querySelectorAll(".js-menu-laptop__tab-content");
  if(menuLaptopTabNavs !==null & menuLaptopTabPanes !==null) {
		menuLaptopTabClick() 
	}
	function menuLaptopTabClick() {
	
		for (var i = 0; i < menuLaptopTabNavs.length; i++) {

			menuLaptopTabNavs[i].addEventListener("click", function(e){
				e.preventDefault();
				var activeTabAttr = e.target.getAttribute("data-tab");
	
				for (var j = 0; j < menuLaptopTabNavs.length; j++) {
					var contentAttr = menuLaptopTabPanes[j].getAttribute("data-tab-content");
	
					if (activeTabAttr === contentAttr) {
						menuLaptopTabNavs[j].classList.add("active");
						menuLaptopTabPanes[j].classList.add("active"); 
					} else {
						menuLaptopTabNavs[j].classList.remove("active");
						menuLaptopTabPanes[j].classList.remove("active");
					}
				};
			});
		}
	}

	///tabs





	///tabs
	var articlesMenutabNavs = document.querySelectorAll(".articles-menu__tab");
	var articlesMenutabPanes = document.querySelectorAll(".articles-menu__tab-content");
  if(articlesMenutabNavs !==null & articlesMenutabPanes !==null) {
		articlesMenutabClick() 
	}

	function articlesMenutabClick() {
		// for (var i = 0; i < articlesMenutabNavs.length; i++) {
		// 	console.log(articlesMenutabNavs);
		// 	console.log(articlesMenutabPanes);
		// 	articlesMenutabNavs[i].addEventListener("click", function(e){
		// 		e.preventDefault();
		// 		var activeTabAttr = e.target.getAttribute("data-tab");
	
		// 		for (var j = 0; j < articlesMenutabNavs.length; j++) {
		// 			var contentAttr = articlesMenutabPanes[j].getAttribute("data-tab-content");
	
		// 			if (activeTabAttr === contentAttr) {
		// 				articlesMenutabNavs[j].classList.add("active");
		// 				articlesMenutabPanes[j].classList.add("active"); 
		// 			} else {
		// 				articlesMenutabNavs[j].classList.remove("active");
		// 				articlesMenutabPanes[j].classList.remove("active");
		// 			}
		// 		};
		// 	});
		// }
		$('.articles-menu__tab[data-tab]').on('click',function(){
			var currentNav=$(this);
			var dataTab = currentNav.attr("data-tab");
			var tabsParent=$(this).closest('.tabs-parent');
			var targetContent=tabsParent.find('.articles-menu__tab-content[data-tab-content="'+dataTab+'"]');
			tabsParent.find('.articles-menu__tab').removeClass("active");
			currentNav.addClass("active");
			var parentTab=currentNav.closest('.accordion').find('.accordion__intro .articles-menu__tab');
			if(parentTab.length>0){
					parentTab.addClass("active");
			}
			targetContent.addClass("active").siblings(".active").removeClass("active");
	});
	}


	///tabs

	function modalReg() {
		event.preventDefault();
		$.fancybox.open({
			src: "#modal-reg",
			type: "inline",
		});
	}

	var menuLinkInvested =document.querySelectorAll(".js-menu__link__invested")
	if (menuLinkInvested !=null) {
		menuLinkInvested.forEach((item) => {
			item.addEventListener("click", function (e) {
						e.preventDefault();
						var link = e.target.parentNode;
						var linkList = link.querySelector(".menu-laptop__list");
						link.classList.toggle("active")
						linkList.classList.toggle("active")
						linkList.addEventListener("mouseleave", function() {
							link.classList.remove("active")
							linkList.classList.remove("active")
						})
			});
		})
	}


	$(function ($, window, document, undefined) {
    "use strict";
    var pluginName = 'simpleAccordion',
    defaults = {
        multiple: false,
        speedOpen: 300,
        speedClose: 150,
        easingOpen: null,
        easingClose: null,
        headClass: 'accordion-header',
        bodyClass: 'accordion-body',
        openClass: 'open',
        defaultOpenClass: 'default-open',
        cbClose: null, //function (e, $this) {},
        cbOpen: null //function (e, $this) {}
    };
    function Accordion(element, options) {
        this.$el = $(element);
        this.options = $.extend({}, defaults, options);
        this._defaults = defaults;
        this._name = pluginName;
        if (typeof this.$el.data('multiple') !== 'undefined') {
            this.options.multiple = this.$el.data('multiple');
            } else {
            this.options.multiple = this._defaults.multiple;
        }
        this.init();
    }
    Accordion.prototype = {
        init: function () {
            var o = this.options,
            $headings = this.$el.children('.' + o.headClass);
            $headings.on('click', {_t:this}, this.headingClick);
            $headings.filter('.' + o.defaultOpenClass).first().click();
        },
        headingClick: function (e) {
            var $this = $(this),
            _t = e.data._t,
            o = _t.options,
            $headings = _t.$el.children('.' + o.headClass),
            $currentOpen = $headings.filter('.' + o.openClass);
            if (!$this.hasClass(o.openClass)) {
                if ($currentOpen.length && o.multiple === false) {
                    $currentOpen.removeClass(o.openClass).next('.' + o.bodyClass).slideUp(o.speedClose, o.easingClose, function () {
                        if ($.isFunction(o.cbClose)) {
                            o.cbClose(e, $currentOpen);
                        }
                        $this.addClass(o.openClass).next('.' + o.bodyClass).slideDown(o.speedOpen, o.easingOpen, function () {
                            if ($.isFunction(o.cbOpen)) {
                                o.cbOpen(e, $this);
                            }
                        });
                    });
                    } else {
                    $this.addClass(o.openClass).next('.' + o.bodyClass).slideDown(o.speedOpen, o.easingOpen, function () {
                        $this.removeClass(o.defaultOpenClass);
                        if ($.isFunction(o.cbOpen)) {
                            o.cbOpen(e, $this);
                        }
                    });
                }
                } else {
                $this.removeClass(o.openClass).next('.' + o.bodyClass).slideUp(o.speedClose, o.easingClose, function () {
                    if ($.isFunction(o.cbClose)) {
                        o.cbClose(e, $this);
                    }
                });
            }
        }
    };
    $.fn[pluginName] = function (options) {
        return this.each(function () {
            if (!$.data(this, 'plugin_' + pluginName)) {
                $.data(this, 'plugin_' + pluginName,
                new Accordion(this, options));
            }
        });
    };
	}(jQuery, window, document));
	
	$('.accordion-group').simpleAccordion({
    
    multiple: false, // возможность открытия одной вкладки или всех
    speedOpen: 300, // скорость открытия вкладки
    speedClose: 150, // скорость закрытия вкладки
    easingOpen: null, // эффект плавности открытия вкладки
    easingClose: null, // эффект плавности закрытия вкладки
    headClass: 'accordion-header', // класс для заголовка вкладки
    bodyClass: 'accordion-body', // класс для тела вкладки
    openClass: 'open',  // класс для открытой вкладки, применяется к accordion-header
    defaultOpenClass: 'default-open', // класс для открытой вкладки по умолчанию
    cbClose: null, // callback-функция при закрытии вкладки - function (e, $this) {},
    cbOpen: null // callback-функция при открытии вкладки - function (e, $this) {}
    
	});