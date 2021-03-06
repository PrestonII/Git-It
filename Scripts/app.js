﻿define("app", function (require) {
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
        var appLoader = new GitApp();
        var gitapp = appLoader.load();
        angular.bootstrap(document, ['gitApp'], gitapp.config);
        mgr = new AnimationManager();
        mgr.loadAnimations();
    }

    // resolve this initialization stuff later


    return app;
});