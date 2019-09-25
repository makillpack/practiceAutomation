module.exports = {
    beforeEach: browser => {
        browser.url('http://localhost:3000')
    },
    after: browser => {
        browser.end()
    },
    'Check that names click': browser => {
        browser
            .click('[name="employee1"]')
            .assert.value('input[name="nameEntry"]', "employee1")
            
    },
    'Check edit function and valid save (no error message)': browser => {
        browser
            .click('[name="employee1"]')
            .clearValue('[name="nameEntry"]')
            .setValue('input[name="nameEntry"]', 'Bernice O')
            .clearValue('[name="phoneEntry"]')
            .setValue('input[name="phoneEntry"]', '1234567890')
            .clearValue('[name="titleEntry"]')
            .setValue('input[name="titleEntry"]', 'COO')
            .click('#saveBtn')
            .waitForElementNotPresent('.errorCard')

    },
    'Check error message': browser => {
        browser
            .click('[name="employee1"]')
            .clearValue('[name="nameEntry"]')
            .setValue('input[name="nameEntry"]', 'Bernice Ortiz Bernice Ortiz Bernice Ortiz')
            .clearValue('[name="phoneEntry"]')
            .setValue('input[name="phoneEntry"]', '12345678901')
            .clearValue('[name="titleEntry"]')
            .setValue('input')
    }
}