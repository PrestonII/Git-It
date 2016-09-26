var gitApp = angular.module('gitApp', []);

gitApp.controller("repoController", function($scope) {
    $scope.repositories = [
        {name: "BLACKBlackblack", location: "X"},
        {name: "BLACKBlackblue", location: "Y"},
        {name: "BLACKBlackred", location: "Z"},
    ]
})
