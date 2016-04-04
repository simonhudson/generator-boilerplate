var Zombie = require('zombie');

function World() {

    this.browser = new Zombie(); // this.browser will be available in step definitions

    this.root = '<%= destRoot %>';
    this.pages = {
        home: {
            url: this.root + ''
        }
    };

    // Modular tests
    this.visit = function (url, callback) {
        this.browser.visit(url, callback);
    };
    
    // Utilities
    this.consoleIndent = '      ';
    this.onError = function(message) {
        console.log(this.consoleIndent + 'ERROR: ' + message);
    };
}

module.exports = function() {
    this.World = World;
};