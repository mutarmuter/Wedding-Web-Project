# docs/UI_UX_SPECIFICATION.md: Wedding Abdan

## Components

Gaya komponen serba bersih (clean & tactile minimal): Kartu jadwal dan kutipan menggunakan latar belakang putih murni (#FFFFFF) dengan batas tepi tipis (border 1px solid #E5DFD7) dan radius sudut lembut (rounded-xl / 12px) tanpa drop shadow tebal (hanya bayangan subtil 0 4px 20px -2px rgba(28,27,26,0.04)). Tombol Call-to-Action ('Buka Google Maps', 'Kirim Doa via WhatsApp') menggunakan gaya pill atau rounded-md dengan latar solid Deep Charcoal (#1C1B1A) dan teks kontras Off-White, atau outline transparan dengan ketebalan garis 1.5px. Elemen kontrol pemutar audio berupa tombol melayang sirkuler (floating circle, 52x52px) dengan backdrop-blur transparan minimalis (glassmorphism hangat).
## Screens

### Hero Cover & Personalisasi Tamu

Menyambut tamu secara intim dengan nama personal yang diambil dari parameter URL, menghadirkan kesan pertama yang elegan dalam tema minimalis monokromatis, serta menjadi titik pemicu interaksi awal pemutaran audio latar.

- Header Salam Pembuka & Label Undangan Pernikahan
- Tipografi Nama Tamu Personalisasi (Client-side URL Parameter Reader)
- Nama Kedua Mempelai (Abdan & Pasangan)
- Indikator Transisi Masuk & Tombol Pintas 'Buka Undangan / Lihat Detail'

States: Default state dengan nama dari URL '?to=Nama'; Fallback state menampilkan 'Tamu Undangan yang Berbahagia' saat parameter kosong/invalid; Reduced-motion state tanpa animasi pergeseran fade-in.

### Kutipan Doa & Ayat Suci Bahasa Arab

Menyampaikan doa restu dan landasan sakralitas pernikahan melalui firman suci berbahasa Arab (seperti QS. Ar-Rum: 21) lengkap dengan terjemahan bahasa Indonesia yang anggun dan mudah dibaca.

- Wadah Kaligrafi Arab dengan Arah Teks RTL (dir='rtl' dan lang='ar')
- Tipografi Terjemahan Bahasa Indonesia (dir='ltr')
- Ornamen Garis Pembatas Monokrom Minimalis

States: Normal state dengan tipografi terbaca jelas; Font scaling state stabil hingga penskalaan font peramban 200% tanpa pergeseran teks meluap.

### Hitung Mundur Acara (Countdown Timer)

Memberikan informasi waktu riil yang tersisa hingga saat sakral pernikahan Abdan tiba, meningkatkan antusiasme kehadiran para tamu.

- Wadah Modul Waktu 4 Blok (Hari, Jam, Menit, Detik)
- Angka Monospace Tabular Numerik Anti-Jitter
- Label Satuan Waktu Responsif
- Indikator Aksesibilitas aria-live='polite'

States: Active Countdown state (angka detik berkurang per detik secara real-time); Expired/Finished state ('Alhamdulillah, Acara Telah Berlangsung').

### Detail Jadwal Acara (Akad & Resepsi) & Peta Navigasi

Menampilkan rincian tanggal, pemisahan jadwal sesi waktu antara Akad Nikah dan Resepsi, alamat lengkap statis, serta tautan langsung navigasi ke Google Maps.

- Kartu Informasi Sesi Akad Nikah (Hari, Tanggal, Jam, Lokasi)
- Kartu Informasi Sesi Resepsi (Hari, Tanggal, Jam, Lokasi)
- Tombol Navigasi 'Buka Google Maps' (Aksesibel min 48x48px target sentuh)
- Teks Alamat Lengkap & Penanda Patokan Lokasi

States: Normal display (vertikal 1 kolom di mobile, 2 kolom simetris di tablet/desktop); Button Hover, Active, dan Keyboard Focus-visible states.

### Galeri Foto & Dokumentasi Carousel Animatif

Menampilkan kompilasi visual foto-foto bahagia Abdan dan pasangan melalui antarmuka carousel yang estetik, interaktif, dan mudah dijelajahi.

- Kontainer Slider Foto Responsif (Format WebP Teroptimasi)
- Indikator Titik Posisi Slide (Pagination Dots Berbasis Aksesibilitas)
- Tombol Panah Navigasi Sebelumnya / Berikutnya
- Dukungan Gestur Touch Swipe Ponsel & Pause on Hover/Focus

States: Auto-slide aktif berputar tiap 5 detik; Paused state saat pointer diarahkan atau tombol difokuskan; Reduced-motion static state (berganti tanpa luncuran animasi).

### Buku Tamu & Ucapan Doa Statis serta Penutup

Menyajikan kompilasi doa dan harapan terkurasi dari sanak saudara serta sahabat secara statis dan elegan, dilengkapi tombol pengiriman doa personal melalui WhatsApp.

- Grid Kartu Doa & Ucapan Terkurasi Statis
- Tombol Eksternal 'Kirim Ucapan via WhatsApp'
- Seksi Salam Penutup dari Mempelai
- Komponen Mengambang Pemutar Audio (Floating Audio Controller)

States: Static cards loaded; Audio playing state (ikon berotasi halus); Audio paused state (ikon jeda); WhatsApp button hover & keyboard focus states.
## Navigation

Navigasi menganut pola Single-Page Linear Narrative yang mengalir vertikal sesuai alur emosional tamu: Cover Pembuka -> Doa & Ayat Suci -> Countdown Waktu -> Rincian Jadwal & Maps -> Galeri Dokumentasi Foto -> Ucapan Restu & Penutup. Dilengkapi elemen navigasi pembantu yang tidak membebani tampilan: (1) Tombol melayang kontrol audio (Floating Music Button) di pojok kanan bawah dengan z-index tinggi (z-50) yang selalu dalam jangkauan ibu jari pengguna seluler, dan (2) Tombol pintas penunjuk gulir halus (Smooth Scroll Anchor) di bawah nama cover untuk tamu yang ingin langsung melompat ke detail waktu dan lokasi tanpa hambatan.
## Empty states

Penanganan kondisi kosong dan parameter URL dirancang elegan tanpa pesan kesalahan teknis yang merusak estetika undangan: (1) Jika parameter URL personalisasi nama tamu ?to= tidak disertakan atau bernilai kosong, Hero Cover secara anggun menampilkan sapaan default yang sopan dan ramah: 'Tamu Undangan yang Berbahagia' atau 'Keluarga & Sahabat Terhormat' dengan tata letak yang tetap presisi tanpa pergeseran layout (Zero CLS). (2) Pada komponen Countdown Timer, ketika waktu target pernikahan telah tercapai atau terlewati, tampilan modul detik tidak menjadi angka minus, melainkan bertransformasi menjadi kartu pesan penuh syukur berbingkai halus: 'Alhamdulillah, Acara Telah Berlangsung. Terima kasih atas doa restu Anda.' (3) Jika berkas audio gagal dimuat karena kendala jaringan pengguna, tombol audio secara anggun menonaktifkan dirinya (disabled state) dengan ikon muted netral dan tooltip ramah tanpa memunculkan popup error yang mengganggu.
## Responsive behavior

Desain antarmuka dirancang dengan pendekatan Mobile-First yang ketat, mengoptimalkan kenyamanan mayoritas tamu yang mengakses tautan melalui smartphone: (1) Smartphone (< 640px): Layout tersusun dalam 1 kolom vertikal penuh dengan margin tepi 20px. Tipografi hero menggunakan fluid clamp(2rem, 8vw, 3rem). Grid Countdown Timer tersusun dalam format 2x2 atau 4 kolom ramping dengan padding dalam 12px. Kartu Akad Nikah dan Resepsi ditampilkan bertumpuk vertikal dengan tombol Google Maps berukuran lebar 100% dan tinggi sentuhan 50px. Carousel galeri mendukung penuh gestur sentuh usap jari (touch-swipe) dengan visualisasi cuplikan slide berikutnya (peek preview 15%). (2) Tablet & Layar Menengah (640px - 1023px): Margin horizontal bertambah menjadi 32px. Grid Countdown Timer mengembang menjadi 4 kolom mendatar sejajar. Kartu Akad Nikah dan Resepsi bertransformasi menjadi 2 kolom simetris berdampingan, memudahkan tamu membandingkan jam pelaksanaan. Carousel menampilkan kontrol tombol panah navigasi yang lebih leluasa. (3) Desktop (>= 1024px): Kontainer utama dibatasi pada lebar maksimal 960px hingga 1040px untuk menjaga panjang baris teks (line length) pada rentang optimal 60-75 karakter per baris agar nyaman dibaca. Jeda vertikal antar-seksi meluas hingga 112px dengan kontrol panah carousel berada di sisi luar bingkai foto.
## Accessibility

Kepatuhan penuh standar aksesibilitas WCAG 2.1 Level AA di seluruh elemen antarmuka: (1) Rasio Kontras Warna: Teks utama Deep Charcoal (#1C1B1A) di atas latar Off-White (#FAF8F5) menghasilkan rasio kontras 13.8:1 (melebihi standar AAA 7:1). Teks sekunder Muted Slate (#5C5854) menghasilkan rasio 5.5:1 (melebihi standar AA 4.5:1). Tombol interaktif memiliki kontras jelas minimal 4.5:1. (2) Navigasi Keyboard Penuh & Fokus Visual: Seluruh elemen interaktif (tombol Google Maps, kontrol navigasi carousel, tombol WhatsApp, dan floating audio toggle) dapat diakses berurutan menggunakan tombol Tab. Penanda fokus aktif menggunakan :focus-visible berupa ring ganda dengan outline 2px solid #1C1B1A dan offset 2px. (3) Dukungan Teknologi Asistif (Screen Reader): Bagian teks doa bahasa Arab dilengkapi atribut semantik lang='ar' dan dir='rtl', sedangkan terjemahannya ditandai dengan lang='id' dan dir='ltr'. Komponen Countdown Timer menggunakan kontainer dengan atribut aria-live='polite' dan aria-atomic='true' sehingga screen reader membacakan pembaruan waktu tanpa memotong ucapan pengguna. (4) Tombol Audio & Tombol Maps Aksesibel: Tombol kontrol musik mengambang dilengkapi atribut dinamis aria-label='Putar musik latar belakang pernikahan Abdan' atau aria-label='Hentikan musik latar belakang' sesuai status aktif/jeda, serta atribut aria-pressed='true/false'. Tombol tautan eksternal ke Google Maps menyertakan teks target='_blank' dan rel='noopener noreferrer' dengan teks pembantu pembaca layar: '(membuka di tab baru)'. (5) Target Sentuhan Mobile: Semua elemen yang dapat diklik atau disentuh memiliki dimensi target minimum 48x48 piksel dengan jarak batas antar-tombol minimal 12 piksel untuk mencegah ketidaksengajaan klik. (6) Dukungan Skalabilitas Teks: Tata letak dirancang elastis menggunakan unit relatif (rem/em), mendukung penskalaan font peramban (browser zoom) hingga 200% tanpa ada teks yang terpotong, bertumpuk, atau memicu horizontal scrollbar.

