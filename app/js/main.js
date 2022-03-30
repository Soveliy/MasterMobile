
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
      effect: 'fade',
      fadeEffect: {
        crossFade: true
      },
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
      autoplay: {
        delay: 5000,
      },
      loop:true,
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
    // $('.preview-item__image-slider .swiper-pagination-bullet ').on('mouseover', function() {
    //   previewSlider.slideTo($(this).index());
    // })
  });
  $('.preview-item__image-slider .swiper-pagination-bullet').hover(function() {
    $( this ).trigger( "click" );
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
  let counter_items
  let toggler_text = "Скрыть"
  $(".category-item__list-item:last-child .category-item__link").click(function(e){
    e.preventDefault()
    if(!$(this).hasClass("js-active")){
      counter_items = $(this).html()
    }
    $(this).toggleClass("js-active");
    
    $(this).closest("ul").find("li:not(:last-child):nth-child(n + 10)").slideToggle();
    
    
      if($(this).hasClass("js-active")){
        $(this).html(toggler_text)
      }
      else {
        
        $(this).html(counter_items)
      }
    
  })
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
      $('.mm-ocd__backdrop').on('click', function(e) {
        $(".header__burger").removeClass("is-active")
      })
			
      $(".mm-ocd__backdrop")
			document.querySelector( 'a[href="#menu"]' )
				.addEventListener( 'click', evnt => {
					evnt.preventDefault();
					drawer.open();
				});

        $(document).ready(function() {
          $('select').niceSelect();
          $('.search__form-input').on('focus', function(e) {
            
            $(".search-items").slideDown(300)
            $(".search-items").toggleClass("is-visible")
            setTimeout(() => {
              $(this).addClass("is-focus")
            }, 100);
          })

          $('.search__form-input').on('keypress', function(e) {
            $(".search-items").slideUp(300)
            $(".live-search").slideDown(300)
           
          })
        

          
        $(document).click( function(e){
            if ( $(e.target).closest('.search-items').length ) {
                // клик внутри элемента 
                return;
            }
            if ( $(e.target).closest('.live-search').length ) {
              // клик внутри элемента 
              return;
            }
            if ( $(e.target).closest('.search__form-input').length ) {
              // клик внутри элемента 
              return;
            }

          
        //  клик снаружи элемента 
            if($(".search__form-input").hasClass("is-focus")){
              $('.search-items').slideUp();
              $('.live-search').slideUp();
              $(".search__form-input").removeClass("is-focus")
            }

          });
          $('.tabs__wrapper').each(function() {
            let ths = $(this);
            ths.find('.tabs__content').not(':first').hide();
            ths.find('.tabs__caption').click(function() {
              ths.find('.tabs__caption').removeClass('is-active').eq($(this).index()).addClass('is-active');
              ths.find('.tabs__content').hide().eq($(this).index()).fadeIn()
            }).eq(0).addClass('is-active');
          });
          $(".accordeon__item-body").hide().prev().click(function() {
            $(this).parents(".accordeon__container").find(".accordeon__item-body").not(this).slideUp().prev().removeClass("is-active");
            $(this).next().not(":visible").slideDown().prev().addClass("is-active");
          });
          // Catalog


          
          $('.card-second__btn').click(function(){
              $(this).toggleClass("js-active");
              $(this).next().slideToggle();
            
          })
          $('.catalog__SmartFilter-shadow').click(function(){
            $(".filters__button").removeClass("filters__button--active");
            $(".catalog__SmartFilter").removeClass("catalog__SmartFilter--active")
            $(".filters__button .filters__button--desktop").html(`Показать фильтры`)
            
          })
          $('.SmartFilter__close').click(function(){
            $(".filters__button").removeClass("filters__button--active");
            $(".catalog__SmartFilter").removeClass("catalog__SmartFilter--active")
            $(".filters__button .filters__button--desktop").html(`Показать фильтры`)
            
          })

          $('.filters__button').click(function(){
            $(this).toggleClass("filters__button--active");
              $(".catalog__content").toggleClass("catalog__content--active")
            $(".catalog__SmartFilter").toggleClass("catalog__SmartFilter--active");
            if($(this).hasClass("filters__button--active")){
            
              $(this).find("span.filters__button--desktop").html(`Показать фильтры`)
            }
            else {
              
              $(this).find("span.filters__button--desktop").html(`Скрыть фильтры`)
            }
            
          })
          // SmartFilter

          $(".SmartFilter__itemTitle").click(function(){
            $(this).toggleClass("SmartFilter__itemTitle--closed");
            $(this).next().slideToggle();
          })

          $(".SmartFilter__showmore").click(function(e){
            e.preventDefault()
         
           
            $(this).toggleClass("js-active")
            $(this).closest(".SmartFilter__itemBody").find(".checkbox:nth-child(n + 11)").slideToggle();
              if($(this).hasClass("js-active")){
                $(this).html("Скрыть")
              }
              else {
                
                $(this).html("Показать остальные")
              }
            
          })
          var $range = $("#slider");
          let $inputFrom = $("#slider__input-left");
          let $inputTo = $("#slider__input-right");
          let instance;
          let max_value = 225000;
          let value1,value2,value3,value4;
          function urpadeValues(){
            // value1 = max_value * 0.2;
            // value2 = max_value * 0.4;
            // value3 = max_value * 0.6;
            // value4 = max_value;
            // console.log(value1)
            $(".slider__values-item:nth-child(2)").html((max_value*0.2)/1000 + "к");
            $(".slider__values-item:nth-child(3)").html((max_value*0.4)/1000 + "к");
            $(".slider__values-item:nth-child(4)").html((max_value*0.6)/1000 + "к");
            $(".slider__values-item:nth-child(5)").html(max_value/1000 + "к");
          }
          urpadeValues();
          $range.ionRangeSlider({
              skin: "round",
              type: "double",
              min: 0,
              max: max_value,
              from: 0,
              to: max_value,
              hide_from_to:true,
              onStart: updateInputs,
              onChange: updateInputs,
              onFinish: updateInputs
          });
          instance = $range.data("ionRangeSlider");
          
          function updateInputs (data) {
              from = data.from;
              to = data.to;
              $inputFrom.prop("value", from);
              $inputTo.prop("value", to);
          }
          
          $inputFrom.on("change", function () {
              var val = $(this).prop("value");
          
              // validate
              if (val < min) {
                  val = min;
              } else if (val > to) {
                  val = to;
              }
          
              instance.update({
                  from: val
              });
          
              $(this).prop("value", val);
          
          });
          
          $inputTo.on("change", function () {
              var val = $(this).prop("value");
          
              // validate
              if (val < from) {
                  val = from;
              } else if (val > max) {
                  val = max;
              }
          
              instance.update({
                  to: val
              });
          
              $(this).prop("value", val);
          });
        });
      


        function windowSize(){
          if ($(window).width() <= '1300'){
             $(".catalog__SmartFilter").removeClass("catalog__SmartFilter--active")
          } else {
              
          }
      }


      $(window).on('load resize',windowSize);


      // Карточка товара
      let gallery__thumbs = new Swiper(".image-gallery__thumbs", {
        loop: true,
        spaceBetween: 10,
        slidesPerView: 'auto',
        freeMode: true,
        watchSlidesProgress: true,
        direction:'vertical',
        navigation: {
          nextEl: $(this).parent().find('.swiper-button-next')[0],
          prevEl: $(this).parent().find('.swiper-button-prev')[0],
        },
      });
      var image_gallery = new Swiper(".image-gallery__main", {
        loop: true,
        spaceBetween: 0,
        
       
        thumbs: {
          swiper: gallery__thumbs,
        },
        effect: "creative",
        creativeEffect: {
          prev: {
            shadow: true,
            translate: [0, 0, -400],
          },
          next: {
            translate: ["100%", 0, 0],
          },
        },
      });