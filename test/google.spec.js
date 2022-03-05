module.exports = {
    'Google search test': function(browser){
        let google = browser.page.google()

        google.navigate()
        .assert.title('Google')
        .waitForElementPresent('@searchBar',2000)
        .pause(2000)
        .sendKeys('@searchBar', ['nightwatch', browser.Keys.ENTER])
        .pause(5000)
    
        }
}