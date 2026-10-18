# Panduan Publikasi Statis

## Pemeriksaan Sebelum Publikasi

1. Konfirmasi identitas kedua mempelai, tanggal/jam, alamat, koordinat, doa beserta terjemahannya, dan izin publikasi aset serta kontak.
2. Ganti seluruh data contoh. Pastikan Maps membuka titik yang benar, bukan hasil pencarian kota. Periksa metadata serta monogram di HTML dan favicon.
3. Selesaikan tinjauan keamanan dependensi. Versi utama Vite/Tailwind mengikuti blueprint; audit lengkap saat implementasi menemukan kerentanan pada alat pengembangan. Jangan menganggap audit dependensi runtime yang bersih sebagai pengganti audit lengkap.
4. Jalankan `npm ci`, `npm run lint`, `npm test`, `npm run build`, dan `npm run test:e2e`.
5. Tinjau manual di Safari iPhone, Android, Firefox, dan Edge, termasuk swipe, teks Arab, audio, navigasi keyboard, serta zoom 200%. Uji Lighthouse pada URL hosting sebenarnya; pengukuran lokal bukan jaminan jaringan seluler.

## Cloudflare Pages

Setelah pemilik mengizinkan publikasi, hubungkan repositori melalui dashboard Cloudflare Pages. Gunakan perintah build `npm run lint && npm test && npm run build` dan direktori keluaran `dist`. Workflow menargetkan Node 22 (minimal 22.19 untuk alat audit yang terpasang). Pengujian lokal menggunakan Node 26.7.0; hasil runner CI Node 22 belum diverifikasi. Penyesuaian ini hanya menyangkut runtime alat build, bukan dependensi runtime situs.

Tidak perlu Worker, Pages Functions, API key sisi klien, atau basis data. Semua sumber diproses menjadi HTML/CSS/JavaScript dan aset statis. Jangan mengaktifkan integrasi otomatis atau mengubah DNS sebelum mendapat persetujuan pemilik.

`public/_headers` disalin ke keluaran build. CSP mengizinkan skrip, font, gambar, audio, dan koneksi dari origin sendiri serta iframe peta dari Google Maps. `style-src 'unsafe-inline'` diperlukan untuk gaya posisi carousel dan CSS yang disisipkan saat build. CSS kecil dimasukkan ke HTML agar tidak menambah permintaan yang memblokir tampilan awal; jalur font disesuaikan terhadap lokasi HTML. Tidak ada skrip inline atau CDN runtime. HTML selalu divalidasi ulang; hanya bundel bernama hash yang menggunakan cache immutable. Aset bernama tetap divalidasi ulang setelah satu hari.

## GitHub Pages

Setelah repositori dan publikasi disetujui, pilih sumber GitHub Actions di pengaturan Pages. Workflow `.github/workflows/deploy.yml` memeriksa tipe, pengujian unit, dan build saat push ke `main`, tetapi **tidak memublikasikan otomatis**. Publikasi hanya melalui pemicu manual dengan opsi `publish` setelah data dan keamanan disetujui.

Keluaran memakai `base: './'` agar aset kompatibel dengan root domain maupun subdirektori proyek. Buka URL direktori dengan garis miring penutup, lalu tambahkan `?to=Nama+Tamu`.

GitHub Pages tidak menerapkan berkas `_headers` milik Cloudflare. Jangan mengklaim CSP dan header Cloudflare aktif di GitHub Pages; jika kebijakan header tersebut wajib, gunakan Cloudflare Pages atau lapisan hosting yang mendukungnya.

## Batas Keamanan

Tidak ada token dalam konfigurasi. Workflow menggunakan izin Pages/OIDC bawaan GitHub, bukan token hardcoded. Jangan mengunggah direktori `node_modules`, laporan pengujian, `.env*`, atau `dist` ke cabang sumber. Artefak `dist` hanya dikirim melalui mekanisme deployment setelah validasi.
