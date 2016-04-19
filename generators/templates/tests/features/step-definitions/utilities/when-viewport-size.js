var assert = require('assert');

module.exports = function () {

    this.When(/^the viewport "(.*)" is "(.*)" "(.*)"$/, function(orientation, operator, value) {

        value = parseInt(value, 10);
        var otherOrientation = browser.getViewportSize(orientation === 'width' ? 'height' : 'width');
        
        switch (operator) {
            case 'less than':
                value = (value - 1);
            break;
            case 'more than':
                value = (value + 1);
            break;
            case 'equal to':
                value = value;
            break;
            default:
                value = value;
            break;
        }

        browser.setViewportSize(
            {
                width: orientation === 'width' ? value : otherOrientation,
                height: orientation === 'height' ? value : otherOrientation
            },
            true
        );

    });

};