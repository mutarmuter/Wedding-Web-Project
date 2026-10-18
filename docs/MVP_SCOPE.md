# docs/MVP_SCOPE.md: Wedding Abdan

## In scope

- Personalisasi Nama Tamu & Hero Cover Dinamis
- Hitung Mundur Waktu Acara (Countdown Timer)
- Jadwal Akad Nikah Terpusat dan Tombol Google Maps
- Bagian Teks Doa & Kutipan Bahasa Arab
- Galeri Foto & Carousel Pernikahan Animatif
- Pemutar Musik Latar Belakang Kustom (Background Audio Player)
- Buku Tamu & Seksi Ucapan Doa Statis
## Out of scope

- Sistem basis data server atau backend dinamis untuk penulisan komentar/ucapan langsung oleh pengunjung
- Sistem autentikasi akun pengguna atau dashboard admin manajemen undangan untuk pengantin
- Formulir RSVP interaktif dengan sinkronisasi basis data real-time
- Integrasi gerbang pembayaran (payment gateway) untuk amplop digital atau hadiah otomatis
- Layanan otomatisasi pengiriman blast pesan WhatsApp menggunakan API berbayar
- Fitur pemutaran siaran langsung (live streaming video) tersemat di dalam website
## User journey

1. Tamu undangan membuka tautan personalisasi website pernikahan yang diterima melalui pesan instan (misal: weddingabdan.com/?to=Budi+Santoso). — Hero Cover Dinamis: Halaman termuat cepat dengan transisi fade-in yang elegan; nama tamu 'Budi Santoso' langsung muncul secara personal di bagian cover; pemutar audio latar siap dipicu; animasi transisi dinonaktifkan otomatis apabila perangkat tamu menyetel mode prefers-reduced-motion.
2. Tamu melakukan interaksi pertama pada layar atau menggulir (scroll) ke bawah untuk membaca pembuka undangan. — Seksi Teks Doa & Kutipan Bahasa Arab: Pemutar musik latar kustom mulai memutar lagu pengiring secara halus; tombol floating kontrol audio muncul di sudut layar; teks ayat suci/doa berbahasa Arab dengan tipografi kaligrafi kontras dan terjemahan bahasa Indonesia tampil rapi.
3. Tamu melanjutkan navigasi gulir ke bagian waktu dan susunan acara pernikahan. — Seksi Hitung Mundur (Countdown Timer) & Jadwal Akad Nikah: Komponen countdown timer menampilkan sisa hari, jam, menit, dan detik secara real-time; satu kartu Akad Nikah ditampilkan terpusat dengan rincian jam serta alamat statis yang jelas.
4. Tamu menekan tombol 'Buka Google Maps' pada kartu lokasi acara. — Aplikasi Google Maps Eksternal / Tab Baru Peramban: Tautan membuka koordinat resmi lokasi pernikahan Abdan pada Google Maps di tab atau aplikasi baru tanpa menutup halaman website undangan.
5. Tamu kembali ke website undangan dan menggulir ke bawah menuju area dokumentasi visual. — Seksi Galeri Foto & Carousel Animatif: Carousel foto pre-wedding bergeser secara halus; tamu dapat menggeser foto menggunakan sentuhan jari (swipe) di ponsel atau tombol panah keyboard di desktop; pergeseran otomatis berhenti saat kursor diarahkan (hover/focus).
6. Tamu menggulir hingga ke ujung halaman untuk membaca ucapan keluarga dan mengelola audio. — Seksi Buku Tamu & Ucapan Doa Statis serta Floating Audio Controller: Tamu melihat kompilasi doa terkurasi dari kerabat, dapat menekan tombol WhatsApp opsional untuk mengirimkan ucapan privat ke pengantin, serta bebas menekan tombol floating audio untuk menjeda atau memutar kembali musik.

