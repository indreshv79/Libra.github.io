document.querySelector(".navbar-toggler")?.addEventListener("click", () => document.body.classList.toggle("nav-open"));

const heroImageSwiper = new Swiper('.hero-image-slider', {
  loop:true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

const homeProductswiper = new Swiper(".home-product-slider", {
  slidesPerView: "4.15",
  spaceBetween: 32,
  navigation: {
    nextEl: ".swiper-product-next",
    prevEl: ".swiper-product-prev",
  },
  pagination: {
    el: ".swiper-home-pagination",
    type: "progressbar",
  },
  breakpoints: {
    320: {
      slidesPerView: "1",
      spaceBetween: 16
    },
    575: {
      slidesPerView: "2.15",
      spaceBetween: 16
  },
  767: {
    slidesPerView: "2.15",
    spaceBetween: 16
}, 
    1024: {
      slidesPerView: "3.15",
      spaceBetween: 32
  },
  1350: {
    slidesPerView: "4.15",
    spaceBetween: 32
},
}
});

const stripLineswiper = new Swiper(".strip-line-slider", {  
  slidesPerView: 3.2,
  spaceBetween: 32,
  navigation: {
    nextEl: ".swiper-strip-line-next",
    prevEl: ".swiper-strip-line-prev",
  },
  pagination: {
    el: ".swiper-strip-line-pagination",
    type: "progressbar",
  },
  breakpoints: {
    320: {
      slidesPerView: 1,
      spaceBetween: 16
  }, 
    768: {
      slidesPerView: 2,
      spaceBetween: 32
  }, 
    1280: {
        slidesPerView: 3,
        spaceBetween: 32
    },    
    1536: {
        slidesPerView: 3.7,
        spaceBetween: 32
    }
}
});
const gridImageSwiper = new Swiper('.grid-image-slider', {
  loop:true,
  navigation: {
    nextEl: ".swiper-image-slider-next",
    prevEl: ".swiper-image-slider-prev",
  },
});

const textSlider = new Swiper(".text-slider", {
  slidesPerView: 2.38,
  centeredSlides: true,
  loop:true,
  initialSlide: 1,
  spaceBetween: 192,
  breakpoints: {
    320: {   
        slidesPerView: 1.38, 
        spaceBetween: 40
    }, 
      768: {
        slidesPerView: 2.38,
        spaceBetween: 60
    }, 
      1024: {
        
          spaceBetween: 150
      },    
      1536: {
          spaceBetween: 192
      }
  }
  });                  

 const sectorsSwiper = new Swiper(".sectors-slider", {
    slidesPerView: 4,
    spaceBetween: 32,
    breakpoints: {
      320: {
        slidesPerView: 1.2,
        spaceBetween: 16
    }, 
      768: {
        slidesPerView: 2.2,
        spaceBetween: 32
    }, 
      1280: {
          slidesPerView: 3.2,
          spaceBetween: 32
      },    
      1536: {
          slidesPerView: 4,
          spaceBetween: 32
      }
    }                        
  }); 

  const swiper = new Swiper(".thumbSlider", {
    slidesPerView: '4',
    spaceBetween: 16,
    direction: 'vertical',
    grabCursor: true,
    freeMode: true,
    watchSlidesProgress: true,
  });
  const swiper2 = new Swiper(".imageSlider", {
    loop: true,
    spaceBetween: 10,
    thumbs: {
      swiper: swiper,
    },
  });
  

  window.onscroll = () => myFunction();

  const body = document.body;
  const sticky = body.offsetTop + 10;
  
  const myFunction = () => {
    body.classList.toggle("header-fixed", window.scrollY > sticky);
  };
  
  function initializeAccordion(accordionClass, bodyClass, triggerIconClass) {
    var triggerIcons = document.querySelectorAll('.' + triggerIconClass);
  
    triggerIcons.forEach(function (triggerIcon) {
      triggerIcon.addEventListener('click', function () {
        var accordionHead = this.closest('.' + accordionClass);
  
        if (accordionHead.classList.contains('active')) {
          document.querySelectorAll('.' + bodyClass).forEach(function (body) {
            body.classList.remove('show');
          });
          accordionHead.classList.remove('active');
        } else {
          document.querySelectorAll('.' + accordionClass).forEach(function (accordionHead) {
            accordionHead.classList.remove('active');
          });
          accordionHead.classList.add('active');
          document.querySelectorAll('.' + bodyClass).forEach(function (body) {
            body.classList.remove('show');
          });
          accordionHead.nextElementSibling.classList.add('show');
        }
      });
  
      triggerIcon.addEventListener('click', function (event) {
        event.preventDefault();
      });
    });
  }
  
  initializeAccordion('accor-head', 'accor-body', 'triggerIconInside');
  initializeAccordion('navbar-nav-link', 'collapse-content-inside', 'triggerIcon');


//  const mediaQuery = window.matchMedia('(max-width: 1280px)')
  // // // Accodation working on click of parent div
  // if (mediaQuery.matches) {
  //   function initializeAccordion(accordionClass, bodyClass) { 
  //     var accordionHeads = document.querySelectorAll('.' + accordionClass); 
    
  //     accordionHeads.forEach(function(head) {
  //       head.addEventListener('click', function() {
  //         if (this.classList.contains('active')) {
  //           document.querySelectorAll('.' + bodyClass).forEach(function(body) {
  //             body.classList.remove('show');
  //           });
  //           this.classList.remove('active');
  //         } else {
  //           accordionHeads.forEach(function(accordionHead) {
  //             accordionHead.classList.remove('active');
  //           });
  //           this.classList.add('active');
  //           document.querySelectorAll('.' + bodyClass).forEach(function(body) {
  //             body.classList.remove('show');
  //           });
  //           this.nextElementSibling.classList.add('show');
  //         }
  //       });
  //       head.addEventListener('click', function(event) {
  //         event.preventDefault();
  //       });
  //     });
  //   }
  //   initializeAccordion('accor-head', 'accor-body');
  //   initializeAccordion('navbar-nav a', 'collapse-content-inside');
  // }
// Accodation working on click of icon

