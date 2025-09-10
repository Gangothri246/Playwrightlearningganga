import { test, expect } from '@playwright/test';

test.only('Verify Login With Valid Ceredentials', async ({ page }) => {

    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')

    await page.locator("//input[@placeholder='Username']").fill('Admin')

    await page.locator("//input[@type='password']").fill('admin123')

    await page.locator("//button[@type='submit']").click()

    //verify method1

    await expect(page).toHaveURL("https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index")

    //or

    await expect(page.locator("//h6[text()='Dashboard']")).toBeVisible()

})

test('get started link', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  // Click the get started link.
  await page.getByRole('link', { name: 'Get started' }).click();

  // Expects page to have a heading with the name of Installation.
  await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();
});


    

    test.only('Verify Valid Username And Invalid Password ', async ({ page }) => {

    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")

    await page.locator("//input[@placeholder='Username']").fill('Admin')

    await page.locator("//input[@type='password']").fill('hyjfj123')

    await page.locator("//button[@type='submit']").click()

    //verify method1

   await expect(page.locator("//p[text()='Invalid credentials']")).toBeVisible()
    
})




