import { describe, expect, it } from 'vitest';
import { calculateCountdown } from './countdownTimer';

describe('Hitung Mundur Waktu Acara (Countdown Timer)', () => {
  it('menghitung hari, jam, menit, dan detik secara akurat', () => {
    const now = Date.parse('2026-12-18T05:56:55+07:00');
    expect(calculateCountdown('2026-12-20T08:00:00+07:00', now)).toEqual({ days: 2, hours: 2, minutes: 3, seconds: 5, expired: false, valid: true });
  });
  it('berhenti tanpa nilai negatif setelah waktu target', () => {
    const state = calculateCountdown('2026-01-01T00:00:00+07:00', Date.parse('2026-02-01T00:00:00+07:00'));
    expect(state).toEqual({ days: 0, hours: 0, minutes: 0, seconds: 0, expired: true, valid: true });
  });
  it('menandai waktu tidak valid tanpa melempar error', () => {
    expect(calculateCountdown('tanggal-tidak-valid').valid).toBe(false);
  });
  it('menghormati zona waktu ISO-8601', () => {
    const state = calculateCountdown('2026-12-20T08:00:00+07:00', Date.parse('2026-12-20T00:00:00Z'));
    expect(state.hours).toBe(1);
  });
});
