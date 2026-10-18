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
// KONFIGURASI UNDANGAN PERNIKAHAN
// ------------------------------------------------------------------
export const weddingData: WeddingConfig = {
  isDemo: false,
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
  heroImage: 'images/hero/whatsapp-hero.webp',
  heroImageSmall: 'images/hero/whatsapp-hero-small.webp',
};

export const scheduleSessions: ScheduleSession[] = [
  {
    sessionId: 'akad-nikah',
    sessionName: 'Akad Nikah',
    dateFormatted: 'Senin, 9 November 2026',
    timeRange: '08.00 - 10.00 WIB',
    venueName: 'KUA Banjarbaru Selatan',
    venueAddress: 'Jl. Kerinci No.19 RT.04 RW.04 Kel. Loktabar Selatan Kec. Landasan Ulin, Kota Banjar Baru, Kalimantan Selatan',
    googleMapsUrl: 'https://maps.app.goo.gl/qa7N4ht7nJJdsH8w8',
  },
];

export const galleryItems: GalleryItem[] = [
  { id: 'gallery-01', src: 'images/gallery/whatsapp-gallery-01.webp', smallSrc: 'images/gallery/whatsapp-gallery-01-small.webp', width: 800, height: 1000, altText: 'Abdan dan Tiara menuruni tangga bersama', caption: 'Langkah menuju hari bahagia' },
  { id: 'gallery-02', src: 'images/gallery/whatsapp-gallery-02.webp', smallSrc: 'images/gallery/whatsapp-gallery-02-small.webp', width: 800, height: 1000, altText: 'Abdan dan Tiara berjalan menuruni tangga melingkar', caption: 'Setiap langkah berarti' },
  { id: 'gallery-03', src: 'images/gallery/whatsapp-gallery-03.webp', smallSrc: 'images/gallery/whatsapp-gallery-03-small.webp', width: 800, height: 1000, altText: 'Abdan dan Tiara berjalan bersama di dalam ruangan', caption: 'Dalam perjalanan yang sama' },
  { id: 'gallery-04', src: 'images/gallery/whatsapp-gallery-04.webp', smallSrc: 'images/gallery/whatsapp-gallery-04-small.webp', width: 800, height: 1000, altText: 'Tiara tersenyum kepada Abdan di ruang bernuansa kayu', caption: 'Senyum yang selalu dirindukan' },
  { id: 'gallery-05', src: 'images/gallery/whatsapp-gallery-05.webp', smallSrc: 'images/gallery/whatsapp-gallery-05-small.webp', width: 800, height: 1000, altText: 'Abdan berlutut di hadapan Tiara dalam momen lamaran', caption: 'Satu janji, satu harapan' },
  { id: 'gallery-06', src: 'images/gallery/whatsapp-gallery-06.webp', smallSrc: 'images/gallery/whatsapp-gallery-06-small.webp', width: 800, height: 1000, altText: 'Pantulan Abdan dan Tiara dalam bingkai cermin berukir', caption: 'Kisah indah yang terpantul' },
  { id: 'gallery-07', src: 'images/gallery/whatsapp-gallery-07.webp', smallSrc: 'images/gallery/whatsapp-gallery-07-small.webp', width: 800, height: 1000, altText: 'Abdan berlutut di hadapan Tiara dalam momen lamaran', caption: 'Jawaban yang dinanti' },
  { id: 'gallery-08', src: 'images/gallery/whatsapp-gallery-08.webp', smallSrc: 'images/gallery/whatsapp-gallery-08-small.webp', width: 800, height: 1000, altText: 'Abdan dan Tiara berjalan bersama melewati ruang berornamen kayu', caption: 'Menapaki hari bersama' },
  { id: 'gallery-09', src: 'images/gallery/whatsapp-gallery-09.webp', smallSrc: 'images/gallery/whatsapp-gallery-09-small.webp', width: 800, height: 1000, altText: 'Abdan dan Tiara berjalan beriringan di dalam ruangan', caption: 'Terus berjalan berdampingan' },
];
