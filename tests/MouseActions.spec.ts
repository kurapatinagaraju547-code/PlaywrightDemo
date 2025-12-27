import {test,expect, Locator} from '@playwright/test'
/* 
Generally we do mouse actions like 
Mouse hover ==> we have the hover() directly use that one
Right click  ==> in click() method it self we have right and left and middle
Double Click ==> dblclick()
drag and drop ==> here which one is need to drag is called as Source element & Where we need to place that is called as Target element
Scrolling (Horizontally & Vertically) => this will take care by Playwright it self no need to work on this
If we handle manually in selenium and playwright it's complex
*/
test.slow();
test("Vrify the mouse actions ",async({page})=>{
    //open the URL
    await page.goto("https://testautomationpractice.blogspot.com/");
    //find the element
    const dd_element = page.locator(".dropdown");
    await dd_element.hover();
    const laptops = page.locator(".dropdown-content a:nth-child(2)");
    await laptops.hover();

    //Right click
    const right_click = page.locator("#name");
    await right_click.click({button:'right'});
    //await right_click.click({button:'left'});
    //await right_click.click({button:'middle'});

    //Double click
    const target_element = page.locator("#field2");
    const double_click_element = page.locator("button[ondblclick$='myFunction1()']");
    await double_click_element.dblclick();
    //await expect(target_element).toHaveValue("Hello World!");

    //Drag and drop
    //Firstly we find the source element
    const source_elmnt = page.locator("#draggable");
    const target_elmnt = page.locator("#droppable");
    await source_elmnt.hover();
    await page.mouse.down();
    await target_element.hover();
    await page.mouse.up();

    //2nd way to implement the drag and drop
    //await source_elmnt.dragTo(target_element);

    await page.waitForTimeout(8000);


})
