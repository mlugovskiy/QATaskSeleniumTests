const BasePage = require("./BasePage")

//locators
const USERNAME_INPUT = { id: 'email' }
const PASSWORD_INPUT = { id: 'password' }
const SUBMIT_BUTTON = { css: 'button[type=submit]' }
const USER_DROPDOWN = { id: 'page-header-user-dropdown' }
const EMAIL_INVALID_FEEDBACK = { css: ' #email + .invalid-feedback' }
const PASSWORD_INVALID_FEEDBACK = { css: ' #password + .invalid-feedback' }
const FORM_ALERT = { css: 'form>div.alert' }

class LoginPage extends BasePage {
  constructor(driver) {
    super(driver)
  }

  async load() {
    await this.open('https://office.ideadeploy.space/login')
  }

  async login(username, password) {
    await this.driver.findElement(USERNAME_INPUT).sendKeys(username)
    await this.driver.findElement(PASSWORD_INPUT).sendKeys(password)
    await this.driver.findElement(SUBMIT_BUTTON).click()
  }

  async userDropdownPresent() {
    return await this.isDisplayed(USER_DROPDOWN)
  }

  async getPasswordInvalidFeedback() {
    return await this.driver.findElement(PASSWORD_INVALID_FEEDBACK).getText()
  }

  async getEmailInvalidFeedback() {
    return await this.driver.findElement(EMAIL_INVALID_FEEDBACK).getText()
  }

  async getFormAlertString() {
    return await this.driver.findElement(FORM_ALERT).getText()
  }
}

module.exports = LoginPage