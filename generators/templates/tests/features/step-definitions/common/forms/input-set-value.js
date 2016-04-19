module.exports = function () {

    this.When(/^I enter value "(.*)" in element "(.*)"$/, function (value, element) {
        browser.setValue(element, value);
    });

};