import {test,expect,Locator} from '@playwright/test'
//Most of the date pickers directlly accept the fill if it's not accept then we go with date picker calenders and select the date
//This date pickers like cliking on the next and previous buttons
test("Verify the date pickers selecting the Future Date",async({page})=>{
    //Open the website 
    await page.goto("https://testautomationpractice.blogspot.com/");
    const dob:Locator = page.locator("#datepicker");
    //await dob.fill("08/25/2020");

    await page.waitForTimeout(5000);
    await dob.click(); //when user click on that field then only open the date picker(calender)
    //here we maintain 3 variables
    const year = '2026';
    const month = 'February';
    const date = '11';
    while(true){
        const current_month = await page.locator(".ui-datepicker-month").textContent();
        const current_year = await page.locator(".ui-datepicker-year").textContent();
        if(current_month === month && current_year === year){
            break;
        }
        else{
            //if it's not match then click on the next button on the calender pop-up
            //for this firstly find the next button
            //await page.waitForTimeout(3000);
            await page.locator(".ui-datepicker-next").click();
        }
        //Now capture the all td values on the calender pop-up
        const all_dates = await page.locator(".ui-datepicker-calendar td").all();
        for(let i of all_dates){
            const res = await i.innerText(); // res is text, not an element so we cant click on string
            if( res === date){
                await i.click();
                break;
            }
        }
    }

   await page.waitForTimeout(8000);

})