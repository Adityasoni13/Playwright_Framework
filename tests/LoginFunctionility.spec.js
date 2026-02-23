const{test,expect} =require("@playwright/test")

test("Verify the Login Functionility", async function ({page}) {
    
    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")

    console.log(await page.viewportSize().height)
    console.log(await page.viewportSize().width)

    await page.getByPlaceholder("Username").fill('Admin')

    await page.locator("//input[@type='password']").fill('admin1234')

    await page.locator('//button[@type="submit"]').click()

    await page.waitForTimeout(5000)

    await expect(page).toHaveURL('https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index')

    await page.getByAltText("client brand banner")

    // now need to logout from the Application
    await page.getByAltText("profile picture").first().click()

    await page.locator('//li/a[contains(text(),"Logout")]').click()

    await page.waitForTimeout(5000)

    await expect(page).locator('//*[@id="app"]/div[1]/div/div[1]/div/div[2]/h5')
})