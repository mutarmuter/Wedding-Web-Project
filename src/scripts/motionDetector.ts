export interface MotionController {
  isReduced: () => boolean;
  subscribe: (callback: (reduced: boolean) => void) => () => void;
  destroy: () => void;
}

export function createMotionController(): MotionController {
  const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
  const subscribers = new Set<(reduced: boolean) => void>();
  const onChange = (event: MediaQueryListEvent) => {
    subscribers.forEach((callback) => callback(event.matches));
  };
  mediaQuery.addEventListener('change', onChange);
  return {
    isReduced: () => mediaQuery.matches,
    subscribe: (callback) => {
      subscribers.add(callback);
      return () => subscribers.delete(callback);
    },
    destroy: () => {
      mediaQuery.removeEventListener('change', onChange);
      subscribers.clear();
    },
  };
}

export function initScrollReveal(motion: MotionController): () => void {
  const elements = document.querySelectorAll<HTMLElement>('.reveal');
  if (motion.isReduced() || !('IntersectionObserver' in window)) {
    elements.forEach((element) => element.classList.add('is-visible'));
    return () => {};
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12, rootMargin: '0px 0px -20px 0px' },
  );
  elements.forEach((element) => {
    element.classList.add('reveal-pending');
    observer.observe(element);
  });

  const unsubscribe = motion.subscribe((reduced) => {
    if (reduced) {
      elements.forEach((element) => element.classList.add('is-visible'));
      observer.disconnect();
    }
  });

  return () => {
    observer.disconnect();
    unsubscribe();
  };
}
