var assert = require('assert');

module.exports = function () {

    this.Then(/^there is a logical and semantic heading structure/, function () {

        var headingStructureIsGood = true;

        var headings = ['h1','h2','h3','h4','h5','h6'],
            prevHeadingLevel,
            nextHeadingLevel;

        var pageHeadings = browser.elements(headings.join(',')).getTagName();

        for (var i=0; i < pageHeadings.length; i++) {
            var currentHeadingLevel = parseInt(pageHeadings[i].slice(-1), 10);
            if (pageHeadings[i + 1] !== undefined) {
                nextHeadingLevel = parseInt(pageHeadings[i + 1].slice(-1), 10);
                if (nextHeadingLevel !== (currentHeadingLevel + 1) && nextHeadingLevel !== currentHeadingLevel && nextHeadingLevel !== (currentHeadingLevel - 1)) {
                    headingStructureIsGood = false;
                }
            }
        }

        assert.equal(headingStructureIsGood, true, 'Incorrect heading structure (' + pageHeadings + ')');

    });

};