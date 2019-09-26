module.exports = {
    beforeEach: browser => {
        browser.url('https://alpha.yoodlize.com/')
    },
    after: browser => {
        browser.end()
    },
    'Check QAE-52 steps': browser => {
        browser
        .useXpath()
            .click('(//div[@class="sc-jqCOkK djSgtl sc-gqjmRU fmVgeN"])[1]')
            .verify.containsText('//div[@class="sc-jKVCRD jSqgxr"]', "Recreational Vehicles")
            .back()
            .click('(//div[@class="sc-jqCOkK djSgtl sc-gqjmRU fmVgeN"])[2]')
            .verify.containsText('//div[@class="sc-jKVCRD jSqgxr"]',"Outdoor Gear")
            .back()
            .click('(//div[@class="sc-jqCOkK djSgtl sc-gqjmRU fmVgeN"])[3]')
            .verify.containsText('//div[@class="sc-jKVCRD jSqgxr"]', "Electronics")
            .back()
            .click('(//div[@class="sc-jqCOkK djSgtl sc-gqjmRU fmVgeN"])[4]')
            .verify.containsText('//div[@class="sc-jKVCRD jSqgxr"]', "Party & Wedding Equipment")

    },
    'Check QAE-53 steps': browser => {
        browser
        .useXpath()
            .setValue('//input[@type="text"]', "bicycle")
            .click('//button[@class="sc-uJMKN fpBmEu sc-ifAKCX kvYMhQ"]')
            .verify.containsText('//div[@class="sc-jKVCRD jSqgxr"]', "bicycle")
            .verify.containsText('(//input[@value])[1]', "bicycle")
            .verify.containsText('(//div[@class="_2J6OR _11IQO _3hOq8 col-md-12 col-sm-12 col-xs-12"])[1]', "Bike",)
            .verify.containsText('(//div[@class="_2J6OR _11IQO _3hOq8 col-md-12 col-sm-12 col-xs-12"])[2]', "Bike",)
            .click('(//div[@class="_2J6OR _11IQO _3hOq8 col-md-12 col-sm-12 col-xs-12"])[1]')
            .waitForElementVisible('//i[@class="fa fa-chevron-right"]')
            .click('//i[@class="fa fa-chevron-right"]')
            .waitForElementVisible('//i[@class="fa fa-chevron-left"]')
            .click('//i[@class="fa fa-chevron-left"]')
            .verify.visible('//img[@class="sc-gHboQg djikKx"]')
            .expect.element('//div[@class="sc-jqCOkK hxTVNb sc-gqjmRU fptSCa"]').text.to.equal("3 Bike Trunk-Mounted Rack")
        browser    
            .expect.element('//div[@class="sc-jqCOkK ibHMcp sc-gqjmRU fptSCa"]').text.to.equal("$5 ")
            
    }
}