requirejs.config({
    baseUrl: "../Scripts",
    paths: {
        jquery: "vendor/jquery-1.10.2.min",
        angular: "vendor/angular.min",
        bootstrap: "vendor/bootstrap.min",
        
        GITAPP:     "app/gitApp",
        main:       "main"
    }
});

requirejs(["main"]);