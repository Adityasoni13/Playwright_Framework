const{test, expect} = require("@playwright/test")

test("Perform the Actions keyboard button functionility", {tag:'@regression'} , async function ({page}) {
    
    await page.goto('https://www.google.com')

    await page.locator('//*[@id="APjFqb"]').fill('Automation best framework')

    await page.keyboard.press("Enter")

    await page.waitForTimeout(10000)

})


test("Multiple keyboard actions", async function ({page}) {
    
    await page.goto('https://www.google.com')

    await page.locator('//*[@id="APjFqb"]').fill('Automation best framework')

    await page.keyboard.press("Control+A")

    await page.waitForTimeout(1000)

    await page.keyboard.press("Backspace")

    await page.waitForTimeout(2000)

})


test("keyboard Action Other functionility", async function ({page}) {

    await page.goto('https://www.google.com')

    await page.locator('//*[@id="APjFqb"]').focus()      //suppose the pointer is in different location then focus will used to focus on perticular element on the page
    
    await page.keyboard.type("Automation Testing!")      //keyboard.type() is used to type from keyboard
    await page.waitForTimeout(3000)

    await page.keyboard.press("ArrowLeft")               //press the key
    await page.waitForTimeout(3000)

    await page.keyboard.down("Shift")                    //It will hold the key 

    for(let i = 0; i<7; i++)
    {
        await page.keyboard.press("ArrowLeft")
    }
    await page.waitForTimeout(3000)

    await page.keyboard.press("Backspace")
    await page.waitForTimeout(3000)

    await page.keyboard.press("ArrowRight")

    await page.keyboard.press("Enter")

    await page.waitForTimeout(3000)
})