module.exports = function () {

    this.Given(/^I am a user on the "(.*)" page$/, function(page, callback) {
        page = page.toLowerCase();
        page = page.replace(/\s+/g, '');
        this.visit(this.pages[page].url, function() {
            callback();
        });
    });

};