var pages = require('../../../../config/config.js').pages;
var slug = require('../../../../config/page-slug.js').pageSlug;
var assert = require('assert');

module.exports = function () {

    this.When(/^the browser loads the "(.*)" page$/, function(page) {
        var expectedUrl = pages[slug(page)].url;
        var actualUrl = browser.getUrl();
        assert((expectedUrl === actualUrl) && browser.element('title'));
    });

};