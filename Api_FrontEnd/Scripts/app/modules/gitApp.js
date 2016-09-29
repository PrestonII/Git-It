define("gitApp", ['angular', 'Organization'],
    function (angular, Organization) {

        var appLoader = function () {
            var self = this;
            console.log(Organization);
        };

        appLoader.prototype = {
            organization: {},

            load: function() {
                var gitapp = angular.module("gitApp", []);

                console.log(gitapp);
                console.log(angular);

                var controllers = {};

                controllers.RepoController = function($scope) {
                    $scope.repositories = [];

                    $scope.addRepo = function() {
                        $scope.repositories.push({
                            name: $scope.newRepo.name,
                            location: $scope.newRepo.location
                        });
                    };

                    $scope.findOrganization = function() {
                        var searchName = $("#organization-search-box")[0].value;
                        
                        this.organization = new Organization(searchName);
                        $scope.repositories = this.organization.repositories;
                    }
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