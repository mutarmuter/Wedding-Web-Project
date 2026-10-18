# docs/DESIGN_DNA.md: Wedding Abdan

## Identity

Editorial Minimalist Monokromatis Modern: memadukan keanggunan tata letak majalah kontemporer (editorial layout), ruang negatif (white space) yang lapang, palet monokrom hangat (warm alabaster, oat milk, charcoal slate), serta tipografi kontras tinggi yang tenang, dewasa, dan khidmat.
## Atmosphere

Khidmat, intim, tenang, dan abadi (timeless). Tamu merasakan suasana perayaan pernikahan sakral tanpa distraksi visual berlebihan, ornamen berkilau yang bising, atau pop-up yang mengganggu kenyamanan membaca.
## Colors

```json
{
  "background": "Off-White Alabaster (#FAF8F5) dengan variasi kontras seksi Warm Cream (#F2EDE4) dan Card Surface (#FFFFFF)",
  "primaryText": "Deep Charcoal (#1C1B1A) dengan teks sekunder Muted Slate Warm (#5C5854) dan batas garis Hairline Warm (#E5DFD7)",
  "accent": "Warm Espresso Brown (#3D342E) dan Soft Warm Ochre (#8C7863) sebagai aksen penanda fokus interaktif",
  "usage": "Latar belakang utama menggunakan #FAF8F5 untuk kenyamanan mata saat membaca di layar gawai. Kartu konten jadwal dan ucapan memakai warna putih murni #FFFFFF berbingkai halus #E5DFD7. Tipografi utama judul dan teks penting menggunakan #1C1B1A yang menghasilkan rasio kontras 13.8:1 terhadap latar putih (melebihi standar WCAG AAA). Teks pendukung informasi alamat dan label memakai #5C5854 dengan rasio kontras 5.5:1 (memenuhi WCAG AA). Aksen #3D342E dan #8C7863 diterapkan secara selektif untuk tombol navigasi primer, indikator titik carousel aktif, serta penanda ring fokus keyboard :focus-visible dengan outline 2px solid dan offset 2px. Tidak menggunakan warna neon atau gradien berwarna-warni demi menjaga marwah sakral dan estetika monokromatis."
}
```
## Typography

```json
{
  "headings": "Cormorant Garamond / Playfair Display (Serif Elegan Klasik Modern) dengan bobot 400 (Regular) dan 600 (Semi-bold), pelacakan huruf (letter-spacing) proporsional yang lapang (+0.05em), menghadirkan sentuhan editorial puitis dan sakral.",
  "body": "Plus Jakarta Sans / Inter (Clean Geometric Sans-Serif) dengan bobot 400 (Regular) dan 500 (Medium), line-height 1.65 - 1.8 untuk keterbacaan optimal pada teks panjang dan informasi jadwal di layar sentuh ponsel.",
  "mono": "JetBrains Mono / Space Mono (Clean Tabular Monospace) untuk angka Countdown Timer dan penanda waktu digital agar lebar angka seimbang (tabular nums) dan tidak bergeser saat detik berganti."
}
```
## Layout

- Penerapan Ruang Bernapas Maksimal (Generous White Space): Elemen tidak dipadatkan, memberikan jarak vertikal lega antar-seksi (80px - 120px di desktop, 48px - 64px di mobile) untuk menciptakan ketenangan membaca.
- Hierarki Tipografis Editorial Berbasis Rasio Modular: Judul utama berukuran fluid (clamp 2.25rem hingga 4.5rem) yang menyatu dengan teks tubuh berukuran stabil (1rem - 1.125rem), memastikan struktur pembacaan jelas dan alami.
- Grid Kolom Adaptif Terstruktur: Layout satu kolom tunggal yang berpusat (centered single-column container) dengan lebar maksimum 768px hingga 1040px untuk menjamin kenyamanan mata di layar desktop tanpa kehilangan keintiman visual mobile-first.
- Transisi Alami Tanpa Hambatan Kaku: Tamu langsung disambut tampilan sampul yang mengalir halus ke konten inti secara vertikal tanpa dinding interaksi kaku seperti fake envelope pop-up yang menyulitkan akses cepat.
## Spacing

Sistem spasi terstruktur berbasis kelipatan 8-point grid (8px, 16px, 24px, 32px, 48px, 64px, 96px, 128px). Di perangkat mobile (< 640px), kontainer utama menggunakan padding horizontal 20px atau 24px, dengan pemisah vertikal antar-seksi sebesar 56px hingga 72px. Pada tablet dan desktop (>= 768px), padding horizontal melebar menjadi 32px hingga 48px dengan jeda vertikal antar-seksi sebesar 96px hingga 128px untuk menghadirkan kesan luas dan mewah. Jarak antar-elemen mikro (seperti jarak antara label sesi dengan tombol aksi Google Maps, atau antar-kotak countdown) dikunci konsisten pada rentang 12px hingga 16px. Setiap tombol Call-to-Action dan floating controller dipastikan memiliki area sentuh (touch target) minimal 48x48px dengan bantalan aman (padding) yang memadai.
## Motion

Koreografi gerak mengusung prinsip 'Subtle & Graceful Motion'. Saat halaman pertama kali dimuat, Hero Cover menyambut tamu dengan transisi fade-in lembut dan translasi vertikal naik (translateY dari 16px ke 0px) berdurasi 600ms dengan timing-function cubic-bezier(0.16, 1, 0.3, 1). Efek scroll reveal pada seksi jadwal dan doa menggunakan opacity transition 400ms yang ringan. Carousel foto memiliki pergeseran halus berdurasi 450ms dengan auto-slide setiap 5 detik yang otomatis terjeda ketika pointer berada di atas carousel (:hover) atau keyboard fokus (:focus-within). Indikator audio player memiliki rotasi lambat 360 derajat dalam 12 detik saat musik menyala. PERILAKU REDUCED MOTION: Ketika sistem operasi mendeteksi `@media (prefers-reduced-motion: reduce)`, semua durasi transisi (fade-in, transform, rotasi audio, dan pergeseran slide carousel) dipaksa menjadi 0 detik atau `animation: none; transition: none;` sehingga konten langsung tampil seketika dan pergeseran carousel berganti gambar instan tanpa luncuran pergerakan visual bagi pengguna penderita gangguan vestibular.
## Imagery

Arah visual fotografi mengusung dokumentasi pernikahan bertema editorial kontemporer: foto berfokus pada tangkapan emosi autentik bernuansa hitam-putih hangat (monochrome warm tone) atau desaturasi lembut yang menyatu dengan palet situs. Seluruh gambar dikompresi ke dalam format WebP modern dengan atribut responsive srcset (resolusi mobile 600w, tablet 1200w, desktop 1920w) dan rasio aspek tetap (3:4 untuk potret personal mempelai dan 16:9 atau 4:3 untuk lanskap dokumentasi). Atribut loading='lazy' dan decoding='async' wajib diterapkan pada foto galeri di bawah fold, sedangkan foto utama Hero Cover menggunakan prioritas muat tinggi (fetchpriority='high'). Setiap gambar dilengkapi atribut alt deskriptif kontekstual (misal: 'Foto potret Abdan dan pasangan berlatar belakang alam dalam nuansa monokrom').
## Avoid

- Menghindari pop-up amplop simulasi (fake opening envelope modal) yang memblokir akses tamu dan memaksa pengguna mengklik sebelum melihat isi undangan.
- Menghindari pemutaran suara latar belakang otomatis (audio autoplay) dengan volume keras secara mendadak tanpa persetujuan atau interaksi awal pengguna (melanggar browser autoplay policy).
- Menghindari penggunaan font script/kaligrafi kursif latin yang berliuk-liuk ekstrem dan sulit dibaca (poor legibility) di layar ponsel beresolusi kecil.
- Menghindari dekorasi visual berat yang berlebihan seperti efek taburan glitter animasi, bunga jatuh CSS loop, atau animasi partikel yang membebani CPU gawai tamu.
- Menghindari teks abu-abu terang dengan kontras rendah di bawah rasio 4.5:1 terhadap latar putih/krem yang menyulitkan tamu berusia lanjut.
- Menghindari layout countdown timer dengan angka yang bergetar atau bergeser lebarnya setiap detik akibat tidak digunakannya font tabular (tabular-nums).

