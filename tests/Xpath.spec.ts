/*
1) X-path means XML path
2) Generally X-path is working on DOM (Document Obh=ject Model)
3) Once the dom will loaded then X-path will working on that 
4) X-path used to locate the elements by using the properties and attributes
Generally we have 2 types of X-path's
1) Absolute X-Path (Full X-Path): full x-path like from root level
It's starts with single / 
ex: /html/body/header/div1/div2/div3........etc.
2) Relative X-Path (Partial x-Path): mostely used this one
=> this is more flexible to locate the elements
=> it starts with //
=> it's directly target the element
ex: //*[@name ='search']
//tagname[@id="XXXXXXX"]
//input[@value1="XXXXXXX" and @value2="XXXXXX"]  ==> both should match
//input[@value1="XXXXXX" or @value2="XXXXXXX"]  ==> any one need to match >> then xpath find the element
*/
import { test, expect, Locator } from '@playwright/test';
test("Verify the Xpath", async ({ page }) => {
    // Navigate to Amazon
    await page.goto("https://www.amazon.com/")
    // Wait for the page to load
    await page.waitForTimeout(5000);
    // Locate the search field using XPath
    const search_field: Locator = page.locator("//input[@id='twotabsearchtextbox']");

    // Verify that the search field is visible
    //await expect(search_field).toBeVisible();
    await search_field.click();
    await search_field.fill("Electronic devices");
    //Here fill is same like sendkeys() in selenium



})

