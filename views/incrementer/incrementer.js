App.controller('IncrementerController', function($scope, Settings) {

    $scope.variableController = 0;

    $scope.history = [];

    $scope.minusValue = function () {
        $scope.variableController -= Settings.values.increment;
        if($scope.variableController < Settings.values.minLimit){
            $scope.variableController = Settings.values.minLimit;
        }
    };

    $scope.plusValue = function () {
        $scope.variableController += Settings.values.increment;
        if($scope.variableController > Settings.values.maxLimit){
            $scope.variableController = Settings.values.maxLimit;
        }
    };

});