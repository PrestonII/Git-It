requirejs.config({
    baseUrl: "../Scripts",
    paths: {
        jquery:             "vendor/jquery-1.10.2.min",
        angular:            "vendor/angular.min",
        bootstrap:          "vendor/bootstrap.min",
        
        Organization:       "app/Organization",
        Repository:         "app/Repository",
        Commit:             "app/Commit",
        File:               "app/File",
        app:                "app"
    },

    shim: {
        angular: {
            exports: 'angular'
        }
    }
});

requirejs(["app"], function(app) {
    app.start();
});