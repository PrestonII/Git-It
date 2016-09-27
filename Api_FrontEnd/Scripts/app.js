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

    var controllers = {};
    controllers.SimpleController = function($scope) {
        $scope.repositories = [
            { name: "black", location: "x" },
            { name: "blue", location: "y" },
            { name: "blue", location: "y" },
            { name: "red", location: "z" }
        ];
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