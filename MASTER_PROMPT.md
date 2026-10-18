# MASTER_PROMPT.md: Wedding Abdan

## Original idea (user-provided)

Saya ingin membuatkan sebuah website static yang ditaruh di cloudflare pages atau github pages untuk keperluan website pernikahan teman saya, diperlukan website yang mencerminkan nuansa pernikahan ada bagian foto corosel, lagu yang bisa nantinya di custom, animasi untuk foto2 wedding, alamat static lokasi dari maps untuk acara  lokasi pernikahannya, butuh tempat juga untuk menaruh 

Dan bbrp bagian untuk menuliskan kata2 dalam bahasa arab, serta tgl kapan dia menikahnya, dan adanya hitung mundur waktu kapan dia menikah. Intinya adalah website pernikahan yg ideal
## Project description

Not specified.
## Target audience (user-provided)

Unspecified; recommendations require review.
## Design notes (user-provided)

Not specified.
## Technical preferences (user-provided)

Not specified.
## Reference URLs

- None specified.

URLs were stored, not visually inspected.
## Interview answers (user-provided)

### Gaya visual dan palet warna seperti apa yang paling mencerminkan karakter pernikahan Abdan?

Minimalist & Monochrome (Tipografi tegas, clean layout, dominasi putih, krem, dan abu-abu hangat)

### Kalimat Anda terpotong pada bagian 'butuh tempat juga untuk menaruh...'. Fitur pelengkap apa saja yang sebenarnya ingin Anda sertakan di bagian tersebut?

- Buku Tamu / Kolom Ucapan & Doa dari para tamu

### Bagaimana interaksi awal saat tamu pertama kali membuka website undangan ini?

Langsung masuk ke halaman utama, dengan transisi animasi yang elegan

### Apakah Anda membutuhkan fitur personalisasi nama tamu undangan secara dinamis melalui tautan (URL)?

Ya, nama tamu otomatis muncul di Cover depan (misal: weddingabdan.com/?to=Nama+Tamu)

### Karena website akan di-deploy secara statis di GitHub Pages atau Cloudflare Pages, bagaimana mekanisme penyimpanan data buku ucapan/RSVP yang Anda harapkan?

Hanya konten statis (Tidak memerlukan fitur penyimpanan ucapan atau RSVP di website)

### Bagaimana detail struktur acara pernikahan yang perlu ditampilkan pada bagian denah lokasi dan tanggal?

- Pemisahan jadwal jelas antara sesi Akad Nikah dan Resepsi
- Tombol 'Buka Google Maps' langsung ke titik navigasi acara
## Product vision

Abdan dan pasangannya membutuhkan media undangan pernikahan digital yang modern, elegan, dan informatif tanpa kompleksitas pengelolaan server backend. Undangan fisik konvensional memiliki keterbatasan dalam menyajikan elemen interaktif seperti pemutar audio latar, hitung mundur waktu acara, galeri foto dinamis, dan navigasi peta langsung. Diperlukan sebuah website undangan statis berperforma tinggi yang dapat di-hosting secara andal di GitHub Pages atau Cloudflare Pages dengan tema visual Minimalist & Monochrome, memuat personalisasi nama tamu via URL, serta memfasilitasi akses cepat ke detail akad nikah dan resepsi.
## Requirements

### Personalisasi Nama Tamu & Hero Cover Dinamis (P0)

Menampilkan salam pembuka dan nama tamu secara otomatis di bagian cover depan berdasarkan pembacaan parameter URL (misalnya `?to=Nama+Tamu`). Begitu dibuka, halaman langsung masuk ke konten utama dengan transisi animasi elegan tanpa hambatan envelope klik yang kaku. Pada perangkat mobile, tipografi otomatis menyesuaikan ukuran layar (fluid typography) dengan kontras warna memenuhi standar WCAG AA (rasio minimal 4.5:1), serta animasi fade-in transisi otomatis dinonaktifkan jika sistem pengguna mendeteksi `prefers-reduced-motion: reduce`.

### Hitung Mundur Waktu Acara (Countdown Timer) (P0)

Komponen penghitung mundur interaktif yang menghitung hari, jam, menit, dan detik menuju waktu pelaksanaan pernikahan Abdan. Memiliki susunan grid yang responsif baik di smartphone layar sempit maupun desktop. Informasi pembaruan waktu dilengkapi atribut aria-live='polite' agar terbaca dengan baik oleh teknologi asistif/screen reader tanpa mengganggu fokus pengguna.

### Struktur Jadwal Acara (Akad Nikah & Resepsi) dan Tombol Google Maps (P0)

Pemisahan kartu informasi jadwal yang tegas dan rapi antara sesi Akad Nikah dan sesi Resepsi (mencakup tanggal, jam mulai, dan teks alamat statis). Setiap sesi atau blok lokasi dilengkapi tombol Call-to-Action (CTA) 'Buka Google Maps' yang langsung membuka aplikasi peta eksternal atau tautan navigasi ke koordinat lokasi resmi. Tombol memiliki area sentuh minimal 48x48 piksel untuk kenyamanan pengguna mobile dan indikator fokus yang jelas untuk navigasi keyboard.

### Bagian Teks Doa & Kutipan Bahasa Arab (P1)

Seksi khusus untuk menyematkan ayat Al-Qur'an atau doa pernikahan berbahasa Arab (seperti QS. Ar-Rum: 21) lengkap dengan tipografi Arab yang anggun dan mudah dibaca, serta terjemahan bahasa Indonesia di bawahnya. Tampilan tata letak teks dirancang stabil dan mendukung penskalaan font hingga 200% tanpa teks terpotong pada berbagai resolusi layar.

### Galeri Foto & Carousel Pernikahan Animatif (P1)

Komponen carousel dan galeri foto pre-wedding/wedding dengan animasi transisi yang mulus. Mendukung gestur swipe sentuh pada layar ponsel, navigasi tombol panah keyboard yang dapat diakses penuh dengan status tabindex, serta teks alternatif (alt text) deskriptif pada setiap gambar. Animasi pergeseran otomatis (auto-slide) dapat dihentikan (pause on hover/focus) dan dinonaktifkan ketika preferensi `prefers-reduced-motion` aktif.

### Pemutar Musik Latar Belakang Kustom (Background Audio Player) (P1)

Pemutar audio latar belakang dengan tombol kontrol mengambang (floating button) untuk memutar atau menjeda (play/pause) musik kapan saja. File audio dapat dikustomisasi secara mudah melalui direktori statis. Menghormati kebijakan autoplay browser modern dengan memulai audio setelah interaksi awal pengguna, serta memiliki label aksesibilitas aria-label yang jelas ('Putar Musik' / 'Hentikan Musik').

### Buku Tamu / Seksi Ucapan Statis (P2)

Seksi statis khusus untuk menampilkan pesan cinta, doa dari keluarga, atau kutipan harapan baik secara elegan tanpa interaksi form atau database server. Sesuai batasan teknis statis murni tanpa backend, area ini menyajikan teks ucapan terkurasi dan opsi tautan langsung (misalnya tombol chat WhatsApp konfirmasi) jika tamu ingin mengirimkan ucapan secara privat.
## MVP

- Personalisasi Nama Tamu & Hero Cover Dinamis
- Hitung Mundur Waktu Acara (Countdown Timer)
- Struktur Jadwal Acara (Akad Nikah & Resepsi) dan Tombol Google Maps
- Bagian Teks Doa & Kutipan Bahasa Arab
- Galeri Foto & Carousel Pernikahan Animatif
- Pemutar Musik Latar Belakang Kustom (Background Audio Player)
- Buku Tamu & Seksi Ucapan Doa Statis
## Excluded

- Sistem basis data server atau backend dinamis untuk penulisan komentar/ucapan langsung oleh pengunjung
- Sistem autentikasi akun pengguna atau dashboard admin manajemen undangan untuk pengantin
- Formulir RSVP interaktif dengan sinkronisasi basis data real-time
- Integrasi gerbang pembayaran (payment gateway) untuk amplop digital atau hadiah otomatis
- Layanan otomatisasi pengiriman blast pesan WhatsApp menggunakan API berbayar
- Fitur pemutaran siaran langsung (live streaming video) tersemat di dalam website
## Visual direction

Editorial Minimalist Monokromatis Modern: memadukan keanggunan tata letak majalah kontemporer (editorial layout), ruang negatif (white space) yang lapang, palet monokrom hangat (warm alabaster, oat milk, charcoal slate), serta tipografi kontras tinggi yang tenang, dewasa, dan khidmat.

Koreografi gerak mengusung prinsip 'Subtle & Graceful Motion'. Saat halaman pertama kali dimuat, Hero Cover menyambut tamu dengan transisi fade-in lembut dan translasi vertikal naik (translateY dari 16px ke 0px) berdurasi 600ms dengan timing-function cubic-bezier(0.16, 1, 0.3, 1). Efek scroll reveal pada seksi jadwal dan doa menggunakan opacity transition 400ms yang ringan. Carousel foto memiliki pergeseran halus berdurasi 450ms dengan auto-slide setiap 5 detik yang otomatis terjeda ketika pointer berada di atas carousel (:hover) atau keyboard fokus (:focus-within). Indikator audio player memiliki rotasi lambat 360 derajat dalam 12 detik saat musik menyala. PERILAKU REDUCED MOTION: Ketika sistem operasi mendeteksi `@media (prefers-reduced-motion: reduce)`, semua durasi transisi (fade-in, transform, rotasi audio, dan pergeseran slide carousel) dipaksa menjadi 0 detik atau `animation: none; transition: none;` sehingga konten langsung tampil seketika dan pergeseran carousel berganti gambar instan tanpa luncuran pergerakan visual bagi pengguna penderita gangguan vestibular.

Desain antarmuka dirancang dengan pendekatan Mobile-First yang ketat, mengoptimalkan kenyamanan mayoritas tamu yang mengakses tautan melalui smartphone: (1) Smartphone (< 640px): Layout tersusun dalam 1 kolom vertikal penuh dengan margin tepi 20px. Tipografi hero menggunakan fluid clamp(2rem, 8vw, 3rem). Grid Countdown Timer tersusun dalam format 2x2 atau 4 kolom ramping dengan padding dalam 12px. Kartu Akad Nikah dan Resepsi ditampilkan bertumpuk vertikal dengan tombol Google Maps berukuran lebar 100% dan tinggi sentuhan 50px. Carousel galeri mendukung penuh gestur sentuh usap jari (touch-swipe) dengan visualisasi cuplikan slide berikutnya (peek preview 15%). (2) Tablet & Layar Menengah (640px - 1023px): Margin horizontal bertambah menjadi 32px. Grid Countdown Timer mengembang menjadi 4 kolom mendatar sejajar. Kartu Akad Nikah dan Resepsi bertransformasi menjadi 2 kolom simetris berdampingan, memudahkan tamu membandingkan jam pelaksanaan. Carousel menampilkan kontrol tombol panah navigasi yang lebih leluasa. (3) Desktop (>= 1024px): Kontainer utama dibatasi pada lebar maksimal 960px hingga 1040px untuk menjaga panjang baris teks (line length) pada rentang optimal 60-75 karakter per baris agar nyaman dibaca. Jeda vertikal antar-seksi meluas hingga 112px dengan kontrol panah carousel berada di sisi luar bingkai foto.
## Architecture

Arsitektur sistem Wedding Abdan mengadopsi pola Jamstack murni (Static Site Architecture) yang sepenuhnya dieksekusi di sisi klien (Client-Side Only) dan didistribusikan melalui jaringan Edge CDN Cloudflare Pages atau GitHub Pages. Arsitektur ini dibangun menggunakan Vite sebagai build engine modern dengan TypeScript dan Tailwind CSS, yang menghasilkan bundel artefak statis (HTML5 semantik, CSS terkompresi, dan vanilla JavaScript ES module) tanpa ketergantungan pada server komputasi backend atau basis data dinamis. Seluruh status aplikasi, pembacaan parameter personalisasi URL (?to=), kalkulasi hitung mundur waktu (Countdown Timer), kontrol pemutaran audio latar (Background Audio Player), dan transisi galeri carousel dikelola secara reaktif pada browser tamu undangan. Desain sistem menerapkan prinsip Mobile-First dengan token desain Minimalist & Monochrome (Warm Alabaster, Warm Cream, Charcoal Slate) serta pemenuhan standar aksesibilitas WCAG 2.1 Level AA (kontras rasio minimal 4.5:1, target sentuh 48x48px, fokus keyboard visible). Penanganan pengurangan gerakan (prefers-reduced-motion) diimplementasikan secara terpusat pada lapisan CSS dan JavaScript untuk memastikan durasi transisi dipaksa 0 detik dan rotasi otomatis carousel/audio dihentikan bagi pengguna dengan sensitivitas vestibular.

```json
{
  "Build Tool & Bundler": "Vite 5.x - Bundler modern berbasis Rollup dan ESBuild yang menghasilkan output berkas statis (HTML/CSS/JS) dengan tree-shaking agresif, pemecahan kode optimal, dan waktu muat halaman FCP di bawah 1,0 detik.",
  "Bahasa Pemrograman": "TypeScript 5.x - Menyediakan static typing untuk struktur konfigurasi data acara, validasi parameter URL, serta pengendalian state audio dan timer secara deterministik tanpa runtime overhead.",
  "CSS & Styling Framework": "Tailwind CSS 3.4+ / PostCSS - Utility-first CSS framework untuk implementasi token desain Minimalist & Monochrome, fluid typography (menggunakan fungsi clamp()), dan varian aksesibilitas seperti `motion-reduce` dan `focus-visible`.",
  "Komponen Carousel & Sentuhan Mobile": "Embla Carousel Core 8.x (Zero-Dependency) - Library carousel ultra-ringan (< 3KB gzipped) tanpa dependensi UI berat, mendukung penuh gestur usapan jari (touch-swipe) pada smartphone, navigasi keyboard panah, serta API untuk menghentikan auto-scroll ketika kursor diarahkan (:hover) atau ketika preferensi reduced-motion aktif.",
  "Web Fonts & Tipografi": "Self-hosted Web Fonts (WOFF2) - Menggunakan Google Fonts secara lokal untuk menjaga privasi dan performa: Cormorant Garamond (Serif editorial untuk judul), Plus Jakarta Sans (Clean sans-serif untuk teks tubuh), JetBrains Mono (Monospace dengan tabular-nums untuk timer), serta Scheherazade New / Amiri (Tipografi kaligrafi Arab dengan dukungan RTL).",
  "Format Aset Media": "WebP (Gambar terkompresi multi-resolusi dengan responsive srcset), SVG (Ikonografi minimalis teroptimasi), dan MP3/AAC 128kbps (Audio latar pernikahan terkompresi optimal < 3MB).",
  "Penyedia Hosting & Edge CDN": "Cloudflare Pages (opsi primer) atau GitHub Pages (opsi alternatif) - Infrastruktur edge global tanpa biaya server yang menyajikan berkas statis melalui HTTP/3 dan kompresi Brotli secara instan.",
  "Integrasi Navigasi & Komunikasi": "Google Maps Universal URL Scheme (`https://www.google.com/maps/search/?api=1&query=...`) untuk penunjuk arah lokasi dan WhatsApp Universal Link (`https://wa.me/...`) untuk opsi pengiriman doa privat langsung ke pengantin."
}
```
## Implementation order

### 1. Fase 1: Inisiasi Repositori Statis, Desain Sistem Monokrom & Pondasi Semantik

- Inisialisasi repositori Git dan konfigurasi pipeline deploy otomatis ke Cloudflare Pages atau GitHub Pages
- Menyusun token desain CSS berbasis gaya 'Minimalist & Monochrome' (palet putih bersih, krem lembut, abu-abu hangat, dan tipografi fluid)
- Membangun struktur semantik HTML5 halaman tunggal lengkap dengan pembagian seksi (Cover, Doa, Timer, Jadwal, Galeri, dan Ucapan Statis)
- Menerapkan utilitas CSS dasar untuk layout responsif mobile-first dan media queries preferensi aksesibilitas

Acceptance: Halaman kerangka statis berhasil ter-deploy ke Cloudflare Pages/GitHub Pages dengan struktur semantik yang valid dan tampilan palet monokrom minimalis yang responsif.

### 2. Fase 2: Personalisasi URL Tamu & Tipografi Seksi Teks Pembuka

- Membuat fungsi JavaScript client-side untuk membaca parameter URL `?to=` dengan sanitasi dan teks fallback default
- Menyusun komponen Hero Cover dengan transisi masuk elegan yang otomatis nonaktif saat `prefers-reduced-motion: reduce` terdeteksi
- Mengintegrasikan web font kaligrafi Arab teroptimasi dengan atribut `lang="ar"` dan `dir="rtl"` beserta terjemahan bahasa Indonesia
- Menguji skalabilitas teks hingga 200% pada tampilan ponsel (320px) hingga desktop

Acceptance: Parameter `?to=Nama+Tamu` berhasil diparsing menjadi nama undangan di cover depan secara instan, teks Arab dan terjemahan tertata rapi, dan seluruh teks lolos uji zoom 200%.

### 3. Fase 3: Logika Countdown Timer & Struktur Jadwal Lokasi Peta

- Mengembangkan skrip logika hitung mundur (Countdown Timer) dengan interval 1 detik dan penanganan kondisi waktu berakhir
- Menerapkan atribut `aria-live="polite"` pada kontainer timer untuk aksesibilitas pembaca layar
- Mendesain kartu modular jadwal terpisah antara Akad Nikah dan Resepsi (waktu, tanggal, dan alamat statis)
- Menyematkan tombol 'Buka Google Maps' dengan tautan navigasi resmi, ukuran sentuh minimal 48x48px, dan indikator focus keyboard

Acceptance: Timer berjalan presisi secara real-time tanpa error konsol, susunan kartu jadwal rapi di mobile maupun desktop, dan tombol Google Maps membuka koordinat lokasi yang akurat.

### 4. Fase 4: Carousel Galeri Foto Animatif & Pemutar Audio Latar

- Membangun komponen carousel foto yang mendukung navigasi swipe sentuh ponsel dan kontrol keyboard
- Mengoptimasi aset gambar foto pre-wedding ke format WebP dengan rasio aspek tetap dan atribut alt deskriptif
- Mengimplementasikan komponen floating button pemutar audio HTML5 yang mematuhi browser autoplay policy berbasis interaksi pengguna
- Menerapkan aturan CSS reduced-motion untuk menonaktifkan auto-sliding dan efek pergeseran carousel

Acceptance: Carousel foto dapat dioperasikan mulus dengan sentuhan maupun keyboard, tombol audio mengambang berfungsi dengan status aria-label yang tepat, dan reduced-motion bekerja 100%.

### 5. Fase 5: Seksi Ucapan Statis, Audit Lighthouse & Peluncuran Resmi

- Menyusun kartu-kartu doa dan ucapan statis terkurasi dengan opsi tombol kirim doa via WhatsApp
- Menjalankan audit performa dan aksesibilitas Lighthouse (memastikan skor Aksesibilitas >= 90 dan kontras warna WCAG AA)
- Pengujian lintas browser (Chrome, Safari iOS, Firefox, Edge) pada berbagai orientasi perangkat
- Mendokumentasikan panduan singkat untuk kustomisasi berkas statis (jadwal, foto, berkas audio, dan tautan Google Maps)

Acceptance: Website undangan pernikahan statis online sepenuhnya di hosting statis tanpa kendala, skor Lighthouse Aksesibilitas mencapai >= 90, waktu muat < 2 detik pada jaringan 4G, dan siap disebarkan.
## Definition of done

- [ ] **Personalisasi Nama Tamu & Hero Cover Dinamis**: Sistem membaca query parameter URL `?to=...`, melakukan sanitasi decoding karakter URL (seperti spasi dan simbol aman), dan menampilkannya di Cover Depan. Jika parameter kosong atau tidak valid, sistem menampilkan teks fallback default 'Tamu Undangan'.
- [ ] **Personalisasi Nama Tamu & Hero Cover Dinamis**: Layout cover mengusung tema Minimalist & Monochrome dengan rasio kontras teks terhadap latar belakang minimal 4.5:1 (memenuhi standar WCAG AA) dan ukuran font yang fluid pada viewport mobile (< 640px) hingga desktop (>= 1024px) tanpa terjadi teks terpotong atau layout shift (CLS < 0.1).
- [ ] **Personalisasi Nama Tamu & Hero Cover Dinamis**: Transisi kemunculan cover menggunakan efek animasi CSS fade-in yang halus saat halaman dimuat. Jika pengguna mengaktifkan preferensi sistem `prefers-reduced-motion: reduce`, durasi animasi dipaksa menjadi 0 detik sehingga konten langsung tampil instan tanpa efek gerak.
- [ ] **Hitung Mundur Waktu Acara (Countdown Timer)**: Timer menampilkan 4 unit waktu terpisah (Hari, Jam, Menit, Detik) yang menghitung mundur selisih waktu secara akurat tiap interval 1000ms menuju waktu target pernikahan Abdan.
- [ ] **Hitung Mundur Waktu Acara (Countdown Timer)**: Komponen timer tersusun dalam grid responsif (4 kolom di layar lebar, dan 2x2 kolom di layar ponsel < 480px). Kontainer waktu dilengkapi atribut `aria-live="polite"` sehingga pembaruan waktu dapat dipahami pembaca layar (screen reader) secara ramah.
- [ ] **Hitung Mundur Waktu Acara (Countdown Timer)**: Ketika waktu target acara telah berlalu, timer secara otomatis berhenti dan beralih menampilkan pesan statis 'Acara Sedang Berlangsung / Telah Selesai' tanpa eror pada konsol JavaScript.
- [ ] **Struktur Jadwal Acara (Akad Nikah & Resepsi) dan Tombol Google Maps**: Informasi jadwal terbagi tegas menjadi dua kartu modular terpisah untuk 'Akad Nikah' dan 'Resepsi', masing-masing menyajikan tanggal, rentang jam pelaksanaan, nama tempat, dan teks alamat lengkap dengan hierarki judul semantik (h2/h3).
- [ ] **Struktur Jadwal Acara (Akad Nikah & Resepsi) dan Tombol Google Maps**: Masing-masing sesi acara memiliki tombol 'Buka Google Maps' dengan target sentuh minimal 48x48 piksel, atribut `target="_blank"` dan `rel="noopener noreferrer"`, serta indikator visual `:focus-visible` dengan outline kontras minimal 3:1 saat dinavigasi via keyboard.
- [ ] **Struktur Jadwal Acara (Akad Nikah & Resepsi) dan Tombol Google Maps**: Kartu jadwal tersusun vertikal (1 kolom) pada layar smartphone dan otomatis bertransformasi menjadi 2 kolom berdampingan secara proporsional pada layar tablet/desktop (>= 768px).
- [ ] **Bagian Teks Doa & Kutipan Bahasa Arab**: Teks doa atau ayat suci disajikan menggunakan font kaligrafi Arab berbasis web yang teroptimasi, dilengkapi atribut `lang="ar"` dan `dir="rtl"`, dengan line-height minimal 2.0 agar harakat terbaca jelas di resolusi mobile maupun desktop.
- [ ] **Bagian Teks Doa & Kutipan Bahasa Arab**: Terjemahan bahasa Indonesia disajikan tepat di bawah teks Arab dengan arah baca `dir="ltr"`, dan keseluruhan kontainer mendukung penskalaan font peramban hingga 200% tanpa teks meluap (overflow) keluar dari wadah.
- [ ] **Galeri Foto & Carousel Pernikahan Animatif**: Carousel mendukung navigasi gestur usapan jari (touch swipe) pada layar sentuh serta tombol panah kiri/kanan dan indikator titik yang dapat diakses penuh melalui keyboard (dukungan navigasi tombol Tab, Spasi, dan Enter).
- [ ] **Galeri Foto & Carousel Pernikahan Animatif**: Seluruh gambar menggunakan format modern teroptimasi (WebP) dengan rasio aspek konsisten, menyertakan atribut `alt` deskriptif yang bermakna, serta penandaan atribut `loading="lazy"` untuk gambar di luar viewport awal.
- [ ] **Galeri Foto & Carousel Pernikahan Animatif**: Rotasi slide otomatis (auto-slide) wajib terjeda (pause) ketika kursor diarahkan ke area carousel (:hover) atau ketika elemen menerima fokus keyboard (:focus). Jika preferensi `prefers-reduced-motion: reduce` aktif, transisi pergeseran animasi foto ditiadakan dan diganti dengan pergantian gambar seketika.
- [ ] **Pemutar Musik Latar Belakang Kustom (Background Audio Player)**: Pemutar audio disediakan sebagai tombol melayang (floating button) di sudut layar dengan ukuran sentuh minimal 48x48 piksel, ikon status Putar/Jeda yang jelas, serta atribut aksesibilitas `aria-label` dinamis ('Putar Musik Pernikahan' / 'Jeda Musik Pernikahan').
- [ ] **Pemutar Musik Latar Belakang Kustom (Background Audio Player)**: Sistem audio mematuhi kebijakan autoplay browser modern dengan tidak membunyikan suara secara mendadak sebelum adanya gestur interaksi pertama dari pengguna (seperti tap, klik, atau scroll), serta menyediakan kontrol manual penuh bagi tamu untuk membisukan audio kapan pun.
- [ ] **Pemutar Musik Latar Belakang Kustom (Background Audio Player)**: Berkas audio dapat dikonfigurasi dan diganti dengan mudah melalui direktori aset statis (misal berkas MP3/AAC teroptimasi) tanpa ketergantungan pada API streaming eksternal.
- [ ] **Buku Tamu & Seksi Ucapan Doa Statis**: Seksi buku ucapan menampilkan daftar pesan doa dan harapan terpilih dari keluarga/sahabat yang telah disusun secara statis dengan tata letak kartu minimalis monokrom yang elegan tanpa menggunakan form input ke basis data.
- [ ] **Buku Tamu & Seksi Ucapan Doa Statis**: Tersedia tombol CTA eksternal sekunder opsional 'Kirim Ucapan via WhatsApp' dengan tautan `https://wa.me/...` yang memiliki teks aksesibel dan membuka aplikasi WhatsApp di tab/aplikasi baru tanpa mengganggu halaman undangan.
- [ ] **Buku Tamu & Seksi Ucapan Doa Statis**: Susunan kartu ucapan bersifat responsif menggunakan CSS Grid/Flexbox yang menyesuaikan jumlah kolom secara dinamis dari 1 kolom pada ponsel hingga 3 kolom pada desktop layar lebar.
## Assumptions

- Website dibangun sebagai arsitektur website statis murni (HTML/CSS/JS modern atau static generator) yang dapat di-deploy tanpa biaya server di GitHub Pages atau Cloudflare Pages.
- Sesuai preferensi teknis pengguna, tidak ada database backend atau layanan API pihak ketiga berbayar yang digunakan untuk menyimpan data RSVP atau buku tamu secara dinamis; semua konten buku ucapan bersifat statis.
- Tema visual mengusung gaya 'Minimalist & Monochrome' dengan dominasi palet warna putih bersih, krem lembut, dan abu-abu hangat serta tipografi sans-serif/serif kontemporer.
- Aset media (foto dan file audio lagu) telah dioptimalkan (kompresi format modern seperti WebP dan MP3/AAC dengan bitrate optimal) sebelum diunggah ke repositori untuk menjaga kecepatan muat.
- Kebijakan browser modern membatasi autoplay audio sebelum adanya gestur pengguna, sehingga audio akan dimulai melalui pemicu interaksi awal tamu pada layar.
- Website berjalan murni sebagai arsitektur halaman statis (static single-page application/HTML-CSS-JS) yang di-deploy di Cloudflare Pages atau GitHub Pages tanpa server backend atau biaya langganan cloud berbayar.
- Semua konten ucapan doa dan buku tamu bersifat statis (hardcoded/curated) sesuai keputusan wawancara pengguna untuk meniadakan sistem penyimpanan basis data.
- Personalisasi nama tamu dilakukan sepenuhnya di sisi klien (client-side) dengan membaca query parameter `?to=` dari URL undangan yang disebarkan.
- Aset foto pernikahan dan file musik latar kustom disiapkan oleh calon pengantin dalam format standar (seperti WebP/JPG teroptimasi dan MP3) sebelum diunggah ke repositori.
- Kebijakan keamanan peramban modern (browser autoplay policy) mengharuskan audio musik dimulai hanya setelah pengguna melakukan interaksi awal pada dokumen website.
- Pilihan tema 'Minimalist & Monochrome' menggunakan warna dominan putih, krem, dan abu-abu hangat dengan tipografi kontras tinggi yang memenuhi ketentuan WCAG AA.
- Website beroperasi penuh sebagai Single-Page Application (SPA) berbasis berkas statis (HTML, CSS, dan JS) tanpa memerlukan database server sehingga sepenuhnya kompatibel dengan hosting Cloudflare Pages atau GitHub Pages.
- Personalisasi nama tamu pada cover depan sepenuhnya diproses di sisi klien melalui query parameter '?to=' dengan mekanisme sanitasi decoding URL.
- Buku tamu dan ucapan doa disajikan sebagai konten terkurasi statis, sedangkan pengiriman pesan tambahan diarahkan ke nomor WhatsApp pribadi pengantin tanpa penyimpanan database.
- Aset foto pernikahan telah dikonversi ke format WebP terkompresi dan lagu latar berformat audio standar (MP3/AAC) siap ditempatkan di direktori statis repositori.
- Pemutar audio latar belakang akan dipicu secara halus melalui interaksi gestur pertama tamu saat memasuki halaman atau menggulir layar sesuai kebijakan autoplay peramban modern.
- Website berjalan murni sebagai arsitektur halaman statis (Single Page Application statis) tanpa backend runtime komputasi atau database server, di-hosting secara gratis dan andal di Cloudflare Pages atau GitHub Pages.
- Data nama tamu undangan dibaca murni di sisi klien (client-side) dari query string URL parameter `?to=` yang disebarkan melalui tautan pesan (contoh: `https://weddingabdan.com/?to=Nama+Tamu`).
- Sesuai preferensi interview pengguna, tidak ada formulir RSVP dinamis atau pengiriman ucapan interaktif ke basis data di dalam website; kartu buku tamu berisi daftar ucapan doa yang telah dikurasi secara statis.
- Aset foto dokumentasi pre-wedding telah diubah ke format WebP dengan resolusi teroptimasi dan rasio aspek yang konsisten sebelum diunggah ke repositori untuk menjaga skor performa Lighthouse.
- Berkas musik latar kustom (MP3/AAC) telah disiapkan oleh pemilik acara dengan ukuran berkas terkompresi (< 3-5 MB) agar tidak membebani kuota data tamu mobile.
- Peramban modern tamu memberlakukan kebijakan Autoplay Policy yang ketat, sehingga pemutaran audio dimulai secara halus melalui pemicu interaksi gestur pertama (seperti tap layar, sentuhan scroll, atau klik tombol) tanpa melanggar batasan browser.
- Calon pengantin memiliki nomor WhatsApp aktif yang akan disematkan pada tautan kirim ucapan restu privat.
- Website dirancang dan dieksekusi murni sebagai Single-Page Application (SPA) berbasis berkas statis (HTML5, Tailwind CSS, TypeScript) yang dibundel oleh Vite tanpa server backend komputasi aktif atau database dinamis.
- Infrastruktur hosting memanfaatkan tier nirbiaya Cloudflare Pages (opsi primer) atau GitHub Pages (opsi alternatif) yang mendistribusikan berkas melalui jaringan global Edge CDN.
- Fitur personalisasi nama tamu undangan dijalankan secara client-side dengan membaca query parameter `?to=` dari URL peramban (misalnya: `weddingabdan.com/?to=Nama+Tamu`).
- Mekanisme fallback default akan secara otomatis menampilkan sapaan elegan 'Tamu Undangan yang Berbahagia' apabila parameter `?to=` kosong, tidak disertakan dalam URL, atau tidak valid.
- Sesuai preferensi wawancara pengguna, seksi buku ucapan disajikan sebagai daftar pesan doa dan restu terkurasi yang didefinisikan secara statis di dalam kode sumber (`wishesData.ts`) tanpa formulir input database interaktif.
- Opsi pengiriman doa dan ucapan privat tambahan difasilitasi melalui tombol tautan eksternal WhatsApp Click-to-Chat (`https://wa.me/...`) langsung ke kontak pribadi pengantin.
- Gaya visual antarmuka menerapkan tema 'Minimalist & Monochrome' dengan palet Off-White Alabaster (#FAF8F5), Warm Cream (#F2EDE4), Deep Charcoal (#1C1B1A), dan Muted Slate (#5C5854) tanpa ornamen berlebihan atau efek animasi bising.
- Pengalaman pengguna menyambut tamu secara langsung ke halaman utama dengan transisi animasi elegan tanpa adanya modal pop-up tiruan amplop fisik yang memblokir akses awal konten.
- Kebijakan Autoplay Policy peramban modern dipatuhi dengan memulai pemutaran lagu latar secara halus hanya setelah ada interaksi gestur pengguna pertama pada layar (tap, klik, atau gulir).
- Aset foto dokumentasi pre-wedding telah disiapkan dalam format modern WebP dengan rasio aspek konsisten dan resolusi terkompresi sebelum diunggah ke folder repositori.
- Berkas musik latar pernikahan disiapkan dalam format MP3/AAC dengan ukuran berkas teroptimasi (< 3-5 MB) agar tidak membebani penggunaan kuota data seluler para tamu.
- Aksesibilitas antarmuka memenuhi standar WCAG 2.1 Level AA dengan rasio kontras teks minimal 4.5:1, target sentuh interaktif minimal 48x48 piksel, dan semantik pembaca layar (`aria-live`, `aria-label`).
- Preferensi sistem operasi `prefers-reduced-motion: reduce` didukung penuh dengan meniadakan durasi animasi transisi dan pergeseran slide foto bagi pengguna dengan sensitivitas vestibular.
- Tombol 'Buka Google Maps' menggunakan format tautan navigasi Universal URL (`https://www.google.com/maps/search/?api=1&query=...`) yang membuka aplikasi peta eksternal dengan atribut `target="_blank"` dan `rel="noopener noreferrer"`.
- Teks doa berbahasa Arab menggunakan web font lokal teroptimasi dengan atribut semantik `lang="ar"` dan `dir="rtl"` serta line-height minimal 2.0 agar tanda baca harakat terbaca jelas di berbagai resolusi layar.
## Open decisions

- Berapa tanggal dan waktu pasti untuk sesi Akad Nikah dan Resepsi yang akan disetel sebagai target waktu pada logika Countdown Timer?
- Apakah tautan navigasi atau titik koordinat resmi Google Maps untuk lokasi acara sudah tersedia?
- Kutipan atau ayat berbahasa Arab spesifik apa yang ingin ditampilkan beserta terjemahan resminya?
- Berapa jumlah foto yang akan dimasukkan ke dalam carousel serta judul/file lagu latar kustom yang telah disiapkan?
- Kapan tanggal, bulan, tahun, dan waktu pasti sesi Akad Nikah serta Resepsi yang akan disetel sebagai target waktu pada logika Countdown Timer?
- Apa tautan URL koordinat resmi Google Maps untuk titik lokasi tempat pelaksanaan acara pernikahan Abdan?
- Kutipan ayat suci atau doa berbahasa Arab spesifik apa (misalnya QS. Ar-Rum: 21) beserta teks terjemahan resminya yang akan disematkan?
- Berapa jumlah foto dokumentasi pre-wedding yang akan disertakan dalam carousel galeri foto?
- Berkas lagu kustom apa (judul lagu dan format audio) yang telah disiapkan untuk musik latar?
- Apakah tombol ucapan eksternal ingin dihubungkan langsung ke nomor WhatsApp pribadi pengantin, dan nomor tujuan manakah yang digunakan?
- Kapan rincian tanggal, bulan, tahun, serta jam mulai dan selesai yang pasti untuk sesi Akad Nikah dan sesi Resepsi?
- Apa tautan URL atau titik koordinat resmi Google Maps untuk lokasi penyelenggaraan acara pernikahan Abdan?
- Kutipan ayat suci atau doa berbahasa Arab spesifik manakah (beserta teks terjemahan resminya) yang akan dicantumkan pada bagian teks doa?
- Berapa nomor WhatsApp tujuan resmi pengantin yang akan dihubungkan pada tombol kirim ucapan privat?
- Berapa tanggal, bulan, tahun, serta jam mulai dan berakhir yang pasti untuk sesi Akad Nikah dan sesi Resepsi guna mengunci target Countdown Timer dan teks jadwal?
- Berapa titik koordinat spesifik (latitude dan longitude) atau tautan navigasi resmi Google Maps untuk lokasi penyelenggaraan pernikahan Abdan?
- Teks kutipan doa atau ayat suci berbahasa Arab spesifik manakah (misalnya QS. Ar-Rum: 21) beserta teks terjemahan resmi bahasa Indonesia yang ingin dicantumkan?
- Berapa nomor kontak WhatsApp pengantin (dalam format kode negara e.g. 628...) yang akan dipasangkan pada tombol aksi kirim ucapan?
- Berapa total jumlah foto pre-wedding yang akan dimuat ke dalam slider carousel galeri?
- Judul lagu latar dan berkas audio kustom apa yang telah disiapkan untuk pemutar musik latar belakang?
- Berapa rincian tanggal, bulan, tahun, serta jam mulai dan berakhir yang pasti untuk sesi Akad Nikah dan sesi Resepsi guna dikonfigurasikan pada logika target Countdown Timer dan kartu jadwal?
- Berapa titik koordinat spesifik (latitude dan longitude) atau tautan navigasi resmi Google Maps untuk lokasi penyelenggaraan acara pernikahan Abdan?
- Kutipan ayat suci atau doa berbahasa Arab spesifik manakah (misalnya QS. Ar-Rum: 21) beserta teks terjemahan resminya dalam bahasa Indonesia yang ingin disematkan?
- Siapakah nama lengkap dan nama panggilan dari mempelai wanita yang mendampingi Abdan untuk dicantumkan pada bagian cover dan metadata acara?
- Berapa nomor kontak WhatsApp resmi pengantin (dalam format kode negara internasional, e.g. 628...) yang akan dipasangkan pada tombol kirim ucapan privat?
- Berapa total jumlah foto dokumentasi pre-wedding yang akan dimuat ke dalam slider carousel galeri foto?
- Judul lagu latar dan berkas audio kustom apa (nama berkas dan format audio) yang telah disiapkan untuk pemutar musik latar belakang pernikahan?
- Apakah penyedia hosting statis primer telah ditentukan secara final antara Cloudflare Pages atau GitHub Pages beserta nama domain kustom yang akan dihubungkan?
## Operating rules

- Never commit, push, create pull requests, or force-push without explicit authorization.
- Never modify remote infrastructure, system settings, or install global dependencies without approval.
- Never delete user data, run destructive commands, or apply destructive database migrations without approval.
- Never expose, log, export, or commit credentials. Never bypass security controls.
- Inspect the repository and read the entire blueprint before making an implementation plan.
- Make small, reviewable changes; run relevant tests and report actual results.
- Respect MVP boundaries and the requested Design DNA; do not substitute generic templates.
- Document assumptions and obtain approval for changes conflicting with user requirements.
## Documentation references

- README.md
- docs/PRODUCT_REQUIREMENTS.md
- docs/MVP_SCOPE.md
- docs/DESIGN_DNA.md
- docs/UI_UX_SPECIFICATION.md
- docs/TECHNICAL_ARCHITECTURE.md
- docs/DATA_MODEL.md
- docs/IMPLEMENTATION_PLAN.md
- docs/ACCEPTANCE_CRITERIA.md
- docs/DECISION_LOG.md
- AGENTS.md

