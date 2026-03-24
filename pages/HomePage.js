const { expect } = require("allure-playwright")

class HomePage {
    constructor(page) {

        this.page = page
        this.SignInHeader = page.locator("//h2[normalize-space()='Sign In']")
        this.menuicon = "img[alt='menu']"
        this.logoutOption = "button[class='nav-menu-item']"
        this.ManageOption = "//span[normalize-space()='Manage']"
        this.ManageCategory = "//a[normalize-space()='Manage Categories']"
        this.cartOption = "//button[normalize-space()='Cart']"
        this.AfterCartOption = "//button[@class='cartBtn']"
        this.ShopNowOption = "//button[normalize-space()='Shop Now']"
        this.PlayWright_AddToCartOption = "//div[4]//div[2]//button[1]"
        this.Selenium_AddToCartOption = "//div[@class='container-child']//div[2]//div[2]//button[1]"
        this.Remove_Selenium_From_Cart = "//div[@class='cart-container']//div[2]//div[2]//button[1]"
        this.EnrollNowOption = "//button[normalize-space()='Enroll Now']"
        this.AddressOption = "//textarea[@id='address']"
        this.PhoneNumberOption = "//input[@id='phone']"
        this.EnrollNow = "//button[@class='action-btn']"

    }

    async SignOutToApplication () {

        await this.page.click(this.menuicon)
        await this.page.click(this.logoutOption)

    } 
    async VerifyTheSignOut () {

        await expect(this.SignInHeader).toBeVisible()

    } 

    async ClickOn_ManageCategory(){
        await this.page.locator(this.ManageOption).hover({force:true})
        await this.page.locator(this.ManageCategory).click()
    }

    async Verify_Cart_Functionilty(){
        await this.page.click(this.cartOption)
        await this.page.click(this.ShopNowOption)
        await this.page.click(this.PlayWright_AddToCartOption)
        await this.page.waitForTimeout(2000)
        await this.page.click(this.Selenium_AddToCartOption)
        await this.page.click(this.AfterCartOption)
        await this.page.waitForTimeout(2000)
        await this.page.click(this.Remove_Selenium_From_Cart)
        await this.page.click(this.EnrollNowOption)
        await this.page.waitForTimeout(2000)
        await this.page.fill(this.AddressOption, "Pune")
        await this.page.waitForTimeout(2000)
        await this.page.fill(this.PhoneNumberOption, "9876543210")  
        await this.page.click(this.EnrollNow)


    }
}

module.exports=HomePage;