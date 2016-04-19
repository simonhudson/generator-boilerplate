module.exports = function () {

    this.When(/^I click on the element "(.*)"$/, function(selector) {
        browser.click(selector);
    });

};