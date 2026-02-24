const{test, expect} =require("@playwright/test")

test("01_Handle Mutliple Tabs", async function ({browser}) {
    
    // Create a new incognito browser context.
    const context = await browser.newContext();
    // Create a new page in a pristine context.
    const First_Tab = await context.newPage()

    await First_Tab.goto('https://freelance-learn-automation.vercel.app/login')

    await First_Tab.waitForTimeout(3000)

    const[New_Tab] = await Promise.all([

                                    context.waitForEvent("page"),
                                    First_Tab.locator('(//a[@href="https://www.facebook.com/groups/256655817858291"])[1]').click()

                                       ])

    // New_Tab.waitForTimeout(3000)

    await New_Tab.locator('(//input[@name="email"])[2]').fill('sn.aditya22@gmail.com')

    // New_Tab.waitForTimeout(3000)

})

test("02_Handle Multiple Tabs", async function ({browser}) {
    
    // Privite window
    const context = await browser.newContext()
    // First New Tab
    const First_Tab = await context.newPage()

    await First_Tab.goto("https://freelance-learn-automation.vercel.app/login")

    const [New_Tab] = await Promise.all([
                context.waitForEvent("page"),
                First_Tab.locator("(//a[@href='https://twitter.com/MukeshOtwani'])[1]").click()
                ])
    
    New_Tab.locator('//span[contains(text(),"Log in")]').click()
    await New_Tab.locator('//input[@autocomplete="username"]').fill('sn.aditya22@gmail.com')
    
    await New_Tab.close()

    await First_Tab.locator('//input[@name="email1"]').fill("aditya@gmail.com")
    
})