import { test, expect } from '@playwright/test';

test('green card', async ({ page }) => {
  await page.goto('https://playwright.dev/');
})