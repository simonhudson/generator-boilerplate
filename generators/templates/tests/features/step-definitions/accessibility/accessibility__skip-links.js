module.exports = function () {

    this.Then(/^the page should have skip links/, function (callback) {
        this.browser.assert.element('.access-nav');
        callback();

    });

};