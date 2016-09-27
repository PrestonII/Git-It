var app = angular.module('app', []);

app.controller("SimpleController",
    function($scope) {
        $scope.repositories = [
            { name: "black", location: "x" },
            { name: "blue", location: "y" },
            { name: "red", location: "z" }
        ];
    });