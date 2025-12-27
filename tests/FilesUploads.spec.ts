import {test, expect, Locator} from '@playwright/test'
/*
In playwright we special method is available for the sigle file upload and multiple files upload
that is .setInsertFile("location")
*/
test("Verify the signle file upload functionality", async({page})=>{
    //open the URL
    await page.goto("https://davidwalsh.name/demo/multiple-file-upload.php");
    await page.locator("#filesToUpload").setInputFiles("C:\\Users\\NagarajuKurapati\\Downloads\\TestDhanurveda1764153459270.pdf");
    const uploaded_file = page.locator("#fileList");
    expect(uploaded_file).toContainText("TestDhanurveda1764153459270.pdf");
    console.log("Test Pass");

    await page.waitForTimeout(5000);

})

test("Verify files upload in automationpractice app",async({page})=>{
    //Open the URL
    await page.goto("https://testautomationpractice.blogspot.com/");
    page.locator("#singleFileInput");
})