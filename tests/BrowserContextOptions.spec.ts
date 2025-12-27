import {test,expect,Locator, chromium} from '@playwright/test'
/*
If you want to run all tests in suite in headed mode then configure in global level (headless:false) or (headless:true)
viewport:{width:1200,height:800} ==> it's simply to adjust the browser width & height sizes
And if you mention the viewport in test level then it's applicable for that particular test only
And if you want to mention in global level then you can define in config file then it's applicable for all tests in suite
for example in global level define with different values & test level define with different values then it's conside the test level define values
because test level define values should over ride the global values
proxy:{server:'Url:port number'} ==> generally real time all applications are not open in browser direcly for example production url directly not open due to some security issues
in that case this proxy coming into the picture So, the proxy is act as the server it's take the request and provide the responce to the client
Generally while providing the proxy url we need to pass the port number. Based on the port number it should be open
ignoreHTTPSErrors:true ==> most of the applications follow the SSL (secure socket layout) certificate If any case it's not opening if ignore those kind of error generally we user this option.
*/
test("Verify the different context options",async()=>{
    const browser = await chromium.launch({headless:false}); //means it's run in headed mode - we can see the UI
    //const browser = chromium.launch({headless:true}); //means it's run in headless mode - we can't see the UI
    const context = await browser.newContext(
        {
            viewport:{width:1200,height:800},
            locale:'en-US', //we don't use much more because all the applications open in english language by default So, no need to mention this option explicitly. If in case your application is not opening in english then use it
            //Proxy option
            //proxy:{server:'https://testautomationpractice.blogspot.com/:12345'},
            ignoreHTTPSErrors:true
        });
    const page = await context.newPage();
    context.addCookies([{name:'my cookie',value:'12345',url:'https://testautomationpractice.blogspot.com/'}]);
    console.log("cookies add explicitly");

    //Now open the website & cookies allways define before launching the application
    await page.goto("https://testautomationpractice.blogspot.com/");
    //capture the cookies
    const cookies = await context.cookies();
    const result = cookies.find((i)=> i.name ==='my cookie');
    console.log(result);
    expect(result?.value).toBe('12345');
    //it's check the to define the cookie or not
    expect(result).toBeDefined();
    //we can't predect what kind of cookies application browser generating we just capture the cookies
    //Capture the all cookies browser provided dynamically cookies & we created cookies
    console.log("All cookies:",cookies.length);
    for(let cookie of cookies){
        console.log(`${cookie.name}:${cookie.value}`);
    }

    //accept the cookies or clear all cookies
    await context.clearCookies();
    const afterclear_cookies = await context.cookies();
    console.log("Total cookies count after clear the cookies:",afterclear_cookies.length);
    expect(afterclear_cookies.length).toBe(0);

    await page.waitForTimeout(5000);

})