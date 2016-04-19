var assert = require('assert');

module.exports = function () {

    this.Then(/^the "(.*)" element has the attribute "(.*)" which contains a value$/, function(selector, attribute) {
        var attributeVal = browser.getAttribute(selector, attribute);
        assert((attributeVal.length > 0), selector + ' does not contain a valid "' + attribute + '" attr');
    });

};