angular.module('myApp', ['ui.bootstrap','ngSuggest']);

function myController($scope) {
    $scope.input1 = "";
    $scope.input2 = "";
    $scope.input3 = "";
    $scope.input4 = "";
    $scope.input5 = "";
    $scope.api1 = "http://ws.gbv.de/suggest/geonames/?country=DE&count=20&searchterm=";
    $scope.api2 = "http://ws.gbv.de/suggest/gn250/?count=20&searchterm=";
    $scope.api3 = "http://ws.gbv.de/suggest/gnd/?count=20&type=&searchterm=";
    $scope.api4 = "http://ws.gbv.de/suggest/iconclass/?type=all&count=20&searchterm=";
    $scope.api5 = "https://de.wikipedia.org/w/api.php?action=opensearch&limit=10&namespace=0&format=json&search=";
}
