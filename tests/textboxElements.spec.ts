import { test } from "@playwright/test"
import { expect } from "@playwright/test"
import { Locator } from "@playwright/test"

/* Text box elements or input elements
Here we firstly check that element visble or not
And that element is enabled or not
And pass some text to text box
And print the value
*/
test("Verify the text box elements", async ({ page }) => {
  //open the URL
  await page.goto("https://testautomationpractice.blogspot.com/");
  //find the textbox using the css selector and stored in variable
  const FN_text_box: Locator = page.locator("#name");
  //use the assertion like element is visible or not
  await expect(FN_text_box).toBeVisible();
  //and use the assertion like element is enabled or not
  await expect(FN_text_box).toBeEnabled();
  //user the fill menthod to pass the input value to the text box
  await FN_text_box.fill("Ram");
  //And we can return the attribute value also
  // for that we use getattribute
  const max_length: string | null = await FN_text_box.getAttribute("maxlength");
  expect(max_length).toBe("15");

  //capturing the value in text box that you pass using inputvalue() method
  //once you provided the value then we don't see the any attribute for that value so, we have only one option inputvalue()
  const value: string = await FN_text_box.inputValue();
  console.log(value);
  expect(value).toBe("Ram");

  await page.waitForTimeout(10000);
});
