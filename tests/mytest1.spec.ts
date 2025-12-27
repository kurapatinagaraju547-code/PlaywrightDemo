//Intially I'm creating the file with extension of .spec.ts
//When where you start the test with in the new file you need to import two things (test & expect)
//Here playwright is act as a module >> that palywright is present inside the node_modules package
import {expect, test} from "@playwright/test";
import { Expect } from "@playwright/test";
// or you write both modules import in sinle line also
//import {test,expect} from "@playwright/test";

//And you can create n no"of test inside the single file
//but test have proper syntax
//Fixture --> means global variable

//program to capture the page title
test('Verify the page title',async({page})=>{
//launch the URL
await page.goto("https://ehndevehr.azurewebsites.net/#/login");
let page_title:string = await page.title();
console.log(page_title);

//write one assertion
await expect(page).toHaveTitle("EHNOTE | Redefined Electronic Health Record System ");
})


