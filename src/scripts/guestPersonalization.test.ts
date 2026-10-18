import { describe, expect, it } from 'vitest';
import { DEFAULT_GUEST_NAME, MAX_GUEST_NAME_LENGTH, getGuestPersonalization, sanitizeGuestName } from './guestPersonalization';

describe('Personalisasi Nama Tamu & Hero Cover Dinamis', () => {
  it('membaca nama dengan spasi dari query URL', () => {
    expect(getGuestPersonalization('?to=Budi+Santoso').displayName).toBe('Budi Santoso');
  });
  it('menggunakan fallback saat parameter kosong atau tidak ada', () => {
    expect(getGuestPersonalization('').displayName).toBe(DEFAULT_GUEST_NAME);
    expect(getGuestPersonalization('?to=%20%20').displayName).toBe(DEFAULT_GUEST_NAME);
  });
  it('menghapus tag HTML dan karakter kontrol', () => {
    expect(sanitizeGuestName('<img src=x onerror=alert(1)>Budi\u0000')).toBe('Budi');
  });
  it('mendukung nama Unicode dan tanda baca yang aman', () => {
    expect(sanitizeGuestName("  Siti   Nur'Aini & أحمد  ")).toBe("Siti Nur'Aini & أحمد");
  });
  it('membatasi panjang nama tamu', () => {
    expect(sanitizeGuestName('A'.repeat(200))).toHaveLength(MAX_GUEST_NAME_LENGTH);
  });
  it('tidak gagal saat query berisi encoding yang tidak sempurna', () => {
    expect(() => getGuestPersonalization('?to=%E0%A4%A')).not.toThrow();
  });
  it('memotong nama tanpa memisahkan pasangan karakter Unicode', () => {
    expect(Array.from(sanitizeGuestName('🌷'.repeat(100)))).toHaveLength(MAX_GUEST_NAME_LENGTH);
  });
  it('membersihkan karakter pengarah teks tersembunyi', () => {
    expect(sanitizeGuestName('Budi\u202ESantoso')).toBe('BudiSantoso');
  });
});
