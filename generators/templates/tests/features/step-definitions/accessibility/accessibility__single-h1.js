module.exports = function () {

    this.Then(/^there should be a single H1 element/, function (callback) {
        this.browser.assert.elements('h1', 1);
        callback();
    });

};