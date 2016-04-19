// var assert = require('assert');

// module.exports = function () {

//     this.Then(/^each form control element has an ID attribute with an associated label$/, function () {

//         var allElementsHaveId = true;
//         var allElementsHaveLabel = true;
//         var missingLabelElements = [];
//         var queryElements = ['input', 'select', 'textarea'];
//         var formElements = {};

//         function getElements() {
//             console.log(0);
//             var elements = browser.elements(queryElements.join(','));
//             createElementsObj(elements);
//         }

//         function createElementsObj(elements) {
//             for (var i=0; i < elements.value.length; i++) {
//                 console.log(elements.value.length[i]);
//             }
//             // var ret = browser.execute(function(elements) {
//             //     return elements.value;
//             // }, elements);
//             // console.log(ret);
//         }

//         getElements();


        
//         // var formElements = browser.elements('input, select, textarea');
//         // if (formElements.value.length > 0) {
//         //     var elementTag = browser.elements('input, select, textarea').getTagName();
//         //     var elementType = browser.getAttribute('input, select, textarea', 'type');
//         //     var elementId = browser.getAttribute('input, select, textarea', 'id');

//         //     for (var i=0; i < formElements.value.length; i++) {
//         //         var isButton = (elementType[i] === 'submit' || elementType[i] === 'button');
//         //         if (!isButton) {
//         //             if (typeof elementId[i] != 'string') {
//         //                 allElementsHaveId = false;
//         //             } else {
//         //                 checkLabel(elementId[i]);
//         //             }
//         //         }
//         //     }

//         // }

//         // function checkLabel(id) {
//         //     var label = browser.element('label[for=' + id + ']').getText();
//         //     console.log(id + ': ' + label + ': ' + label.length);
//         //     if (label.length < 0) {
//         //         missingLabelElements.push(id);
//         //         allElementsHaveLabel = false;
//         //     }
//         // }

//         // assert.equal(allElementsHaveId, true);
//         // assert.equal(allElementsHaveLabel, true, 'Missing label for following form elements: ' + missingLabelElements.join(','));

//     });

// };