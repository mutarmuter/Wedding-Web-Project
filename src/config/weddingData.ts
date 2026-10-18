export interface WeddingConfig {
  isDemo: boolean;
  groomName: string;
  brideName: string;
  groomFullName: string;
  brideFullName: string;
  heroCoverTitle: string;
  arabicQuote: {
    arabicText: string;
    translationId: string;
    surahReference: string;
  };
  targetEventTimestamp: string;
  whatsappRecipientNumber: string;
  audioSource: string;
  heroImage: string;
  heroImageSmall: string;
}

export interface ScheduleSession {
  sessionId: string;
  sessionName: string;
  dateFormatted: string;
  timeRange: string;
  venueName: string;
  venueAddress: string;
  googleMapsUrl: string;
}

export interface GalleryItem {
  id: string;
  src: string;
  smallSrc?: string;
  width: number;
  height: number;
  altText: string;
  caption: string;
}

// ------------------------------------------------------------------
// KONFIGURASI DATA PERNIKAHAN
// Semua data di bawah masih merupakan PLACEHOLDER / ASUMSI.
// Silakan ganti dengan data resmi dari kedua mempelai sebelum publikasi.
// ------------------------------------------------------------------
export const weddingData: WeddingConfig = {
  isDemo: true,
  groomName: 'Abdan',
  brideName: 'Tiara',
  groomFullName: 'Abdan',
  brideFullName: 'Tiara',
  heroCoverTitle: 'Undangan Pernikahan',
  arabicQuote: {
    arabicText: 'وَمِنْ آيَاتِهِ أَنْ خَلَقَ لَكُمْ مِنْ أَنْفُسِكُمْ أَزْوَاجًا لِتَسْكُنُوا إِلَيْهَا وَجَعَلَ بَيْنَكُمْ مَوَدَّةً وَرَحْمَةً إِنَّ فِي ذَٰلِكَ لَآيَاتٍ لِقَوْمٍ يَتَفَكَّرُونَ',
    translationId: 'Dan di antara tanda-tanda (kebesaran)-Nya ialah Dia menciptakan pasangan-pasangan untukmu dari jenismu sendiri, agar kamu cenderung dan merasa tenteram kepadanya, dan Dia menjadikan di antaramu rasa kasih dan sayang. Sungguh, pada yang demikian itu benar-benar terdapat tanda-tanda (kebesaran Allah) bagi kaum yang berpikir.',
    surahReference: 'QS. Ar-Rum: 21'
  },
  targetEventTimestamp: '2026-11-09T08:00:00+07:00',
  whatsappRecipientNumber: '', // Isi dengan nomor internasional tanpa tanda +, contoh: 6281234567890
  audioSource: 'audio/background-melody.mp3',
  heroImage: 'images/hero/cover-photo.webp',
  heroImageSmall: 'images/hero/cover-photo-small.webp',
};

export const scheduleSessions: ScheduleSession[] = [
  {
    sessionId: 'akad-nikah',
    sessionName: 'Akad Nikah',
    dateFormatted: 'Senin, 9 November 2026',
    timeRange: '08.00 - 10.00 WIB',
    venueName: 'Kediaman Mempelai Wanita',
    venueAddress: 'Alamat lengkap lokasi akad nikah akan ditampilkan di sini. Silakan sesuaikan dengan data resmi acara.',
    googleMapsUrl: '',
  },
  {
    sessionId: 'resepsi',
    sessionName: 'Resepsi',
    dateFormatted: 'Senin, 9 November 2026',
    timeRange: '11.00 - 14.00 WIB',
    venueName: 'Gedung Resepsi Pernikahan',
    venueAddress: 'Alamat lengkap lokasi resepsi akan ditampilkan di sini. Silakan sesuaikan dengan data resmi acara.',
    googleMapsUrl: '',
  },
];

export const galleryItems: GalleryItem[] = [
  { id: 'gallery-01', src: 'images/gallery/gallery-01.webp', smallSrc: 'images/gallery/gallery-01-small.webp', width: 800, height: 1000, altText: 'Momen kebersamaan dalam nuansa monokrom yang hangat', caption: 'Sebuah awal yang indah' },
  { id: 'gallery-02', src: 'images/gallery/gallery-02.webp', smallSrc: 'images/gallery/gallery-02-small.webp', width: 800, height: 1000, altText: 'Potret elegan pernikahan dengan latar alam yang tenang', caption: 'Bersama dalam setiap langkah' },
  { id: 'gallery-03', src: 'images/gallery/gallery-03.webp', smallSrc: 'images/gallery/gallery-03-small.webp', width: 800, height: 1000, altText: 'Detail rangkaian bunga sebagai simbol kasih sayang dan kebahagiaan', caption: 'Cinta yang terus bertumbuh' },
  { id: 'gallery-04', src: 'images/gallery/gallery-04.webp', smallSrc: 'images/gallery/gallery-04-small.webp', width: 800, height: 1000, altText: 'Suasana romantis dan khidmat menyambut hari pernikahan', caption: 'Menulis kisah bersama' },
];
