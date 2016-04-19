var assert = require('assert');

module.exports = function () {

    this.When(/^there is not a cookie called "(.*)"$/, function (cookieName) {
        var cookie = browser.getCookie(cookieName);
        assert.equal(cookie, null, 'Cookie "' + cookieName + '" does exist');
    });

};