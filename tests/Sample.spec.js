const{test, expect} =require('@playwright/test')

test("My First Test Case",async function({page}) {
    
    expect(100).toBe(100)

})

test.skip("My Second Test Case",async function({page}) {

    expect(10).toBe(101)

})

test("My Thrid Test case wit h tag Name",{
   tag: '@smoke',
   },
    async function ({page}) {
    expect(2.0).toBe(2.0)
})