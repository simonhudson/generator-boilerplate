(function() {

    var Results = function($http) {
        
        var getData = function() {
            return $http.get('cucumber-output.json').then(function(response) {
                return response.data;
            });
        };

        createSlug = function(string) {
            return string.replace(/-/g, '_').replace(/\;/g, '__').toLowerCase();
        };

        var getStatusObj = function(data) {
            var statusObj = {
                scenarios: {},
                steps: {
                    pass:0,
                    fail:0
                }
            };
            for (var i=0; i < data.length; i++) {
                var feature = data[i];
                for (var x=0; x < feature.elements.length; x++) {
                    var scenario = feature.elements[x];
                    var scenarioId = createSlug(scenario.id);
                    statusObj.scenarios[scenarioId] = {
                        pass:0,
                        fail:0
                    };
                    for (var y=0; y < scenario.steps.length; y++) {
                        var step = scenario.steps[y];
                        if (step.result.status === 'passed') {
                            statusObj.steps.pass++;
                            statusObj.scenarios[scenarioId].pass++;
                        }
                        if (step.result.status === 'failed') {
                            statusObj.steps.fail++;
                            statusObj.scenarios[scenarioId].fail++;
                        }
                    }
                }
            }
            return statusObj;
        };

        return {
            getData: getData,
            getStatusObj: getStatusObj,
            createSlug: createSlug
        };

    };

    var module = angular.module('app');
    module.factory('Results', Results);

}());