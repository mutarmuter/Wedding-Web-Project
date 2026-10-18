# docs/PRODUCT_REQUIREMENTS.md: Wedding Abdan

## Problem

Abdan dan pasangannya membutuhkan media undangan pernikahan digital yang modern, elegan, dan informatif tanpa kompleksitas pengelolaan server backend. Undangan fisik konvensional memiliki keterbatasan dalam menyajikan elemen interaktif seperti pemutar audio latar, hitung mundur waktu acara, galeri foto dinamis, dan navigasi peta langsung. Diperlukan sebuah website undangan statis berperforma tinggi yang dapat di-hosting secara andal di GitHub Pages atau Cloudflare Pages dengan tema visual Minimalist & Monochrome, memuat personalisasi nama tamu via URL, serta memfasilitasi akses cepat ke detail akad nikah dan resepsi.
## Target users

- Tamu Undangan (Keluarga, Sahabat, dan Kolega): Mengakses undangan melalui tautan pesan instan (seperti WhatsApp) dari smartphone mereka; membutuhkan informasi acara yang jelas (waktu Akad & Resepsi), nama mereka tertera secara personal, navigasi satu klik ke Google Maps, serta pengalaman antarmuka yang bersih tanpa jeda muat yang lambat.
- Calon Pengantin / Penyelenggara (Abdan & Pasangan): Menginginkan representasi acara pernikahan yang khidmat dan estetik dengan nuansa minimalis monokrom, kemudahan mengganti aset musik dan foto secara statis, serta biaya operasional nihil melalui penyedia hosting statis.
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
## Success metrics

- Waktu muat halaman (Page Load Time) di bawah 2,0 detik pada jaringan 4G/mobile standar di Cloudflare Pages atau GitHub Pages.
- Tingkat keberhasilan parsing parameter URL `?to=` mencapai 100% dengan mekanisme fallback teks default yang sopan (misal: 'Tamu Undangan') apabila parameter tidak diberikan.
- Skor Aksesibilitas (Accessibility) Lighthouse minimal 90 dengan rasio kontras palet warna monokrom (putih, krem, abu-abu hangat) yang terverifikasi.
- Pengurangan pergerakan (prefers-reduced-motion) berfungsi 100% pada semua animasi transisi halaman, carousel, dan efek foto bagi pengguna yang mengaktifkannya.
- Akurasi tautan CTA 'Buka Google Maps' sebesar 100% mengarahkan tamu ke titik koordinat lokasi acara yang benar.

