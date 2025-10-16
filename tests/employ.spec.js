import { test, expect } from '@playwright/test';

test.beforeEach(async ({ page }) => {
  await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
});

test('Verify Login With Valid Credentials', async ({ page }) => {
     await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")

  await page.getByRole('textbox', { name: 'Username' }).fill(process.env.APP_USERNAME || '');
  await page.getByRole('textbox', { name: 'Password' }).fill(process.env.APP_PASSWORD || '');
  await page.getByRole('button', { name: 'Login' }).click();

  // verify dashboard URL or heading
  await expect(page).toHaveURL('https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index');
  await expect(page.locator("//h6[text()='Dashboard']")).toBeVisible();
});

test('Verify Login Valid Username And Invalid Password', async ({ page }) => {
  await page.locator("//input[@placeholder='Username']").fill('Admin');
  await page.locator("//input[@type='password']").fill('ganga');
  await page.locator("//button[@type='submit']").click();

  // verify error
  await expect(page.locator("//p[text()='Invalid credentials']")).toBeVisible();
});

test('Verify Login Invalid Username And Valid Password', async ({ page }) => {
  await page.locator("//input[@placeholder='Username']").fill('Ganga');
  await page.locator("//input[@type='password']").fill('admin123');
  await page.locator("//button[@type='submit']").click();

  await expect(page.locator("//p[text()='Invalid credentials']")).toBeVisible();
});

test('Verify Login Valid Username And Invalid Password (env + wrong pwd)', async ({ page }) => {
  await page.locator("//input[@placeholder='Username']").fill(process.env.APP_USERNAME);
  await page.locator("//input[@type='password']").fill('4567');
  await page.locator("//button[@type='submit']").click();

  await expect(page.locator("//p[text()='Invalid credentials']")).toBeVisible();
});