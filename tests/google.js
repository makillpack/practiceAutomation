module.exports = {
    beforeEach: browser => {
        browser.url('http://www.google.com')
    },
    after: browser => {
        browser.end()
    },
   'Search Test': browser => {
        browser
            .setValue('input[name=q]', ['Puppies', browser.Keys.ENTER])
            .waitForElementVisible('#res')
            .verify.containsText('#res', 'Puppies')

    },
    'Check whether instructions worked': browser => {
        browser
            .setValue('input[name=q]', ['Pandas', browser.Keys.ENTER])
            .waitForElementVisible('#res')
            .assert.containsText('#res', 'Pandas')
    }
}