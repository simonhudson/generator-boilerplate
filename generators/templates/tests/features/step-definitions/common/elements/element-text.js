var assert = require('assert');

module.exports = function () {

    this.Then(/^the "(.*)" element contains the text "(.*)"$/, function(selector, expected) {
        browser.waitForExist(selector);
        var actual = browser.getText(selector);
        assert.equal(expected, actual, 'Unexpected "' + selector + '" value (expected: "' + expected + '", actual: "' + actual + '")');
    });

};