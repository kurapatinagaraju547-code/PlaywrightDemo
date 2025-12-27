import {test,expect,Locator} from '@playwright/test'
/* generally we have different type os keyboard actiols like:
insertText => is to pass text into text box fields
down
press ==> is combination od up and down
type
up
*/
test("Verifying the keyboard actions:",async({page})=>{
    //open url
    await page.goto("https://testautomationpractice.blogspot.com/");
    //Find the text box element
    const text_box = page.locator("#input1");
    await text_box.focus();
    //Now pass some text into text box field using inserttext()
    await page.keyboard.insertText("Ram");
    expect(text_box).toHaveValue("Ram");

    //now select that entire value (cntl+A)
    await page.keyboard.press('Control+A');
    //Control+C
    await page.keyboard.press('Control+C');

    const second_tb = page.locator("#input2");
    await second_tb.focus();
    //Control+V
    await page.keyboard.press('Control+V');
    await page.waitForTimeout(4000)
})