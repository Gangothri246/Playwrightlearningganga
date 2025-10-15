import { test, expect } from '@playwright/test';
  
 const jobtitles = ["SDET1", "Account Assistant", "Content writer"]

   
jobtitles.forEach(element => { 
      test(`Verify jobtitles -${element} `, async ({ page }) => {

await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');

  
  await page.getByRole('textbox', { name: 'Username' }).fill('Admin');
 
  await page.getByRole('textbox', { name: 'Password' }).fill('admin123');
  await page.getByRole('button', { name: 'Login' }).click();
  await page.getByRole('link', { name: 'Admin' }).click();
  await page.getByRole('listitem').filter({ hasText: 'Job' }).locator('i').click();
  await page.getByRole('menuitem', { name: 'Job Titles' }).click();
;
  await page.getByRole('button', { name: 'Add' }).click();
  let randomchars =(Math.random() + 1).toString(36).substring(7);

     await page.getByPlaceholder('Job Title').fill(job.title);

   await page.getByRole('textbox').nth(1).fill(element +randomchars);
 
 await page.getByPlaceholder('Type description here').fill(job.description);
 
  await page.getByText('User Management').click();
  await expect(page.goByRole('heading', { name: 'job Title'})).toBeVisible();
});

});


 
    
