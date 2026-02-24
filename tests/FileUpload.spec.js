const{test, expect} = require("@playwright/test")

test("Perform the Hover functionility", {tag:'@regression'} , async function ({page}) {
    
    await page.goto('https://testautomationpractice.blogspot.com/')

    // Upload the single file (static way)
    await page.locator('#singleFileInput').setInputFiles('C:/Users/Spanidea-LT61/Pictures/Screenshots/Screenshot1.png')
    await page.locator('//button[contains(text(),"Upload Single File")]').click()
    await page.waitForTimeout(5000)

    // Upload the single file (Dynamic way)
    await page.locator('#singleFileInput').setInputFiles('./Uploads/Screenshot2.png')
    await page.locator('//button[contains(text(),"Upload Single File")]').click()
    await page.waitForTimeout(5000)

    // Upload the multiple files
    // await page.locator('#multipleFilesInput').setInputFiles(['Screenshot1.png','Screenshot2.png'])
    // await page.locator('//button[contains(text(),"Upload Multiple Files")]').click()
    // await page.waitForTimeout(5000)
})