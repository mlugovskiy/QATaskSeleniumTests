const { Builder } = require('selenium-webdriver')
const chrome = require('selenium-webdriver/chrome')

function buildDriver() {
    let driver = new Builder()
        .forBrowser('chrome')
        .setChromeOptions(new chrome.Options().headless())
        .build()
    driver.manage().setTimeouts( { implicit: 10000 } )
    driver.manage().window().maximize()
    return driver
}

function getCurrentDate() {
    let date = new Date();
    let dateString =
    ("0" + date.getDate()).slice(-2) + "-" +
    ("0" + (date.getMonth()+1)).slice(-2) + "-" + 
    date.getFullYear() + " " +
    ("0" + date.getHours()).slice(-2) + "_" +
    ("0" + date.getMinutes()).slice(-2) + "_" +
    ("0" + date.getSeconds()).slice(-2);
    return dateString
}

module.exports = {
    buildDriver,
    getCurrentDate
}