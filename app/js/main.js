
$('.header__button--catalog-js').on('click', function(e) {
  e.preventDefault();
  $('.catalog-menu').toggleClass('catalog-menu--active');
  $('.content').toggleClass('content--active');
  $(this).hide();
})
$('.catalog-menu__exit-button').on('click', function(e) {
  e.preventDefault();
  $('.catalog-menu').toggleClass('catalog-menu--active');
  $('.content').toggleClass('content--active');
  $(".header__button--catalog-js").show(300)
})
$('.blog-item__like').on('click', function(e) {
 $(this).toggleClass("is-liked")
})
$('.share__button').on('click', function(e) {
  $(this).next().slideToggle(300)
 })

 $('.block-category__title').on('click', function(e) {
  $(this).next().slideToggle(300)
  $(this).toggleClass('is-open')
 })

 $('.text-page-menu__item-parent > a').on('click', function(e) {
  e.preventDefault();
  $(this).parent().toggleClass("text-page-menu__item-parent--is-active");
  $(this).next().slideToggle(300);
})
$('.text-page-menu__button').on('click', function(e) {

  $(this).next().slideToggle(300);
})
// $('.catalog-menu__list > li').hover(function(){

//   $(this).find("div.second-menu").toggleClass("is-hover")
//   $(this).find("div.second-menu").slideToggle(300)
// });
 
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
  // Решение собственной функции масштабирования в Safari: предотвращение двойного щелчка для увеличения
// var lastTime = 0;
// document.addEventListener('touchstart', function(event) {
//     if (event.touches.length > 1) {
//         event.preventDefault();
//     }
// });
// document.addEventListener('touchend', function(event) {
//     var nowTime = (new Date()).getTime();
//     if (nowTime - lastTime <= 100) {
//         event.preventDefault();
//     }
//     lastTime = nowTime;
// }, false);


// $(function () {
//   if (!(/iPad|iPhone|iPod/.test(navigator.userAgent))) return
//   $(document.head).append(
//     '<style>*{cursor:pointer;-webkit-tap-highlight-color:rgba(0,0,0,0)}</style>'
//   )
//   $(window).on('gesturestart touchmove', function (evt) {
//     if (evt.originalEvent.scale !== 1) {
//       evt.originalEvent.preventDefault()
//       document.body.style.transform = 'scale(1)'
//     }
//   })
// })

 // Решение собственной функции масштабирования Safari: предотвращение масштабирования двумя пальцами
// document.addEventListener('gesturestart', function(event) {
//     event.preventDefault();
// });



$(window).bind('gesturestart touchmove', function(event) {
  event = event.originalEvent || event;
  if (event.scale !== 1) {
       event.preventDefault();
       document.body.style.transform = 'scale(1)'
  }
});
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
      loop:false,
      grid: {
        rows: 3,
        fill:"row",
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
            rows: 3,
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
$('.lk-allert__close').click(function() {
  $(".lk-allert").hide(300)
}); 


// Убираем все лишнее и невозможное при изменении поля
$('.counter__input,.pagination__input').bind("change keyup input click", function() {
  if (this.value.match(/[^0-9]/g)) {
      this.value = this.value.replace(/[^0-9]/g, '');
  }
  // if (this.value == "") {
  //     this.value = 1;
  // }
  if (this.value > parseInt($(this).data('max-count'))) {
      this.value = parseInt($(this).data('max-count'));
  }    
}); 
$('.slider__input').bind("change keyup input click", function() {
  if (this.value.match(/[^0-9]/g)) {
      this.value = this.value.replace(/[^0-9]/g, '');
  }
 
}); 

$('.footer__title-btn').click(function() {
  $(this).parent().toggleClass("is-active");
 $(this).parent().next().slideToggle();
}); 
let el = document.querySelector('.flyBasket__scroll');

  SimpleScrollbar.initEl(el);
  // SimpleScrollbar.initEl(el2);
  // let el2 = document.querySelector('.shops-list');
  // let el2 = document.querySelector('.delivery__table-scroll');
  // SimpleScrollbar.initEl(el2);

  
  $('.nav-tabs__item--basket').click(function() {
    $(".flyBasket").show(300)
    $("body").addClass("js-hidden")
  }); 
  $('.flyBasket__bg,.flyBasket__close').click(function() {
    $(".flyBasket").hide(300)
    $("body").removeClass("js-hidden")
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
          $(".second-menu").parent().addClass("parent")
          $(".second-menu__list").prev().addClass("parent")
          
          let subcat_slider = new Swiper(".subcategory__slider", {
            slidesPerView: "auto",
            spaceBetween:15,
            scrollbar: {
              el: ".subcategory .swiper-scrollbar",
              hide: false,
              draggable: true,
             
            },
            navigation: {
              nextEl: '.subcategory__nav-arrow-right',
              prevEl: '.subcategory__nav-arrow-left',
            },

            breakpoints: {
              768: {
              
                spaceBetween: 1,
              
              },
             
             
              
            }
           
          });
          $('.compare-table__info-item').each(function (index, value){
            let height = $(".compare-table__slider tr").eq(index + 1).height();
            console.log(height);
           $(".compare-table__info-item").eq(index).css("min-height", height + "px")
          });
          $('select').niceSelect();
          $('.header .search__form-input').on('focus', function(e) {
            
            $(".search-items").slideDown(300)
            $(".search-items").toggleClass("is-visible")
            setTimeout(() => {
              $(this).addClass("is-focus")
            }, 100);
          })

          $('.header .search__form-input').on('keypress', function(e) {
            $(".search-items").slideUp(300)
            $(".live-search").slideDown(300)
           
          })
          // $('.recipient__form-input--phone,.phonemask').mask('+7 (999) 999 99-99');

          $('.showpass-btn').on('click', function(e) {
            $(this).toggleClass("fa-eye")
            $(this).toggleClass("fa-eye-slash")
            if ($(this).prev().attr('type') == 'password'){
              
              $(this).prev().attr('type', 'text');
            } else {
             
              $(this).prev().attr('type', 'password');
            }
            return false;
           })


           $('.card-form__change-visible').on('click', function(e) {
            $(this).toggleClass("fa-eye")
            $(this).toggleClass("fa-eye-slash")
            if ($(this).closest(".card-form__input-container").find("input").attr('type') == 'password'){
              
              $(this).closest(".card-form__input-container").find("input").attr('type', 'text');
            } else {
             
              $(this).closest(".card-form__input-container").find("input").attr('type', 'password');
            }
            return false;
           })
           
          $('.bonuses-form__input').on('keyup', function(e) {
           setTimeout(() => {
            if ($(this).val() == 0) {
              $(this).next().attr("disabled", true);
            } else {
              $(this).next().removeAttr("disabled");
            }
           }, 100);
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
            if($(".header .search__form-input").hasClass("is-focus")){
              $('.search-items').slideUp();
              $('.live-search').slideUp();
              $(".header .search__form-input").removeClass("is-focus")
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
          $('.inside-tabs').each(function() {
            let ths = $(this);
            ths.find('.inside-tabs__content').not(':first').hide();
            ths.find('.inside-tabs__item').click(function() {
              ths.find('.inside-tabs__item').removeClass('inside-tabs__item--active').eq($(this).index()).addClass('inside-tabs__item--active');
              ths.find('.inside-tabs__content').hide().eq($(this).index()).fadeIn()
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
            $(".catalog__SmartFilter").removeClass("catalog__SmartFilter--visible")
            $(".filters__button .filters__button--desktop").html(`Показать фильтры`)
            $(".filters__button i").toggleClass("fa-filter");
            $(".filters__button i").toggleClass(" fa-filter-slash");
            
          })
          $('.SmartFilter__close').click(function(){
            $(".filters__button").removeClass("filters__button--active");
            $(".catalog__SmartFilter").removeClass("catalog__SmartFilter--active")
            $(".catalog__SmartFilter").removeClass("catalog__SmartFilter--visible")
            $(".filters__button .filters__button--desktop").html(`Показать фильтры`)
            $(".filters__button i").toggleClass("fa-filter");
            $(".filters__button i").toggleClass(" fa-filter-slash");
            
          })

          $('.filters__button').click(function(){
            $(".filters__button i").toggleClass("fa-filter");
            $(".filters__button i").toggleClass("fa-filter-slash");
            $(this).toggleClass("filters__button--active");
            $(".catalog__content").toggleClass("catalog__content--active")
            $(".catalog__SmartFilter").toggleClass("catalog__SmartFilter--active");
            
            if($(this).hasClass("filters__button--active")){
              $(".catalog__SmartFilter").removeClass("catalog__SmartFilter--visible")
              $(this).find("span.filters__button--desktop").html(`Показать фильтры`)
            }
            else {
              setTimeout(() => {
                $(".catalog__SmartFilter").addClass("catalog__SmartFilter--visible")
              }, 300);
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
            $(this).closest(".SmartFilter__itemBody").find(".checkbox:nth-child(n + 11)").toggle(300);
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
      

        var swiper = new Swiper(".list-slider", {
          slidesPerView: "auto",
          spaceBetween: 30,
          scrollbar: {
            el: ".list-slider .swiper-scrollbar",
            hide: false,
            draggable: true,
           
          },
          navigation: {
            nextEl: '.list-slider__nav-arrow-right',
            prevEl: '.list-slider__nav-arrow-left',
          },
         
        });

        
        var swiper = new Swiper(".compare-table__slider", {
          slidesPerView: "auto",
          spaceBetween: 0,
          // width: compareWidth,
          freeMode: true,
          mousewheel: true,
          scrollbar: {
            el: ".compare-table__scrollbar",
            hide: false,
            draggable: true,
           
          },
          navigation: {
            nextEl: '.compare-table_arrow-right',
            prevEl: '.compare-table_arrow-left',
          },
         
        });

       

        var swiper = new Swiper(".advise__slider", {
          slidesPerView: 1,
          spaceBetween: 20,
          scrollbar: {
            el: ".advise__scrollbar",
            hide: false,
            draggable: true,
           
          },
          navigation: {
            nextEl: '.list-slider__nav-arrow-right',
            prevEl: '.advise__nav-arrow-right',
          },

          breakpoints: {
            768: {
              slidesPerView: 2,
              spaceBetween: 20,
            
            },
            1024: {
              slidesPerView: 3,
            
            },
           
            
          }
         
        });

        $(".more-options__button").click(function(){
          $(this).next().toggle(300)
      

        })

          $(".card__head-close").click(function(){
          $(this).toggleClass("js-active");
          $(this).closest(".card__item").find(".card__body").slideToggle();

        })
        var swiper = new Swiper(".visited-list__slider", {
          slidesPerView: "auto",
          spaceBetween: 1,
          scrollbar: {
            el: ".visited-list__slider .swiper-scrollbar",
            hide: false,
            draggable: true,
           
          },
          navigation: {
            nextEl: '.visited-list__nav-arrow-right',
            prevEl: '.visited-list__nav-arrow-left',
          },
         
        });

       
        var tableScroll = new Swiper(".delivery__table-scroll", {
          direction: "horizontal",
          slidesPerView: "auto",
          freeMode: true,
          scrollbar: {
            el: ".delivery__table-scroll--scrollbar",
            hide: false,
            draggable: true,
          },
          mousewheel: true,
        });
        function windowSize(){
          if ($(window).width() <= '1300'){
             $(".catalog__SmartFilter").removeClass("catalog__SmartFilter--active")
             $(".filters__button i").addClass("fa-filter");
             $(".filters__button i").removeClass(" fa-filter-slash");
          } else {
              
          }
      }


      $(window).on('load',windowSize);


      // Карточка товара
      let galleryThumbs = new Swiper(".image-gallery__thumbs", {

        spaceBetween: 10,
        slidesPerView: 'auto',
        // freeMode: true,
        watchSlidesProgress: true,
        direction:'horizontal',
        // centeredSlides: true,
        loop:false,
        touchRatio: 0.2,
        slideToClickedSlide: true,
       
        breakpoints: {
          // when window width is >= 320px
         
          // when window width is >= 640px
          1024: {
            // centeredSlides: false,
            direction:'vertical',
            watchSlidesProgress: true,
          }
        }
      
       
      });
      // $('body').on('click', '.image-gallery__arrow--next', function() {
      //     galleryThumbs.navigation.nextEl(); 
      // });
      // $("body").on("click", ".image-gallery__arrow--next").function () {
       
      // }
     
      // galleryThumbs.navigation.prevEl()
      let galleryTop = new Swiper(".image-gallery__main", {
        loop:false,
        spaceBetween: 0,
        centeredSlides: true,
        
        thumbs: {
          swiper: galleryThumbs,
        },
        effect: 'fade',
        fadeEffect: {
          crossFade: true
        },
        navigation: {
          nextEl: '.image-gallery__arrow--next',
          prevEl: '.image-gallery__arrow--right',
        },
        // effect: "fade",
        
      });

      let mainNavLinks = document.querySelectorAll(".sticky-card__list a");
      let mainSections = document.querySelectorAll(".card__item");

      let lastId;
      let cur = [];

      // This should probably be throttled.
      // Especially because it triggers during smooth scrolling.
      // https://lodash.com/docs/4.17.10#throttle
      // You could do like...
      // window.addEventListener("scroll", () => {
      //    _.throttle(doThatStuff, 100);
      // });
      // Only not doing it here to keep this Pen dependency-free.

      window.addEventListener("scroll", event => {
        let fromTop = window.scrollY;

        mainNavLinks.forEach(link => {
          let section = document.querySelector(link.hash);

          if (
            section.offsetTop <= fromTop &&
            section.offsetTop + section.offsetHeight > fromTop
          ) {
            link.classList.add("inside-tabs__item--active");
          } else {
            link.classList.remove("inside-tabs__item--active");
          }
        });
      });
      $(function(){
        $('a[href^="#"]').on('click', function(event) {
          // отменяем стандартное действие
          event.preventDefault();
          
          var sc = $(this).attr("href"),
              dn = $(sc).offset().top;
          /*
          * sc - в переменную заносим информацию о том, к какому блоку надо перейти
          * dn - определяем положение блока на странице
          */
          
          $('html, body').animate({scrollTop: dn}, 1000);
          
          /*
          * 1000 скорость перехода в миллисекундах
          */
        });
      });


      $(".card__item--desc .show-more-footer__button").click(function(e){
        e.preventDefault()
        $(".card__item--desc").toggleClass("js-active")
        
        $(this).toggleClass("js-active")
      
          if($(this).hasClass("js-active")){
            $(this).html("Скрыть")
          }
          else {
            
            $(this).html("Показать полностью")
          }
        
      })

      $(".card__addToCart").click(function(){
        $("#callback-modal").arcticmodal({
          afterOpen: function(data, el) {
            $('body').css('overflow','hidden');
          },
          beforeClose: function(data, el) {
           setTimeout(() => {
            $('body').css('overflow','auto');
           }, 100);
          },
        });
      });

      $(".button--order").click(function(){
        $("#order-prod").arcticmodal({
          afterOpen: function(data, el) {
            $('body').css('overflow','hidden');
          },
          beforeClose: function(data, el) {
           setTimeout(() => {
            $('body').css('overflow','auto');
           }, 100);
          },
        });
      });
      
      $(".card-tiny__image,.like-icons__item--glass").click(function(){
        $("#fast-view").arcticmodal({
          afterOpen: function(data, el) {
            $('body').css('overflow','hidden');
          },
          beforeClose: function(data, el) {
           setTimeout(() => {
            $('body').css('overflow','auto');
           }, 100);
          },
        });
      });
      $(".nav-tabs__item--auth").click(function(){
        $("#auth").arcticmodal({
          afterOpen: function(data, el) {
            $('body').css('overflow','hidden');
          },
          beforeClose: function(data, el) {
           setTimeout(() => {
            $('body').css('overflow','auto');
           }, 100);
          },
        });
      });
      $(".card__button--question").click(function(){
        $("#question").arcticmodal({
          afterOpen: function(data, el) {
            $('body').css('overflow','hidden');
          },
          beforeClose: function(data, el) {
           setTimeout(() => {
            $('body').css('overflow','auto');
           }, 100);
          },
        });
      });
      $(".card__button--shops").click(function(){
        $("#shops").arcticmodal({
          afterOpen: function(data, el) {
            $('body').css('overflow','hidden');
          },
          beforeClose: function(data, el) {
           setTimeout(() => {
            $('body').css('overflow','auto');
           }, 100);
          },
        });
      });
      $(".nav-tabs__item--city").click(function(){
        $("#chose-city").arcticmodal({
          afterOpen: function(data, el) {
            $('body').css('overflow','hidden');
          },
          beforeClose: function(data, el) {
           setTimeout(() => {
            $('body').css('overflow','auto');
           }, 100);
          },
        });
      });
      $(".card__button--view").click(function(){
        $("#subscription").arcticmodal({
          afterOpen: function(data, el) {
            $('body').css('overflow','hidden');
          },
          beforeClose: function(data, el) {
           setTimeout(() => {
            $('body').css('overflow','auto');
           }, 100);
          },
        });
      });
     
   

    $(".subscription-modal--close").click(function () {
      $("#subscription").arcticmodal("close")
    })
      $(".reviews__top-button").click(function(){
        $("#review-modal").arcticmodal({
          afterOpen: function(data, el) {
            $('body').css('overflow','hidden');
          },
          beforeClose: function(data, el) {
           setTimeout(() => {
            $('body').css('overflow','auto');
           }, 100);
          },
        });
        galleryThumbs.update();
        galleryTop.update();
      });
      

      $(document).ready(() => {
        $("#fileUpload").change(function () {
            const file = this.files[0];
            if (file) {
                let reader = new FileReader();
                reader.onload = function (event) {
                    $("#imgPreview")
                      .attr("src", event.target.result);
                };
                reader.readAsDataURL(file);
               
            }
            $(this).parent().hide();
            $(this).parent().next().show();
        });



       
       
        $('body').on('click', '.load-file__preview-remove', function() {
          $(this).closest(".load-file").find("img").attr("src","")
          $(this).closest(".load-file").find("input").val("")
          $(this).closest(".load-file").find(".load-file__preview-container").hide();
          $(this).closest(".load-file").find(".load-file__label").show();
      });
       


        (function (factory) {
    typeof define === 'function' && define.amd ? define(factory) :
    factory();
})((function () { 'use strict';

    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation.

    Permission to use, copy, modify, and/or distribute this software for any
    purpose with or without fee is hereby granted.

    THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
    REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
    AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
    INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
    LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
    OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
    PERFORMANCE OF THIS SOFTWARE.
    ***************************************************************************** */

    function __spreadArray(to, from, pack) {
        if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
            if (ar || !(i in from)) {
                if (!ar) ar = Array.prototype.slice.call(from, 0, i);
                ar[i] = from[i];
            }
        }
        return to.concat(ar || Array.prototype.slice.call(from));
    }

    /*! Fast Average Color | © 2022 Denis Seleznev | MIT License | https://github.com/fast-average-color/fast-average-color */
    function toHex(num) {
        var str = num.toString(16);
        return str.length === 1 ? '0' + str : str;
    }
    function arrayToHex(arr) {
        return '#' + arr.map(toHex).join('');
    }
    function isDark(color) {
        // http://www.w3.org/TR/AERT#color-contrast
        var result = (color[0] * 299 + color[1] * 587 + color[2] * 114) / 1000;
        return result < 128;
    }
    function prepareIgnoredColor(color) {
        if (!color) {
            return [];
        }
        return isRGBArray(color) ? color : [color];
    }
    function isRGBArray(value) {
        return Array.isArray(value[0]);
    }
    function isIgnoredColor(data, index, ignoredColor) {
        for (var i = 0; i < ignoredColor.length; i++) {
            if (isIgnoredColorAsNumbers(data, index, ignoredColor[i])) {
                return true;
            }
        }
        return false;
    }
    function isIgnoredColorAsNumbers(data, index, ignoredColor) {
        switch (ignoredColor.length) {
            case 3:
                // [red, green, blue]
                if (isIgnoredRGBColor(data, index, ignoredColor)) {
                    return true;
                }
                break;
            case 4:
                // [red, green, blue, alpha]
                if (isIgnoredRGBAColor(data, index, ignoredColor)) {
                    return true;
                }
                break;
            case 5:
                // [red, green, blue, alpha, threshold]
                if (isIgnoredRGBAColorWithThreshold(data, index, ignoredColor)) {
                    return true;
                }
                break;
            default:
                return false;
        }
    }
    function isIgnoredRGBColor(data, index, ignoredColor) {
        // Ignore if the pixel are transparent.
        if (data[index + 3] !== 255) {
            return true;
        }
        if (data[index] === ignoredColor[0] &&
            data[index + 1] === ignoredColor[1] &&
            data[index + 2] === ignoredColor[2]) {
            return true;
        }
        return false;
    }
    function isIgnoredRGBAColor(data, index, ignoredColor) {
        if (data[index + 3] && ignoredColor[3]) {
            return data[index] === ignoredColor[0] &&
                data[index + 1] === ignoredColor[1] &&
                data[index + 2] === ignoredColor[2] &&
                data[index + 3] === ignoredColor[3];
        }
        // Ignore rgb components if the pixel are fully transparent.
        return data[index + 3] === ignoredColor[3];
    }
    function inRange(colorComponent, ignoredColorComponent, value) {
        return colorComponent >= (ignoredColorComponent - value) &&
            colorComponent <= (ignoredColorComponent + value);
    }
    function isIgnoredRGBAColorWithThreshold(data, index, ignoredColor) {
        var redIgnored = ignoredColor[0];
        var greenIgnored = ignoredColor[1];
        var blueIgnored = ignoredColor[2];
        var alphaIgnored = ignoredColor[3];
        var threshold = ignoredColor[4];
        var alphaData = data[index + 3];
        var alphaInRange = inRange(alphaData, alphaIgnored, threshold);
        if (!alphaIgnored) {
            return alphaInRange;
        }
        if (!alphaData && alphaInRange) {
            return true;
        }
        if (inRange(data[index], redIgnored, threshold) &&
            inRange(data[index + 1], greenIgnored, threshold) &&
            inRange(data[index + 2], blueIgnored, threshold) &&
            alphaInRange) {
            return true;
        }
        return false;
    }

    function dominantAlgorithm(arr, len, options) {
        var colorHash = {};
        var divider = 24;
        var ignoredColor = options.ignoredColor;
        var step = options.step;
        var max = [0, 0, 0, 0, 0];
        for (var i = 0; i < len; i += step) {
            var red = arr[i];
            var green = arr[i + 1];
            var blue = arr[i + 2];
            var alpha = arr[i + 3];
            if (ignoredColor && isIgnoredColor(arr, i, ignoredColor)) {
                continue;
            }
            var key = Math.round(red / divider) + ',' +
                Math.round(green / divider) + ',' +
                Math.round(blue / divider);
            if (colorHash[key]) {
                colorHash[key] = [
                    colorHash[key][0] + red * alpha,
                    colorHash[key][1] + green * alpha,
                    colorHash[key][2] + blue * alpha,
                    colorHash[key][3] + alpha,
                    colorHash[key][4] + 1
                ];
            }
            else {
                colorHash[key] = [red * alpha, green * alpha, blue * alpha, alpha, 1];
            }
            if (max[4] < colorHash[key][4]) {
                max = colorHash[key];
            }
        }
        var redTotal = max[0];
        var greenTotal = max[1];
        var blueTotal = max[2];
        var alphaTotal = max[3];
        var count = max[4];
        return alphaTotal ? [
            Math.round(redTotal / alphaTotal),
            Math.round(greenTotal / alphaTotal),
            Math.round(blueTotal / alphaTotal),
            Math.round(alphaTotal / count)
        ] : options.defaultColor;
    }

    function simpleAlgorithm(arr, len, options) {
        var redTotal = 0;
        var greenTotal = 0;
        var blueTotal = 0;
        var alphaTotal = 0;
        var count = 0;
        var ignoredColor = options.ignoredColor;
        var step = options.step;
        for (var i = 0; i < len; i += step) {
            var alpha = arr[i + 3];
            var red = arr[i] * alpha;
            var green = arr[i + 1] * alpha;
            var blue = arr[i + 2] * alpha;
            if (ignoredColor && isIgnoredColor(arr, i, ignoredColor)) {
                continue;
            }
            redTotal += red;
            greenTotal += green;
            blueTotal += blue;
            alphaTotal += alpha;
            count++;
        }
        return alphaTotal ? [
            Math.round(redTotal / alphaTotal),
            Math.round(greenTotal / alphaTotal),
            Math.round(blueTotal / alphaTotal),
            Math.round(alphaTotal / count)
        ] : options.defaultColor;
    }

    function sqrtAlgorithm(arr, len, options) {
        var redTotal = 0;
        var greenTotal = 0;
        var blueTotal = 0;
        var alphaTotal = 0;
        var count = 0;
        var ignoredColor = options.ignoredColor;
        var step = options.step;
        for (var i = 0; i < len; i += step) {
            var red = arr[i];
            var green = arr[i + 1];
            var blue = arr[i + 2];
            var alpha = arr[i + 3];
            if (ignoredColor && isIgnoredColor(arr, i, ignoredColor)) {
                continue;
            }
            redTotal += red * red * alpha;
            greenTotal += green * green * alpha;
            blueTotal += blue * blue * alpha;
            alphaTotal += alpha;
            count++;
        }
        return alphaTotal ? [
            Math.round(Math.sqrt(redTotal / alphaTotal)),
            Math.round(Math.sqrt(greenTotal / alphaTotal)),
            Math.round(Math.sqrt(blueTotal / alphaTotal)),
            Math.round(alphaTotal / count)
        ] : options.defaultColor;
    }

    function getDefaultColor(options) {
        return getOption(options, 'defaultColor', [0, 0, 0, 0]);
    }
    function getOption(options, name, defaultValue) {
        return (options[name] === undefined ? defaultValue : options[name]);
    }

    var MIN_SIZE = 10;
    var MAX_SIZE = 100;
    function isSvg(filename) {
        return filename.search(/\.svg(\?|$)/i) !== -1;
    }
    function getOriginalSize(resource) {
        if (resource instanceof HTMLImageElement) {
            var width = resource.naturalWidth;
            var height = resource.naturalHeight;
            // For SVG images with only viewBox attr.
            if (!resource.naturalWidth && isSvg(resource.src)) {
                width = height = MAX_SIZE;
            }
            return {
                width: width,
                height: height,
            };
        }
        if (resource instanceof HTMLVideoElement) {
            return {
                width: resource.videoWidth,
                height: resource.videoHeight
            };
        }
        return {
            width: resource.width,
            height: resource.height
        };
    }
    function getSrc(resource) {
        return resource instanceof HTMLCanvasElement ? 'canvas' : resource.src;
    }
    function prepareSizeAndPosition(originalSize, options) {
        var srcLeft = getOption(options, 'left', 0);
        var srcTop = getOption(options, 'top', 0);
        var srcWidth = getOption(options, 'width', originalSize.width);
        var srcHeight = getOption(options, 'height', originalSize.height);
        var destWidth = srcWidth;
        var destHeight = srcHeight;
        if (options.mode === 'precision') {
            return {
                srcLeft: srcLeft,
                srcTop: srcTop,
                srcWidth: srcWidth,
                srcHeight: srcHeight,
                destWidth: destWidth,
                destHeight: destHeight
            };
        }
        var factor;
        if (srcWidth > srcHeight) {
            factor = srcWidth / srcHeight;
            destWidth = MAX_SIZE;
            destHeight = Math.round(destWidth / factor);
        }
        else {
            factor = srcHeight / srcWidth;
            destHeight = MAX_SIZE;
            destWidth = Math.round(destHeight / factor);
        }
        if (destWidth > srcWidth || destHeight > srcHeight ||
            destWidth < MIN_SIZE || destHeight < MIN_SIZE) {
            destWidth = srcWidth;
            destHeight = srcHeight;
        }
        return {
            srcLeft: srcLeft,
            srcTop: srcTop,
            srcWidth: srcWidth,
            srcHeight: srcHeight,
            destWidth: destWidth,
            destHeight: destHeight
        };
    }
    function makeCanvas() {
        return typeof window === 'undefined' ?
            new OffscreenCanvas(1, 1) :
            document.createElement('canvas');
    }

    var ERROR_PREFIX = 'FastAverageColor: ';
    function outputError(message, silent, error) {
        if (!silent) {
            console.error(ERROR_PREFIX + message);
            if (error) {
                console.error(error);
            }
        }
    }
    function getError(text) {
        return Error(ERROR_PREFIX + text);
    }

    var FastAverageColor = /** @class */ (function () {
        function FastAverageColor() {
            this.canvas = null;
            this.ctx = null;
        }
        /**
         * Get asynchronously the average color from not loaded image.
         */
        FastAverageColor.prototype.getColorAsync = function (resource, options) {
            var _a;
            if (!resource) {
                return Promise.reject(getError('call .getColorAsync() without resource.'));
            }
            if (typeof resource === 'string') {
                var img = new Image();
                img.crossOrigin = (_a = options === null || options === void 0 ? void 0 : options.crossOrigin) !== null && _a !== void 0 ? _a : '';
                img.src = resource;
                return this.bindImageEvents(img, options);
            }
            else if (resource instanceof Image && !resource.complete) {
                return this.bindImageEvents(resource, options);
            }
            else {
                var result = this.getColor(resource, options);
                return result.error ? Promise.reject(result.error) : Promise.resolve(result);
            }
        };
        /**
         * Get the average color from images, videos and canvas.
         */
        FastAverageColor.prototype.getColor = function (resource, options) {
            options = options || {};
            var defaultColor = getDefaultColor(options);
            if (!resource) {
                outputError('call .getColor(null) without resource.', options.silent);
                return this.prepareResult(defaultColor);
            }
            var originalSize = getOriginalSize(resource);
            var size = prepareSizeAndPosition(originalSize, options);
            if (!size.srcWidth || !size.srcHeight || !size.destWidth || !size.destHeight) {
                outputError("incorrect sizes for resource \"".concat(getSrc(resource), "\"."), options.silent);
                return this.prepareResult(defaultColor);
            }
            if (!this.canvas) {
                this.canvas = makeCanvas();
            }
            if (!this.ctx) {
                this.ctx = this.canvas.getContext && this.canvas.getContext('2d');
                if (!this.ctx) {
                    outputError('Canvas Context 2D is not supported in this browser.', options.silent);
                    return this.prepareResult(defaultColor);
                }
            }
            this.canvas.width = size.destWidth;
            this.canvas.height = size.destHeight;
            var value = defaultColor;
            try {
                this.ctx.clearRect(0, 0, size.destWidth, size.destHeight);
                this.ctx.drawImage(resource, size.srcLeft, size.srcTop, size.srcWidth, size.srcHeight, 0, 0, size.destWidth, size.destHeight);
                var bitmapData = this.ctx.getImageData(0, 0, size.destWidth, size.destHeight).data;
                value = this.getColorFromArray4(bitmapData, options);
            }
            catch (e) {
                outputError("security error (CORS) for resource ".concat(getSrc(resource), ".\nDetails: https://developer.mozilla.org/en/docs/Web/HTML/CORS_enabled_image"), options.silent, e);
            }
            return this.prepareResult(value);
        };
        /**
         * Get the average color from a array when 1 pixel is 4 bytes.
         */
        FastAverageColor.prototype.getColorFromArray4 = function (arr, options) {
            options = options || {};
            var bytesPerPixel = 4;
            var arrLength = arr.length;
            var defaultColor = getDefaultColor(options);
            if (arrLength < bytesPerPixel) {
                return defaultColor;
            }
            var len = arrLength - arrLength % bytesPerPixel;
            var step = (options.step || 1) * bytesPerPixel;
            var algorithm;
            switch (options.algorithm || 'sqrt') {
                case 'simple':
                    algorithm = simpleAlgorithm;
                    break;
                case 'sqrt':
                    algorithm = sqrtAlgorithm;
                    break;
                case 'dominant':
                    algorithm = dominantAlgorithm;
                    break;
                default:
                    throw getError("".concat(options.algorithm, " is unknown algorithm."));
            }
            return algorithm(arr, len, {
                defaultColor: defaultColor,
                ignoredColor: prepareIgnoredColor(options.ignoredColor),
                step: step
            });
        };
        /**
         * Get color data from value ([r, g, b, a]).
         */
        FastAverageColor.prototype.prepareResult = function (value) {
            var rgb = value.slice(0, 3);
            var rgba = [value[0], value[1], value[2], value[3] / 255];
            var isDarkColor = isDark(value);
            return {
                value: [value[0], value[1], value[2], value[3]],
                rgb: 'rgb(' + rgb.join(',') + ')',
                rgba: 'rgba(' + rgba.join(',') + ')',
                hex: arrayToHex(rgb),
                hexa: arrayToHex(value),
                isDark: isDarkColor,
                isLight: !isDarkColor
            };
        };
        /**
         * Destroy the instance.
         */
        FastAverageColor.prototype.destroy = function () {
            this.canvas = null;
            this.ctx = null;
        };
        FastAverageColor.prototype.bindImageEvents = function (resource, options) {
            var _this = this;
            return new Promise(function (resolve, reject) {
                var onload = function () {
                    unbindEvents();
                    var result = _this.getColor(resource, options);
                    if (result.error) {
                        reject(result.error);
                    }
                    else {
                        resolve(result);
                    }
                };
                var onerror = function () {
                    unbindEvents();
                    reject(getError("Error loading image \"".concat(resource.src, "\".")));
                };
                var onabort = function () {
                    unbindEvents();
                    reject(getError("Image \"".concat(resource.src, "\" loading aborted.")));
                };
                var unbindEvents = function () {
                    resource.removeEventListener('load', onload);
                    resource.removeEventListener('error', onerror);
                    resource.removeEventListener('abort', onabort);
                };
                resource.addEventListener('load', onload);
                resource.addEventListener('error', onerror);
                resource.addEventListener('abort', onabort);
            });
        };
        return FastAverageColor;
    }());





  

   
    var fac = new FastAverageColor();
        window.addEventListener('load', function () {
            Array.from(document.querySelectorAll('.news-item--lit')).forEach(function (item) {
                var image = item.querySelector('img');
                var isBottom = item.classList.contains('news-item--lit');
                var gradient = item.querySelector('.news-item__gradient');
                var height = image.naturalHeight;
                var size = 50;
                var color = fac.getColor(image, isBottom ?
                    { top: height - size, height: size } :
                    { height: size });
                var colorEnd = __spreadArray(__spreadArray([], color.value.slice(0, 3), true), [0], false).join(',');
                item.style.background = color.rgb;
                item.style.color = color.isDark ? 'white' : 'black';
                if (isBottom) {
                    gradient.style.background = "linear-gradient(to bottom, rgba(".concat(colorEnd, ") 0%, ").concat(color.rgba, " 75%)");
                }
                else {
                    gradient.style.background = "linear-gradient(to top, rgba(".concat(colorEnd, ") 0%, ").concat(color.rgba, " 75%)");
                }
            });
        }, false);

   



}));

    });
    // Check if iPhone or iPod
if (navigator.userAgent.match(/(iPad)|(iPhone)|(iPod)/i)) {
  var cssPath = "css/iphonefix.css";
}

// Load CSS file
if (cssPath) {
  var head = document.getElementsByTagName('head')[0];
  var link = document.createElement('link');
  link.rel = 'stylesheet';
  link.type = 'text/css';
  link.href = cssPath;
  link.media = 'all';
  head.appendChild(link);
}


function copyToClipboard(str) {
  var area = document.createElement('textarea');

  document.body.appendChild(area);  
    area.value = str;
    area.select();
    document.execCommand("copy");
  document.body.removeChild(area);  
}



$('.logistics__item-value--copy').click(function() {
  copyToClipboard($(this).find("span").text())
}); 


$('.track__list-item-show-more').click(function() {

 $(".track__list-item").show(300);
 $(this).parent().hide(300)
}); 

$('.track__list-item-show-more').click(function() {

  $(".track__list-item").show(300);
  $(this).parent().hide(300)
 }); 
 
 $('.track__list-item-show-more').click(function() {

  $(".track__list-item").show(300);
  $(this).parent().hide(300)
 }); 
  $('.rating-bar span').click(function() {
      $(this).siblings().removeClass("active")
      $(this).addClass("active").nextAll().addClass("active")
      let ratingVal = $(this).siblings(".active").length + 1
      $(this).closest(".rating-bar").find(".rating-bar__input").val(ratingVal)
  }); 
