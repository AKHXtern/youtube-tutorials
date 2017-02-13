require('chromedriver');
var webdriver = require('selenium-webdriver'),
    By = webdriver.By,
    until = webdriver.until;

var driver = new webdriver.Builder()
    .forBrowser('chrome')
    .build();

driver.get('http://google.com/ncr');
driver.findElement(By.name('q')).sendKeys('armenia');
driver.findElement(By.name('btnG')).click();
driver.wait(until.titleIs('armenia - Google Search'), 3000);
driver.quit();
