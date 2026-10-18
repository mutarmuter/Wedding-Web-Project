# docs/IMPLEMENTATION_PLAN.md: Wedding Abdan

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
