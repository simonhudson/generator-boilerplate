var assert = require('assert');

module.exports = function () {

    this.Then(/^the "(.*)" element is visible$/, function(selector) {
        browser.waitForVisible(selector);
        assert.equal(browser.isVisible(selector), true, selector + ' element is not visible on the page');
    });

};