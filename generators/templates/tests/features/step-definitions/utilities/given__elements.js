module.exports = function () {

    this.Given(/^there are one or more "(.*)" elements on the "(.*)" page$/, function(element, page, callback) {
        page = page.toLowerCase();
        page = page.replace(/\s+/g, '');
        this.visit(this.pages[page].url, function() {
            callback();
        });
    });

};