var pages = require('../../../config/config.js').pages;
var slug = require('../../../config/page-slug.js').pageSlug;
var a11y = require('a11y');
var assert = require('assert');

module.exports = function () {

    this.Then(/^the "(.*)" page should pass WCAG-AA compliance$/, function (page, level) {

        var failureCount = 0;
        var failures = {};

        a11y(pages[slug(page)].url, function (err, reports) {
            var audit = reports.audit; // a11y Formatted report 
            var report = reports.report; // DevTools Accessibility Audit formatted report 
        });
        a11y(pages[slug(page)].url, function (err, reports) {
            var i = 0;
            reports.audit.forEach(function (el) {
                if (el.result === 'FAIL') {
                    failures[i] = el;
                    failureCount++;
                    i++;
                }
            });

            assert.equal(failureCount, 0, outputErrors());

        });

        function outputErrors() {
            var string = '\n\n';
                string += '*** ' + failureCount + ' accessibility errors found ***\n';

            for (var i in failures) {
                string += '\n' + failures[i].severity.toUpperCase() + '\n';
                string += failures[i].heading + '\n';
                string += failures[i].elements + '\n';
                string += '_____________________________\n';
            }
            return string;
        }

    });

};