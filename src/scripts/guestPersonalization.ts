export interface GuestPersonalizationState {
  rawParameter: string;
  sanitizedName: string;
  isDefaultFallback: boolean;
  displayName: string;
}

export const DEFAULT_GUEST_NAME = 'Tamu Undangan yang Berbahagia';
export const MAX_GUEST_NAME_LENGTH = 60;

/**
 * Membersihkan input query URL tanpa pernah menyisipkannya sebagai HTML.
 * Mendukung karakter Unicode (nama lintas bahasa), spasi, dan tanda baca nama.
 */
export function sanitizeGuestName(raw: string | null): string {
  if (!raw) return '';
  const cleaned = raw
    .replace(/<[^>]*>/g, '')
    .replace(/[<>"`\\]/g, '')
    .replace(/[\u0000-\u001F\u007F\u200B-\u200F\u202A-\u202E\u2066-\u2069\uFFFD]/g, '')
    .replace(/\s+/g, ' ')
    .trim();
  return Array.from(cleaned).slice(0, MAX_GUEST_NAME_LENGTH).join('');
}

export function getGuestPersonalization(search: string): GuestPersonalizationState {
  const params = new URLSearchParams(search);
  const rawParameter = params.get('to') ?? '';
  const sanitizedName = sanitizeGuestName(rawParameter);
  return {
    rawParameter,
    sanitizedName,
    isDefaultFallback: sanitizedName.length === 0,
    displayName: sanitizedName || DEFAULT_GUEST_NAME,
  };
}

export function initGuestPersonalization(): void {
  const state = getGuestPersonalization(window.location.search);
  const guestElement = document.getElementById('guest-name');
  if (guestElement) {
    guestElement.textContent = state.displayName;
  }
}
