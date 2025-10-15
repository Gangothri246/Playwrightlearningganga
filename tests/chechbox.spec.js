import { test, expect } from '@playwright/test';

test('Verify Login With Valid Ceredentials', async ({ page }) => {

await page.goto('https://rahulshettyacademy.com/AutomationPractice/')

await expect(page.locator('checkBoxOption1')).not.toBeChecked()
const checkboxesstatus = await page.locator('checkBoxOption1').isChecked()

if(checkboxesstatus){
    await page.locator('checkBoxOption1').check()
    await expect(page.locator('checkBoxOption1')).toBeChecked()
    await page.waitForTimeout(4000);
    await expect(page.locator('checkBoxOption1')).unchecked()
    await expect(page.locator('checkBoxOption1')).not.toBeChecked()
}

})
