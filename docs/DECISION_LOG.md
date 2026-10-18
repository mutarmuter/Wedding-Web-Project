# docs/DECISION_LOG.md: Wedding Abdan

Only the verbatim source input is user-provided. Generated recommendations are not confirmed decisions.

## Arahan pengguna terbaru

- 18 Oktober 2026: Pengguna meminta bagian Resepsi dihapus dari situs dan jadwal Akad Nikah ditampilkan terpusat. Arahan ini menggantikan spesifikasi terdahulu yang meminta dua kartu acara.

## Assumptions (unapproved)

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
## Open questions

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
## Review required

Verify feature/scope alignment, architecture feasibility, visual fidelity and safety rules with the project owner. Automated structural checks do not prove semantic consistency.

