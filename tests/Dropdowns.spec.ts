import { test, expect, Locator } from '@playwright/test'
//We have tow types of dro-downs
//1) single selcetion drop-down & 2) Multi selection drop-down
/* Single selection dro-down
Here we have diffrent ways to select dro-down value
1) Visible TExt
2) Value attribute
3) Using Label
4) Using Index
*/
test("Verify the single drop-down", async ({ page }) => {
    //Open the URl
    await page.goto("https://testautomationpractice.blogspot.com/");
    //Firstly I'm identify the drop-down field by using the css selector
    const drop_down: Locator = page.locator('#country');
    //select the drop-down value using visible text so I'm using selectOption() method
    drop_down.selectOption('United States');
    //Here using the value attribute
    drop_down.selectOption({ value: 'usa' });
    //Here using the label
    drop_down.selectOption({ label: 'India' });
    //Here I'm using the index
    drop_down.selectOption({ index: 4 });

    //Find the all drop-down values
    const all_dd:Locator =  page.locator("#country>option");
    //now check the count of the drop-down values using tohavecount() => here you pass exact number of elements
    await expect(all_dd).toHaveCount(10);

    /*Now I want to capturing all drop-down options text
    if you want capture a single option then use the TextContent()
    if you want to capture a grop of options then use allTextContents()
    */
    //here alltextcontents return the array on top of the array i'm apply the map and each element in array i'm stored in a result finnaly i'm applay trim method
    const optionstext:string[] =(await all_dd.allTextContents()).map(result => result.trim());
    console.log(optionstext);

    //now i want to check a particular text is present in array or not for this use tocontain() method
    expect(optionstext).toContain("Japan");

    //printing the options form the drop-down
    for(const option of optionstext){
        console.log(option);
    }
await page.waitForTimeout(5000);
})


test.only("Verify the multi selecton drop-down",async({page})=>{
    //Open the URl
    await page.goto("https://testautomationpractice.blogspot.com/");
    //Firstly I'm identify the drop-down field by using the css selector
    const multi_dd: Locator = page.locator('#colors');
    //select the drop-down value using visible text so I'm using selectOption() method
    multi_dd.selectOption(['Red','Blue','Green']);
    //Here using the value attribute
    multi_dd.selectOption(['red','green']);
    //Here using the label
    multi_dd.selectOption([{label:'Red'},{label:'Green'}]);
    //Here I'm using the index
    //multi_dd.selectOption([{ index:1},{index:2}]);

    //find all drop-down values and stored in one variable
    const all_options:Locator = page.locator("#colors>option");
    //here alltextcontents return the array on top of the array i'm apply the map and each element in array i'm stored in a result finnaly i'm applay trim method
    const multi_dd_text:string[] =(await all_options.allTextContents()).map(res => res.trim());
    console.log(multi_dd_text);
    //now i want to check a particular text is present in array or not for this use tocontain() method
    expect(multi_dd_text).toContain("Green");
    //print all options using for of loop 
    //for of loop basically use on arrays
    for(const a of multi_dd_text ){
        console.log(a);
    }
await page.waitForTimeout(5000);
})
    


