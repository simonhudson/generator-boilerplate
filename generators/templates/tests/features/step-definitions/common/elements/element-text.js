var assert = require('assert');

module.exports = function () {

    this.Then(/^the "(.*)" element should contain the text "(.*)"$/, function(selector, expected) {
        var actual = browser.getText(selector);
        assert.equal(expected, actual, 'Unexpected "' + selector + '" value (expected: "' + expected + '", actual: "' + actual + '")');
    });

};