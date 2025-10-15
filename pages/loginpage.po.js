// import { expect } from "@playwright/test"

// exports.loginpage = class Loginpage {
//   constructor(page) {
//     this.page = page;
//     this.LoginUrl = page.locator("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
//     this.logo = page.locator('img[alt="company-branding"]')
//     this.password = page.locator('input[@name="password"]')
//     this.Loginbutton = page.locator('button[@type="submit"]')
//     this.errorMessage = page.locator('div[class="oxd-alert oxd-alert--error"]')
    
//   }

//    async goto() {
//     await this.page.goto(this.LoginUrl)
//             await expect(this.page).toHaveURL(this.LoginUrl)
  
    
//    }

//     async VerifyLogo() {

//      await expect(this.logo).toBeVisible()
//     }

//     async LoginWithCreds(username, password) {
//         await this.usernameInput.fill(username)
//         await this.passwordInput.fill(password)
//         await this.Loginbutton.click()
//         await expect(this.page).toHaveURL('https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index')
       
//       }



//      async LoginSucess() {
//       await this.Loginbutton.click()
      
//      }
//      async LoginErrors() {
//       await this.Loginbutton.click()
//       await expert(this.ErrorMessage).toBeVisible()

//      }
//     }
      // async LaunchUrl() {
      //   await this.page.goto(this.LoginUrl)
      //   await expect(this.page).toHaveURL(this.LoginUrl)

      
      // async LoginWithCreds(username, password) {
      //   await this.username.fill(username)
      //   await this.password.fill(password)
      //   await this.Loginbutton.click()
      //   await expect(this.page).toHaveURL('https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index')
      //   await expect(this.page).toHaveURL(this.LoginUrl)
      // }

      import { expect } from "@playwright/test";

export class LoginPage {
  constructor(page) {
    this.page = page;
    this.loginUrl = "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login";
    this.logo = page.locator('img[alt="company-branding"]');
    this.usernameInput = page.locator('input[name="username"]');
    this.passwordInput = page.locator('input[name="password"]');
    this.loginButton = page.locator('button[type="submit"]');
    this.errorMessage = page.locator('div.oxd-alert--error');
  }

  async goto() {
    await this.page.goto(this.loginUrl);
    await expect(this.page).toHaveURL(this.loginUrl);
  }

  async verifyLogo() {
    await expect(this.logo).toBeVisible();
  }

  async loginWithCreds(username, password) {
    await this.usernameInput.fill(username);
    await this.passwordInput.fill(password);
    await this.loginButton.click();
    await expect(this.page).toHaveURL('https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index');
  }

  async loginSuccess() {
    await this.loginButton.click();
  }

  async loginErrors() {
    await this.loginButton.click();
    await expect(this.errorMessage).toBeVisible();
  }
}