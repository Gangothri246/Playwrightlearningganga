import { test, expect } from '@playwright/test';

test('verify login process', async ({ page }) => {

    await page.goto('https://www.flipkart.com/')
    await page.locator("//a[@title='Login']//span[1]").click()
    await page.locator("(//a[@title='Sign Up']//span)[2]").click

   await page.locator("//input[@class='r4vIwl BV+Dqf']").fill("8792352451")
    
})