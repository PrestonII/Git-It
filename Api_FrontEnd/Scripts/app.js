define("app", function (require) {
    'use strict';

    self = this;
    var $ = require("jquery");
    var angular = require("angular");
    var Organization = require("Organization");
    var AnimationManager = require("animationManager");
    var app = angular.module('gitApp', []);

    var mgr = {};

    app.init = function() {
        angular.bootstrap(document, ['gitApp']);
        mgr = new AnimationManager();
        mgr.loadAnimations();
    }

    //app.config(['$routeProvider'], function ($routeProvider) {
    //    $routeProvider
    //        .when('.',
    //        {
    //            controller: 'SimpleController',
    //            templateUrl: 'Partials/repoList.html'
    //        })
    //        .when('/partial2',
    //        {
    //            controller: 'SimpleController',
    //            templateUrl: 'Partials/repoList2.html'
    //        })
    //        .otherwise({ redirectTo: "/" });
    //});

    var controllers = {};

    controllers.SimpleController = function ($scope) {
        $scope.repositories = [
            { name: "black", location: "x" },
            { name: "blue", location: "y" },
            { name: "blue", location: "y" },
            { name: "red", location: "z" }
        ];

        $scope.addRepo = function () {
            $scope.repositories.push({
                name: $scope.newRepo.name,
                location: $scope.newRepo.location
            });
        };
    };

    app.controller(controllers);

    // resolve this initialization stuff later
    $("#search-button").click(function (event) {
        event.preventDefault();
        var searchName = $("#organization-search-box")[0].value;

        console.log(searchName);

        var organization = new Organization(searchName);
    });

    return app;
});