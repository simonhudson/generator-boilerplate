var pages = require('../../../../config/config.js').pages;

module.exports = function () {

    this.When(/^I log out$/, function () {
        browser.url(pages.logout.url);
    });

};