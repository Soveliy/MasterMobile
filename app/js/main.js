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