import {test,expect} from '@playwright/test';
/*
If you have only limited test data then directly mention in the test level
but you have multiple test data then we use the parameterization concept
Or use some external files like: json,csv,excell
Mostly json is prefered
*/

/*
Using json files: the data inside the json like array
We need to import the fs => we use while using the files
And it's built in method in java script & type script
*/
import fs from 'fs';
//Reading the data from json
const jsonpath = 'files/excel-to-json.json'; // here while passing the json path we use the (/) forward slash fow windows and mac use backword slash (\)
const logindata:any =JSON.parse(fs.readFileSync(jsonpath,'utf-8'));

test.describe("Test the login functionality with data driven test",async() =>{
for(const[username, password, validity] of logindata){
test(`login test ${username} and ${password}`, async({page})=>{
await page.goto("https://flights.qedgetech.com/");
//need to write the logic
await page.locator("input[placeholder='Email ID']").fill(username);
await page.locator("input[placeholder='Password']").fill(password);
await page.locator("button[type='submit']").click();

if(validity.toLowerCase() === "valid"){
    const name = page.getByRole('link', { name: 'Nagaraju kurapati' });
    await expect(name).toHaveText("Nagaraju kurapati");
}
else{
    const alert = page.locator('.alert.alert-danger');
await expect(alert).toBeVisible();
}


})
}
})




