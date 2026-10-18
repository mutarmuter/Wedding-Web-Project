# AGENTS.md: Wedding Abdan

## Required safety and discipline

- Never commit, push, create pull requests, or force-push without explicit authorization.
- Never modify remote infrastructure, system settings, or install global dependencies without approval.
- Never delete user data, run destructive commands, or apply destructive database migrations without approval.
- Never expose, log, export, or commit credentials. Never bypass security controls.
- Inspect the repository and read the entire blueprint before making an implementation plan.
- Make small, reviewable changes; run relevant tests and report actual results.
- Respect MVP boundaries and the requested Design DNA; do not substitute generic templates.
- Document assumptions and obtain approval for changes conflicting with user requirements.
## Additional repository rules

- Dilarang keras melakukan commit atau mengekspos kredensial rahasia, token API Cloudflare, Personal Access Token Git, atau informasi sensitif pribadi ke dalam repositori publik maupun berkas konfigurasi publik.
- Dilarang mengunggah aset biner mentah berukuran besar tanpa proses optimasi sebelumnya (seperti format video resolusi tinggi, rekaman audio lossless .wav, atau foto beresolusi kamera mentah .raw/.bmp); semua aset foto wajib dikonversi ke WebP terkompresi dan berkas audio ke MP3/AAC teroptimasi di bawah ukuran 3-5 MB.
- Direktori artefak hasil kompilasi (`dist/` atau `build/`), folder dependensi (`node_modules/`), berkas cache sementara bundler, serta berkas variabel lingkungan lokal (`.env*`) wajib didaftarkan ke dalam `.gitignore` dan dilarang di-push langsung ke cabang repositori.
- Setiap perubahan kode pada branch utama (`main`) wajib melalui proses validasi otomatis (linting TypeScript tanpa error dan build statis Vite sukses) sebelum dipublikasikan ke infrastruktur hosting Cloudflare Pages atau GitHub Pages.
- Dilarang memodifikasi skrip alur kerja pipeline CI/CD GitHub Actions (`.github/workflows/deploy.yml`) dan berkas konfigurasi deployment hosting (`_headers` untuk HTTP security headers Cloudflare Pages) tanpa verifikasi kesesuaian arsitektur berkas statis.
## Development discipline

- Wajib menerapkan metodologi Mobile-First secara disiplin, memverifikasi keterbacaan tata letak, fluid typography, dan integritas visual mulai dari layar smartphone terkecil (320px) hingga layar desktop ultra-lebar tanpa menghasilkan horizontal scrollbar.
- Dilarang keras menginjeksi nilai parameter URL personalisasi nama tamu (`?to=`) ke dalam DOM menggunakan properti `innerHTML` atau fungsi evaluasi dinamis; manipulasi DOM wajib menggunakan `Node.textContent` atau text binding aman setelah melalui proses sanitasi dan pemotongan panjang karakter untuk mencegah celah DOM-based Cross-Site Scripting (XSS).
- Wajib mengimplementasikan kepatuhan preferensi aksesibilitas `prefers-reduced-motion: reduce` secara komprehensif pada lapisan CSS dan JavaScript: animasi fade-in Hero Cover, efek scroll-reveal, rotasi visual audio player, dan sliding otomatis pada carousel wajib dimatikan atau durasi transisinya disetel menjadi 0 detik.
- Wajib memastikan seluruh elemen antarmuka memenuhi standar aksesibilitas WCAG 2.1 Level AA, termasuk rasio kontras teks utama minimal 4.5:1 terhadap latar belakang palet monokrom, dimensi target sentuhan tombol interaktif minimal 48x48 piksel, dan ketersediaan indikator fokus visual keyboard `:focus-visible`.
- Dilarang menambahkan dependensi runtime JavaScript eksternal yang tidak diperlukan atau pustaka komponen berat di luar stack yang telah ditetapkan (Vite, TypeScript, Tailwind CSS, Embla Carousel Core) guna menjamin waktu muat halaman FCP tetap berada di bawah 1,0 detik pada jaringan seluler 4G.
- Semua penulisan struktur dokumen wajib menggunakan elemen HTML5 semantik (`<header>`, `<main>`, `<section>`, `<article>`, `<figure>`, `<footer>`) serta menyematkan atribut `lang="ar"` dan `dir="rtl"` khusus pada kontainer teks doa dan kutipan berbahasa Arab.
- Komponen pemutar audio latar (Background Audio Player) wajib menghormati kebijakan Autoplay Policy peramban modern dengan tidak memutar suara secara mendadak sebelum adanya interaksi gestur pengguna (tap, klik, atau scroll), serta wajib menyediakan tombol kontrol mengambang yang dapat diakses penuh melalui navigasi keyboard.
## Agent behavior

- Agen wajib menghormati seluruh preferensi eksplisit yang telah ditentukan pengguna dalam wawancara: arsitektur statis murni tanpa basis data server, estetika Minimalist & Monochrome, alur masuk langsung tanpa hambatan simulasi amplop kaku (fake envelope), dan personalisasi nama via query parameter URL `?to=`.
- Agen dilarang keras menginisiasi atau menambahkan fitur di luar cakupan MVP (out-of-scope), seperti integrasi backend database untuk buku tamu dinamis, formulir RSVP berbasis API server, payment gateway amplop digital, atau sistem autentikasi pengguna.
- Agen wajib membedakan secara tegas antara fakta masukan langsung dari pengguna dengan rekomendasi teknis arsitektur, serta secara transparan menandai setiap parameter data yang belum pasti ke dalam kategori `assumptions` atau `openQuestions`.
- Agen wajib menjaga konsistensi penamaan fitur dan acceptance criteria agar selalu selaras dengan dokumen persyaratan produk sebelumnya ('Personalisasi Nama Tamu & Hero Cover Dinamis', 'Hitung Mundur Waktu Acara (Countdown Timer)', 'Struktur Jadwal Acara (Akad Nikah & Resepsi) dan Tombol Google Maps', 'Bagian Teks Doa & Kutipan Bahasa Arab', 'Galeri Foto & Carousel Pernikahan Animatif', 'Pemutar Musik Latar Belakang Kustom (Background Audio Player)', 'Buku Tamu / Seksi Ucapan Statis').
- Agen wajib menyajikan seluruh kode sumber, konfigurasi, panduan deployment, dan penjelasan teknis dalam Bahasa Indonesia yang profesional, jelas, ramah, dan bernuansa khidmat sesuai konteks undangan pernikahan sakral.

