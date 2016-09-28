requirejs.config({
    baseUrl: "../Scripts",
    paths: {
        angular:            "_lib/angular.min",
        ngRoute:            "_lib/angular-route.min",

        jquery:             "_lib/jquery-1.10.2.min",
        bootstrap:          "_lib/bootstrap.min",
        
        Organization:       "app/objs/Organization",
        Repository:         "app/objs/Repository",
        Commit:             "app/objs/Commit",
        File:               "app/objs/File",

        animationManager:   "system/animationManager",

        gitApp:             "app/modules/gitApp",
        app:                "app"
    },

    shim: {
        ngRoute: {
            deps: ['angular']
        },

        angular: {
            exports: 'angular'
        },

        jquery: {
            exports: 'jquery'
        }
    }
});

requirejs(["app"], function(app) {
    app.init();
});