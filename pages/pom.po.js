import { expect } from "@playwright/test";

export class LoginPage {
  constructor(page) {
    this.page = page;
    this.loginUrl = "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login";
    this.logo = page.locator('img[alt="company-branding"]');
    this.usernameInput = page.locator('input[name="username"]');
    this.passwordInput = page.locator('input[name="password"]');
    this.loginButton = page.locator('button[type="submit"]');
    this.pimMenu = page.locator("//li[contains(.,'PIM')]");
    this.addemployee = page.locator("//li[contains(.,'Add Employee')]");
    this.firstnameInput = page.locator("//input[@placeholder='First Name']")
    this.lastnameInput = page.locator("//input[@placeholder='Last Name']");
      this.employeeIdInput = page.locator("(//label[normalize-space(text())='Employee Id']/following::input)[1]");
    this.saveButton = page.locator("//button[contains(.,'Save')]");
     this.personalDetailsHeader = page.locator("//h6[contains(.,'Personal Details')]");
        this.profilePicUpload = page.locator("//input[@type='file']");
  }

  async goto(){
    await this.page.goto(this.loginUrl);
    await expect(this.page).toHaveURL(this.loginUrl);

  }
  async verifylogo(){

 await expect(this.logo).toBeVisible();
  }

  async login(username,password){
    await this.usernameInput.fill(username);
    await this.passwordInput.fill(password);
    await this.loginButton.click();
    await expect(this.page).toHaveURL('https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index');
  }
  async navigateToAddEmployee() {
    await this.pimMenu.click();
    await this.page.waitForSelector("//li[contains(.,'Add Employee')]",{timeout:5000})
   await this.addemployee.click();
   await this.page.waitForSelector("//h6[contains(.,'Add Employee')]",{timeout:5000});
    await expect(this.page).toHaveURL('https://opensource-demo.orangehrmlive.com/web/index.php/pim/addEmployee');
  }
  /** 
  *Adds an employee via the Add Employee form.
  *Returns after save completes and personl details is visible
  */
 async addEmployee({firstname,lastname,empid}) {
    await this.firstnameInput.fill(firstname);
    await this.lastnameInput.fill(lastname);
    if (empid){
        await this.employeeIdInput.fill(empid)

    }
    //upload profile pic
    await this.profilePicUpload.setInputFiles('testdata/uploadfiles/dog.jpg');
    await this.saveButton.click();
    // wait for Personal Details or a URL change that indicates success
    await this.personalDetailsHeader.waitFor({ timeout: 5000 });
  }
 }
  
