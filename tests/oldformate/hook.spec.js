import { test, expect } from '@playwright/test';

test.beforeEach(() => {
   console.log("Before Each Test")

})
  
test.beforeAll(() => {
   console.log("Before All Test")

})
test.afterEach(() => {
   console.log("after Each Test")

})
test.afterAll(() => {
   console.log("after ALL Test")
})

  test.skip("Test case 1",async ({page }) => {

 console.log("1st Test case ")

  })

  
  test("test case 2",async ({ page }) => {

 console.log("2nd Test case ")

  })
    
  test("test case 3",async ({ page }) => {

 console.log("3rd Test case ")

  })