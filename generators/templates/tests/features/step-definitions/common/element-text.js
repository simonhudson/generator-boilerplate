module.exports = function () {
    
    this.Then(/^there should be a "(.*)" element on the "(.*)" page containing the text "(.*)"/, function (element, page, valueExpt, callback) {
        var self = this;
        page = page.toLowerCase();
        page = page.replace(/\s+/g, '');
        this.visit(this.pages[page].url, function() {
            self.browser.assert.text(element, valueExpt);
            callback();
        });
    });

};