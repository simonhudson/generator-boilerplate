(function() { 'use strict';
    
    var exports = module.exports = {};

    exports.pages = {};
        exports.pages.root = '<%= urlRoot %>';
        exports.pages.home = {
            url: exports.pages.root + ''
        };

})();