define("gitApp", ['angular', 'ngRoute'],
    function (angular) {
        var appLoader = function() {
        };

        appLoader.prototype = {
            load: function() {
                var gitapp = angular.module("gitApp", []);

                console.log(gitapp);
                console.log(angular);

                var controllers = {};

                controllers.RepoController = function($scope) {
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

                controllers.InfoController = function($scope) {
                    $scope.repoInfo = [
                        {
                            id: 1946163131,
                            name: "GreySMITHLibrary",
                            ssh_url: "Sp,et/fadsfsaff/fasff.com"
                        },
                        {
                            id: 936463131,
                            name: "Algorithms",
                            ssh_url: "Sp,et/fadsfsaff/fasff.com"
                        },
                        {
                            id: 44613168,
                            name: "Testing",
                            ssh_url: "Sp,et/fadsfsaff/fasff.com"
                        },
                    ];
                };

                gitapp.controller(controllers);

                return gitapp;
            }
        }

        return appLoader;

    });