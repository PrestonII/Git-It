requirejs.config({
    baseUrl: "../scripts",
    paths: {
        angular:            "all_lib/angular",
        ngRoute:            "all_lib/angular-route",
        ngResource:         "all_lib/angular-resource",

        jquery:             "all_lib/jquery-1.10.2.min",
        bootstrap:          "all_lib/bootstrap.min",
        
        Organization:       "app/objs/Organization",
        Repository:         "app/objs/Repository",
        Commit:             "app/objs/Commit",
        File:               "app/objs/File",

        animationManager:   "system/animationManager",

        gitApp:             "app/modules/gitApp",
        app:                "application"
    },

    shim: {
        ngRoute: {
            deps: ['angular'],
            exports: 'angular'
        },

        ngResource: {
            deps: ['angular'],
            exports: 'angular'
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