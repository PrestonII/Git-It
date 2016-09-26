define(function (require) {
    'use strict';

    var angular = require('angular');

    var app = angular.module('gitApp', ['require']);

    app.start = function() {
        app.config(function($scope){
            console.log('test');
            console.log($scope);
        })
    };


    return app;

})