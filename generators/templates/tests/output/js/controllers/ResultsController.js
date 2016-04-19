(function() {
    
    var app = angular.module('app');

    var ResultsController = function($scope, $http, $sce, Results, Utils) {

        var onError = function() {
            $scope.isLoading = false;
            $scope.error = 'Could not load data';
        };

        var onData = function(data) {
            if (data.errorMessage) {
                onError();
            } else {
                $scope.features = data;
                $scope.isLoading = false;
                var statusObj = Results.getStatusObj(data);
                getPercentages(statusObj);
            }
        };

        $scope.createSlug = function(string) {
            return Results.createSlug(string);
        };

        $scope.toggleArtifacts = function(status) {
            $('.panel-' + status).each(function() {
                if ($(this).is(':hidden')) {
                    $(this).parent('li').show();
                    $(this).parents('.feature').show();
                } else {
                    $(this).parent('li').hide();
                    if ($(this).parent('li').siblings('li:visible').length === 0) {
                        $(this).parents('.feature').hide();
                    } else {
                        $(this).parents('.feature').show();
                    }
                }
            });
        };

        var getPercentages = function(data) {
            for (var i in data.scenarios) {
                $scope.countPass += data.scenarios[i].pass;
                $scope.countFail += data.scenarios[i].fail;
            }
            $scope.totalTests = $scope.countPass + $scope.countFail;
            $scope.percentagePass = Utils.getPercentage($scope.countPass, $scope.totalTests);
            $scope.percentageFail = Utils.getPercentage($scope.countFail, $scope.totalTests);
        };

        $scope.getScenarioStatus = function(scenario) {
            var scenarioObj = {
                pass:0,
                fail:0
            };
            for (var i=0; i < scenario.steps.length; i++) {
                var step = scenario.steps[i];
                if (step.result.status === 'passed') {
                    scenarioObj.pass++;
                }
                if (step.result.status === 'failed') {
                    scenarioObj.fail++;
                }
                if (scenarioObj.pass > 0 && scenarioObj.fail === 0) {
                    scenarioStatus = 'success';
                }
                if (scenarioObj.fail > 0) {
                    scenarioStatus = 'danger';
                }
            }
            return scenarioStatus;
        };

        $scope.getStatusClass = function(status) {
            var statusClass;
            switch (status) {
                case 'passed':
                    statusClass = 'success';
                break;
                case 'failed':
                    statusClass = 'danger';
                break;
                default:
                    statusClass = '';
                break;
            }
            return statusClass;
        };

        $scope.getStatusIcon = function(status) {
            var statusIcon;
            switch (status) {
                case 'passed':
                    statusIcon = 'check-circle';
                break;
                case 'failed':
                    statusIcon = 'exclamation-circle';
                break;
                default:
                    statusIcon = '';
                break;
            }
            return 'fa fa-' + statusIcon;
        };

        $scope.formatClauses = function(clauses) {
            var string = clauses.replace(/\r\n|\n/g, '<br/>');
            return $sce.trustAsHtml(string);
        };

        $scope.formatErrorMsg = function(string) {
            var message = '';
                message += string
                            .replace(/</g, '&lt;')
                            .replace(/>/g, '&gt;')
                            .replace(/\r\n|\n\n/g, '<br/>')
                            .replace(/\_/g, '')
                            .replace(/ at /g, '<br/>at ')
                            .replace('AssertionError:', '')
                            .trim();
            return $sce.trustAsHtml(message);
        };

        $scope.showFeature = true;
        $scope.showScenario = true;
        $scope.isLoading = true;
        $scope.countPass = 0;
        $scope.percentagePass = 0;
        $scope.countFail = 0;
        $scope.percentageFail = 0;
        Results.getData().then(onData, onError);

    };

    app.controller('ResultsController', ResultsController);

}());