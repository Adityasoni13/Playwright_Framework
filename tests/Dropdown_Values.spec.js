const{test, expect} = require("@playwright/test")
const { log } = require("node:console")

test("Veirfy the functionility of the dropdown values", {tag:'@regression'} , async function ({page}) {
    
    await page.goto('https://testautomationpractice.blogspot.com/')

    // Select the dropdown values from label, Value and index

    await page.locator('//select[@id="country"]').selectOption({label:"India"})

    // Select the dropdown values from label, Value and index
    await page.waitForTimeout(2000)
    await page.locator('//select[@id="country"]').selectOption({value:"usa"})

    // Select the dropdown values from label, Value and index
    await page.waitForTimeout(2000)
    await page.locator('//select[@id="country"]').selectOption({index:4})

    // Verify the Option value exist or not
    const DropDown_Values = await page.locator('//select[@id="country"]').textContent()
    console.log(DropDown_Values);
    
    expect(DropDown_Values.includes('India')).toBeTruthy()

    // Veirfy the Dropdown option from FOR loop

    let State =await page.$('#country')
    let AllStateElement =await State.$$('option')

    let Dropdown_Present_Status = false

    for(let i=0; i<AllStateElement.length; i++)
    {
        let element =AllStateElement[i]
        
        let DropValue =await element.textContent()

        if (DropValue.includes('Australia'))
        {
            Dropdown_Present_Status = true
            break
        }

        console.log("Dropdown Values : "+ DropValue)
        
    }
    expect(Dropdown_Present_Status).toBeTruthy()
    console.log(Dropdown_Present_Status);
    
    // Select the multiple dropdown option from the dropdown

    await page.locator('#colors').selectOption(['Red','Green'])
    await page.waitForTimeout(3000)
})