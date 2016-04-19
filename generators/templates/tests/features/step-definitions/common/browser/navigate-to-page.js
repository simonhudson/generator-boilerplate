var pages = require('../../../../config/config.js').pages;
var slug = require('../../../../config/page-slug.js').pageSlug;

module.exports = function () {

    this.When(/^I navigate to the "(.*)" page$/, function(page) {
        browser.url(pages[slug(page)].url);
    });

};