# docs/TECHNICAL_ARCHITECTURE.md: Wedding Abdan

## Architecture

Arsitektur sistem Wedding Abdan mengadopsi pola Jamstack murni (Static Site Architecture) yang sepenuhnya dieksekusi di sisi klien (Client-Side Only) dan didistribusikan melalui jaringan Edge CDN Cloudflare Pages atau GitHub Pages. Arsitektur ini dibangun menggunakan Vite sebagai build engine modern dengan TypeScript dan Tailwind CSS, yang menghasilkan bundel artefak statis (HTML5 semantik, CSS terkompresi, dan vanilla JavaScript ES module) tanpa ketergantungan pada server komputasi backend atau basis data dinamis. Seluruh status aplikasi, pembacaan parameter personalisasi URL (?to=), kalkulasi hitung mundur waktu (Countdown Timer), kontrol pemutaran audio latar (Background Audio Player), dan transisi galeri carousel dikelola secara reaktif pada browser tamu undangan. Desain sistem menerapkan prinsip Mobile-First dengan token desain Minimalist & Monochrome (Warm Alabaster, Warm Cream, Charcoal Slate) serta pemenuhan standar aksesibilitas WCAG 2.1 Level AA (kontras rasio minimal 4.5:1, target sentuh 48x48px, fokus keyboard visible). Penanganan pengurangan gerakan (prefers-reduced-motion) diimplementasikan secara terpusat pada lapisan CSS dan JavaScript untuk memastikan durasi transisi dipaksa 0 detik dan rotasi otomatis carousel/audio dihentikan bagi pengguna dengan sensitivitas vestibular.
## Stack

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
## Directory structure

```text
wedding-abdan/
├── .github/
│   └── workflows/
│       └── deploy.yml              # Pipeline otomatisasi CI/CD GitHub Actions untuk deploy ke GitHub Pages
├── public/
│   ├── audio/
│   │   └── background-melody.mp3   # Berkas audio musik latar kustom (MP3/AAC teroptimasi)
│   ├── fonts/
│   │   ├── cormorant-garamond/     # Font serif editorial lokal (WOFF2)
│   │   ├── plus-jakarta-sans/      # Font sans-serif lokal (WOFF2)
│   │   ├── jetbrains-mono/         # Font tabular monospace lokal (WOFF2)
│   │   └── scheherazade-new/       # Font kaligrafi Arab lokal (WOFF2)
│   ├── images/
│   │   ├── hero/
│   │   │   ├── whatsapp-hero.webp       # Foto utama cover (WebP teroptimasi)
│   │   │   └── whatsapp-hero-small.webp # Varian kecil untuk layar ponsel
│   │   ├── gallery/
│   │   │   ├── whatsapp-gallery-01.webp # Foto carousel WebP rasio 4:5
│   │   │   ├── whatsapp-gallery-01-small.webp
│   │   │   └── ...                       # Galeri 01–09 beserta varian kecil
│   │   └── icons/
│   │       ├── play.svg            # Ikon kontrol audio SVG
│   │       ├── pause.svg
│   │       └── maps-pin.svg
│   ├── favicon.ico                 # Favicon pernikahan
│   └── robots.txt                  # Pengaturan index crawler mesin pencari
├── src/
│   ├── config/
│   │   ├── weddingData.ts          # Konfigurasi data statis (mempelai, tanggal, jadwal Akad Nikah, kutipan Arab)
│   │   └── wishesData.ts           # Kompilasi teks doa dan ucapan statis terkurasi dari keluarga & sahabat
│   ├── scripts/
│   │   ├── audioPlayer.ts          # Modul floating audio, browser autoplay policy unlocker, & aria-label updater
│   │   ├── countdownTimer.ts       # Logika hitung mundur real-time, zero-jitter tabular, & fallback waktu berakhir
│   │   ├── galleryCarousel.ts      # Inisialisasi Embla Carousel, gestur touch-swipe, & pause on hover/focus
│   │   ├── guestPersonalization.ts # Parser parameter ?to= dengan decoding aman, pembersih XSS, & fallback
│   │   └── motionDetector.ts       # Observer untuk window.matchMedia('(prefers-reduced-motion: reduce)')
│   ├── styles/
│   │   ├── main.css                # Konfigurasi token warna monokrom, base styling, dan Tailwind directives
│   │   └── typography.css          # Styling kaligrafi Arab RTL (line-height 2.0) & fluid typography clamp
│   ├── types/
│   │   └── index.ts                # TypeScript interfaces untuk WeddingConfig, Schedule, Wish, & Gallery
│   └── main.ts                     # Entry point JavaScript aplikasi: bootstrap semua modul secara asinkron
├── index.html                      # Berkas HTML5 semantik halaman tunggal (Single Page Layout)
├── tailwind.config.js              # Token warna (#FAF8F5, #1C1B1A, #5C5854), font family, dan breakpoint mobile
├── tsconfig.json                   # Konfigurasi kompilasi TypeScript ketat (strict mode)
├── vite.config.ts                  # Konfigurasi build Vite (asset hashing, compression, & base path)
└── package.json                    # Dependensi proyek dan npm build scripts
```
## Storage and concurrency

Penyimpanan dan konkurensi diimplementasikan dengan pendekatan Zero-Backend & Edge Delivery: 1. Penyimpanan Data: Tidak ada basis data server-side (seperti MySQL, PostgreSQL, atau Firestore) yang digunakan dalam proyek ini. Seluruh data acara, jadwal sesi, galeri foto, dan daftar ucapan doa dikonfigurasikan sebagai data objek statis TypeScript/JSON yang dikompilasi langsung ke dalam bundel aplikasi klien pada waktu build (build time). 2. Browser Storage: Penggunaan storage sisi klien dibatasi secara minimal hanya pada `sessionStorage` untuk mengingat preferensi status pemutaran musik pengguna (`wedding_abdan_audio_state: 'playing' | 'paused'`) selama satu sesi navigasi, mencegah musik mengulang dari awal secara tiba-tiba jika tamu memuat ulang (refresh) halaman. 3. Konkurensi & Skalabilitas: Karena seluruh artefak berwujud berkas statis (HTML, CSS, JS, WebP, MP3), aplikasi dilayani secara terdistribusi melalui jaringan global Edge CDN Cloudflare Pages / GitHub Pages. Tingkat konkurensi bersifat tidak terbatas (infinite edge concurrency) tanpa risiko race condition, deadlock basis data, atau penurunan performa server meskipun diakses ribuan tamu undangan secara bersamaan dari grup pesan instan.
## Integrations

- Google Maps Embed Integration - Peta lokasi Akad dimuat dalam iframe responsif dari Google Maps berdasarkan nama tempat dan alamat yang dikonfigurasi. Frame memakai lazy loading dan judul aksesibel; CSP Cloudflare membatasi frame ke domain Google Maps. Tidak ada Google Maps JavaScript SDK atau API key.
- WhatsApp Click-to-Chat API - Integrasi tautan komunikasi eksternal menggunakan protokol URL Scheme WhatsApp (`https://wa.me/{nomorPonsel}?text={pesanEnkripsi}`) pada tombol kirim ucapan doa. Mengarahkan tamu secara instan ke aplikasi WhatsApp pribadi mempelai dengan draf pesan doa terisi otomatis.
- HTML5 Web Audio & Media Element API - Pemanfaatan interface audio native browser untuk streaming berkas audio MP3 statis lokal dengan buffer hemat daya, penanganan event `play`, `pause`, dan `ended` (looping), serta implementasi graceful fallback saat browser memblokir autoplay sebelum adanya gestur interaksi.
- Cloudflare Pages / GitHub Pages Deployment Webhook - Integrasi pipeline CI/CD Git provider yang secara otomatis memicu tahapan build Vite dan pembaruan cache edge global setiap kali ada push commit baru ke branch utama (main).
## Security

Penerapan standar keamanan pada arsitektur website statis mencakup lapisan berikut: 1. Mitigasi DOM-based Cross-Site Scripting (XSS): Sanitasi ketat diterapkan pada pembacaan query parameter URL `?to=`. Ekstraksi dilakukan melalui `new URLSearchParams(window.location.search).get('to')`. Hasil string dipotong maksimal 60 karakter, dibersihkan dari spasi berlebih, dan hanya disuntikkan ke DOM menggunakan properti `element.textContent = sanitizedText` (menghindari mutlak penggunaan `innerHTML` atau `eval()`). Jika string kosong atau mengandung karakter ilegal, sistem langsung beralih ke teks fallback aman: 'Tamu Undangan yang Berbahagia'. 2. Perlindungan Reverse Tabnabbing: Seluruh tautan eksternal (Google Maps dan WhatsApp) wajib memiliki atribut keamanan `rel="noopener noreferrer"` di samping atribut `target="_blank"` guna mencegah jendela tab baru mengakses objek `window.opener` dari halaman undangan. 3. Content Security Policy (CSP): Penyedia hosting dikonfigurasi melalui berkas `_headers` (Cloudflare Pages) untuk menyertakan header keamanan modern: `default-src 'self'; script-src 'self'; style-src 'self' 'unsafe-inline'; img-src 'self' data:; media-src 'self'; font-src 'self'; connect-src 'self'; frame-ancestors 'none';`. 4. Strict Transport Security (HSTS): Seluruh lalu lintas transmisi data dienkripsi wajib melalui protokol HTTPS dengan sertifikat TLS modern berumur panjang yang dikelola otomatis oleh Cloudflare/GitHub. 5. Privasi & Bebas Pelacak: Situs tidak menanamkan skrip pelacak pihak ketiga (third-party tracking pixels), cookies analitik berbayar, atau pengambilan data pribadi tamu, menjaga kerahasiaan tamu undangan secara penuh.
## Deployment

Prosedur dan strategi deployment dirancang otomatis untuk platform hosting statis Cloudflare Pages (atau GitHub Pages): 1. Build Pipeline: Perintah build standar adalah `npm run build` yang memicu eksekusi `vite build`. Vite akan mengompilasi berkas TypeScript, mengekstrak dan meminifikasi CSS Tailwind melalui PostCSS, menghasilkan aset statis dengan penamaan content-hash unik (misal `assets/main.[hash].js`), serta menaruh seluruh bundel siap rilis ke dalam folder `dist/`. 2. Konfigurasi Cloudflare Pages: Menghubungkan repositori Git ke Cloudflare Pages Dashboard dengan pengaturan: Build Command = `npm run build`, Build Output Directory = `dist`, Node.js Version = `20.x`. Setiap push ke branch `main` akan memicu build otomatis dan publikasi instan ke edge global dalam waktu < 60 detik. Domain kustom (misal `weddingabdan.com`) diarahkan melalui DNS CNAME Cloudflare dengan SSL universal otomatis. 3. Konfigurasi Alternatif GitHub Pages: Berkas workflow `.github/workflows/deploy.yml` disediakan menggunakan aksi resmi `actions/checkout@v4`, `actions/setup-node@v4`, `actions/upload-pages-artifact@v3` (mengunggah folder `dist`), dan `actions/deploy-pages@v4` yang terpicu saat push ke branch `main`. 4. Kebijakan Cache-Control: Berkas HTML (`index.html`) dikonfigurasi dengan header `Cache-Control: public, max-age=0, must-revalidate` agar pembaruan informasi acara langsung diterima pengunjung seketika. Berkas aset ter-hash pada folder `dist/assets/` serta berkas WebP/MP3 dikonfigurasi dengan header `Cache-Control: public, max-age=31536000, immutable` guna memaksimalkan kecepatan muat sekunder.

