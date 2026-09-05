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

// Data pusat program kerja agar bisa diakses index.html dan see all proker.html
const prokerData = [
    {
        id: 1,
        divisi: 'keagamaan',
        judul: 'Buka Puasa Bersama & sharing hearing',
        deskripsi: 'Mellakukan kegiatan buka puasa bersama dan sharing hearing untuk mempererat tali silaturahmi.',
        foto: 'https://blogger.googleusercontent.com/img/a/AVvXsEjiLT9GTzSQ4EJRKHP8_fBI0ZaWr_mRXwZrchZgQryM3GBWmPzXJlRVvqXBfxJbL4dez3AgIqsOh1aCQjoSPhSubNuKrFbvTWuYqTm1wNugMKOpjL_LX-zPLLL7VvNuatSeZB6uy5_svvJbxHY4Hqmm3ES9TY5shg-jVGHV6gnjNtVbPPvc_8s6_e7fEsw',
        tahun: '2026',
        tim: 'Pengurus HIMAPIPA 2026'
    },
    {
        id: 2,
        divisi: 'kaderisasi',
        judul: 'pelantikan pengurus HIMAPIPA 2026',
        deskripsi: 'Pelantikan pengurus HIMAPIPA 2026 untuk periode 2026-2027 dengan penuh semangat dan harapan baru.',
        foto: 'https://blogger.googleusercontent.com/img/a/AVvXsEgukBsXPSuLdGQ9dbltbVR4bs6Ep1L70KxVIe557g4omDXEn1Nm2ek8qsVOi0HGXK4UDYFlZvkWRAfGiToeIpEPskIHonHWChdy_7IPWIeGu4z3fJ3nF4_f_cttHtToAE4FU5qdH2awzs2x0kFXUaFzebu5ykJYkVXJFNhkOnSpiUwIFlTws1_vHojlMxA',
        tahun: '2026',
        tim: 'Pengurus HIMAPIPA 2026'
    },
    {
        id: 3,
        divisi: 'kaderisasi',
        judul: 'LKMM',
        deskripsi: 'Latihan Keterampilan Manajemen Mahasiswa untuk membekali anggota dengan kemampuan organisasi dan kepemimpinan.',
        foto: 'https://blogger.googleusercontent.com/img/a/AVvXsEjxtOz7I90cLJQHN4_stayvnSZtos9MVU8hwWCczvqLnneUgU8W7H8OL8GBiBbUWUC0JdMV4ZKFfwes4RLcAS_vPcd1kA5AxWkZXH2oXxo8laXU9dVqTX40LgFKmVIE3sQUMaRhK_H3ZbVxEUSplEsqi0oLaweL04-iz1e4GWludBdsgH630RkjlT4qmjo',
        tahun: '2026',
        tim: 'Pengurus HIMAPIPA 2026'
    },
    // {
    //     id: 4,
    //     divisi: 'ppa',
    //     judul: 'Cromoshom',
    //     deskripsi: 'Lomba karya ilmiah tingkat nasional dengan tema inovasi media pembelajaran sains berbasis kearifan lokal Madura.',
    //     foto: 'https://via.placeholder.com/400x280/00A6E7/FFFFFF?text=Duta+Mahasiswa',
    //     tanggal: '5 Juni 2024',
    //     tim: 'Pengurus HIMAPIPA 2026'
    // },
    // {
    //     id: 5,
    //     divisi: 'kaderisasi',
    //     judul: 'Kompas ',
    //     deskripsi: 'Kompetisi ide kreatif untuk solusi pendidikan sains.',
    //     foto: 'https://via.placeholder.com/400x280/C0007A/FFFFFF?text=Inovasi+Pendidikan',
    //     tanggal: '28 Februari 2024',
    //     tim: 'Pengurus HIMAPIPA 2026'
    // },
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
                    <span>${proker.tahun}</span>
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
        judul: 'Edutalk Fair Competition x UNDIP 2026',
        deskripsi: 'Mendapatkan Bronze Medal Essay National Competition.',
        tanggal: '2026',
        foto: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjEUYv0spJ8DFJ-73kFCULwIkBUAOBt0QXdYpRPv21pl-t4m_hFkd2VJ7GoMylD3nIb2_s0T4xvDkdYi6pDJ-ML1QbttSSzWWIOGKm-C0hWx3Oe9tA_JerSIPRLzC-MqTmiLPjX1zK1ufszBpSk28mkWjC3xECTl3FBfbm-IYwSzJ9_KBIhamZZHURJ1pM/s320/WhatsApp%20Image%202026-06-06%20at%2013.32.01.jpeg'
    },
    {
        id: 2,
        kategori: 'akademik',
        judul: 'Lomba Essay Tingkat Nasional 7',
        deskripsi: 'Mendapatkan Bronze Medal Lomba Essay Tingkat Nasional 7.',
        tanggal: '2026',
        foto: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgFjzpcifzJXqfGJx6jZDkLJUckxyOmrgP_XsbHZS0ctI1TjzRMsK6td60NUtjpiyoRAqm5KvhcOmpvPFP2_dsiKFUdjJNZkC65MI_KU9MgtONr9euih7LulqZTGh_2kzPfBq92bWkXvANyW3G6hhlxUZ0SoflxeH55gFcO7SuruR0iqKrpZqmL7ziW5jI/s320/WhatsApp%20Image%202026-06-06%20at%2013.32.04.jpeg'
    },
    {
        id: 3,
        kategori: 'akademik',
        judul: 'Lomba Essay Tingkat Nasional 7',
        deskripsi: 'Mendapatkan Bronze Medal Lomba Essay Tingkat Nasional 7.',
        tanggal: '2026',
        foto: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjMP48pR-7brpsvlShPOkM89cChEzFz1FOsQvf2cGlqflNFPgazmq6WGp_GssFnNZsNnVnJPMgFgjJN2EFEihaVbCEirtSh1KItGoeKgNgeU1NEzibR-glPe9ABtlo6N1HB7vzmB6JJj3jlemXpd61NGjAwHZmBdRSbmOr7YU5KTUBGi3AlpZhyphenhyphenO46P2QA/s320/WhatsApp%20Image%202026-06-06%20at%2013.32.05.jpeg'
    },
    {
        id: 4,
        kategori: 'akademik',
        judul: 'Forum Indonesia Muda 2',
        deskripsi: 'Mendapatkan Bronze Medal Forum Indonesia Muda 2.',
        tanggal: '2026',
        foto: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEirGPJk9RK0TJk6VkIMyxyzBvtqggfpQE4Vjpzq4q2N_F6SByMjOXv1yEVuAIaHmDG5vQahJi5bHU7b0sRgbdwvduAQPo0kLMJrjxkOKLQxPMR1AmIkCpcTAFYjIihOUtsYtfnpOSGBqmIxiWoQEoZDbpCjoZX4uV-2CklYXTvd5rUpvGY9j7LDPtOy2q0/s320/WhatsApp%20Image%202026-06-06%20at%2013.32.06.jpeg'
    },
    {
        id: 5,
        kategori: 'akademik',
        judul: 'Forum Indonesia Muda 2',
        deskripsi: 'Mendapatkan Bronze Medal Forum Indonesia Muda 2.',
        tanggal: '2026',
        foto: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjMP48pR-7brpsvlShPOkM89cChEzFz1FOsQvf2cGlqflNFPgazmq6WGp_GssFnNZsNnVnJPMgFgjJN2EFEihaVbCEirtSh1KItGoeKgNgeU1NEzibR-glPe9ABtlo6N1HB7vzmB6JJj3jlemXpd61NGjAwHZmBdRSbmOr7YU5KTUBGi3AlpZhyphenhyphenO46P2QA/s1040/WhatsApp%20Image%202026-06-06%20at%2013.32.05.jpeg'
    },
    {
        id: 6,
        kategori: 'akademik',
        judul: '2nd International Student Competition',
        deskripsi: 'Mendapatkan Bronze Medal 2nd International Student Competition.',
        tanggal: '2026',
        foto: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgJFfgAMMFtenFhAJ6Yo9pHQKGqp6lQ3Qu33-l1sL7e7ZTPpAh4jLLbyLjbbu9N82khvDzBiDkMLNlDme-tszN9m_u_GPSoUW3bHd3c-6uUGyZAby12toSoLBr2_QnFSj1U52IxPuDP89Yna281gub-8FHYjw2sWDlopMzHsyyypTpzttzUcT1aSEvkQiM/s1055/WhatsApp%20Image%202026-06-06%20at%2013.32.07.jpeg'
    },
    {
        id: 7,
        kategori: 'akademik',
        judul: '2nd International Student Summit',
        deskripsi: 'Mendapatkan Bronze Medal 2nd International Student Summit.',
        tanggal: '2026',
        foto: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEicBUMMfYaYII0rB5FnWvWwIFhIeT0GtIcy4HSIAHvY2R9n8pWIYv-dZPVyouyDc_uqvPA3MF1GreLfHnZYu8J71YDaoGCd39J_C-cci31zz4BnSVsEMYhmZPk873tAHPZljt7HcAaPJeO_qxfbTSQC8qPjsRgoeWw1rNd26a3xeBVZHhVPrI6k_8C-ImY/s1055/WhatsApp%20Image%202026-06-06%20at%2013.32.071.jpeg'
    },
    {
        id: 8,
        kategori: 'akademik',
        judul: '2nd International Student Competition',
        deskripsi: 'Mendapatkan Silver Medal 2nd International Student Competition.',
        tanggal: '2026',
        foto: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgSDAb7qq23TA5VBuNYtgDWMqAU_t3vQfEz4IWXMKOI94wnD-Ig8rAZ95VgN84lKinstPCgIpLBl2DySgPhQ3FtdbT9NxcHzu6Z3BifK0yYc7XqRjQaXg056X2CO4nTHm4I4DIMbSAQ7ZIor01gVL8F0bTGOaKNW8zJqbubGW_oUTuHFDu2dNZ-5tn4Nrg/s1055/WhatsApp%20Image%202026-06-06%20at%2013.32.072.jpeg    '
    },
    {
        id: 9,
        kategori: 'akademik',
        judul: 'Lomba Essay Futura Innovation Hub x UIN Sunan Gunung Djati',
        deskripsi: 'Mendapatkan Honorobel Medal Bidang Gizi dan Kesehatan.',
        tanggal: '2026',
        foto: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjd5zi0t0jRNBtAg9_6rXuDAlc7diHPIGAId1opN3q9bg3zJCl-2Utw69aID3g5mgX89auPnMCo5nKU348N5E3ycQyaRihLwtaeu11WPBm-COA1mReF1ZheaCqABCdDe4LN86SX82MPEMBIQS8Wq1uQaQ6IcjJEHYTTbzLqxRdEEq9vDa2sVM_AO4zPu7w/s1280/WhatsApp%20Image%202026-06-06%20at%2013.32.08.jpeg'
    },
    {
        id: 10,
        kategori: 'akademik',
        judul: 'Pilmapres kategori Pratama',
        deskripsi: 'Juara 2 Pilmapres kategori Pratama Tingkat Fakultas Keguruan dan Ilmu Pendidikan.',
        tanggal: '2026',
        foto: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhfXLa29sMuhwHFyFYGjQJtd5le1IHvX-ERlU8lfLtCw_HKpujnFHB0UgF3Vhes8A7o3ZbmBSYyPEmR69deKK9flEnMg-Ay97-mNUERUxt9Muz1_A_wbZjtqPwVcoVEg_DbabRdrM-r1LZ0sIbrWQOL_-lp2aDGN45RivDnq5tEY2f048LrXOHwkYa6kNs/s1600/WhatsApp%20Image%202026-06-06%20at%2013.32.081.jpeg'
    },
    {
        id: 11,
        kategori: 'akademik',
        judul: 'Pilmapres kategori Pratama',
        deskripsi: 'Juara 3 Pilmapres kategori Pratama Tingkat Fakultas Keguruan dan Ilmu Pendidikan.',
        tanggal: '2026',
        foto: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjLo69EiT2Ppfb1zTEaCzdSYzp6lBXz3nJ3_PhXVDzzvI25XvUnaic5NOvNDKtMvmwmRhcQiakvT-2K5Sjg_xpvzKitrvWmR_BiiTyV-TFpwbPZXnxh_ptmSYtgklqNy9MO_1TReQ5bq7Wt8XE50LzjUwSdZRxfYXBHFRaxcgoV8cBAd6eKiI6tD4jpq_o/s1600/WhatsApp%20Image%202026-06-06%20at%2013.32.09.jpeg'
    },
    {
        id: 12,
        kategori: 'akademik',
        judul: 'Pilmapres kategori Pratama',
        deskripsi: 'Juara 1 Pilmapres kategori Pratama Tingkat Fakultas Keguruan dan Ilmu Pendidikan.',
        tanggal: '2026',
        foto: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjZOG6xwSwaEEKqK4ZZFt4UHneSRw0zBi-P7MZuMIh4eYH4fWNBEe96NKyXYZCmuzlUibIGBbNz5-4b8DjUtpynfHkboHMxb8aV6iFImWuyJ9aFSaBIwZ84rpBTabSniuxEw9zx_x6aqXVsH0jXEPZWvzkYdCbhUVjn5ZpHHhRh0vTMZ9c2LuBM61IuH_U/s1040/WhatsApp%20Image%202026-06-06%20at%2013.32.091.jpeg'
    },
    {
        id: 13,
        kategori: 'akademik',
        judul: 'Lomba Essay Tingkat Nasional 7',
        deskripsi: 'Lolos Pilmapres Perwakilan Tingkat Provinsi Mewakili Univerrsitas Trunodjoyo Madura.',
        tanggal: '2026',
        foto: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEimHQOvpPsIfSakoSBqOeVFjYAJD-8qsrKogF-F-vBpQhT8UIUfdxxhpVomQzXqepedsmzXVlyMXaxqyfuZLr2EE69jIoQQaJvR2waQOwCXxuuu9zm0rp2NdguaeR1O1oAQygLFm8TaQURhxt3RMWio7pFdT_L7JxvYy_k4L0aSr-ouFP5KTPc5KoGjpQg/s1040/WhatsApp%20Image%202026-06-06%20at%2013.32.092.jpeg'
    },
    {
        id: 14,
        kategori: 'akademik',
        judul: 'Asistensi Mengajar Internasional 2026',
        deskripsi: 'Lolos Asistensi Mengajar Internasional 2026.',
        tanggal: '2026',
        foto: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjpWXQcS4mU8NytxdI0a803gsMRe6j1pgV2gpcRG38wq1NDso0RCUew4DVLSYzZIlVbRYFxISopd2rHpfestGLnpyc1da87jyckb7bycfgYEU4nAkyVwzPaek1KI5XpF22lcoYuPyFviPlh-5hG4kJJEEFH6-TLWxBIqonlvSDKsAvnWoMY4PuFAvZ4Mvg/s1280/WhatsApp%20Image%202026-06-06%20at%2013.32.11.jpeg'
    },
    {
        id: 15,
        kategori: 'akademik',
        judul: 'Asistensi Mengajar Internasional 2026',
        deskripsi: 'Lolos Asistensi Mengajar Internasional 2026.',
        tanggal: '2026',
        foto: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEi-YTbPSiCDmmLNTWXICdfP1hJkAfpTkd1g90ck0MaOjsQLANudJlHA-w2ZhGhi8Kz0VmpT316rDyaUXVYUp-qdXBNhcKRoqV5jg8tDm5obDp7klQo8nq-mSxwb6EdUNqHFx5nO-xKfU6iZmuAG7kNzvY64ylXmYIQYTkxcPg8XToeB1hyfNc3jAwxNmt4/s1280/WhatsApp%20Image%202026-06-06%20at%2013.32.113.jpeg'
    },
    {
        id: 16,
        kategori: 'akademik',
        judul: 'International Canvas Business Competition',
        deskripsi: 'Top 6 Interrnational Canvas Business Competition.',
        tanggal: '2026',
        foto: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEi5jxK0ydz7jFJj8UnLT6WI3q-3lgjiqqNw4rXLnL4N_G6bV2WCyauDC5PD4xkraX061AgVpmRpEAwkacYiKoHZkwLhmu8Cmxwd37Y-TYjFNxDCWq3K9dwlcdDupVT8nTqvuLOiqnXOeSiBqZXnKUjWcW_hbZSSIoiWLpI277WdC2OcyJN2NgiVpSTlqNI/s1280/WhatsApp%20Image%202026-06-06%20at%2013.32.122.jpeg'
    },
    {
        id: 17,
        kategori: 'akademik',
        judul: 'ONMIPA Bidang Kimia Tingkat Nasional',
        deskripsi: 'Lolos ONMIPA Bidang Kimia Tingkat Nasional Mewakili Universitas Trunodjoyo Madura 2026.',
        tanggal: '2026',
        foto: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjtoxSl6pW4tbg68dGW706K7FjxlZV-Un6n06Xkxd8599N0nusYbclYFmLxMoUJSrjkbMbgj8ANlkfDoPNaSum4dBpiD3fafnuguOF1rOzejP10HmCcvdf976OmUUQZyvY2Q0wWXAYbbtU-uIsAyEUkcLIuIvwVkDt834oRlicfGRbJbqOF4DFJPWiQb8E/s1280/WhatsApp%20Image%202026-06-06%20at%2013.32.13.jpeg'
    },
    {
        id: 18,
        kategori: 'akademik',
        judul: 'Inspiring Lecturer Program',
        deskripsi: 'Terpilihnya Dalam Inspiring Lecturer Program (ILP) Paragon Tahun 2026.',
        tanggal: '2026',
        foto: 'https://blogger.googleusercontent.com/img/a/AVvXsEhoiud9ksmJJubBhNvKE5_x5GBz8p2TSAiApum6fATUuJQkKTj15Ghhbd5Zfo9Jy8K3saFmnG9mcQRViplQTh2-DvcBi00OM_F615bGCGQzPF5mEWa81VHHPdL-gJ9kl9bkSafLY9s8ZQ6sl4ccMEX4sExgpsgfQXauUBxfREbNXQqJF-ogfwfz468w0ks'
    },

    // {
    //     id: 18,
    //     kategori: 'nonakademik',
    //     judul: 'Juara 1 Futsal Antar Jurusan',
    //     deskripsi: 'Memenangkan turnamen futsal tahunan tingkat fakultas dengan rekor tak terkalahkan.',
    //     tanggal: '15 Agustus 2025',
    //     tim: 'Tim Olahraga HIMAPIPA',
    //     foto: 'https://via.placeholder.com/400x280/3b82f6/ffffff?text=Futsal+Juara'
    // }
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

// ================================================================
// KODE AMAN: OTOMATISASI STATISTIK PRESTASI DI BERANDA
// ================================================================
document.addEventListener('DOMContentLoaded', function () {
    // Tangkap elemen HTML berdasarkan ID
    const statAkademikEl = document.getElementById('stat-akademik');
    const statNonAkademikEl = document.getElementById('stat-nonakademik');

    // Pastikan script hanya berjalan jika elemen tersebut ada (di index.html)
    if (statAkademikEl && statNonAkademikEl) {
        // Hitung total masing-masing kategori dari prestasiData
        const totalAkademik = prestasiData.filter(p => p.kategori === 'akademik').length;
        const totalNonAkademik = prestasiData.filter(p => p.kategori === 'nonakademik').length;

        // Animasi angka berjalan (Counter Animation) opsional tapi bikin web makin keren
        animateValue(statAkademikEl, 0, totalAkademik, 1500);
        animateValue(statNonAkademikEl, 0, totalNonAkademik, 1500);
    }
});

// Fungsi untuk membuat animasi angka berjalan dari 0 ke target
function animateValue(obj, start, end, duration) {
    let startTimestamp = null;
    const step = (timestamp) => {
        if (!startTimestamp) startTimestamp = timestamp;
        const progress = Math.min((timestamp - startTimestamp) / duration, 1);
        // Menghitung angka saat ini
        obj.innerHTML = Math.floor(progress * (end - start) + start);
        if (progress < 1) {
            window.requestAnimationFrame(step);
        }
    };
    window.requestAnimationFrame(step);
}