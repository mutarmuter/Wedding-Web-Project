import { test, expect } from '@playwright/test';
import AxeBuilder from '@axe-core/playwright';

test('personalisasi aman dan semua aset termuat', async ({ page }) => {
  const errors: string[] = [];
  page.on('pageerror', (error) => errors.push(error.message));
  await page.goto('/?to=' + encodeURIComponent('<img src=x onerror=alert(1)>Budi & Keluarga'));
  await expect(page.locator('#guest-name')).toHaveText('Budi & Keluarga');
  await expect(page.locator('#guest-name img')).toHaveCount(0);
  await page.locator('#galeri').scrollIntoViewIfNeeded();
  await expect.poll(() => page.locator('img').evaluateAll((images) => images.every((image) => image.complete && image.naturalWidth > 0))).toBe(true);
  await expect(page.locator('#schedule-cards article')).toHaveCount(2);
  await expect(page.locator('#ucapan')).toHaveCount(0);
  await expect(page.locator('.header-link')).toHaveText('Hari Bahagia');
  await expect(page.locator('#groom-name')).toHaveText('Abdan');
  await expect(page.locator('#bride-name')).toHaveText('Tiara');
  await expect(page.locator('.brand-mark-text')).toHaveText('A&T');
  await expect(page.locator('.hero-scroll')).toHaveText('Dengan penuh syukur, kami mengundang Anda');
  await expect(page.locator('.footer-top')).toHaveText('Kembali ke atas');
  expect(errors).toEqual([]);
});

for (const width of [320, 375, 768, 1440, 2560]) {
  test(`tata letak ${width}px dan teks 200% tanpa luapan`, async ({ page }) => {
    await page.setViewportSize({ width, height: 900 });
    await page.goto('/?to=' + 'NamaPanjang'.repeat(10));
    await page.evaluate(() => document.fonts.ready);
    const overflow = () => page.evaluate(() => document.documentElement.scrollWidth > window.innerWidth);
    expect(await overflow()).toBe(false);
    await page.evaluate(() => { document.documentElement.style.fontSize = '200%'; });
    expect(await overflow()).toBe(false);
  });
}

test('reduced motion, kontrol galeri, dan audit aksesibilitas', async ({ page }) => {
  await page.emulateMedia({ reducedMotion: 'reduce' });
  await page.goto('/');
  await expect(page.locator('#gallery-autoplay')).toBeDisabled();
  await page.locator('#gallery-next').click();
  await expect(page.locator('#gallery-dots button').nth(1)).toHaveAttribute('aria-current', 'true');
  const positions = await page.locator('.embla__container').evaluate((element) => getComputedStyle(element).transform);
  await page.waitForTimeout(5200);
  expect(await page.locator('.embla__container').evaluate((element) => getComputedStyle(element).transform)).toBe(positions);
  expect(await page.locator('.hero-enter').evaluate((element) => getComputedStyle(element).animationName)).toBe('none');
  const results = await new AxeBuilder({ page }).withTags(['wcag2a', 'wcag2aa', 'wcag21aa']).analyze();
  expect(results.violations).toEqual([]);
});

test('audio tidak autoplay dan dapat diputar serta dijeda', async ({ page }) => {
  await page.goto('/');
  expect(await page.locator('audio').evaluate((audio) => audio.paused)).toBe(true);
  await page.locator('#audio-toggle').click();
  await expect(page.locator('#audio-toggle')).toHaveAttribute('aria-pressed', 'true');
  await page.locator('#audio-toggle').click();
  await expect(page.locator('#audio-toggle')).toHaveAttribute('aria-pressed', 'false');
  await page.reload();
  await page.locator('#hero-title').click();
  expect(await page.locator('audio').evaluate((audio) => audio.paused)).toBe(true);
});

test('galeri dapat dijeda permanen dan dinavigasi keyboard', async ({ page }) => {
  await page.goto('/');
  await page.locator('#gallery-autoplay').click();
  await expect(page.locator('#gallery-autoplay')).toHaveText('Lanjutkan galeri');
  await page.locator('#gallery-carousel').focus();
  await page.keyboard.press('ArrowRight');
  await expect(page.locator('#gallery-dots button').nth(1)).toHaveAttribute('aria-current', 'true');
  await page.locator('#home').click();
  await page.waitForTimeout(5200);
  await expect(page.locator('#gallery-dots button').nth(1)).toHaveAttribute('aria-current', 'true');
});
