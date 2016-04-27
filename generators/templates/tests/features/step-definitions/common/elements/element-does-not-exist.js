var assert = require('assert');

module.exports = function () {

    this.Then(/^there is not a "(.*)" element$/, function(selector) {
        var doesNotExist = browser.waitForExist(selector, undefined, true);
        assert.equal(does, true);
    });

};