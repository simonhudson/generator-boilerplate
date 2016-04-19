var pages = require('../../../../config/config.js').pages;
var slug = require('../../../../config/page-slug.js').pageSlug;

module.exports = function () {

    this.When(/^I click on the link "(.*)"$/, function(selector) {
        var text = browser.getText(selector);
        browser.click(selector);
    });

};