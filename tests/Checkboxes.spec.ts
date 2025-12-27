import { test, expect, Locator } from "@playwright/test"

test.only("Verify the check-box", async ({ page }) => {
    //Open the URl
    await page.goto("https://testautomationpractice.blogspot.com/");
    //Find the check-box using CSS selector
    const check_box: Locator = page.locator("#monday");
    //if you can locate the check-box by using getByLabel also
    //const cb:Locator = page.getByLabel("Monday");
    //Check the elements is visble or not
    await expect(check_box).toBeVisible();
    //Check the element is enabled or not
    await expect(check_box).toBeEnabled();
    // await expect(check_box).toBeChecked();
    await check_box.check();
    //after the check-box verifying the it's checked or not for this using toBeChecked() method
    await expect(check_box).toBeChecked();

    //Now I want to check all check-boxes
    //firstly i'm take all label vaues into one array
    const days: string[] = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    //all array vales copy into new array using map()
    //map()
    const all_cb: Locator[] = days.map(index => page.getByLabel(index));
    expect(all_cb.length).toBe(7);

    //I want to check all check-boxes
    for (const result of all_cb) {
        await result.check();
        await expect(result).toBeChecked();
    }

    //If you want to check particular chec-box (last 3 check-boxes) then use slice (-3)

    await page.waitForTimeout(5000);
})


test("Verify the radio buttons", async ({ page }) => {
    //Open the URl
    await page.goto("https://testautomationpractice.blogspot.com/");
    //Find the check-box using CSS selector
    const radio_button: Locator = page.locator("#male");
    //Check the elements is visble or not
    await expect(radio_button).toBeVisible();
    //Check the element is enabled or not
    await expect(radio_button).toBeEnabled();
    // it's check the radio button is checked or not and I'm comapre (it's not selecetd that's why I wrote the false)
    expect(await radio_button.isChecked()).toBe(false);
    //check the radio button --> using the check() method
    await radio_button.check();
    //again I'm using ischecked() method with this time true (means it's checked)
    expect(await radio_button.isChecked()).toBe(true);
    //instead of the isChecked() method we user toBeChecked() also and it's frefarable 
    expect(radio_button).toBeChecked();
    //using timeout statement
    await page.waitForTimeout(5000);
})


