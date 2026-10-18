# Wedding Abdan

Undangan pernikahan statis bernuansa editorial monokrom hangat. Dibangun dengan Vite, TypeScript, Tailwind CSS, dan Embla Carousel Core; tanpa backend, basis data, formulir RSVP, atau pelacak.

## Status

Implementasi lokal tersedia dalam **mode contoh**. Nama pasangan, jadwal 20 Desember 2026, foto, musik, dan ucapan bukan data resmi. Jangan menyebarkan undangan sebelum seluruh data dikonfirmasi. Blueprint awal merupakan draf; rekomendasi yang belum disetujui tetap dicatat sebagai asumsi.

## Menjalankan

```sh
npm ci
npm run dev -- --host 127.0.0.1
```

Buka alamat lokal yang ditampilkan. Untuk personalisasi, tambahkan `?to=Budi+Santoso` pada URL. Nama dibersihkan, dibatasi 60 karakter Unicode, dan ditampilkan melalui `textContent`; tidak disimpan.

```sh
npm run lint
npm test
npm run build
npm run test:e2e
npm run preview -- --host 127.0.0.1
```

`lint` menjalankan pemeriksaan TypeScript ketat. Pengujian peramban memerlukan Google Chrome lokal dan menjalankan hasil build terakhir. Alat uji hanya merupakan dependensi pengembangan; tidak masuk bundel situs. Jangan membuka server pengembangan/preview ke internet.

## Mengganti Isi

- `src/config/weddingData.ts`: nama mempelai, judul, teks Arab dan terjemahan, target hitung mundur, audio, foto, serta dua sesi acara. Waktu wajib ISO-8601 dengan zona waktu, misalnya `+07:00` untuk WIB. Tanggal contoh bukan konfirmasi jadwal.
- `src/config/wishesData.ts`: pesan terkurasi. Ganti ucapan contoh dengan pesan yang telah memperoleh izin publikasi.
- `public/images/`: ganti foto dengan WebP berukuran sesuai. Perbarui `src`, `smallSrc`, dimensi asli, dan teks alternatif galeri. Foto hero memiliki varian 480px dan 1000px; galeri 480px dan 800px. Jangan memperbesar foto kecil secara artifisial.
- `public/audio/background-melody.mp3`: melodi sintetis contoh sekitar 29 detik, bukan lagu pilihan pengantin. Ganti dengan MP3/AAC berizin, disarankan 128 kbps dan kurang dari 3 MB. Pemutaran menunggu interaksi pengguna; preferensi jeda dan posisi disimpan hanya selama sesi peramban.
- Isi `googleMapsUrl` dengan tautan resmi `https://www.google.com/maps/...` atau `https://maps.app.goo.gl/...`. Saat kosong, navigasi tidak aktif sehingga tamu tidak diarahkan ke lokasi contoh.
- Nomor WhatsApp opsional menggunakan kode negara tanpa `+`. Jika kosong/tidak valid, tombol disembunyikan. Nomor yang dikonfigurasi akan dapat dibaca publik di bundel statis; gunakan hanya nomor yang telah mendapat izin pemilik.
- Sesuaikan metadata judul/deskripsi, monogram, favicon, dan teks cadangan di `index.html`. Setelah seluruh data disetujui, ubah `isDemo` menjadi `false` untuk menghapus penanda contoh.

Carousel mendukung geser sentuh, tombol arah, keyboard, serta jeda manual. Rotasi berhenti saat hover/fokus, tab tersembunyi, atau preferensi reduced motion aktif. Perubahan preferensi gerak juga ditangani saat halaman masih terbuka.

## Publikasi

Lihat `docs/DEPLOYMENT.md` dan `docs/STATUS_IMPLEMENTASI.md`. Tidak ada commit, push, atau publikasi yang dilakukan. `dist/`, dependensi, laporan uji, dan `.env*` diabaikan Git. Jangan memasukkan token hosting atau informasi pribadi yang tidak diizinkan ke sumber publik.

Lisensi font dan sumber foto contoh tercatat dalam `docs/ASSETS.md`.
