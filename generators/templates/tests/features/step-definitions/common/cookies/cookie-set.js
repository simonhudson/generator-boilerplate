var assert = require('assert');

module.exports = function () {

    this.When(/^a cookie is created called "(.*)" with value "(.*)"$/, function (cookieName, value) {

        // Delete cookie if already exists        
        if (browser.getCookie(cookieName)) {
            browser.deleteCookie(cookieName);
        }

        // Set new value
        browser.setCookie({name: cookieName, value: value});

    });

};