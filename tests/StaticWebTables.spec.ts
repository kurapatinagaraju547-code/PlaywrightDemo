import {test, expect, Locator } from '@playwright/test'

//static web tables
test("Verify the tables",async ({page})=>{
    //Open the URL
    await page.goto("https://testautomationpractice.blogspot.com/");
    //Find the atble
    const table:Locator = page.locator("table[name='BookTable']");
    //just check the table visible or not purpose use assertion (toBeVisible())
    await expect(table).toBeVisible();
    //Now find the tr elements inside the table so, here you can use the chainig the locator also because we already find the table
    const tr_elements: Locator = page.locator("table[name='BookTable'] tr");
    //Now count the rows here if use toHaveCount() method you need to pass exact count of the rows if give wrong then remaining statements also not executed
    await expect(tr_elements).toHaveCount(7);
    /* Directly using the Count() method here you no need to pass the exact rows number
    const res:number = tr_elements.count();
    console.log(res);
    expect(res).toBe(7);
    */

    //Now count the td elemets inside the tr elements
    //always td elements also part of tr elements and here I'm using chaining the locator so, we are already find the tr elements so, on that chaining the locator
    const columns:Locator = tr_elements.locator("th");
    //here using the tohaveCount() assertion and we can directly use the count also
    await expect(columns).toHaveCount(4);


    //read the entire data from particular row using nth() function
    const particular_row:Locator = tr_elements.nth(2).locator("td");
    const row_values: string[]= await particular_row.allInnerTexts();
    console.log(row_values);
    await expect(particular_row).toHaveText(["Learn Java","Mukesh","Java","500"]);

    // Read all rows from the table
    //here already we find the tr elements so, directly apply the all() it will return the array
    //here all tr elements will be return like array and stored in entire table array
    const entire_table = await tr_elements.all();
    //const entire_table:Locator[] = await tr_elements.all();
    for(let row of entire_table){

    // get all td text values *for the current row*
    const columns= await row.locator("td").allInnerTexts();

    //console.log(columns);
    // print values separated by tab means one white space
    console.log(columns.join("\t"));
    
    }

    await page.waitForTimeout(10000);

})