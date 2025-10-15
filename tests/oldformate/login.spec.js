import { test, expect } from '@playwright/test';

test('Verify Login With Valid Ceredentials', async ({ page }) => {

await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/indexhttps://opensource-demo.orangehrmlive.com/web/index.php/dashboard/indexhttps://opensource-demo.orangehrmlive.com/web/index.php/auth/login')

await page.locator("//input[@placeholder='Username']").fill(process.env.APP_USERNAME)

await page.locator("//input[@type='password']").fill(process.env.APP_PASSWORD)

await page.locator("//button[@type='submit']").click

// verify method1

await expect(page).toHaveURL("https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/indexhttps://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index")

//or

await expect(page.locator("//h6[text()='Dashboard']")).toBeVisible()

})




 
test('Verify Login Valid Username And Invalid Password', async ({ page }) => {

await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')

await page.locator("//input[@placeholder='Username']").fill('Admin')

await page.locator("//input[@type='password']").fill('ganga')

await page.locator("//button[@type='submit']").click

// verify method1

await expect(page.locator("//p[text()='Invalid credentials']")).toBeVisible

})





test('Verify Login Invaild Username And Valid Password', async ({ page }) => {

await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')

await page.locator("//input[@placeholder='Username']").fill('Ganga')

await page.locator("//input[@type='password']").fill('admin123')

await page.locator("//button[@type='submit']").click()

// verify method1


await expect(page.locator("//p[text()='Invalid credentials']")).toBeVisible


})


test('Verify Login Invaild Username And INValid Password', async ({ page }) => {

await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')

await page.locator("//input[@placeholder='Username']").fill('Ganga')

await page.locator("//input[@type='password']").fill('4567')

await page.locator("//button[@type='submit']").click()

// verify method1


await expect(page.locator("//p[text()='Invalid credentials']")).toBeVisible


})




