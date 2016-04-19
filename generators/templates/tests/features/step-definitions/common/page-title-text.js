var assert = require('assert');

module.exports = function () {

    this.Then(/^the title is "(.*)"$/, function(expected) {
        var actual = browser.getTitle();
        assert.equal(actual, expected, 'Unexpected <title> value (expected: "' + expected + '", actual: "' + actual + '")');
    });

};