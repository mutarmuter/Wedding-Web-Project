export interface CountdownState {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
  expired: boolean;
  valid: boolean;
}

export function calculateCountdown(targetTimestamp: string, now = Date.now()): CountdownState {
  const target = Date.parse(targetTimestamp);
  if (!Number.isFinite(target)) {
    return { days: 0, hours: 0, minutes: 0, seconds: 0, expired: false, valid: false };
  }
  const difference = Math.max(0, target - now);
  const totalSeconds = Math.floor(difference / 1000);
  return {
    days: Math.floor(totalSeconds / 86400),
    hours: Math.floor((totalSeconds % 86400) / 3600),
    minutes: Math.floor((totalSeconds % 3600) / 60),
    seconds: totalSeconds % 60,
    expired: difference <= 0,
    valid: true,
  };
}

export function initCountdown(targetTimestamp: string): () => void {
  const container = document.getElementById('countdown');
  const expiredMessage = document.getElementById('countdown-expired');
  const accessibleStatus = document.getElementById('countdown-status');
  if (!container || !expiredMessage) return () => {};

  const units = ['days', 'hours', 'minutes', 'seconds'] as const;
  const nodes = units.map((unit) => document.getElementById(`countdown-${unit}`));
  let interval: ReturnType<typeof setInterval> | undefined;
  let lastAnnouncedMinute = -1;

  const update = () => {
    const state = calculateCountdown(targetTimestamp);
    if (!state.valid || state.expired) {
      container.hidden = true;
      expiredMessage.hidden = false;
      expiredMessage.textContent = state.valid
        ? 'Alhamdulillah, acara telah berlangsung. Terima kasih atas doa restu Anda.'
        : 'Jadwal acara akan segera diumumkan.';
      if (accessibleStatus) accessibleStatus.textContent = expiredMessage.textContent;
      if (interval) clearInterval(interval);
      return;
    }

    units.forEach((unit, index) => {
      if (nodes[index]) nodes[index]!.textContent = String(state[unit]).padStart(2, '0');
    });

    // Pembaruan pembaca layar dibatasi sekali per menit agar tidak mengganggu.
    const minuteKey = state.days * 1440 + state.hours * 60 + state.minutes;
    if (accessibleStatus && minuteKey !== lastAnnouncedMinute) {
      accessibleStatus.textContent = `${state.days} hari, ${state.hours} jam, ${state.minutes} menit menuju hari bahagia.`;
      lastAnnouncedMinute = minuteKey;
    }
  };

  update();
  const initial = calculateCountdown(targetTimestamp);
  if (initial.valid && !initial.expired) interval = setInterval(update, 1000);
  return () => { if (interval) clearInterval(interval); };
}
