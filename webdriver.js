var webdriver = require('selenium-webdriver'),
    By = webdriver.By,
    until = webdriver.until;

var driver = new webdriver.Builder()
    .forBrowser('chrome')
    .build();

driver.get('http://kaktusfresh1.wix.com/travechanel');
driver.wait(function() {
    driver.quit();

}, 10000);
