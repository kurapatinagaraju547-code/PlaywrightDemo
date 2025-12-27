import {test} from "@playwright/test"
import {expect} from "@playwright/test"
import {Locator} from "@playwright/test"
//Locator: means to find any any web elements purpose we use locators
// in playwright the locators are autowaited (if any element is not found then it's wait some time automatically)
/*
Playwrigt provided some built-in locators. those are:
1) page.getByAltText() --> it's used to identify or locate mostely images
And this Alt is attribute for images
*/
test("Verify the locators",async({page})=>{
await page.goto("https://demo.nopcommerce.com/");
const image:Locator = page.getByAltText("nopCommerce demo store");
await expect(image).toBeVisible();

/*
2) page.getByText() --> this is used to locate the elements by text content
You can match with either sub-string or exact string also
Here this elements non intractive elements
*/
await expect(page.getByText("Featured products")).toBeVisible(); // pass full string
await expect(page.getByText("Welcome to")).toBeVisible(); // pass sub-string
await expect(page.getByText(/Community\s+Poll/i)).toBeVisible(); // general format [ignore the case senstive purpose]\

/*
3) page.getByRole() --> It's not a attribute
Role loactor meams anything include buttons, checkboxes, headings, links, tables....etc.
*/
await page.getByRole("button",{name:'small-searchterms'}).click();
await page.getByRole("heading",{name: 'Welcome to our store'});

/*
4) page.getByLable() --> it's use to identify the elements by lable name
*/
//await page.getByLabel('First name:').fill("Ram");
//await page.getByLabel('Last name:').fill("Kalyan");
//here .fill() is nothing but sendkeys()
//also we have .type() but it's deprecated means it's not working latest versions

/*
page.getByPlaceholder() --> the find the element with a given placeholder text
if any element have placeholder property then you can use
*/
await page.getByPlaceholder('Search store').fill("Hp laptop");

/*
page.getByTitle() --> to find the elements by it's title attribute
*/
// const link:Locator = page.getByTitle("home page link");
// expect(link).toHaveText("Home");


/*
Page.getByTestId() --> locate the lement by it's based on the data-testid attribute
*/
// await expect(page.getByTestId("profile-email")).toHaveText("ram@gamil.com");


})