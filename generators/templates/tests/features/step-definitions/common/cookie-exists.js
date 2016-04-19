var assert = require('assert');

module.exports = function () {

    this.When(/^there is a cookie called "(.*)"$/, function (cookieName) {
        var cookie = browser.getCookie(cookieName);
        assert.notEqual(cookie, null, 'Cookie "' + cookieName + '" does not exist');
    });

};