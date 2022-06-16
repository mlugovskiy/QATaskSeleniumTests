class BasePage {
    constructor(driver) {
        this.driver = driver
    }

    async open(url) {
        await this.driver.get(url)
    }

    async isDisplayed(locator) {
        let elementsArr = await this.driver.findElements(locator)
    
        if (elementsArr.length != 0 && await elementsArr[0].isDisplayed()) return true
        return false
    }
}
module.exports = BasePage