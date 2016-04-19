(function() {

    var Utils = function() {

        var getPercentage = function(value, total) {
            return Math.round((value / total) * 100);
        };

        return {
            getPercentage: getPercentage
        };

    };

    var module = angular.module('app');
    module.factory('Utils', Utils);

}());