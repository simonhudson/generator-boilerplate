module.exports = function () {

    this.Then(/^the images should each have an alt attribute/, function (callback) {

        var allImgsHaveAlt = true,
            self = this;

        function checkImgAlt() {
            var allImgs = this.browser.querySelectorAll('img');
            for (var i=0; i < allImgs.length; i++) {
                var alt = allImgs[i].getAttribute('alt');
                if (typeof alt != 'string') {
                    allImgsHaveAlt = false;
                    self.onError('Missing alt attribute on "' + allImgs[i].getAttribute('src') + '"');
                }
            }
            return allImgsHaveAlt;
        }

        this.browser.assert.evaluate(checkImgAlt, true, 'Missing alt attribute on one or more elements');
        callback();

    });

};