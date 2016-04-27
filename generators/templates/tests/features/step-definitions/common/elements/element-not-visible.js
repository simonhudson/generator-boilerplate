var assert = require('assert');

module.exports = function () {

    this.Then(/^the "(.*)" element is not visible$/, function(selector) {
        browser.waitForVisible(selector, 500, true);
        assert.equal(browser.isVisible(selector), false, selector + ' element is visible on the page');
    });

};