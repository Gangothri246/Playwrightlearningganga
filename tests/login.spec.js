// import { test, expect } from '@playwright/test';
// import { Loginpage } from '../pages/loginpage.po.js';
// import data from  "../testdata/logindata.json"
// let page 
// let login

// test.describe("Verify Login Functionality", async () => {


// })

//   test('Verify Launch Url', async () => {
//     await Login.launchUrl()
//     await Login.VerifyLogo()
  
//   })
  
// test('Verify Login With Valid Ceredentials', async () => {
//     await Login.LoginWithCreds(process.env.APP_USERNAME, process.env.APP_PASSWORD)
//     await Login.LoginSucess()

//   })

// test('Verify Login With Valid Username and Invalid Password', async () => {
//     await Login.LoginWithCreds(process.env.APP_USERNAME, data.wrongpassword)
//     await Login.LoginErrors()
// })

// test('Verify Login With InvalidUsername and valid Password', async () => {
//     await Login.LoginWithCreds(data.wrongusername, process.env.APP_PASSWORD)
//     await Login.LoginErrors()
// })

// test('Verify Login With InvalidUsername and Invalid Password', async () => {
//     await Login.LoginWithCreds(data.wrongusername, data.wrongpassword)
//     await Login.LoginErrors()
// });

// import { test, expect } from '@playwright/test';

// test('test', async ({ page }) => {
//   await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
//   await page.getByText('Username : Admin').click();
//   await page.getByText('Password : admin123').click();

//   await page.getByRole('textbox', { name: 'Username' }).click();
//   await page.getByRole('textbox', { name: 'Password' }).click();
//  ;
 
//   await page.getByRole('textbox', { name: 'Username' }).fill('Admin');

 
//   await page.getByRole('textbox', { name: 'Password' }).fill('admin123');
  // await page.getByRole('button', { name: 'Login' }).click();
  // await page.getByRole('link', { name: 'PIM' }).click();
//   await page.getByRole('listitem').filter({ hasText: 'Add Employee' }).click();

// });

import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/loginpage.po.js';
import data from "../testdata/logindata.json";

test.describe("Verify Login Functionality", () => {
  let login;
  
  test.beforeEach(async ({ page }) => {
    login = new LoginPage(page);
    await login.goto();
  });

  test('Verify Launch Url', async () => {
    await login.verifyLogo();
  });

  test('Verify Login With Valid Credentials', async () => {
    await login.loginWithCreds(process.env.APP_USERNAMEG, process.env.APP_PASSWORD);
    await login.loginSuccess();
  });

  test('Verify Login With Valid Username and Invalid Password', async () => {
    await login.loginWithCreds(process.env.APP_USERNAME, data.wrongpassword);
    await login.loginErrors();
  });

  test('Verify Login With Invalid Username and Valid Password', async () => {
    await login.loginWithCreds(data.wrongusername, process.env.APP_PASSWORD);
    await login.loginErrors();
  });

  test('Verify Login With Invalid Username and Invalid Password', async () => {
    await login.loginWithCreds(data.wrongusername, data.wrongpassword);
    await login.loginErrors();
  });
});