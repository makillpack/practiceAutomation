module.exports = {
    beforeEach: browser => {
        browser.url('https://devmountain-qa.github.io/employee-manager/1.2_Version/index.html')
    },
    after: browser => {
        browser.end()
    },
    'Check name clicks and matches name on right': browser => {
        browser
            .click('[name="employee1"]')
            .assert.value('input[name="nameEntry"]', "Bernice Ortiz")
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
            .setValue('input[name="titleEntry"]', 'CFOCFOCFOCFOCFOCFOCFOCFOCFOCFOCFO')
            .click('#saveBtn')
            .assert.visible('.errorCard')
    },
    'Check that save button cannot be clicked when edits have not been made': browser => {
        browser
            .click('[name="employee1"]')
            .elementIdNotEnabled('#saveBtn')
    }
}
