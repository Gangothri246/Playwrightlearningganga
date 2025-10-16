
import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/pom.po.js';


test.describe('Add Employee (POM)', () => {
    test('login and add a new employee', async ({ page}) => {
        const login = new LoginPage(page);
        await login.goto();
        await login.verifylogo();
        //use env vars set in your .env
        await login.login(process.env.APP_USERNAME, process.env.APP_PASSWORD);
        await login.navigateToAddEmployee();
  await login.addEmployee({ firstname: 'Ganga', lastname: 'R', empid: '1235' });
    await login.profilePicUpload.setInputFiles('testdata/uploadfiles/dog.jpg');
        await expect(login.personalDetailsHeader).toBeVisible();

    });
});




//     test.beforeEach(async ({ page }) => {
//         login = new LoginPage(page);
//         await login.goto();

//         //use env vars set in yours .env 
//         await login.login(process.env.APP_USERNAME, process.env.APP_PASSWORD)
//         //ensure we reached dashboard
//         await expect(page).toHaveURL('https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index');

//     });
//     for (const [key, emp] of Object.entries(Employees)) {
//         test(`Add Employee -${key} (${emp.firstname} ${emp.lastname})`, async ({ page }) => {

//             // POM method to navigate to Add Employee
//             await login.navigateToAddEmployee();

//             // fill and save employee
//             await login.addEmployee({
//                 firstname: emp.firstname,
//                 lastName: emp.lastname,
//                 employeeId: emp.empid,
//             });

//             // verify Personal Details (or other post-save indicator)
//             await expect(login.personalDetailsHeader).toBeVisible();
//             // optional: verify displayed name
//             await expect(page.locator("//h6[contains(.,'Personal Details')]/following::div//label")).toBeVisible();
//         });
//     }
// });















