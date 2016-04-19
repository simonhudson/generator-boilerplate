var assert = require('assert');

module.exports = function () {

    this.Then(/^there is not a "(.*)" element$/, function(selector) {
        pending();
    });

};