import {test,expect,Locator} from '@playwright/test'
/*
Auto Waiting:
=> Basically this auto wait time concept is works for actions and assertions.
=> For example if you wright the logic for some functionality then before executing the main actions palywright is perform the some actionable checks
like the element is visble or not & stable or not ...etc. If these all actionable checks pass then main action excute successfully.
If those actionable checks fail anything then main execution also not excuted in this case throw the timeout error.
This all actionable checks available in the palywright official website
=> And playwright default time out is 30 seconds
for assertions 5 seconds
for actions 30 seconds
*/
test.only("Verify the Autowaits",async({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com/");
    await expect(page).toHaveURL("https://testautomationpractice.blogspot.com/");
    expect(page.locator("h1[class='title']")).toBeVisible();
    //Actions:
    await page.locator("#name").fill("Ram");
    await page.locator("#email").fill("Laxman");

    //Here assertions purpose default time is 5 seconds
    //for actions purpose 30 seconds

    /*
    We can perform the main action directly without wait for all actionable checks So, in that case we use the force action.
    And this force option apply on actions only.
    Now it's not execute all pre defined actionable checks here directly perform the main action
    */
    await page.locator("#phone").fill("3456789098",{force:true});
    await page.locator("#textarea").fill("This test message",{force:true});

})
/*
Here timeouts means like how much time you want that time you configure for your test for test and assertions also
And we can configure the timeout for suite level also for this we configure timeout in Config file
In suite level:
test:
timeout:8000,
assertion:
expect:{timeout:5000},
*/
test("Verify the timeouts",async({page})=>{
    test.setTimeout(6000); //wait 60 seconds
    await page.goto("https://www.demoblaze.com/");
    await page.locator("#signin2").click();
    //for assertions in test level
    await expect(page.locator("#login2")).toBeVisible({timeout:2000});
    await expect(page.locator("#login2")).toBeEnabled({timeout:2000});
})

//For example you will configure one time in suite level(Global level) & in test level declare different time So, in this case only test level timeouts should be consider
//because the test level declare timeouts override by the suite level timeouts
/* And if you want to triple the playwright default time then use bellow command in test level
test.slow(); // 30*3 = 90 seconds
*/

/* Assertions:
=> basically we have 2 types of assertions
1)Auto-retrying assertions:
* it's follow the auto timewaits
* And it's follow the async that's why we use await before the assertion
*  And mostely this assertions using on locator & page
ex: await expect(page).toHaveUrl("url");
await expect(locator).click();

2)Non-retrying assertions:
* it's not follow the auto timewaits
* also it's not follow the async
* and here no need to use await means it's not follow the async
* and mostly we use on values
ex: expect(value).toBe();
toBeTruthy(); //generally to comapre the actual value in that case we use the tobetruthy()
*/