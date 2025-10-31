// -------------------------
// Init Lenis smooth scrolling
// -------------------------
const lenis = new Lenis();
window.lenis = lenis; // make it global so other scripts can access it

function raf(time) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}
requestAnimationFrame(raf);



// -------------------------
// Disable main scroll when offcanvas is open
// -------------------------
const offcanvasSearch = document.getElementById('offcanvasSearch');

// When offcanvas opens
offcanvasSearch.addEventListener('show.bs.offcanvas', () => {
  lenis.stop(); // stop Lenis smooth scroll
  document.body.style.overflow = 'hidden'; // lock body scroll
});

// When offcanvas closes
offcanvasSearch.addEventListener('hidden.bs.offcanvas', () => {
  lenis.start(); // resume Lenis scroll
  document.body.style.overflow = ''; // unlock body scroll
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
  const swipers = [];
  const swiperContainers = document.querySelectorAll('.shop-by-swiper');

  swiperContainers.forEach((container, index) => {
    const swiper = new Swiper(container, {
      slidesPerView: 3,
      spaceBetween: 20,
      loop: true,
      centeredSlides: false,
      pagination: {
        el: container.querySelector('.swiper-pagination'),
        clickable: true,
      },
      navigation: {
        nextEl: '.bestseller-swiper-button-next',
        prevEl: '.bestseller-swiper-button-prev',
      },
      breakpoints: {
        0: {
          slidesPerView: 1,
          spaceBetween: 0,
          centeredSlides: true, // ✅ ensures it’s centered in viewport
        },
        768: {
          slidesPerView: 2,
          spaceBetween: 15,
          centeredSlides: false,
        },
        1024: {
          slidesPerView: 3,
          spaceBetween: 20,
          centeredSlides: false,
        },
      },
    });

    swipers.push(swiper);
  });

  const tabButtons = document.querySelectorAll('#v-pills-tab button');
  tabButtons.forEach((button) => {
    button.addEventListener('shown.bs.tab', function (e) {
      const activeIndex = Array.from(tabButtons).indexOf(e.target);
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

  // --- DESKTOP PLACEHOLDER LOGIC ---
  function createPlaceholder() {
    const ph = document.createElement('div');
    ph.className = 'nav-placeholder';
    ph.style.height = nav.offsetHeight + 'px';
    return ph;
  }

  function fixNavDesktop() {
    if (isFixed) return;
    placeholder = createPlaceholder();
    nav.parentNode.insertBefore(placeholder, nav.nextSibling);
    nav.classList.add('nav-fixed');
    headerStrip.style.opacity = '0';
    isFixed = true;
  }

  function unfixNavDesktop() {
    if (!isFixed) return;
    if (placeholder && placeholder.parentNode) placeholder.parentNode.removeChild(placeholder);
    placeholder = null;
    nav.classList.remove('nav-fixed');
    headerStrip.style.opacity = '1';
    isFixed = false;
  }

  // --- MOBILE FIXED LOGIC ---
  function fixNavMobile() {
    if (isFixed) return;
    nav.classList.add('nav-fixed');
    headerStrip.style.opacity = '0';
    isFixed = true;
  }

  function unfixNavMobile() {
    if (!isFixed) return;
    nav.classList.remove('nav-fixed');
    headerStrip.style.opacity = '1';
    isFixed = false;
  }

  function checkPosition() {
    const headerBottom = headerStrip.getBoundingClientRect().bottom;
    const scrollY = window.scrollY;
    const isMobile = window.innerWidth <= 768;

    if (isMobile) {
      // MOBILE: keep nav fixed at top, no animation or gap
      if (headerBottom <= 0 && !isFixed) {
        fixNavMobile();
      } else if (headerBottom > 0 && isFixed && scrollY <= lastScrollY) {
        unfixNavMobile();
      }
    } else {
      // DESKTOP: smooth sticky with placeholder
      if (headerBottom <= 0 && !isFixed) {
        fixNavDesktop();
      } else if (headerBottom > 0 && isFixed && scrollY <= lastScrollY) {
        unfixNavDesktop();
      }
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
    // Reset when switching between mobile and desktop
    if (window.innerWidth <= 768) {
      if (placeholder && placeholder.parentNode) placeholder.parentNode.removeChild(placeholder);
      placeholder = null;
      nav.classList.remove('nav-fixed');
      isFixed = false;
      headerStrip.style.opacity = '1';
    } else {
      nav.classList.remove('nav-fixed');
      if (placeholder && placeholder.parentNode) placeholder.parentNode.removeChild(placeholder);
      placeholder = null;
      isFixed = false;
      headerStrip.style.opacity = '1';
    }
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


// **************************************************************************************************

window.addEventListener("scroll", function() {
  const nav = document.querySelector("nav");
  if (window.scrollY > 50) {
    nav.classList.add("scrolled");
  } else {
    nav.classList.remove("scrolled");
  }
});

// Initialize Search Sidebar Swiper
const sidebarSwiper = new Swiper('.sidebar-swiper', {
  slidesPerView: 1,
  spaceBetween: 15,
  pagination: {
    el: '.sidebar-swiper-pagination',
    clickable: true,
  },
  breakpoints: {
    480: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2, // show 2 cards in sidebar on larger screens
      spaceBetween: 20,
    },
  },
});

// Initialize Trending Products Swiper
const sideSwiper = new Swiper('.side-swiper', {
  slidesPerView: 1,
  spaceBetween: 20,
  pagination: {
    el: '.side-swiper-pagination',
    clickable: true,
  },
  navigation: {
    nextEl: '.side-swiper-button-next',
    prevEl: '.side-swiper-button-prev',
  },
  breakpoints: {
    768: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    1024: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
  },
});