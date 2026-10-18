import EmblaCarousel from 'embla-carousel';
import type { MotionController } from './motionDetector';

export function initGalleryCarousel(motion: MotionController): () => void {
  const viewport = document.querySelector<HTMLElement>('.embla__viewport');
  const gallery = document.getElementById('gallery-carousel');
  const previousButton = document.getElementById('gallery-prev');
  const nextButton = document.getElementById('gallery-next');
  const dotsContainer = document.getElementById('gallery-dots');
  const status = document.getElementById('gallery-status');
  const autoplayButton = document.getElementById('gallery-autoplay') as HTMLButtonElement | null;
  if (!viewport || !gallery || !dotsContainer) return () => {};

  const embla = EmblaCarousel(viewport, { loop: true, align: 'start', duration: motion.isReduced() ? 0 : 25 });
  let autoplayTimer: ReturnType<typeof setInterval> | undefined;
  let isHovered = false;
  let isFocused = false;
  let isDragging = false;
  let isPausedByUser = false;

  const dots = embla.scrollSnapList().map((_, index) => {
    const button = document.createElement('button');
    button.type = 'button';
    button.className = 'carousel-dot';
    button.setAttribute('aria-label', `Tampilkan foto ${index + 1}`);
    button.addEventListener('click', () => embla.scrollTo(index, motion.isReduced()));
    dotsContainer.appendChild(button);
    return button;
  });

  const updateDots = () => {
    const selected = embla.selectedScrollSnap();
    dots.forEach((dot, index) => {
      dot.setAttribute('aria-current', index === selected ? 'true' : 'false');
    });
    if (status && isFocused) status.textContent = `Foto ${selected + 1} dari ${dots.length}`;
  };

  const stopAutoplay = () => {
    if (autoplayTimer) clearInterval(autoplayTimer);
    autoplayTimer = undefined;
  };
  const startAutoplay = () => {
    stopAutoplay();
    if (motion.isReduced() || isPausedByUser || isHovered || isFocused || isDragging || document.hidden) return;
    autoplayTimer = setInterval(() => embla.scrollNext(), 5000);
  };
  const updateAutoplayButton = () => {
    if (!autoplayButton) return;
    autoplayButton.disabled = motion.isReduced();
    autoplayButton.textContent = motion.isReduced() ? 'Gerak otomatis nonaktif' : isPausedByUser ? 'Lanjutkan galeri' : 'Jeda galeri';
    autoplayButton.setAttribute('aria-pressed', String(isPausedByUser || motion.isReduced()));
  };
  const onAutoplayToggle = () => {
    isPausedByUser = !isPausedByUser;
    updateAutoplayButton();
    startAutoplay();
  };

  const onPrevious = () => { embla.scrollPrev(motion.isReduced()); startAutoplay(); };
  const onNext = () => { embla.scrollNext(motion.isReduced()); startAutoplay(); };
  const onMouseEnter = () => { isHovered = true; stopAutoplay(); };
  const onMouseLeave = () => { isHovered = false; startAutoplay(); };
  const onFocusIn = () => { isFocused = true; stopAutoplay(); };
  const onFocusOut = (event: FocusEvent) => {
    if (!gallery.contains(event.relatedTarget as Node | null)) {
      isFocused = false;
      startAutoplay();
    }
  };
  const onKeydown = (event: KeyboardEvent) => {
    if (event.key === 'ArrowLeft') { event.preventDefault(); onPrevious(); }
    if (event.key === 'ArrowRight') { event.preventDefault(); onNext(); }
  };

  previousButton?.addEventListener('click', onPrevious);
  nextButton?.addEventListener('click', onNext);
  gallery.addEventListener('mouseenter', onMouseEnter);
  gallery.addEventListener('mouseleave', onMouseLeave);
  gallery.addEventListener('focusin', onFocusIn);
  gallery.addEventListener('focusout', onFocusOut);
  gallery.addEventListener('keydown', onKeydown);
  document.addEventListener('visibilitychange', startAutoplay);
  autoplayButton?.addEventListener('click', onAutoplayToggle);
  embla.on('select', updateDots);
  embla.on('pointerDown', () => { isDragging = true; stopAutoplay(); });
  embla.on('pointerUp', () => { isDragging = false; startAutoplay(); });

  const unsubscribe = motion.subscribe((reduced) => {
    embla.reInit({ duration: reduced ? 0 : 25 });
    if (reduced) embla.scrollTo(embla.selectedScrollSnap(), true);
    updateAutoplayButton();
    startAutoplay();
  });
  updateDots();
  updateAutoplayButton();
  startAutoplay();

  return () => {
    stopAutoplay();
    unsubscribe();
    embla.destroy();
    previousButton?.removeEventListener('click', onPrevious);
    nextButton?.removeEventListener('click', onNext);
    gallery.removeEventListener('mouseenter', onMouseEnter);
    gallery.removeEventListener('mouseleave', onMouseLeave);
    gallery.removeEventListener('focusin', onFocusIn);
    gallery.removeEventListener('focusout', onFocusOut);
    gallery.removeEventListener('keydown', onKeydown);
    document.removeEventListener('visibilitychange', startAutoplay);
    autoplayButton?.removeEventListener('click', onAutoplayToggle);
  };
}
