import {test,expect,Locator} from '@playwright/test'
//i frames means with in the HTML document embaded another html document tht we called as i frame
/* Generally we have 3 ways to find the i frames
1) using the frame name attribute
2) using the frame URL
3) Or directly find any element which is present in the frame then automatically that frame should be highlighted
*/
test("Verify the i Frames",async({page})=>{
    //Open the URL
    await page.goto("https://iframetester.com/");
    //Initially i want count how many frames available with in the page
    const frame = page.frames();
    console.log("Total frames:",frame.length);
    const text_box = page.locator("#url-search");
    await text_box.fill("https://cognine.com/");
    await page.locator("button[onclick = 'submit()']").click();
    await page.waitForTimeout(10000);

})
