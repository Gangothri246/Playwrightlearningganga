import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/loginpage.po.js';
import data from "../testdata/logindata.json";

test.describe("Verify Login Functionality", () => {
  let login
 
  
  test.beforeEach(async ({ page }) => {
    login = new LoginPage(page);
    await login.goto();
  });

  test('Verify Launch Url', async () => {
    await login.verifyLogo();
  });

  test('Verify Login With Valid Credentials', async () => {
    await login.loginWithCreds(process.env.APP_USERNAME, process.env.APP_PASSWORD);
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