requirejs.config({
    baseUrl: "js",
    paths: {
        angular:            "all/angular",
        ngRoute:            "all/angular-route",
        ngResource:         "all/angular-resource",

        jquery:             "all/jquery-1.10.2.min",
        bootstrap:          "all/bootstrap.min",
        
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