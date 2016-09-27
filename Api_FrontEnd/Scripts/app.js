define("app", function (require) {
    'use strict';

    self = this;
    var app = {};
    var $ = require("jquery");
    var angular = require("angular");
    var Organization = require("Organization");
    var AnimationManager = require("animationManager");
    var GitApp = require('gitApp');

    var mgr = {};

    app.init = function () {
        var gitapp = new GitApp();
        gitapp.load();
        angular.bootstrap(document, ['gitApp']);
        mgr = new AnimationManager();
        mgr.loadAnimations();
    }

    // resolve this initialization stuff later
    $("#search-button").click(function (event) {
        event.preventDefault();
        var searchName = $("#organization-search-box")[0].value;

        console.log(searchName);

        var organization = new Organization(searchName);
    });

    return app;
});