const{test, expect} = require('@playwright/test')
const LoginPage = require('../pages/LoginPage')
const HomePage = require('../pages/HomePage')


test("Verify the Manage Category Option", async function ({page}) {


    await page.goto("https://freelance-learn-automation.vercel.app/login")

    const loginPage = new LoginPage(page)

    await loginPage.LoginToApplication('sn.adi@gmail.com', 'admin@123')

    const homepage = new HomePage(page)

    await homepage.Verify_Cart_Functionilty()

})