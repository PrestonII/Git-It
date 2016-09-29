define("gitApp", ['angular', 'Organization', 'ngRoute', 'ngResource'],
    function (angular, Organization, ngRoute, ngResource) {

        var appLoader = function () {
            var self = this;
            console.log(Organization);
        };

        appLoader.prototype = {
            organization: {},

            load: function () {
                console.log(angular);
                console.log(ngRoute);
                console.log(ngResource);

                var gitapp = angular.module("gitApp", []);

                //gitapp.config([
                //    '$routeProvider', function($routeProvider) {

                //        $routeProvider
                //            .when('/',
                //            {
                //                templateUrl: 'Partials/repoList.html',
                //                controller: 'SimpleController'
                //            })
                //            .otherwise({ redirectTo: '/' });
                //    }
                //]);

                var controllers = {};

                controllers.RepoController = function($scope) {
                    $scope.repositories = [];
                    $scope.repo = null;

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

                    $scope.displayRepoInfo = function (event) {
                        event.preventDefault();

                        var repos = this.organization.repositories;
                        var selRepoName = event.target.innerText;

                        for(var i = 0; i < repos.length; i++ ){
                            if(repos[i].name === selRepoName){
                                    $scope.repo = repos[i];
                                    break;
                            }
                        }
                    }
                };

                gitapp.controller(controllers);

                return gitapp;
            }
        }

        return appLoader;

    });