define("gitApp", ['angular', 'ngRoute'],
    function (angular) {
        var appLoader = function() {
        };

        appLoader.prototype = {
            load: function() {
                var gitapp = angular.module("gitApp", []);

                console.log(gitapp);
                console.log(angular);

                //gitapp.config(['$routeProvider'],function($routeProvider) {
                //    $routeProvider

                //        .when('.', { controller: 'SimpleController', templateUrl: 'Partials/repoList.html' })
                //        .when('/partial2',{ controller: 'SimpleController', templateUrl: 'Partials/repoList2.html' })
                //        .otherwise({ redirectTo: "/" });

                //    });

                var controllers = {};

                controllers.SimpleController = function($scope) {
                    $scope.repositories = [
                        { name: "black", location: "x" },
                        { name: "blue", location: "y" },
                        { name: "blue", location: "y" },
                        { name: "red", location: "z" }
                    ];

                    $scope.addRepo = function() {
                        $scope.repositories.push({
                            name: $scope.newRepo.name,
                            location: $scope.newRepo.location
                        });
                    };
                };

                gitapp.controller(controllers);

                return gitapp;
            }
        }

        return appLoader;

    });