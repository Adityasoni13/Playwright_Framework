const{test,expect} =require('@playwright/test')

test("Verify the Application Title", async function ({page}) {

    await page.goto("https://www.google.com")
    const URL = await page.url()
    console.log("Application URL:" + URL)
    expect(page).toHaveURL("https://www.google.com/")

    const Title = await page.title()
    console.log("Application Title:" +Title)
    expect(page).toHaveTitle("Google")
    
})