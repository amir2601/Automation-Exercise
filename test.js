import { Browser, Builder, By } from "selenium-webdriver";

const driver = new Builder().forBrowser(Browser.CHROME).build();

async function runner() {
    await driver.get("https://www.automationexercise.com/");
    await driver.manage().window().maximize();
    await driver.findElement(By.xpath("//a[@href='/login']")).click();
    await driver.findElement(By.xpath("//input[@type='email' and @data-qa='login-email']")).sendKeys("amir26hossin@gmail.com");
    await driver.findElement(By.xpath("//input[@type='password' and @data-qa='login-password']")).sendKeys("Riad@1234");
    await driver.findElement(By.xpath("//button[@type='submit' and @data-qa='login-button']")).click();
    let verifyElement = await driver.findElement(By.xpath("//a[contains(., 'Logged in as')]"));
    let status = await verifyElement.isDisplayed();
    if (status) {
        console.log("Verify Successful");
    } else {
        console.log("Verification Failed");
    }
    await driver.quit();
};

runner();