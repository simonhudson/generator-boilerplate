(function() {

    var app = angular.module('app', ['ngRoute']);

    app.config(function($routeProvider) {
        $routeProvider
            .when('/results', {
                // templateUrl: 'views/results.html',
                controller: 'ResultsController'
            })
            .otherwise({redirectTo: '/results'});
    });

}());