var pages = require('../../../../config/config.js').pages;

module.exports = function () {

    this.Given(/^I am a user who is not logged in$/, function() {
        browser.url(pages.logout.url);
    });

};