requirejs(["jquery", "GITAPP"], function($) {

    console.log($);
    console.log(GITAPP);

    $("#start-arrow").click(function() {
        $("#github-search").animate({
                    marginTop: 0
                },500);
    });
});


