const{expect} = require("@playwright/test")
class LoginPage {

    constructor(page) {
        
        this.page = page
        this.ManageOption = page.locator("//span[normalize-space()='Manage']")
        this.Username = page.locator("//input[@id='email1']")
        this.Password = page.locator("//input[@id='password1']")
        this.loginButton = page.locator("//button[normalize-space()='Sign in']")

    }

    async LoginToApplication(user_name, password)
    {

        await this.Username.fill(user_name)
        await this.Password.fill(password)
        await this.loginButton.click()
    }

    async VerifyManageOption()
    {
        await expect(this.ManageOption).toBeVisible()
    }

}

module.exports=LoginPage;