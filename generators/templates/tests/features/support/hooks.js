var fs = require('fs');
var path = require('path');
var config = require('../../config/config');

var hooks = function() {

    var handleResults = function() {
        var outputDir = './tests/output/data/';
        var resultsMeta = {
            timestamp:config.getTimestamp(),
            environment: config.pages.root
        };

        fs.writeFile(outputDir + 'results-meta.json', JSON.stringify(resultsMeta, null, 4));

        // var outputDir = './tests/output/data/';
        // var resultsFile = outputDir + 'results.json';
        // fs.writeFile(outputDir + 'cucumber-output.json', '');

        // var data = fs.readFileSync(resultsFile, 'utf8');
        // data = JSON.parse(data);
        // data.push({
        //     meta: {
        //         timestamp: timestamp
        //     }
        // });
        // fs.writeFile(outputDir + 'cucumber-output.json', JSON.stringify(data, null, 4));

        // fs.writeFile(resultsFile, JSON.stringify(resultsData), function(err) {
        //     if (err) {
        //         return console.log(err);
        //     }
        //     console.log(JSON.stringify(resultsData, null, 4));
        //     console.log('writing to ' + resultsFile);
        // });

    };

    this.registerHandler('AfterFeatures', function (event, callback) {
        handleResults();
    });

};
module.exports = hooks;