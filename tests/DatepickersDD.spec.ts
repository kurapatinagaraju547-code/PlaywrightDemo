import {test, expect, Locator} from '@playwright/test'
//Here date pickers you have to select the month and year from the drop-down
//Initially you find the drop-down values then again compare your values if it's not match then select from the drop-downs
test("Verify the datepickers",async({page})=>{
    //open the url
    await page.goto("https://testautomationpractice.blogspot.com/");
    const DOB_Field:Locator = page.locator("#txtDate");
    expect (DOB_Field).toBeVisible();
    expect(DOB_Field).toBeEnabled();
    await DOB_Field.click();
    const year = '2000';
    const month = 'Feb';
    const date = '11';
    while(true){
        //intially showing the current month by default >> compare my month variable to that value if it's not matching then go and select
        const current_month = await page.locator(".ui-datepicker-month").textContent();
        const current_year = await page.locator(".ui-datepicker-year").textContent();
        if(current_month === month && current_year === year){
            break;
        }
        else{
            const all_months = page.locator(".ui-datepicker-month>option");
            const all_years = page.locator(".ui-datepicker-year>option");
            all_months.selectOption()

        }
        


    }
})

