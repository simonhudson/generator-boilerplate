var pages = require('../../../../config/config.js').pages;
var slug = require('../../../../config/page-slug.js').pageSlug;
var assert = require('assert');

module.exports = function () {

    this.When(/^the browser loads the "(.*)" page in a new tab\/window$/, function(page) {
        var tabIds = browser.getTabIds();
        var lastTab = tabIds.pop();
        
        browser.switchTab(lastTab);
        var newTabId = browser.getCurrentTabId();
        var expectedUrl = pages[slug(page)].url;
        var actualUrl = browser.getUrl();
        assert((expectedUrl === actualUrl) && browser.element('title'));
        browser.switchTab(tabIds[0]);
        browser.close(newTabId);
    });

};