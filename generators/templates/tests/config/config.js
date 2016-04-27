(function() { 'use strict';
    
    var exports = module.exports = {};

    var padNumber = function(number, places) {
        var str = '' + number;
        places = places ? places : 1;
        var i = 0;
        if (str.length < 2) {
            while(i < places) {
                number = '0' + number;
                i++;
            }
        }
        return number;
    };

    exports.getTimestamp = function() {
        var now = new Date();
        var stamp = now.getUTCFullYear() + padNumber((now.getUTCMonth() + 1)) + padNumber(now.getUTCDate()) + '-' + padNumber((now.getUTCHours() + 1)) + padNumber(now.getUTCMinutes()) + padNumber(now.getUTCSeconds());
        return stamp;
    };

    exports.pages = {};
        exports.pages.root = '<%= urlRoot %>';
        
        exports.pages.home = {
            url: exports.pages.root + ''
        };
        exports.pages.login = {
            url: exports.pages.root + 'login.php'
        };
        exports.pages.logout = {
            url: exports.pages.root + 'logout.php'
        };

})();