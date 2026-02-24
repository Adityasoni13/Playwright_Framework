const { expect } = require("allure-playwright")

class HomePage {
    constructor(page) {

        this.page = page
        this.SignInHeader = "//h2[normalize-space()='Sign In']"
        this.menuicon = "//img[@alt='menu']"
        this.logoutOption = "//button[normalize-space()='Sign out']"

    }

    async SignOutToApplication () {

        this.page.click(this.menuicon)
        this.page.click(this.logoutOption)

    } 
    async VerifyTheSignOut () {

        expect(this.page.locator(this.SignInHeader).toBeVisible())

    } 

}

module.exports=HomePage;