define("app", function (require) {
    'use strict';

    var $ = require("jquery");
    var angular = require("angular");
    var Organization = require("Organization");

    console.log($);
    console.log(angular);
    console.log(Organization);

    var app = angular.module('gitApp', []);

    app.init = function() {
        angular.bootstrap(document, ['gitApp']);
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

    //app.controller("SimpleController", simpleController);
    app.controller(controllers);



    $("#search-button").click(function (event) {
        event.preventDefault();
        var searchName = $("#organization-search-box")[0].value;

        console.log(searchName);

        var organization = new Organization(searchName);
    });

    $("#start-arrow").click(function () {
        $("#github-search").animate({
            marginTop: 0
        }, 500);
    });

    $("#close-button")
        .click(function () {
            $("#github-search")
                .animate({
                    marginTop: "100%"
                },
                    500);
        });


    return app;


});