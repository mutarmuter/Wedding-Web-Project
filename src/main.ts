import './styles/main.css';
import { weddingData, scheduleSessions, galleryItems } from './config/weddingData';
import { initGuestPersonalization } from './scripts/guestPersonalization';
import { initCountdown } from './scripts/countdownTimer';
import { createMotionController, initScrollReveal } from './scripts/motionDetector';
import { initGalleryCarousel } from './scripts/galleryCarousel';
import { initAudioPlayer } from './scripts/audioPlayer';

function setText(id: string, text: string): void {
  const element = document.getElementById(id);
  if (element) element.textContent = text;
}

function createElement<K extends keyof HTMLElementTagNameMap>(tag: K, className: string, text?: string): HTMLElementTagNameMap[K] {
  const element = document.createElement(tag);
  element.className = className;
  if (text !== undefined) element.textContent = text;
  return element;
}

function createScheduleIcon(type: string): SVGSVGElement {
  const namespace = 'http://www.w3.org/2000/svg';
  const svg = document.createElementNS(namespace, 'svg');
  svg.setAttribute('viewBox', '0 0 48 48');
  svg.setAttribute('fill', 'none');
  svg.setAttribute('aria-hidden', 'true');
  svg.classList.add('schedule-icon');
  const path = document.createElementNS(namespace, 'path');
  path.setAttribute('stroke', 'currentColor');
  path.setAttribute('stroke-width', '1.2');
  path.setAttribute('stroke-linecap', 'round');
  path.setAttribute('stroke-linejoin', 'round');
  path.setAttribute('d', type === 'akad-nikah'
    ? 'M12 40V24h24v16M8 40h32M24 8c0 0-11 7-11 13h22C35 15 24 8 24 8ZM21 40V30h6v10M24 3v5M7 22v18M41 22v18M5 22h4M39 22h4'
    : 'M12 40V17h24v23M8 40h32M17 17V9h14v8M15 25h18M15 32h18M24 3v6M20 6h8');
  svg.appendChild(path);
  return svg;
}

function renderWeddingContent(): void {
  for (const id of ['demo-notice', 'schedule-notice']) {
    const notice = document.getElementById(id);
    if (notice) notice.hidden = !weddingData.isDemo;
  }
  setText('groom-name', weddingData.groomName);
  setText('bride-name', weddingData.brideName);
  setText('hero-cover-title', weddingData.heroCoverTitle);
  setText('arabic-quote', weddingData.arabicQuote.arabicText);
  setText('quote-translation', weddingData.arabicQuote.translationId);
  setText('quote-reference', weddingData.arabicQuote.surahReference);
  setText('closing-names', `${weddingData.groomName} & ${weddingData.brideName}`);
  document.title = `${weddingData.heroCoverTitle} ${weddingData.groomName} & ${weddingData.brideName}`;

  const date = new Date(weddingData.targetEventTimestamp);
  if (!Number.isNaN(date.getTime())) {
    setText('hero-date', new Intl.DateTimeFormat('id-ID', { day: '2-digit', month: '2-digit', year: 'numeric', timeZone: 'Asia/Jakarta' }).format(date).replace(/\//g, ' . '));
    setText('footer-year', String(date.getFullYear()));
  }

  const heroImage = document.getElementById('hero-image') as HTMLImageElement | null;
  if (heroImage) {
    heroImage.src = weddingData.heroImage;
    heroImage.srcset = `${weddingData.heroImageSmall} 480w, ${weddingData.heroImage} 1000w`;
    heroImage.sizes = '(min-width: 768px) 440px, (min-width: 640px) 420px, calc(100vw - 84px)';
    heroImage.alt = weddingData.isDemo ? 'Foto ilustrasi pernikahan dengan buket bunga, bukan kedua mempelai' : `Potret ${weddingData.groomName} dan ${weddingData.brideName}`;
  }

  const scheduleContainer = document.getElementById('schedule-cards');
  scheduleSessions.forEach((session) => {
    const card = createElement('article', 'schedule-card reveal');
    card.appendChild(createScheduleIcon(session.sessionId));
    card.appendChild(createElement('h3', '', session.sessionName));
    card.appendChild(createElement('p', 'schedule-date', session.dateFormatted));
    card.appendChild(createElement('p', 'schedule-time', session.timeRange));
    const divider = createElement('div', 'schedule-divider');
    divider.setAttribute('aria-hidden', 'true');
    card.appendChild(divider);
    card.appendChild(createElement('p', 'schedule-venue', session.venueName));
    card.appendChild(createElement('p', 'schedule-address', session.venueAddress));
    const link = createElement('a', 'button button-solid', 'Buka Google Maps');
    link.href = session.googleMapsUrl;
    link.target = '_blank';
    link.rel = 'noopener noreferrer';
    link.appendChild(createElement('span', 'sr-only', ' (membuka di tab baru)'));
    if (/^https:\/\/(www\.)?google\.com\/maps\//.test(session.googleMapsUrl) || /^https:\/\/maps\.app\.goo\.gl\//.test(session.googleMapsUrl)) {
      card.appendChild(link);
    } else {
      const pending = createElement('button', 'button button-outline', 'Lokasi segera diumumkan');
      pending.type = 'button';
      pending.disabled = true;
      card.appendChild(pending);
    }
    scheduleContainer?.appendChild(card);
  });

  const galleryContainer = document.getElementById('gallery-slides');
  galleryItems.forEach((item, index) => {
    const slide = createElement('div', 'embla__slide');
    slide.setAttribute('role', 'group');
    slide.setAttribute('aria-roledescription', 'slide');
    slide.setAttribute('aria-label', `${index + 1} dari ${galleryItems.length}`);
    const figure = createElement('figure', '');
    const image = createElement('img', '');
    image.src = item.src;
    if (item.smallSrc) image.srcset = `${item.smallSrc} 480w, ${item.src} ${item.width}w`;
    image.sizes = '(min-width: 1024px) 350px, (min-width: 640px) 45vw, 80vw';
    image.alt = weddingData.isDemo ? `Foto ilustrasi, bukan kedua mempelai. ${item.altText}` : item.altText;
    image.width = item.width;
    image.height = item.height;
    image.loading = 'lazy';
    image.decoding = 'async';
    figure.appendChild(image);
    const caption = createElement('figcaption', '');
    caption.appendChild(createElement('span', 'slide-number', String(index + 1).padStart(2, '0')));
    caption.appendChild(document.createTextNode(item.caption));
    figure.appendChild(caption);
    slide.appendChild(figure);
    galleryContainer?.appendChild(slide);
  });

}

renderWeddingContent();
initGuestPersonalization();
const motion = createMotionController();
const cleanupCountdown = initCountdown(weddingData.targetEventTimestamp);
const cleanupReveal = initScrollReveal(motion);
const cleanupGallery = initGalleryCarousel(motion);
const cleanupAudio = initAudioPlayer(weddingData.audioSource);

window.addEventListener('pagehide', (event) => {
  if (event.persisted) return;
  cleanupCountdown();
  cleanupReveal();
  cleanupGallery();
  cleanupAudio();
  motion.destroy();
});
