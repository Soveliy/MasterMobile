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
        640: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        768: {
          slidesPerView: 4,
          spaceBetween: 40,
        },
        1024: {
          slidesPerView: 5,
          spaceBetween: 50,
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