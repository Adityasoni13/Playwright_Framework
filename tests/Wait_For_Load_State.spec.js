const{test, expect} =require("@playwright/test")

test("Wait for Daynamic network to load", async function ({page}) {
    
    await page.goto("https://freelance-learn-automation.vercel.app/login")

    await page.locator('//a[@class="subLink"]').click()

    // Wait for Daynamic network to load
    await page.waitForLoadState('networkidle')

    const Element_count = await page.locator('//input[@type="checkbox"]').count()

    expect(Element_count).toBe(5)

})