module.exports = function () {

    this.Then(/^there should be a logical and semantic heading structure/, function (callback) {

        var headingStructureIsGood = true;

        function checkHeadingStructure(casper, config, pageObj) {

            var headings = ['h1','h2','h3','h4','h5','h6'],
                prevHeadingLevel,
                nextHeadingLevel;

            var pageHeadings = this.browser.querySelectorAll(headings);
            for (var i=0; i < pageHeadings.length; i++) {
                var currentHeadingLevel = parseInt(pageHeadings[i].nodeName.slice(-1), 10);
                if (pageHeadings[i + 1] !== undefined) {
                    nextHeadingLevel = parseInt(pageHeadings[i + 1].nodeName.slice(-1), 10);
                    if (nextHeadingLevel !== (currentHeadingLevel + 1) && nextHeadingLevel !== currentHeadingLevel && nextHeadingLevel !== (currentHeadingLevel - 1)) {
                        headingStructureIsGood = false;
                    }
                }
            }
            return headingStructureIsGood;
        }

        this.browser.assert.evaluate(checkHeadingStructure, true, 'Incorrect heading structure');
        callback();

    });

};