const{test, expect} = require("@playwright/test")
const LoginPage = require("../pages/LoginPage");
const HomePage = require("../pages/HomePage");

test("Verify the Login Functionility", async function ({page}) {
    
    await page.goto("https://freelance-learn-automation.vercel.app/login")

    const loginPage = new LoginPage(page)

    await loginPage.LoginToApplication()

    await page.pause()

    await loginPage.VerifyManageOption()

    const homepage = new HomePage(page)

    await homepage.SignOutToApplication()

    await homepage.VerifyTheSignOut()

});