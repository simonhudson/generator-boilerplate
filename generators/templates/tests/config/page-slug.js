(function() { 'use strict';
    
    var exports = module.exports = {};

    exports.pageSlug = function(page) {
        var slug = page.toLowerCase();
            slug = slug.replace(/\s+/g, '');
        return slug;
    };

})();