var assert = require('assert');

module.exports = function () {

    this.Then(/^there is a single H1 element/, function () {
        var h1s = browser.elements('h1');
        assert.equal(h1s.value.length, 1, 'More than one H1 on page');
    });

};