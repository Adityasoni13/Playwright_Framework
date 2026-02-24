
const{test, expect} = require("@playwright/test")
const { log } = require("node:console")

test("Static AutoSuggestion handle", {tag: '@flaky_Test_Case'}, async function ({page}) {
    
    await page.goto("https://www.google.com")

    await page.locator('//textarea[@aria-label="Search"]').fill("Automation")

    await page.waitForSelector('//ul//li[@role="presentation"]')

    await page.keyboard.press('ArrowDown')

    await page.keyboard.press('ArrowDown')

    await page.keyboard.press('Enter')

    await page.waitForTimeout(2000)

})


test.only("Daynamic AutoSuggestion handle", {tag: '@flaky_Test_Case'}, async function ({page}) {
    
    await page.goto("https://www.google.com")

    await page.locator('//textarea[@aria-label="Search"]').fill("Automation")

    await page.waitForSelector(".erkvQe")

    const Auto_Suggession_Elements = await page.$$(".erkvQe")    

    //search for matching element one by one by using for loop
    for(let i =0; i<Auto_Suggession_Elements.length; i++)
    {
        const text =await Auto_Suggession_Elements[i].textContent()

        if(text.includes('testing'))
        {
            // console.log(text);
            await Auto_Suggession_Elements[i].click()    
            break
        }
    }

    // await page.waitForTimeout(30000)
})