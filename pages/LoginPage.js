const{expect} = require("@playwright/test")
class LoginPage {

    constructor(page) {
        
        this.page = page
        this.ManageOption = "//span[normalize-space()='Manage']"
        this.username = "//input[@id='email1']"
        this.password = "//input[@id='password1']"
        this.loginButton = "//button[normalize-space()='Sign in']"

    }

    async LoginToApplication()
    {

        await this.page.fill(this.username,"admin@email.com")
        await this.page.fill(this.password,"admin@123")
        await this.page.click(this.loginButton)
    }

    async VerifyManageOption()
    {
        expect(this.page.locator(this.ManageOption).toBeVisible())
    }

}

module.exports=LoginPage;