const{test,expect} =require("@playwright/test")

test("Verify the Invalid Login Error Message", async function ({page}) {

    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
    
    await page.getByPlaceholder("Username").fill('Admin')

    await page.locator("//input[@type='password']").fill('admin1235')

    await page.locator('//button[@type="submit"]').click()

    const ErrorMessage =await page.locator('//p[contains(@class,"alert-content-text")]').textContent()

    console.log("Error Message:" + ErrorMessage)

    // Its give true if error message contains "Invalid" substring
    await expect(ErrorMessage.includes("Invalid")).toBeTruthy()

    await expect(ErrorMessage==="Invalid credentials").toBeTruthy()
})