import {test, expect, Locator} from '@playwright/test'
/*Generally we have 3 types of dialog boxes are avialabel
These alerts we can't inspect because these are generated/throwing by java script So, we called as a javascript allerts.
And playwright automatically handle the allerts by it self (Means directly dismiss the alerts/dialogs)
Dialogs such as alerts, confirm,prompt..
And dialog actions either dialog.accept() or dialog.dismiss()
By default dialog.dismiss() will triggers.
*/
test("Verify the alerts/dialogs boxes",async({page})=>{
    //open the URL
    await page.goto("https://testautomationpractice.blogspot.com/");
    /*Finding the alert element
    const alert_box = page.locator("#alertBtn");
    //perform click action on the alert element
    await alert_box.click(); // directly dismiss the alert by playwright
    await page.waitForTimeout(4000);
    */

    //here we have page.on method is using to intacting with alerts
    page.on('dialog',async (dialog)=>{
        //print the type of the dialog
         console.log(dialog.type());
         //print text present on alert
         console.log(dialog.message());
         expect (dialog.message()).toContain("I am an alert box!");
         //Here accept the alert means click on the okay button
         await dialog.accept();
    });
    const alert_box = page.locator("#alertBtn");
    await alert_box.click();
    await page.waitForTimeout(4000);
});

test("Verify the confirm alert",async({page})=>{
    //Open the URL
    await page.goto("https://testautomationpractice.blogspot.com/");
    page.on("dialog",async(dialog)=>{
      const a=  dialog.type();
      console.log("log type is:",a);
      await expect(a).toBe("confirm");
      const messg = dialog.message();
      console.log(messg);
      await expect(messg).toBe("Press a button!");
      //Here dismiss the alert by clicking on the cancel
      await dialog.dismiss();
    })
    
    await page.locator("#confirmBtn").click();
    await page.waitForTimeout(4000);
});

test.only("Verify the promt alets",async({page})=>{
    //open the URL
    await page.goto("https://testautomationpractice.blogspot.com/");
    page.on("dialog",async(dialog)=>{
        const b = dialog.type();
        console.log(b);
        //await expect(b).toBe("");
        const alerts_text = dialog.message();
        console.log("alert message:",alerts_text);
        expect(alerts_text).toBe("Please enter your name:");
        //if any text box present on the alert and that text box contains some default text then we need to capture the default value and compare
        //for this we use the dailog.defaultvalue() method
        const default_value = dialog.defaultValue();
        console.log("default value:",default_value);
        expect(default_value).toBe("Harry Potter");
        //if you want to clear that default value and pass some text then no need to clear directly accept and pass some value
        dialog.accept("Hello This is Ram.....!");

    })
    await page.locator("#promptBtn").click();
    await page.waitForTimeout(5000);
})

