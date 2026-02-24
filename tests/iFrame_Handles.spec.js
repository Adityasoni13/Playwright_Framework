const{test, expect} =require("@playwright/test")

test("Handles the frames and iframes", async function ({page}) {
    
    await page.goto("https://docs.oracle.com/javase/8/docs/api/")

    // framelocator which is store in the variable and we can use this variable for futhur iframe actions
    const iFrame_Locator =page.frameLocator('//frame[@name="packageListFrame"]')

    await iFrame_Locator.locator('//li//a[text()="java.applet"]').click()

    await page.pause()

})
