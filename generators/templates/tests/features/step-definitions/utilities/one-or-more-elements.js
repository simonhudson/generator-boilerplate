module.exports = function () {

    this.Given(/^there are one or more "(.*)" elements$/, function(selector) {
        browser.elements(selector);
    });

};