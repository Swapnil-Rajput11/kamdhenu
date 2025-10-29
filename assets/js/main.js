// Init Lenis smooth scrolling
const lenis = new Lenis();
function raf(time) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}
requestAnimationFrame(raf);

// GSAP animate h1 in
window.addEventListener('DOMContentLoaded', () => {
  gsap.to("#heading", {
    opacity: 1,
    y: 0,
    duration: 1.2,
    ease: "power2.out"
  });
});

// Custom cursor
document.querySelector(".cursor2"),
document.querySelector(".cursor1"),
window.addEventListener("mousemove", function(e) {
    gsap.to(".cursor1", {
        x: e.clientX,
        y: e.clientY
    }),
    gsap.to(".cursor2", {
        x: e.clientX,
        y: e.clientY
    })
})

// Mobile menu functionality
document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.querySelector('.mobile-menu-toggle');
    const mobileMenu = document.querySelector('.mobile-menu-overlay');
    const backdrop = document.querySelector('.mobile-menu-backdrop');
    const closeButton = document.querySelector('.mobile-menu-close');
    
    function toggleMenu() {
      menuToggle.classList.toggle('active');
      mobileMenu.classList.toggle('active');
      backdrop.classList.toggle('active');
      document.body.style.overflow = mobileMenu.classList.contains('active') ? 'hidden' : '';
    }
    
    // Toggle dropdowns
    function setupDropdowns() {
      const dropdownToggles = mobileMenu.querySelectorAll('.has-dropdown');
      
      dropdownToggles.forEach(toggle => {
        toggle.addEventListener('click', function(e) {
          e.preventDefault();
          const dropdown = this.nextElementSibling;
          
          // Close other dropdowns
          dropdownToggles.forEach(otherToggle => {
            if (otherToggle !== this) {
              otherToggle.classList.remove('active');
              otherToggle.nextElementSibling.classList.remove('active');
            }
          });
          
          // Toggle current dropdown
          this.classList.toggle('active');
          dropdown.classList.toggle('active');
        });
      });
    }
    
    if (menuToggle && mobileMenu && backdrop && closeButton) {
      menuToggle.addEventListener('click', toggleMenu);
      closeButton.addEventListener('click', toggleMenu);
      backdrop.addEventListener('click', toggleMenu);
      
      // Setup dropdown functionality
      setupDropdowns();
      
      // Close menu when clicking on non-dropdown links
      const menuLinks = mobileMenu.querySelectorAll('a:not(.has-dropdown)');
      menuLinks.forEach(link => {
        link.addEventListener('click', toggleMenu);
      });
    }
});

// Initialize Bestseller Swiper
const bestsellerSwiper = new Swiper('.bestseller-swiper', {
  slidesPerView: 1,
  spaceBetween: 20,
  pagination: {
    el: '.bestseller-swiper-pagination',
    clickable: true,
  },
  navigation: {
    nextEl: '.bestseller-swiper-button-next',
    prevEl: '.bestseller-swiper-button-prev',
  },
  breakpoints: {
    768: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    1024: {
      slidesPerView: 4,
      spaceBetween: 20,
    },
  },
});

// Initialize Trending Products Swiper
const trendingSwiper = new Swiper('.trending-swiper', {
  slidesPerView: 1,
  spaceBetween: 20,
  pagination: {
    el: '.trending-swiper-pagination',
    clickable: true,
  },
  navigation: {
    nextEl: '.trending-swiper-button-next',
    prevEl: '.trending-swiper-button-prev',
  },
  breakpoints: {
    768: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    1024: {
      slidesPerView: 4,
      spaceBetween: 20,
    },
  },
});

// Initialize Bestseller Swiper
const testimonialSwiper = new Swiper('.testimonial-swiper', {
  slidesPerView: 1,
  spaceBetween: 20,
  pagination: {
    el: '.testimonial-swiper-pagination',
    clickable: true,
  },
  navigation: {
    nextEl: '.testimonial-swiper-button-next',
    prevEl: '.testimonial-swiper-button-prev',
  },
  breakpoints: {
    768: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    1024: {
      slidesPerView: 3,
      spaceBetween: 20,
    },
  },
});

const blogSwiper = new Swiper('.blog-swiper', {
  slidesPerView: 1,
  spaceBetween: 20,
  pagination: {
    el: '.blog-swiper-pagination',
    clickable: true,
  },
  navigation: {
    nextEl: '.blog-swiper-button-next',
    prevEl: '.blog-swiper-button-prev',
  },
  breakpoints: {
    768: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    1024: {
      slidesPerView: 3,
      spaceBetween: 20,
    },
  },
});

document.addEventListener('DOMContentLoaded', function() {
  // Initialize all swipers
  const swipers = [];
  const swiperContainers = document.querySelectorAll('.shop-by-swiper');
  
  swiperContainers.forEach((container, index) => {
      const swiper = new Swiper(container, {
          slidesPerView: 3,
          spaceBetween: 20,
          loop: true,
          pagination: {
              el: container.querySelector('.swiper-pagination'),
              clickable: true,
          },
          navigation: {
              nextEl: '.bestseller-swiper-button-next',
              prevEl: '.bestseller-swiper-button-prev',
          },
          breakpoints: {
              320: {
                  slidesPerView: 1,
                  spaceBetween: 10
              },
              768: {
                  slidesPerView: 2,
                  spaceBetween: 15
              },
              1024: {
                  slidesPerView: 3,
                  spaceBetween: 20
              }
          }
      });
      
      swipers.push(swiper);
  });
  
  // Handle tab changes to update swiper
  const tabButtons = document.querySelectorAll('#v-pills-tab button');
  tabButtons.forEach(button => {
      button.addEventListener('shown.bs.tab', function (e) {
          // Get the index of the active tab
          const activeIndex = Array.from(tabButtons).indexOf(e.target);
          
          // Update the corresponding swiper
          if (swipers[activeIndex]) {
              swipers[activeIndex].update();
          }
      });
  });
});

document.addEventListener('DOMContentLoaded', function() {
  var playBtn = document.getElementById('video-play-btn');
  var video = document.getElementById('main-video');
  var thumbnail = playBtn.closest('.video-thumbnail');

  playBtn.addEventListener('click', function() {
    thumbnail.style.display = 'none';
    video.style.display = 'block';
    video.play();
  });
});

// ******************************************************************************

document.addEventListener('DOMContentLoaded', function () {
  const nav = document.querySelector('.nav-container');
  const headerStrip = document.querySelector('.header-strip');
  if (!nav || !headerStrip) return;

  let placeholder = null;
  let isFixed = false;
  let lastScrollY = 0;

  function createPlaceholder() {
    const ph = document.createElement('div');
    ph.className = 'nav-placeholder';
    ph.style.height = nav.offsetHeight + 'px';
    return ph;
  }

  function fixNav() {
    if (isFixed) return;
    placeholder = createPlaceholder();
    nav.parentNode.insertBefore(placeholder, nav.nextSibling);
    nav.classList.add('nav-fixed');
    headerStrip.style.opacity = '0';
    document.documentElement.style.setProperty('--nav-height', nav.offsetHeight + 'px');
    isFixed = true;
  }
  

  function unfixNav() {
    if (!isFixed) return;
    if (placeholder && placeholder.parentNode) {
      placeholder.parentNode.removeChild(placeholder);
      placeholder = null;
    }
    nav.classList.remove('nav-fixed');
    headerStrip.style.opacity = '1';
    isFixed = false;
  }

  function checkPosition() {
    const headerBottom = headerStrip.getBoundingClientRect().bottom;
    const scrollY = window.scrollY;

    // When header-strip fully scrolled out of view
    if (headerBottom <= 0 && !isFixed) {
      fixNav();
    } 
    // When scrolling up and header-strip becomes visible again
    else if (headerBottom > 0 && isFixed && scrollY <= lastScrollY) {
      unfixNav();
    }

    lastScrollY = scrollY;
  }

  let ticking = false;
  window.addEventListener('scroll', () => {
    if (!ticking) {
      requestAnimationFrame(() => {
        checkPosition();
        ticking = false;
      });
      ticking = true;
    }
  });

  window.addEventListener('resize', () => {
    if (placeholder) placeholder.style.height = nav.offsetHeight + 'px';
  });
}); 


// *****************************************************************************************


document.addEventListener('DOMContentLoaded', () => {
  const shopLink = document.querySelector('.nav-pages ul li:nth-child(1)');
  const discoverLink = document.querySelector('.nav-pages ul li:nth-child(2)');
  const shopOverlay = document.querySelector('.shop-overlay');
  const discoverOverlay = document.querySelector('.discover-overlay');
  const allLinks = document.querySelectorAll('.nav-pages ul li');
  const allOverlays = document.querySelectorAll('.menu-overlay');

  function closeAll() {
    allOverlays.forEach(o => o.classList.remove('active'));
    allLinks.forEach(l => l.classList.remove('active'));
  }

  shopLink.addEventListener('click', e => {
    e.preventDefault();
    const isActive = shopOverlay.classList.contains('active');
    closeAll();
    if (!isActive) {
      shopOverlay.classList.add('active');
      shopLink.classList.add('active');
    }
  });

  discoverLink.addEventListener('click', e => {
    e.preventDefault();
    const isActive = discoverOverlay.classList.contains('active');
    closeAll();
    if (!isActive) {
      discoverOverlay.classList.add('active');
      discoverLink.classList.add('active');
    }
  });

  // Close on outside click
  document.addEventListener('click', e => {
    if (
      !e.target.closest('.menu-overlay') &&
      !e.target.closest('.nav-pages')
    ) {
      closeAll();
    }
  });
});


