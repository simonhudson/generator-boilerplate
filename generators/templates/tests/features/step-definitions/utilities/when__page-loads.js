module.exports = function () {

    this.When(/^the "(.*)" page loads$/, function(page, callback) {
        page = page.toLowerCase();
        page = page.replace(/\s+/g, '');
        var self = this;
        this.visit(this.pages[page].url, function(response) {
            self.browser.assert.success(response);
            callback();
        });
    });

};