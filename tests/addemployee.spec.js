import { test, expect } from '@playwright/test';

test('verify add employee', async ({ page }) => {

  await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
  await page.locator("//input[@placeholder='Username']").fill('Admin')
  await page.locator("//input[@type='password']").fill('admin123')
  await page.locator("//button[@type='submit']").click()
  await page.locator("//li[contains(.,'PIM')]").click()

  await expect(page.locator("div#app>div>div>header")).toBeVisible
  await page.locator("//li[contains(.,'Add Employee')]").click()

  await page.locator("//input[@placeholder='First Name']").fill('Ganga')
  await page.locator("//input[@placeholder='Last Name']").fill('R')
  await page.locator("//input[@type='file']").setInputFiles('testdata/uploadfiles/dog.jpg')
   await page.locator("(//label[normalize-space(text())='Employee Id']/following::input)[1]").fill('1504')
  await page.locator("//button[contains(.,'Save')]").click()
  
})