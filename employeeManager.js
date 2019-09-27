var employeePage
module.exports = {
    beforeEach: browser => {
        employeePage = browser.page.employee()
        employeePage.navigate()
    },
    'Click on name; check displayed content': browser => {
        employeePage
            .click('@employeeLink')
            .verify.containsText('@resultEmployee', employeeName.e1)
            .verify.visible('@employeeID')
    },
    // 'Edit fields': browser => {
    //      employeePage
    //         .click('@employeeLink')
    //         .clearValue('//input[@name="nameEntry"]')
    //         .setValue('//input[@name="nameEntry"]')
    //         .click('#saveBtn')
    //         .waitForElementNotPresent('.errorCard')
            // .setValue('input[name="nameEntry"]', 'Bernice O')
            // .clearValue('[name="phoneEntry"]')
            // .setValue('input[name="phoneEntry"]', '1234567890')
            // .clearValue('[name="titleEntry"]')
            // .setValue('input[name="titleEntry"]', 'COO')
            // .click('#saveBtn')
            // .waitForElementNotPresent('.errorCard')
//    }
    // 'Check edit function and valid save (no error message)': browser => {
    //     browser
    //         .click('[name="employee1"]')
    //         .clearValue('[name="nameEntry"]')
    //         .setValue('input[name="nameEntry"]', 'Bernice O')
    //         .clearValue('[name="phoneEntry"]')
    //         .setValue('input[name="phoneEntry"]', '1234567890')
    //         .clearValue('[name="titleEntry"]')
    //         .setValue('input[name="titleEntry"]', 'COO')
    //         .click('#saveBtn')
    //         .waitForElementNotPresent('.errorCard')
    // },
    // 'Check error message': browser => {
    //     browser
    //         .click('[name="employee1"]')
    //         .clearValue('[name="nameEntry"]')
    //         .setValue('input[name="nameEntry"]', 'Bernice Ortiz Bernice Ortiz Bernice Ortiz')
    //         .clearValue('[name="phoneEntry"]')
    //         .setValue('input[name="phoneEntry"]', '12345678901')
    //         .clearValue('[name="titleEntry"]')
    //         .setValue('input[name="titleEntry"]', 'CFOCFOCFOCFOCFOCFOCFOCFOCFOCFOCFO')
    //         .click('#saveBtn')
    //         .assert.visible('.errorCard')
    // },
    // 'Check that save button cannot be clicked when edits have not been made': browser => {
    //     browser
    //         .click('[name="employee1"]')
    //         .elementIdNotEnabled('#saveBtn')
    // },
    // 'Check Add Employee link functionality': browser =>
    //     browser
    //         .click('[name="addEmployee"]')
            
}
