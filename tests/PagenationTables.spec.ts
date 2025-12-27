import {test,expect,Locator} from '@playwright/test';
//Pagenation tables also one of the tables to present all data in the form of pages.

//craeting the test
test("Verify the pagenation tables",async({page})=>{
    //open the URL
    await page.goto("https://www.amazon.in/");
    //Now find the search bar with css selector with id attribute
    const search_box:Locator = page.locator("#twotabsearchtextbox");
    await expect(search_box).toBeVisible();
    await expect(search_box).toBeEnabled();
    await search_box.fill("hp laptops touch screen");
    //wait for 5 seconds
    await page.waitForTimeout(10000);
})

test.only("Verifying the pagenation tables", async({page})=>{
    //creating onen variable
    let pages = true;
    //Open the URL
    await page.goto("https://datatables.net/examples/basic_init/alt_pagination.html");
    while(pages){
    //find the pagenation table
    const rows = await page.locator("#example_wrapper").all();
    for(let i of rows){
        //print the all rows present in the first page only
        console.log(await i.innerText());
        break;
    }
    //if we want to print all values then firstly find the next button and check it's enabled or not
    //here one condition when the next button is disabled mode that means there is no pages then we will stop the execution
    //firstly find the next button
    const next_button:Locator = page.locator("button[aria-label='Next']");

    //Now to get the class attribute of the element using getattribute method
    const class_att = await next_button.getAttribute('class');

    if(class_att?.includes("disabled")){
        pages = false;
        break;
    }
    else{
        next_button.click();
        await page.waitForTimeout(1000); // wait for next page to load

    }
    
    //Apply some filters and get the count of rows
    const dd:Locator = page.locator("#dt-length-0");
    await dd.selectOption('25');
    const result_rows = await page.locator("#example_wrapper tr").all();
    expect(result_rows.length).toBe(27);

    //Now I enetr some text into search bar and filter and print
    //Find the search element
    const s_b:Locator = page.locator("#dt-search-0");
    await s_b.fill("Stevens");
    const filter_rows = await page.locator('#example_wrapper tr').all();
    let match_found = false;
   if (filter_rows.length >= 1) {

    for (let a of filter_rows) {
        const text = await a.innerText();

        if (text.includes("Stevens")) {
            match_found = true;
            break;
        }
    }

    if (!match_found) {
        console.log("No data found..!");
    }
    }
    }
    await page.waitForTimeout(10000);
})