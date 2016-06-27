App.controller('ParamsController', function ($scope, Settings) {
    $scope.params = "params";

    $scope.tailleIncrement = Settings.values.increment;
    $scope.limiteMin = Settings.values.minLimit;
    $scope.limiteMax = Settings.values.maxLimit;

    $scope.saveParams = function () {
        Settings.values.increment = $scope.tailleIncrement;
        Settings.values.minLimit = $scope.limiteMin;
        Settings.values.maxLimit = $scope.limiteMax;
    }
});