

import { test, expect } from '@playwright/test';

const Addemployees = {
  emp1: {
    firstname: "Gangothri",
    lastname: "R",
    empid: "1505",
  },
  emp2: {
    firstname: "netra",
    lastname: "R",
    empid: "1506",
  },
  emp3: {
    firstname: "sahana",
    lastname: "B",
    empid: "1507",
  },
  emp4: {
    firstname: "rayaru",
    lastname: "R",
    empid: "1508",
  }
};

for (const Addemp in Addemployees) {
  test(`Verify the add  employee -${Addemp}`, async ({ page }) => {
    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    await page.locator("//input[@placeholder='Username']").fill('Admin');
    await page.getByRole('textbox', { name: 'Password' }).fill('admin123');
    await page.getByRole('button', { name: 'Login' }).click();
    await page.locator("//li[contains(.,'PIM')]").click()
    await page.locator("//li[contains(.,'Add Employee')]").click();
    await page.locator("//input[@placeholder='First Name']").fill(Addemployees[Addemp].firstname);
    await page.locator("//input[@placeholder='Last Name']").fill(Addemployees[Addemp].lastname);
    await page.locator("(//label[normalize-space(text())='Employee Id']/following::input)[1]").fill(Addemployees[Addemp].empid);
    await page.locator("//button[contains(.,'Save')]").click();
  });
}