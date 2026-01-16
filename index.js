const navbar = document.getElementById('navbar');
const navContainer = document.getElementById('nav-container');
const mobileMenuBtn = document.getElementById('mobile-menu-btn');
const closeDrawerBtn = document.getElementById('close-drawer');
const mobileDrawer = document.getElementById('mobile-drawer');

window.addEventListener('scroll', () => {
    if (window.scrollY > 20) {
        navbar.classList.remove('py-4');
        navbar.classList.add('py-2');
        navContainer.classList.add('bg-slate-950/80', 'backdrop-blur-xl', 'border-white/10', 'shadow-2xl');
        navContainer.classList.remove('border-white/5');
    } else {
        navbar.classList.add('py-4');
        navbar.classList.remove('py-2');
        navContainer.classList.remove('bg-slate-950/80', 'backdrop-blur-xl', 'border-white/10', 'shadow-2xl');
        navContainer.classList.add('border-white/5');
    }
});

const openMenu = () => {
    mobileDrawer.classList.remove('invisible', 'opacity-0');
    document.body.style.overflow = 'hidden';
};

const closeMenu = () => {
    mobileDrawer.classList.add('invisible', 'opacity-0');
    document.body.style.overflow = 'auto';
};

mobileMenuBtn.addEventListener('click', openMenu);
closeDrawerBtn.addEventListener('click', closeMenu);

const drawerLinks = mobileDrawer.querySelectorAll('a');
drawerLinks.forEach(link => {
    link.addEventListener('click', closeMenu);
});
const swiperOptions = {
    loop: true,
    grabCursor: true,
    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
    },
    breakpoints: {
        320: { slidesPerView: 1.5, spaceBetween: 20 },
        768: { slidesPerView: 3.2, spaceBetween: 30 },
        1024: { slidesPerView: 4.8, spaceBetween: 40 }
    }
};

new Swiper('.sportsSwiper', swiperOptions);
new Swiper('.movieSwiper', swiperOptions);
new Swiper('.docuSwiper', swiperOptions);