module.exports = function () {

    this.When(/^I submit the form "(.*)"$/, function (element) {
        browser.submitForm(element);
    });

};