
$('.header__button--catalog-js').on('click', function(e) {
  e.preventDefault();
  $('.catalog-menu').toggleClass('catalog-menu--active');
  $('.content').toggleClass('content--active');
  $(this).hide(300);
})
$('.catalog-menu__exit-button').on('click', function(e) {
  e.preventDefault();
  $('.catalog-menu').toggleClass('catalog-menu--active');
  $('.content').toggleClass('content--active');
  $(".header__button--catalog-js").show(300)
})
// Voice Search
/* setup vars for our trigger, form, text input and result elements */
const $voiceTrigger = $(".search__form-voice-button");
const $searchForm = $(".search__form");
const $searchInput = $(".search__form-input");
const $result = $("#result");

/*  set Web Speech API for Chrome or Firefox */
window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

/* Check if browser support Web Speech API, remove the voice trigger if not supported */
if (window.SpeechRecognition) {

    /* setup Speech Recognition */
    var recognition = new SpeechRecognition();
    recognition.interimResults = true;
    recognition.lang = 'ru-RU';
    recognition.addEventListener('result', _transcriptHandler);

    recognition.onerror = function(event) {
        console.log(event.error);

        /* Revert input and icon CSS if no speech is detected */
        if(event.error == 'no-speech'){
            $voiceTrigger.removeClass('active');
            $searchInput.attr("placeholder", "Поиск...");
        }
    }
} else {
    $voiceTrigger.remove();
}

jQuery(document).ready(function(){

    /* Trigger listen event when our trigger is clicked */
    $voiceTrigger.on('click touch', listenStart);
});

/* Our listen event */
function listenStart(e){
    e.preventDefault();
    /* Update input and icon CSS to show that the browser is listening */
    $searchInput.attr("placeholder", "Говорите...");
    $voiceTrigger.addClass('active');
    /* Start voice recognition */
    recognition.start();
}

/* Parse voice input */
function _parseTranscript(e) {
    return Array.from(e.results).map(function (result) { return result[0] }).map(function (result) { return result.transcript }).join('')
}

/* Convert our voice input into text and submit the form */
function _transcriptHandler(e) {
    var speechOutput = _parseTranscript(e)
    $searchInput.val(speechOutput);
    //$result.html(speechOutput);
    if (e.results[0].isFinal) {
        $searchForm.submit();
    }
}


$('.main-slider__swiper').each(function(){
    let mainSlider = new Swiper(this, {
        pagination: {
            clickable: true,
            el: $(this).parent().find(".swiper-pagination")[0],
          },
          spaceBetween: 30,
      navigation: {
        nextEl: $(this).parent().find('.swiper-button-next')[0],
        prevEl: $(this).parent().find('.swiper-button-prev')[0],
      },
      observer: true,  
      observeParents: true,
    });
  });
  $('.visited-slider').each(function(){
    let visitedSlider = new Swiper(this, {
        pagination: {
            clickable: true,
            el: $(this).parent().find(".swiper-pagination")[0],
          },
    //   navigation: {
    //     nextEl: $(this).parent().find('.swiper-button-next')[0],
    //     prevEl: $(this).parent().find('.swiper-button-prev')[0],
    //   },
    //   effect: "fade",
          
      observer: true,  
      observeParents: true,
      slidesPerView: 1,
      grid: {
        rows: 3,
      },
      spaceBetween: 30,

      breakpoints: {
        768: {
          slidesPerView: 2,
          spaceBetween: 20,
          grid: {
            rows: 3,
          },
        },
        1024: {
          slidesPerView: 4,
          spaceBetween: 40,
          grid: {
            rows: 2,
          },
        },
        1200: {
          slidesPerView: 5,
          grid: {
            rows: 2,
          },
        },
      }
    });
  });

  $('.preview-item__image-slider').each(function(){
    let previewSlider = new Swiper(this, {
        pagination: {
            clickable: true,
            el: $(this).find(".swiper-pagination")[0],
            dynamicBullets:true,
            dynamicMainBullets:4,

          },
        
      observer: true,  
      observeParents: true,
      slidesPerView: 1,
      spaceBetween: 30,
    });
  });

// Убавляем кол-во по клику
$('.counter__button--minus').click(function() {
  let $input = $(this).parent().find('.counter__input');
  let count = parseInt($input.val()) - 1;
  count = count < 1 ? 1 : count;
  $input.val(count);
});
// Прибавляем кол-во по клику
$('.counter__button--plus').click(function() {
  let $input = $(this).parent().find('.counter__input');
  let count = parseInt($input.val()) + 1;
  count = count > parseInt($input.data('max-count')) ? parseInt($input.data('max-count')) : count;
  $input.val(parseInt(count));
}); 
// Убираем все лишнее и невозможное при изменении поля
$('.counter__input').bind("change keyup input click", function() {
  if (this.value.match(/[^0-9]/g)) {
      this.value = this.value.replace(/[^0-9]/g, '');
  }
  if (this.value == "") {
      this.value = 1;
  }
  if (this.value > parseInt($(this).data('max-count'))) {
      this.value = parseInt($(this).data('max-count'));
  }    
}); 
$('.footer__title-btn').click(function() {
  $(this).parent().toggleClass("is-active");
 $(this).parent().next().slideToggle();
}); 
let el = document.querySelector('.flyBasket__scroll');
  SimpleScrollbar.initEl(el);
  $('.nav-tabs__item--basket').click(function() {
    $(".flyBasket").show(300)
  }); 
  $('.flyBasket__bg,.flyBasket__close').click(function() {
    $(".flyBasket").hide(300)
  }); 
  $('.header__burger').click(function() {
    $(this).toggleClass("is-active")
  }); 
  
// new Mmenu(document.querySelector("#catalog-menu"));

//             document.addEventListener("click", function (evnt) {
//                 var anchor = evnt.target.closest('a[href="#/"]');
//                 if (anchor) {
//                     alert("Thank you for clicking, but that's a demo link.");
//                     evnt.preventDefault();
//                 }
//             });
!function(t){var e={};function n(i){if(e[i])return e[i].exports;var o=e[i]={i:i,l:!1,exports:{}};return t[i].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=t,n.c=e,n.d=function(t,e,i){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:i})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var i=Object.create(null);if(n.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)n.d(i,o,function(e){return t[e]}.bind(null,o));return i},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=0)}([function(t,e,n){"use strict";n.r(e);var i=function(){function t(t){var e=this;this.listener=function(t){(t.matches?e.matchFns:e.unmatchFns).forEach((function(t){t()}))},this.toggler=window.matchMedia(t),this.toggler.addListener(this.listener),this.matchFns=[],this.unmatchFns=[]}return t.prototype.add=function(t,e){this.matchFns.push(t),this.unmatchFns.push(e),(this.toggler.matches?t:e)()},t}(),o=function(t){return Array.prototype.slice.call(t)},s=function(t,e){return o((e||document).querySelectorAll(t))},r=("ontouchstart"in window||navigator.msMaxTouchPoints,navigator.userAgent.indexOf("MSIE")>-1||navigator.appVersion.indexOf("Trident/")>-1),a="mm-spn",c=function(){function t(t,e,n,i,o){this.node=t,this.title=e,this.slidingSubmenus=i,this.selectedClass=n,this.node.classList.add(a),r&&(this.slidingSubmenus=!1),this.node.classList.add(a+"--"+o),this.node.classList.add(a+"--"+(this.slidingSubmenus?"navbar":"vertical")),this._setSelectedl(),this._initAnchors()}return Object.defineProperty(t.prototype,"prefix",{get:function(){return a},enumerable:!1,configurable:!0}),t.prototype.openPanel=function(t){var e=t.parentElement;if(this.slidingSubmenus){var n=t.dataset.mmSpnTitle;e===this.node?this.node.classList.add(a+"--main"):(this.node.classList.remove(a+"--main"),n||o(e.children).forEach((function(t){t.matches("a, span")&&(n=t.textContent)}))),n||(n=this.title),this.node.dataset.mmSpnTitle=n,s(".mm-spn--open",this.node).forEach((function(t){t.classList.remove(a+"--open"),t.classList.remove(a+"--parent")})),t.classList.add(a+"--open"),t.classList.remove(a+"--parent");for(var i=t.parentElement.closest("ul");i;)i.classList.add(a+"--open"),i.classList.add(a+"--parent"),i=i.parentElement.closest("ul")}else{var r=t.matches(".mm-spn--open");s(".mm-spn--open",this.node).forEach((function(t){t.classList.remove(a+"--open")})),t.classList[r?"remove":"add"](a+"--open");for(var c=t.parentElement.closest("ul");c;)c.classList.add(a+"--open"),c=c.parentElement.closest("ul")}},t.prototype._setSelectedl=function(){var t=s("."+this.selectedClass,this.node),e=t[t.length-1],n=null;e&&(n=e.closest("ul")),n||(n=this.node.querySelector("ul")),this.openPanel(n)},t.prototype._initAnchors=function(){var t=this;this.node.addEventListener("click",(function(e){var n=e.target,i=!1;(i=(i=(i=i||function(t){return!!t.matches("a")}(n))||function(e){var n;return!!(n=e.closest("span")?e.parentElement:!!e.closest("li")&&e)&&(o(n.children).forEach((function(e){e.matches("ul")&&t.openPanel(e)})),!0)}(n))||function(e){var n=s(".mm-spn--open",e),i=n[n.length-1];if(i){var o=i.parentElement.closest("ul");if(o)return t.openPanel(o),!0}return!1}(n))&&e.stopImmediatePropagation()}))},t}(),d=function(){function t(t,e){var n=this;void 0===t&&(t=null),this.wrapper=document.createElement("div"),this.wrapper.classList.add("mm-ocd"),this.wrapper.classList.add("mm-ocd--"+e),this.content=document.createElement("div"),this.content.classList.add("mm-ocd__content"),this.wrapper.append(this.content),this.backdrop=document.createElement("div"),this.backdrop.classList.add("mm-ocd__backdrop"),this.wrapper.append(this.backdrop),document.body.append(this.wrapper),t&&this.content.append(t);var i=function(t){n.close(),t.stopImmediatePropagation()};this.backdrop.addEventListener("touchstart",i,{passive:!0}),this.backdrop.addEventListener("mousedown",i,{passive:!0})}return Object.defineProperty(t.prototype,"prefix",{get:function(){return"mm-ocd"},enumerable:!1,configurable:!0}),t.prototype.open=function(){this.wrapper.classList.add("mm-ocd--open"),document.body.classList.add("mm-ocd-opened")},t.prototype.close=function(){this.wrapper.classList.remove("mm-ocd--open"),document.body.classList.remove("mm-ocd-opened")},t}(),u=function(){function t(t,e){void 0===e&&(e="all"),this.menu=t,this.toggler=new i(e)}return t.prototype.navigation=function(t){var e=this;if(!this.navigator){var n=(t=t||{}).title,i=void 0===n?"Menu":n,o=t.selectedClass,s=void 0===o?"Selected":o,r=t.slidingSubmenus,a=void 0===r||r,d=t.theme,u=void 0===d?"light":d;this.navigator=new c(this.menu,i,s,a,u),this.toggler.add((function(){return e.menu.classList.add(e.navigator.prefix)}),(function(){return e.menu.classList.remove(e.navigator.prefix)}))}return this.navigator},t.prototype.offcanvas=function(t){var e=this;if(!this.drawer){var n=(t=t||{}).position,i=void 0===n?"left":n;this.drawer=new d(null,i);var o=document.createComment("original menu location");this.menu.after(o),this.toggler.add((function(){e.drawer.content.append(e.menu)}),(function(){e.drawer.close(),o.after(e.menu)}))}return this.drawer},t}();e.default=u;window.MmenuLight=u}]);

			var menu = new MmenuLight(
				document.querySelector( '#menu' ),
				'all'
			);

			var navigator = menu.navigation({
				// selectedClass: 'Selected',
				// slidingSubmenus: true,
				// theme: 'dark',
				title: ''
			});

			var drawer = menu.offcanvas({
				 // position: 'right'
			});

			//	Open the menu.
			// document.querySelector( 'a[href="#menu"]' )
			// 	.addEventListener( 'click', evnt => {
			// 		evnt.preventDefault();
			// 		drawer.open();
			// 	});

// new Mmenu(document.querySelector("#mobile-menu"));

// document.addEventListener("click", function (evnt) {
//     var anchor = evnt.target.closest('a[href="#/"]');
//     if (anchor) {
//         alert("Thank you for clicking, but that's a demo link.");
//         evnt.preventDefault();
//     }
// });
// $(".burger").click(function(){
//     $(this).toggleClass("active")
//     $("body").toggleClass("hidden")
//     $(".main-menu").slideToggle()

// })
// $(".footer .menu__title").click(function(){
//     $(this).toggleClass("active")
// //    .toggleClass("hidden")
//     $(this).next().slideToggle()

// })

// const fraction = document.getElementById("fraction");
// const slides = document.querySelectorAll(".hero .swiper-slide");
// const slideCount = slides.length;
// fraction.textContent = `1 / ${slideCount}`;

// const swiper = new Swiper(".hero .swiper-container", {
//   // If we need pagination
//   pagination: {
//     el: ".hero .swiper-pagination",
//     clickable: true,
//     autoplay: {
//         delay: 5000,
//       },
//   },

//   // Navigation arrows
//   navigation: {
//     nextEl: ".hero .swiper-button-next",
//     prevEl: ".hero .swiper-button-prev"
//   },

//   on: {
//     slideChange: () => {
//       fraction.textContent = `${swiper.realIndex + 1}/${slideCount}`;
//     }
//   }
// });

// var swiper2 = new Swiper(".parthers .swiper-container", {
//     slidesPerView: "auto",
//     spaceBetween: 20,
//     autoplay: {
//         delay: 5000,
//       },
//     // pagination: {
//     //   el: ".swiper-pagination",
//     //   clickable: true,
//     // },
//     navigation: {
//         nextEl: ".parthers .swiper-button-next",
//         prevEl: ".parthers .swiper-button-prev"
//       },
//     breakpoints: {
//       640: {
//         slidesPerView: 2,
//         spaceBetween: 20,
//       },
//       768: {
//         slidesPerView: 3,
//         spaceBetween: 50,
//       },
//       1200: {
//         slidesPerView: 4,
//         spaceBetween: 77,
//       },
//     },
//   });