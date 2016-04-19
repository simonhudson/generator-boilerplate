var assert = require('assert');

module.exports = function () {

    this.When(/^the cookie called "(.*)" contains a value$/, function (cookieName) {
        var cookie = browser.getCookie(cookieName);
        assert.notEqual(cookie.value, null, 'Cookie "' + cookieName + '" does not have a value');
    });

};