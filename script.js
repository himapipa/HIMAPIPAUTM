// Initialize AOS
AOS.init({
    duration: 800,
    once: true
});

// Scroll Progress + Navbar
window.onscroll = function () {

    const winScroll =
        document.body.scrollTop ||
        document.documentElement.scrollTop;

    const height =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;

    const scrolled = (winScroll / height) * 100;

    document.getElementById("progress-bar").style.width =
        scrolled + "%";

    const nav = document.getElementById('navbar');
    const btt = document.getElementById('backToTop');

    if (winScroll > 50) {

        nav.classList.add('py-2', 'shadow-sm');
        nav.classList.remove('py-4');

        btt.classList.remove('opacity-0', 'translate-y-10');
        btt.classList.add('opacity-100', 'translate-y-0');

    } else {

        nav.classList.remove('py-2', 'shadow-sm');
        nav.classList.add('py-4');

        btt.classList.add('opacity-0', 'translate-y-10');
        btt.classList.remove('opacity-100', 'translate-y-0');
    }
};

// Back To Top
document.getElementById('backToTop').onclick = function () {

    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
};

// Mobile Menu
document.getElementById('menuBtn').onclick = function () {
    const menuBtn = document.getElementById('menuBtn');
    const closeMenuBtn = document.getElementById('closeMenuBtn');
    const mobileMenu = document.getElementById('mobileMenu');

    menuBtn.onclick = function () {
        mobileMenu.classList.remove('hidden');
        mobileMenu.classList.add('flex');
    };

    closeMenuBtn.onclick = function () {
        mobileMenu.classList.add('hidden');
        mobileMenu.classList.remove('flex');
    };
};

// Overlay Toggle
function toggleOverlay(id) {

    const overlay = document.getElementById(id);

    const content =
        overlay.querySelector('.overlay-content');

    // TUTUP
    if (overlay.style.visibility === 'visible') {

        overlay.style.opacity = '0';
        overlay.style.visibility = 'hidden';

        content.style.transform = 'translateY(40px)';

    }

    // BUKA
    else {

        overlay.style.visibility = 'visible';

        setTimeout(() => {

            overlay.style.opacity = '1';

            content.style.transform = 'translateY(0)';

        }, 10);
    }
}

// Prestasi Card Click - Show Photo
const prestasiCards = document.querySelectorAll('[data-prestasi-img]');
const prestasiPhoto = document.getElementById('prestasi-photo');
const prestasiContent = document.getElementById('prestasi-content');
let selectedCard = null;

prestasiCards.forEach((card) => {
    card.addEventListener('click', () => {
        // Jika card yang diklik sudah dipilih sebelumnya, toggle balik ke statistik
        if (selectedCard === card) {
            prestasiPhoto.classList.add('hidden');
            prestasiContent.classList.remove('hidden');
            prestasiCards.forEach((item) => {
                item.classList.remove('border-primary', 'shadow-lg');
            });
            selectedCard = null;
        } else {
            // Jika card baru diklik, tampilkan foto
            prestasiPhoto.src = card.dataset.prestasiImg;
            prestasiPhoto.classList.remove('hidden');
            prestasiContent.classList.add('hidden');

            prestasiCards.forEach((item) => {
                item.classList.remove('border-primary', 'shadow-lg');
            });
            card.classList.add('border-primary', 'shadow-lg');
            selectedCard = card;
        }
    });
});