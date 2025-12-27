/*css selector:
basically css selectors 2 types
1) absolute css selector : mostly we don't use this in real time
2) relative css selecetor
generally css selector is faster than xpath
we have different combinations to use this css selectors
1) tag along with id ==> tag#id or #id       ( google page search box expamle: textarea#APjFqb)
2) tag along with class ==> tag.class or .class   (google page search bar example : textarea.gLFyf)
3) tag along with other attribute ==> tag[attribute='value']    (example: textarea[name='q'])
4) tag along with class and attribute ==> tag.class[attribute='value']   (example: textarea.gLFyf[id='APjFqb'])
*/
import {test,expect, Locator} from '@playwright/test';
test('Verify CSS selectors', async({page})=>{
// Step 1: Open Amazon
await page.goto("https://www.amazon.com/")

 // Step 2: Wait 5 seconds (not always necessary, but okay for demo/testing)
await page.waitForTimeout(5000);

//await expect (page.locator("input#twotabsearchtextbox")).toBeVisible();

// Step 3: Define locator for search box
const searchbox: Locator = page.locator("input#twotabsearchtextbox");

// Step 4: Fill the search box with text
await searchbox.fill('i phones');

});

test('Verify css selectors in google page', async({page}) =>{

// Step 1: Open google
await page.goto("https://www.google.com/")

 // Step 2: Wait 5 seconds (not always necessary, but okay for demo/testing)
await page.waitForTimeout(5000);



// Step 3: Define locator for search box
const search_box: Locator = page.locator("textarea[class='gLFyf']");

// Step 4: Fill the search box with text
await search_box.fill('Hyderabad');



})