import {test,expect, Locator} from "@playwright/test"

test("Verify the autosuggest drop-downs simply ajax",async ({page})=>{

    //Open the url
    await page.goto("https://www.flipkart.com/");
    //intially identify the search element and pass some text
    page.locator("input[name = 'q']").fill("Electric");
    // find the all values into one array
    // ul>li

    await page.waitForTimeout(4000);

 
})

test("Verifying the difference b/w innertext and textcontent",async({page})=>{
    //open the url
    await page.goto("https://demowebshop.tricentis.com/");
    //find the all products using css selectior with class
    const products:Locator = page.locator(".product-title");
    //now I want to print any one of the product name using the nth function with help of innertext or textcontent
    console.log(await products.nth(1).innerText());
    /*or you can store in a separate variable and print also
    const res = await products.nth(1).innerText();
    console.log(res);
    */

    //using textcontent()
    console.log(await products.nth(1).textContent());

    //The major difference is inner text is print value exact paln text but coming to textcontent is print all white spaces and hidden spaces also
    //if you want to print the count of products using count method
    const count:number =await products.count();
    console.log(count);
    //Now i want print all products names using for loop 
    //here we can't able to use the for of and for in loop because products we are not stored in a array
    //So we use the traditional for loop
    for(let i=0;i<count;i++){
        const product_name : string = (await products.nth(i).innerText());
        console.log(product_name);

    }
    /* We can return all product names or group of web elements without using the for loop also for that we use the allInnerText()/allTextContent()
    The same difference between allInnerText() & allTextContent()
    allInnerText() is return plane text means exact plan text but allTextContent() is return the line breaks & hidden values and spaces\
    */
   const allProduct_names: string[] = await products.allInnerTexts();
   console.log(allProduct_names);

   const allprod_names : string[] = await products.allTextContents();
   const finalTrim_values:string[] =allprod_names.map(text => text.trim()); // This will gona remove the pre and post white spaces and print the extact values
   console.log(finalTrim_values);

   //so we store all products locatores in products variable that to locator type => now we convert that products to array
   const all_locators : Locator[] = await products.all();
   //now I want to print one locator based on index
   console.log(await all_locators[1].innerText());
   //Now We can use for of loop also because the we convert Locator  to Locator array
   for(let res of all_locators){
    console.log(await res.innerText());
   }

   /* Also we use for in loop also basically for in loop working based o  index
   for(let i in all_locators){
   console.log(await all_locators[i].innerText());
   }
   */



})