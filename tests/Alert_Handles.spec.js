const{test, expect} =require("@playwright/test")

test("Handle Web Alert", async function ({page}) {
    
    await page.goto('https://the-internet.hackerearth.com/javascript_alerts')
    
    // 'page.on' provides the listners or we can handle the perticular alerts 
    page.on('dialog', async function (alert) {
        
        expect(alert.type()).toContain("alert")
        expect(alert.message()).toContain("I am a JS Alert")
        await alert.accept()

    })

    await page.locator('button[onclick="jsAlert()"]').click()

})

test("Handle Confirm Alert", async function ({page}) {
    
    await page.goto('https://the-internet.hackerearth.com/javascript_alerts')
    
    // 'page.on' provides the listners or we can handle the perticular alerts 
    page.on('dialog', async function (dialog_Window) {
        
        expect(dialog_Window.type()).toContain("confirm")
        expect(dialog_Window.message()).toContain("I am a JS Confirm")
        await dialog_Window.dismiss()

    })

    await page.locator('button[onclick="jsConfirm()"]').click()

})


test("Handle Prompt Alert", async function ({page}) {
    
    await page.goto('https://the-internet.hackerearth.com/javascript_alerts')
    
    // 'page.on' provides the listners or we can handle the perticular alerts 
    page.on('dialog', async function (Prompt_dialog) {
        
        expect(Prompt_dialog.type()).toContain("prompt")
        expect(Prompt_dialog.message()).toContain("I am a JS prompt")
        await Prompt_dialog.accept('Aditya_Automation')

    })
   
    await page.locator('button[onclick="jsPrompt()"]').click()
    await page.waitForTimeout(5000)

    expect(page.locator("(//p[@id='result'])[1]")).toBeTruthy()
    expect(page.locator("(//p[@id='result'])[1]").textContent("Aditya_Automation"))
})