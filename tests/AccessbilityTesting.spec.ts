import {test,expect} from '@playwright/test';
/*
playwright test the many tupes of accessbility issues and few are:
1) test that would be hard to read the users due to poor colours and background effects
2)UI elements without lables...etc
Basically playwright is follow the WCAG(web content accessbility guidelince)
And with in the WCAG guidelince have multiple scenarios. it's very difcult to test all scenarios manually
Few issues coved by WCAG guidelince
1) Missing alt text on images
2) Poor colour contrast
3)Missing labels on forms
4) inaccessible keyboard navigations
First of all we need to install the axe core package
=> npm install @axe-core/playwright
*/
import AxeBuilder from '@axe-core/playwright';
test("Verify the accessbuilty testing", async({page})=>{
    await page.goto("https://www.w3.org/");
    //while scanning the application only it's detect all types WCAG guidelinces on the page for all elements.
    const res = await new AxeBuilder({page}).analyze();
    //analyze method will analyse the all wcag guidelinces
    console.log(res);
    //Basically it's return the all in json format on console
    //we wright the assesrtions also here we expect 0 wcag violations.
   // expect(res.violations).toEqual([]);
    //or
    expect(res.violations.length).toEqual(0);


})

//As of now we apply the wcag guidelince on page level
//And we can verify the particular specific type of violations also
/*
await res = await new AxeBuilder({page}).withTags(['wcag2a','wcag2aa','wcag21a','wcag21aa']).analyze();
console.log(res);
expect(res.violations.length).toEqual(0);
*/

