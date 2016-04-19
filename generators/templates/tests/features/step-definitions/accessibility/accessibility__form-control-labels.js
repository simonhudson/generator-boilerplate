module.exports = function () {

    this.Then(/^each form control element should have an id attribute with an associated label/, function (callback) {

        var allElementsHaveId = true;
        var allElementsHaveLabel = true;
        var self = this;

        function checkElementHasLabel(elementId) {
            self.browser.assert.element('label[for="' + elementId + '"]');
        }

        function checkElementHasId() {

            var formElements = this.browser.querySelectorAll('input, select, textarea');

            for (var i=0; i < formElements.length; i++) {
                var isButton = (formElements[i].getAttribute('type') == 'submit' || formElements[i].getAttribute('type') == 'button');
                if (!isButton) {
                    var elementId = formElements[i].getAttribute('id');
                    if (typeof elementId != 'string') {
                        allElementsHaveId = false;
                        self.onError('Missing ID on <' + formElements[i].nodeName.toLowerCase() + '> form element');
                    } else {
                        checkElementHasLabel(elementId);
                    }
                }
            }
            return (allElementsHaveId && allElementsHaveLabel);
        }
        this.browser.assert.evaluate(checkElementHasId, true, 'Ensure all form elements have an ID and an associated label');
        callback();

    });

};