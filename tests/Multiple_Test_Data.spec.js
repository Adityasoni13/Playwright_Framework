const {test, expect} = require("@playwright/test")

const TestData = JSON.parse(JSON.stringify(require("../test_data.json")))
const Multiple_test_data = JSON.parse(JSON.stringify(require("../Multiple_Test_Data.json")))

test.describe("Data Driven Testing", function ()
{  

        for(const data of Multiple_test_data) 
        {

            test.describe(`Login with Multiple User ${data.id}`, async function () {
                
                test("Login the Application with multiple test data", async function ({page}) {
    
                    await page.goto("https://freelance-learn-automation.vercel.app/login")

                    await page.locator('//input[@name="email1"]').fill(data.email)

                    await page.locator('//input[@name="password1"]').fill(data.password)

                    //fetch data from nested objects 
                    // await page.locator('//input[@name="password1"]').fill(Multiple_test_data.Address.Area)

                    //fetch data from Array
                    // await page.locator('//input[@name="email1"]').fill(Multiple_test_data.Intrest[0])

                })

      

            })

        }

})


test("Login the Application with test data Json", async function ({page}) {
    
    await page.goto("https://freelance-learn-automation.vercel.app/login")

    await page.locator('//input[@name="email1"]').fill(TestData.email)

    //fetch data from nested objects 
    await page.locator('//input[@name="password1"]').fill(TestData.Address.Area)

    //fetch data from Array
    await page.locator('//input[@name="email1"]').fill(TestData.Intrest[0])

    await page.pause()

})