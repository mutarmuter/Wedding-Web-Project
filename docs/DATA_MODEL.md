# docs/DATA_MODEL.md: Wedding Abdan

## Entities

### WeddingConfig

Entitas konfigurasi utama pernikahan yang menyimpan identitas mempelai, metadata acara, ayat suci/doa berbahasa Arab, serta konfigurasi target waktu penghitung mundur.

- groomName: string (Nama lengkap dan panggilan mempelai pria, contoh: 'Abdan')
- brideName: string (Nama lengkap dan panggilan mempelai wanita)
- heroCoverTitle: string (Teks sambutan editorial pembuka pada cover depan)
- arabicQuote: object { arabicText: string (Teks ayat Al-Qur'an/doa berharakat lang='ar' dir='rtl'), translationId: string (Terjemahan resmi bahasa Indonesia), surahReference: string (Referensi ayat, contoh: 'QS. Ar-Rum: 21') }
- targetEventTimestamp: string (Waktu ISO-8601 target pelaksanaan pernikahan untuk acuan Countdown Timer, contoh: '2025-08-17T08:00:00+07:00')
- whatsappRecipientNumber: string (Nomor WhatsApp pengantin dalam format internasional untuk CTA ucapan doa privat)

### ScheduleSession

Entitas model untuk mendefinisikan sesi acara pernikahan (Akad Nikah dan Resepsi) yang dipisahkan secara modular pada kartu informasi jadwal.

- sessionId: string (Identifier unik sesi, contoh: 'akad-nikah' | 'resepsi')
- sessionName: string (Label sesi, contoh: 'Akad Nikah' atau 'Resepsi Pernikahan')
- dateFormatted: string (Format tanggal yang ramah dibaca manusia, contoh: 'Minggu, 17 Agustus 2025')
- timeRange: string (Rentang waktu pelaksanaan, contoh: '08:00 - 10:00 WIB')
- venueName: string (Nama gedung/kediaman lokasi acara)
- venueAddress: string (Alamat statis lengkap beserta patokan lokasi)
- googleMapsUrl: string (Tautan langsung Google Maps universal navigation link ke titik koordinat resmi acara)

### GalleryItem

Entitas item visual untuk komponen galeri dan carousel foto pernikahan dengan dukungan metadata aksesibilitas dan format modern teroptimasi.

- id: string (Identifikasi unik berkas foto)
- src: string (Jalur relatif aset foto format WebP, contoh: '/images/gallery/gallery-01.webp')
- width: number (Dimensi intrinsik lebar gambar untuk mencegah Cumulative Layout Shift)
- height: number (Dimensi intrinsik tinggi gambar)
- altText: string (Teks alternatif deskriptif untuk pembaca layar/screen reader)
- caption: string (Teks keterangan singkat yang menyertai foto)

### StaticWish

Entitas kartu ucapan doa dan harapan statis terkurasi dari keluarga dan kerabat terdekat yang ditampilkan pada grid buku tamu statis tanpa koneksi basis data.

- id: string (Identifier unik ucapan)
- senderName: string (Nama pengirim ucapan atau keluarga)
- relationship: string (Hubungan dengan mempelai, contoh: 'Sahabat Kuliah' atau 'Keluarga Besar')
- message: string (Teks ucapan restu, doa kebaikan, dan harapan sakral)
- dateLabel: string (Keterangan waktu pengiriman pesan yang diformat statis)

### GuestPersonalizationState

Entitas state sisi klien untuk menangani ekstraksi parameter query nama tamu undangan dari URL peramban secara aman dan reaktif.

- rawParameter: string (Nilai parameter mentah yang diambil dari window.location.search dengan key 'to')
- sanitizedName: string (Nama tamu hasil sanitasi, decoding URL, pencegahan XSS, dan pemotongan spasi berlebih)
- isDefaultFallback: boolean (Status penanda apakah menggunakan nama fallback default karena parameter kosong)
- displayName: string (Teks akhir yang dirender ke elemen DOM Hero Cover)

### AudioPlayerState

Entitas state reaktif yang mengelola kondisi pemutar musik latar belakang, penanganan browser autoplay restriction, dan label aksesibilitas tombol.

- audioSource: string (Jalur berkas audio statis MP3, contoh: '/audio/background-melody.mp3')
- isPlaying: boolean (Status pemutaran audio saat ini: true jika sedang diputar, false jika dijeda/berhenti)
- isMutedByUser: boolean (Status preferensi senyap yang dipilih pengguna secara manual)
- ariaLabel: string (Teks label aksesibilitas dinamis: 'Putar Musik Pernikahan' atau 'Jeda Musik Pernikahan')
- hasInteracted: boolean (Status gestur sentuhan/klik awal pengguna untuk membuka kunci browser autoplay policy)
## Relationships, constraints and migrations

Catatan Arsitektur Data: 1. Sesuai dengan batasan teknis dan hasil wawancara ('Hanya konten statis, tidak memerlukan penyimpanan ucapan atau RSVP di website'), proyek ini tidak menyediakan formulir input POST atau API mutasi data. Komponen Buku Tamu menyajikan data terkurasi (`wishesData.ts`) yang dapat ditambah atau diedit langsung oleh pemilik repositori sebelum proses build ulang. 2. Personalisasi Tamu Berbasis URL: Data nama tamu tidak disimpan pada cookie atau basis data manapun; nama tamu diolah secara on-the-fly di browser menggunakan Web API `URLSearchParams`. 3. Keamanan Injeksi DOM: Parameter `?to=` tidak boleh dimasukkan ke dalam DOM menggunakan `innerHTML`. Pemetaan ke elemen cover wajib menggunakan properti `Node.textContent` atau text node binding untuk menjamin netralisasi serangan DOM XSS apabila terdapat tautan URL yang dimanipulasi dengan karakter mencurigakan.

