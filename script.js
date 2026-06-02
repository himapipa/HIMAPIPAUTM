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

// Premium Mobile Menu Logic (Smooth Slide & Fade Animation)
const menuBtn = document.getElementById('menuBtn');
const closeMenuBtn = document.getElementById('closeMenuBtn');
const mobileMenu = document.getElementById('mobileMenu');
const sidebarPanel = document.getElementById('sidebarPanel');
const mobileNavLinks = document.querySelectorAll('.mobile-nav-link');

function openSidebar() {
    if (mobileMenu && sidebarPanel) {
        // Aktifkan backdrop overlay (fade in)
        mobileMenu.classList.remove('pointer-events-none', 'opacity-0');
        mobileMenu.classList.add('opacity-100');

        // Geser panel masuk ke layar (slide in dari kanan)
        sidebarPanel.classList.remove('translate-x-full');
        sidebarPanel.classList.add('translate-x-0');

        // Kunci scroll halaman belakang agar tidak bergeser saat sidebar dibuka
        document.body.style.overflow = 'hidden';
    }
}

function closeSidebar() {
    if (mobileMenu && sidebarPanel) {
        // Hilangkan backdrop overlay (fade out)
        mobileMenu.classList.remove('opacity-100');
        mobileMenu.classList.add('opacity-0', 'pointer-events-none');

        // Geser kembali panel ke kanan (slide out)
        sidebarPanel.classList.remove('translate-x-0');
        sidebarPanel.classList.add('translate-x-full');

        // Kembalikan scroll halaman belakang ke normal
        document.body.style.overflow = '';
    }
}

// Event Listener Tombol Buka & Tutup
if (menuBtn) menuBtn.addEventListener('click', openSidebar);
if (closeMenuBtn) closeMenuBtn.addEventListener('click', closeSidebar);

// Tutup otomatis jika pengguna mengklik area buram (di luar panel menu)
if (mobileMenu) {
    mobileMenu.addEventListener('click', (e) => {
        if (e.target === mobileMenu) closeSidebar();
    });
}

// Tutup otomatis jika salah satu menu navigasi diklik
mobileNavLinks.forEach(link => {
    link.addEventListener('click', closeSidebar);
});

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

// Prestasi interactions disabled: statistics panel stays static.
// Clicks on prestasi cards intentionally have no effect.
// If you want to re-enable behavior later, re-implement handlers here.