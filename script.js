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

        if (btt) {
            btt.classList.remove('opacity-0', 'translate-y-10');
            btt.classList.add('opacity-100', 'translate-y-0');
        }

    } else {

        nav.classList.remove('py-2', 'shadow-sm');
        nav.classList.add('py-4');

        if (btt) {
            btt.classList.add('opacity-0', 'translate-y-10');
            btt.classList.remove('opacity-100', 'translate-y-0');
        }
    }
};

// Back To Top
const backToTopButton = document.getElementById('backToTop');
if (backToTopButton) {
    backToTopButton.onclick = function () {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

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

// ================================================================
// KODE AMAN: OTOMATISASI PROGRAM KERJA (SINKRON INDEX & SEE-ALL)
// ================================================================

// Data pusat program kerja agar bisa diakses index.html dan see all proker.html
const prokerData = [
    {
        id: 1,
        divisi: 'pmb',
        judul: 'Roadshow PMB ke Sekolah',
        deskripsi: 'Sosialisasi program penerimaan mahasiswa baru kepada pelajar SMA/SMK di Madura.',
        foto: 'https://i.postimg.cc/59rmVBTS/Whats-App-Image-2026-06-02-at-18-44-20.jpg',
        tanggal: '15 Maret 2024',
        tim: 'Divisi PMB'
    },
    {
        id: 2,
        divisi: 'kewirausahaan',
        judul: 'Workshop Kewirausahaan Sains',
        deskripsi: 'Pelatihan ide bisnis berbasis sains bagi anggota HIMAPIPA.',
        foto: 'https://i.postimg.cc/59rmVBTS/Whats-App-Image-2026-06-02-at-18-44-20.jpg',
        tanggal: '22 April 2024',
        tim: 'Divisi Kewirausahaan'
    },
    {
        id: 3,
        divisi: 'kewirausahaan',
        judul: 'Inkubator Startup Pendidikan',
        deskripsi: 'Pendampingan ide usaha kreatif dalam bidang pendidikan dan sains.',
        foto: 'https://via.placeholder.com/400x280/10B44A/FFFFFF?text=PKM+Kewirausahaan',
        tanggal: '10 Maret 2024',
        tim: 'Divisi Kewirausahaan'
    },
    {
        id: 4,
        divisi: 'ppa',
        judul: 'Bimbingan Belajar Intensif',
        deskripsi: 'Pendampingan akademik dan persiapan ujian bagi mahasiswa IPA.',
        foto: 'https://via.placeholder.com/400x280/00A6E7/FFFFFF?text=Duta+Mahasiswa',
        tanggal: '5 Juni 2024',
        tim: 'Divisi PPA'
    },
    {
        id: 5,
        divisi: 'kewirausahaan',
        judul: 'Lomba Inovasi Pendidikan',
        deskripsi: 'Kompetisi ide kreatif untuk solusi pendidikan sains.',
        foto: 'https://via.placeholder.com/400x280/C0007A/FFFFFF?text=Inovasi+Pendidikan',
        tanggal: '28 Februari 2024',
        tim: 'Divisi Kewirausahaan'
    },
    {
        id: 6,
        divisi: 'ppa',
        judul: 'Publikasi Jurnal Mahasiswa1111111111',
        deskripsi: 'Penerbitan artikel ilmiah oleh tim PPA dan anggota HIMAPIPA.',
        foto: 'https://via.placeholder.com/400x280/FACC15/333333?text=Publikasi+Jurnal',
        tanggal: '14 Januari 2024',
        tim: 'Divisi PPA'
    },
    {
        id: 7,
        divisi: 'infokom',
        judul: 'Kampanye Media Sosial',
        deskripsi: 'Pengelolaan konten dan publikasi kegiatan HIMAPIPA di media sosial.',
        foto: 'https://via.placeholder.com/400x280/C0007A/FFFFFF?text=Video+Edukasi',
        tanggal: '8 Desember 2023',
        tim: 'Divisi Infokom'
    },
    {
        id: 8,
        divisi: 'kaderisasi',
        judul: 'Pelatihan Kepemimpinan',
        deskripsi: 'Program kaderisasi untuk membentuk pemimpin organisasi masa depan.',
        foto: 'https://via.placeholder.com/400x280/10B44A/FFFFFF?text=Kaderisasi+Terbaik',
        tanggal: '30 November 2023',
        tim: 'Divisi Kaderisasi'
    },
    {
        id: 9,
        divisi: 'ppa',
        judul: 'Pelatihan Penulisan Akademik',
        deskripsi: 'Workshop keterampilan penulisan karya ilmiah dan laporan penelitian.',
        foto: 'https://via.placeholder.com/400x280/FACC15/333333?text=Buku+Ajar',
        tanggal: '15 Oktober 2023',
        tim: 'Divisi PPA'
    },
    {
        id: 10,
        divisi: 'infokom',
        judul: 'Produksi Video Edukasi',
        deskripsi: 'Pembuatan konten video untuk kampanye sains dan organisasi.',
        foto: 'https://via.placeholder.com/400x280/C0007A/FFFFFF?text=Video+Edukasi',
        tanggal: '20 September 2023',
        tim: 'Divisi Infokom'
    },
    {
        id: 11,
        divisi: 'pmb',
        judul: 'Pendataan Calon Anggota Baru',
        deskripsi: 'Pembaruan database dan proses seleksi anggota baru HIMAPIPA.',
        foto: 'https://via.placeholder.com/400x280/10B44A/FFFFFF?text=Dedikasi+Akademik',
        tanggal: '12 Agustus 2023',
        tim: 'Divisi PMB'
    },
    {
        id: 12,
        divisi: 'pmb',
        judul: 'Bakti Sosial Keagamaan',
        deskripsi: 'Kegiatan sosial dan penguatan nilai keagamaan bersama komunitas lokal.',
        foto: 'https://i.postimg.cc/3rp8H0K1/PENGURUS-HIMAPIPA-2026-Halo-teman-teman-semuanya-Lebih-dekat-dengan-kita-melalui-Profil-d.webp',
        tanggal: '5 Juli 2023',
        tim: 'Divisi PMB'
    }
];

const prokerColorMap = {
    'infokom': '#0ea5e9',
    'kaderisasi': '#00A6E7',
    'kewirausahaan': '#C0007A',
    'keagamaan': '#FACC15',
    'ppa': '#8B5CF6',
    'pmb': '#22C55E'
};

const prokerCategoryLabel = {
    'infokom': 'Infokom',
    'kaderisasi': 'Kaderisasi',
    'kewirausahaan': 'Kewirausahaan',
    'keagamaan': 'Keagamaan',
    'ppa': 'PPA',
    'pmb': 'PMB'
};

// Fungsi global pembuat komponen kartu PROKER (Terkunci & Rata)
function createProkerCardElement(proker, index) {
    const card = document.createElement('div');
    card.className = 'card-news bg-white rounded-2xl overflow-hidden border border-gray-100 transition-all duration-300 hover:shadow-lg hover:border-gray-200 cursor-pointer flex flex-col h-full';
    card.setAttribute('data-aos', 'fade-up');
    card.setAttribute('data-aos-delay', (index % 3) * 100);

    card.innerHTML = `
        <div class="relative w-full aspect-[4/5] shrink-0 overflow-hidden group bg-gray-50">
            
            <img src="${proker.foto}" class="w-full h-full object-cover object-top transition-transform duration-300 group-hover:scale-105">
            
            <div class="absolute bottom-0 left-0 w-full p-4 bg-gradient-to-t from-black/90 via-black/50 to-transparent">
                <span class="text-[9px] font-bold uppercase tracking-widest px-2 py-0.5 rounded inline-block bg-white/10 backdrop-blur-sm" style="color: ${prokerColorMap[proker.divisi]};">
                    ${prokerCategoryLabel[proker.divisi]}
                </span>
                <h4 class="text-base font-bold text-white mt-1.5 leading-tight line-clamp-2">
                    ${proker.judul}
                </h4>
            </div>
        </div>

        <div class="p-4 flex-1 flex flex-col justify-between bg-white">
            <p class="text-xs text-gray-600 mb-3 line-clamp-2">${proker.deskripsi}</p>
            <div class="space-y-1 text-[11px] text-gray-500 pt-2 border-t border-gray-50 mt-auto">
                <div class="flex items-center gap-2">
                    <i class="far fa-calendar-alt text-[10px]" style="color: ${prokerColorMap[proker.divisi]}"></i>
                    <span>${proker.tanggal}</span>
                </div>
                <div class="flex items-center gap-2">
                    <i class="far fa-user text-[10px]" style="color: ${prokerColorMap[proker.divisi]}"></i>
                    <span>${proker.tim}</span>
                </div>
            </div>
        </div>
    `;
    return card;
}

// Inisialisasi otomatis hanya untuk Beranda (index.html)
document.addEventListener('DOMContentLoaded', function () {
    const prokerHomeContainer = document.getElementById('proker-home-container');

    // Hanya berjalan jika elemen ini ditemukan (Proteksi aman untuk file bph, infokom, dll)
    if (prokerHomeContainer) {
        prokerHomeContainer.innerHTML = '';

        // AMAN: Membuat salinan sementara, membaliknya (dari ID terbesar), lalu mengambil 3 teratas
        const latestProker = [...prokerData].reverse().slice(0, 3);

        latestProker.forEach((proker, index) => {
            const card = createProkerCardElement(proker, index);
            prokerHomeContainer.appendChild(card);
        });
    }
});

// ================================================================
// KODE AMAN: OTOMATISASI PRESTASI & FILTER URL SINKRON
// ================================================================

// Data Pusat Prestasi
const prestasiData = [
    {
        id: 1,
        kategori: 'akademik',
        judul: 'Juara 1 LKTIN Universitas Negeri Malang',
        deskripsi: 'Berhasil meraih juara 1 dengan karya inovasi media pembelajaran sains berbasis kearifan lokal Madura.',
        tanggal: '12 Mei 2026',
        tim: 'Tim IPA UTM - 2026',
        foto: 'https://i.postimg.cc/59rmVBTS/Whats-App-Image-2026-06-02-at-18-44-20.jpg'
    },
    {
        id: 2,
        kategori: 'akademik',
        judul: 'Hibah PKM-K Kemdikbudristek',
        deskripsi: 'Mendapatkan pendanaan untuk program kewirausahaan mahasiswa tingkat nasional.',
        tanggal: '10 April 2025',
        tim: 'Tim Kewirausahaan - 2025',
        foto: 'https://via.placeholder.com/400x280/22c55e/ffffff?text=PKM-K'
    },
    {
        id: 3,
        kategori: 'nonakademik',
        judul: 'Top 10 Duta Mahasiswa UTM',
        deskripsi: 'Menjadi finalis 10 besar dalam ajang pencarian Duta Kampus Universitas Trunojoyo Madura.',
        tanggal: '20 November 2024',
        tim: 'Mahasiswa Angkatan 2024',
        foto: 'https://via.placeholder.com/400x280/f472b6/ffffff?text=Duta+UTM'
    },
    {
        id: 4,
        kategori: 'nonakademik',
        judul: 'Juara 1 Futsal Antar Jurusan',
        deskripsi: 'Memenangkan turnamen futsal tahunan tingkat fakultas dengan rekor tak terkalahkan.',
        tanggal: '15 Agustus 2025',
        tim: 'Tim Olahraga HIMAPIPA',
        foto: 'https://via.placeholder.com/400x280/3b82f6/ffffff?text=Futsal+Juara'
    }
];
// Fungsi render kartu prestasi
// Fungsi render kartu PRESTASI (Format Kembar dengan Proker)
function renderPrestasi(filterValue) {
    const container = document.getElementById('prestasi-container');
    if (!container) return;

    container.innerHTML = '';

    let filtered = prestasiData;
    if (filterValue !== 'semua') {
        filtered = prestasiData.filter(p => p.kategori === filterValue);
    }

    filtered.forEach((prestasi, index) => {
        const isAkademik = prestasi.kategori === 'akademik';
        const icon = isAkademik ? '<i class="fas fa-graduation-cap"></i>' : '<i class="fas fa-trophy"></i>';
        const color = isAkademik ? '#EAB308' : '#3B82F6';
        const label = isAkademik ? 'Akademik' : 'Non-Akademik';

        const card = document.createElement('div');
        card.className = 'bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-lg transition-all duration-300 group flex flex-col h-full';
        card.setAttribute('data-aos', 'fade-up');
        card.setAttribute('data-aos-delay', (index % 3) * 100);

        card.innerHTML = `
            <div class="relative w-full aspect-[4/5] shrink-0 overflow-hidden group bg-gray-50">
                <img src="${prestasi.foto}" class="w-full h-full object-cover object-top transition-transform duration-300 group-hover:scale-105">
                
                <div class="absolute bottom-0 left-0 w-full p-4 bg-gradient-to-t from-black/90 via-black/50 to-transparent">
                    <span class="text-[9px] font-bold uppercase tracking-widest px-2 py-0.5 rounded inline-block bg-white/10 backdrop-blur-sm" style="color: ${color};">
                        ${icon} ${label}
                    </span>
                    <h4 class="text-base font-bold text-white mt-1.5 leading-tight line-clamp-2">
                        ${prestasi.judul}
                    </h4>
                </div>
            </div>
            
            <div class="p-4 flex-1 flex flex-col justify-between bg-white">
                <p class="text-xs text-gray-600 mb-3 line-clamp-2">${prestasi.deskripsi}</p>
                <div class="space-y-1 text-[11px] text-gray-500 pt-2 border-t border-gray-50 mt-auto">
                    <div class="flex items-center gap-2">
                        <i class="far fa-calendar-alt text-[10px]" style="color: ${color}"></i>
                        <span>${prestasi.tanggal}</span>
                    </div>
                    <div class="flex items-center gap-2">
                        <i class="far fa-user text-[10px]" style="color: ${color}"></i>
                        <span>${prestasi.tim}</span>
                    </div>
                </div>
            </div>
        `;
        container.appendChild(card);
    });
}
// Inisialisasi Fitur di Halaman See All Prestasi
document.addEventListener('DOMContentLoaded', function () {
    const prestasiContainer = document.getElementById('prestasi-container');

    if (prestasiContainer) {
        // 1. Baca parameter dari URL (misal: ?filter=akademik)
        const urlParams = new URLSearchParams(window.location.search);
        let currentFilter = urlParams.get('filter') || 'semua'; // Default 'semua' jika tidak ada param

        // 2. Render data sesuai filter dari URL
        renderPrestasi(currentFilter);

        // 3. Atur status tombol filter agar menyala sesuai parameter
        const filterButtons = document.querySelectorAll('.filter-prestasi-btn');

        function updateButtonUI(activeFilter) {
            filterButtons.forEach(btn => {
                if (btn.dataset.filter === activeFilter) {
                    btn.classList.add('bg-primary', 'text-white', 'border-primary');
                    btn.classList.remove('border-gray-200', 'text-gray-500', 'hover:bg-gray-50');
                } else {
                    btn.classList.remove('bg-primary', 'text-white', 'border-primary');
                    btn.classList.add('border-gray-200', 'text-gray-500', 'hover:bg-gray-50');
                }
            });
        }

        updateButtonUI(currentFilter);

        // 4. Tambahkan event klik manual pada tombol-tombol tersebut
        filterButtons.forEach(btn => {
            btn.addEventListener('click', function () {
                const selectedFilter = this.dataset.filter;
                updateButtonUI(selectedFilter);
                renderPrestasi(selectedFilter);

                // Ubah URL di atas secara diam-diam tanpa reload halaman (UX halus)
                const newUrl = new URL(window.location);
                newUrl.searchParams.set('filter', selectedFilter);
                window.history.pushState({}, '', newUrl);

                if (typeof AOS !== 'undefined') AOS.refresh();
            });
        });
    }
});