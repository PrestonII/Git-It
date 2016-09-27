requirejs.config({
    baseUrl: "../Scripts",
    paths: {
        angular:            "vendor/angular.min",
        ngRoute:            "vendor/angular-route.min",

        jquery:             "vendor/jquery-1.10.2.min",
        bootstrap:          "vendor/bootstrap.min",
        
        Organization:       "app/Organization",
        Repository:         "app/Repository",
        Commit:             "app/Commit",
        File:               "app/File",

        gitApp:             "gitApp",
        animationManager:   "animationManager",
        //controllers:        "controllers",

        app:                "app"
    },

    shim: {
        ngRoute: {
            deps: ['angular'],
            exports: 'ngRoute'
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