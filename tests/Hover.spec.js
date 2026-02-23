const{test, expect} = require("@playwright/test")

test("Perform the Hover functionility", {tag:'@regression'} , async function ({page}) {
    
    await page.goto('https://testautomationpractice.blogspot.com/')

    await page.locator('//button[@class="dropbtn"]').hover({force:true});   //forcefuly hover that locator 

    await page.locator('//a[contains(text(),"Mobiles")]').click();
})