import {test,expect,Locator} from '@playwright/test'
//Sign up & Login flow for QedgeFlightbooking application
test("Verify the Sign up & Login flow", async({page})=>{
    //open the URL
    await page.goto("https://flights.qedgetech.com/");
    //click on the register link
    const reg_button = page.locator("a[href='https://flights.qedgetech.com/register.html']");
    await reg_button.click();
    //use one assertion with pate title or URL
    await page.locator("#name").fill("Nagaraju");
    const contact_field = page.locator("#contact");
    await contact_field.hover();
    await page.keyboard.insertText("9390618276");
    await page.locator("#email").fill("kurapatinagaraju547@gmail.com");
    const passwd = page.locator("#address");
    await passwd.fill("Nagraj@123");
    const gender_dd = page.locator("select[name='gender']");
    gender_dd.selectOption({value:'M'});
    const dob = page.locator("#popupDatepicker");
    await dob.fill("11-02-2000");
    //select the check box
    const cb = page.locator(".form-check-input");
    await cb.isVisible();
    await cb.isEnabled();
    await cb.click();
    const register_button = page.locator("input[value='Register']");
    await register_button.click();
    const current_url = page.url();
    expect(current_url).toBe("https://flights.qedgetech.com/register.html");
    console.log("You are sign-up successfully & continue to login");
    const email_field = page.locator("input[name='email']");
    await email_field.fill("kurapatinagaraju547@gmail.com");
    const pawd_field = page.locator("input[name='password']");
    await pawd_field.fill("Nagraj@123");
    const sign_button = page.locator(".btn");
    await sign_button.click();

    await page.waitForTimeout(15000);
    


})