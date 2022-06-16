const path = require('path')
const assert = require('assert')
const LoginPage = require('../src/pages/LoginPage')
const { buildDriver, getCurrentDate } = require('../src/lib/helpers')
require('dotenv').config()

describe('Login tests', function () {
    let driver
    let loginPage

    beforeEach(async function () {
        driver = buildDriver()
        loginPage = new LoginPage(driver)
        await loginPage.load()
    })

    afterEach(async function () {
        if(this.currentTest.state == 'failed') {
            let imageFileName = getCurrentDate() +' ' + this.currentTest.title + '.jpeg';
            driver.takeScreenshot().then(
                function(image){
                    require('fs').writeFileSync('./screenshots/' + imageFileName, image, 'base64')
                }
            )
        }
       
        await driver.quit()
    })

    it('login with valid credentials', async function () {
        await loginPage.login(process.env.LOGIN_USERNAME, process.env.LOGIN_PASSWORD);

        assert(await loginPage.userDropdownPresent(), 'User dropdown button missing')
    })

    it('login with valid email and invalid password', async function () {
        await loginPage.login(process.env.LOGIN_USERNAME, 'password123');

        assert(!(await loginPage.userDropdownPresent()), 'User dropdown present')
        assert.equal(await loginPage.getFormAlertString(), "Неверные учетные данные")
    })

    it('login with empty email and empty password fields', async function () {
        await loginPage.login('', '');

        assert(!(await loginPage.userDropdownPresent()), 'User dropdown present')
        assert.equal(await loginPage.getEmailInvalidFeedback(), 'Invalid Email')
        assert.equal(await loginPage.getPasswordInvalidFeedback(), 'Invalid Password')
    })

    //failed test example
    it('login with valid credentials - failed test example', async function () {
        await loginPage.login(process.env.LOGIN_USERNAME, "password123");

        assert(await loginPage.userDropdownPresent(), 'User dropdown button missing')
    })
})