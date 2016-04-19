module.exports = function () {

    this.When(/^the cookie called "(.*)" is deleted$/, function (cookieName) {
        browser.deleteCookie(cookieName);
    });

};