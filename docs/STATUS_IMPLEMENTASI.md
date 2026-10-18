# Laporan Status Implementasi & Verifikasi Kualitas

Dokumen ini merangkum status teknis, hasil audit pengujian otomatis, kepatuhan aksesibilitas WCAG 2.1 AA, serta daftar periksa rilis untuk website undangan pernikahan statis **Wedding Abdan**.

---

## 1. Status Fitur MVP (7/7 Selesai)

| Fitur | Prioritas | Status | Implementasi & Catatan Teknis |
|---|---|---|---|
| **Personalisasi Nama Tamu & Hero Cover Dinamis** | P0 | Selesai | Membaca parameter URL `?to=...`, sanitasi ketat karakter XSS, bidi/invisibel, pembatasan 60 karakter Unicode, injeksi DOM murni via `textContent` (tanpa `innerHTML`). Fallback: *"Tamu Undangan yang Berbahagia"*. |
| **Hitung Mundur Waktu Acara (Countdown Timer)** | P0 | Selesai | Selisih waktu ISO-8601 berbasis zona waktu, tipografi tabular monospace (`JetBrains Mono`), notifikasi `aria-live="polite"` dibatasi 1x/menit, dan penanganan otomatis saat acara telah lewat. |
| **Struktur Jadwal (Akad & Resepsi) + Google Maps** | P0 | Selesai | Kartu modular responsif (1 kolom ponsel, 2 kolom tablet/desktop), target sentuh $\ge 48\times 48\text{ px}$, fokus visual `:focus-visible`. Pada mode demo, tombol terproteksi dengan status nonaktif *"Lokasi segera diumumkan"*. |
| **Bagian Teks Doa & Kutipan Bahasa Arab** | P1 | Selesai | QS. Ar-Rum: 21 dengan atribut semantik `lang="ar"` dan `dir="rtl"`, tipografi kaligrafi lokal teroptimasi (`Scheherazade New`), `line-height \ge 2.0`, terjemahan bahasa Indonesia stabil pada zoom 200%. |
| **Galeri Foto & Carousel Pernikahan Animatif** | P1 | Selesai | Embla Carousel Core (zero-dependency) dengan gambar WebP multi-resolusi (`480w` & `800w`). Mendukung gestur swipe sentuh, navigasi keyboard panah, titik navigasi sentuh aman, tombol *"Jeda galeri / Lanjutkan galeri"*, jeda otomatis pada hover/fokus/tab switch, dan nonaktif total pada `prefers-reduced-motion: reduce`. |
| **Pemutar Musik Latar Belakang (Background Audio Player)** | P1 | Selesai | Tombol mengambang 52x52px (`#audio-toggle`), mematuhi *Autoplay Policy* peramban modern (audio baru aktif setelah ada interaksi gestur pertama pengunjung), posisi dan status jeda tersimpan antar-navigasi via `sessionStorage`, serta *graceful fallback* bila berkas gagal dimuat. |
| **Buku Tamu / Seksi Ucapan Statis** | P2 | Ditiadakan | Ditiadakan atas instruksi pengguna. Markup `section#ucapan` dihapus bersih dari antarmuka. |

---

## 2. Hasil Verifikasi & Pengujian Otomatis

### A. TypeScript Typecheck & Linting
- Perintah: `npm run lint` (`tsc --noEmit`)
- Hasil: **0 Error** (seluruh tipe data konfigurasi, DOM element, dan state controller tervalidasi secara *strict*).

### B. Unit Testing (Vitest)
- Perintah: `npm test` (`vitest run src`)
- Hasil: **12 / 12 Lulus (100%)**
  - Uji sanitasi nama tamu, filter tag HTML, filter karakter kontrol/bidi, pemotongan Unicode slice aman.
  - Uji perhitungan hitung mundur waktu, deteksi timestamp valid/invalid, dan status expired.

### C. End-to-End & Aksesibilitas (Playwright + Axe-core)
- Perintah: `npm run test:e2e` (`playwright test`)
- Hasil: **9 / 9 Lulus (100%)**
  1. Personalisasi aman terhadap injeksi skrip (`<img src=x onerror=alert(1)>`) dan pemuatan aset gambar.
  2. Uji responsivitas viewport 320px tanpa *horizontal overflow* dan font zoom 200%.
  3. Uji responsivitas viewport 375px tanpa *horizontal overflow* dan font zoom 200%.
  4. Uji responsivitas viewport 768px tanpa *horizontal overflow* dan font zoom 200%.
  5. Uji responsivitas viewport 1440px tanpa *horizontal overflow* dan font zoom 200%.
  6. Uji responsivitas viewport 2560px tanpa *horizontal overflow* dan font zoom 200%.
  7. Uji preferensi `prefers-reduced-motion: reduce`, kontrol galeri, dan audit aksesibilitas Axe-core (**0 violations** untuk standar WCAG 2.0 A/AA & WCAG 2.1 AA).
  8. Uji kebijakan autoplay audio (audio tidak memutar tanpa gestur, kontrol toggle berfungsi, state tersimpan).
  9. Uji jeda manual permanen galeri dan navigasi keyboard panah.

### D. Audit Google Lighthouse
- Konfigurasi: Audit Mobile (Emulated Moto G Power, Chrome Headless)
- Skor Metrik:
  - **Performance: 95 / 100** (CLS: 0, TBT: 0 ms, Speed Index: 0.99)
  - **Accessibility: 100 / 100** (Kepatuhan WCAG 2.5.3 *Label in Name* pada monogram `brand-mark`, kontras warna teks $\ge 4.5:1$, tautan header "Hari Bahagia" bersih tanpa tanda panah)
  - **Best Practices: 100 / 100** (Bebas pustaka JS berisiko, HTTPS/HSTS header, doctype, CSP siap pakai)
  - **SEO: 100 / 100** (Meta tag lengkap, Open Graph, meta description, semantik HTML5)

### E. Audit Keamanan Dependensi
- Perintah: `npm audit --omit=dev`
- Hasil: **0 Vulnerabilities** pada dependensi produksi.

---

## 3. Kepatuhan Kebijakan Repositori & AGENTS.md

- **Git & Deployment Discipline**: Repositori lokal belum di-commit/push ke cabang remote, mematuhi instruksi eksplisit bahwa commit dan deployment membutuhkan persetujuan langsung dari pengguna.
- **Tanpa Kredensial & Secrets**: Tidak ada token Cloudflare, token GitHub, atau informasi rahasia di dalam kode.
- **Aset Mandiri (Self-Contained)**: Semua font (WOFF2) dan media tersimpan secara lokal di dalam folder `public/`, tanpa dependensi CDN pihak ketiga yang berpotensi memblokir render atau melanggar privasi tamu.
- **Inline Critical CSS**: CSS terkompresi otomatis disisipkan langsung ke dalam berkas `dist/index.html` oleh plugin kustom Vite untuk mengeliminasi pemblokiran render FCP.

---

## 4. Daftar Periksa Menjelang Publikasi Data Resmi

Sebelum website dipublikasikan secara resmi ke Cloudflare Pages atau GitHub Pages, pengantin atau penanggung jawab perlu melengkapi:

1. [x] **Identitas Mempelai**: Terkonfirmasi resmi mempelai adalah **Abdan & Tiara** (terpasang di `src/config/weddingData.ts`, cover depan, dan metadata HTML).
2. [x] **Jadwal & Waktu Acara**: Terkonfirmasi tanggal pernikahan **9 November 2026** (Senin, 9 November 2026) dengan target countdown ISO-8601 `2026-11-09T08:00:00+07:00`.
3. [ ] **Lokasi & Google Maps**: Mengisi alamat lengkap serta tautan Google Maps resmi (`https://maps.app.goo.gl/...`) agar tombol navigasi aktif.
4. [ ] **Nomor WhatsApp**: Memasukkan nomor WhatsApp pengantin (format internasional tanpa tanda `+`, contoh `6281234567890`) untuk mengaktifkan tombol kirim ucapan restu.
5. [ ] **Foto Dokumentasi Resmi**: Mengganti foto ilustrasi di `public/images/hero/` dan `public/images/gallery/` dengan foto asli mempelai berformat WebP terkompresi.
6. [ ] **Musik Latar**: Mengganti `public/audio/background-melody.mp3` dengan lagu pilihan pengantin berformat MP3/AAC terkompresi (< 3-5 MB).
7. [ ] **Menonaktifkan Mode Demo**: Mengubah `isDemo: false` pada `src/config/weddingData.ts` untuk menghapus spanduk pratinjau.
8. [ ] **Otorisasi Publikasi**: Memberikan izin untuk melakukan `git commit`, `git push`, dan aktivasi deployment Cloudflare Pages / GitHub Pages.
